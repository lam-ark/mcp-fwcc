---
id: "cc_slot_module:systems:cascade_and_avalanche_system:symbol_manager_table_and_indexing_integration"
title: "SlotSymbolModule, Shared Pool & Symbol Indexing Architecture in Cascade"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "SlotSymbolModule", "SlotSymbolManager", "SymbolOwnerType", "symbol_indexing", "table_interaction"]
---

# 🧩 SlotSymbolModule, Shared Pool & Symbol Indexing Architecture in Cascade

---

## 1. Shared Node Pool Architecture via `SlotSymbolManager`

In the Cocos Slot Framework SDK, **`SlotSymbolManager`** is the single centralized source of truth for symbol allocation and pooling (Single Source of Truth for Symbols). `VerticalCascadeModule` does not instantiate separate standalone node pools; instead, it coordinates directly with `SlotSymbolManager` using the dedicated ownership domain **`SymbolOwnerType.CASCADE_SYMBOL`**.

```mermaid
graph TD
    SM[SlotSymbolManager Node Pool] -->|SymbolOwnerType.TABLE_SYMBOL| Table[SlotTableModule / SlotReelModule]
    SM -->|SymbolOwnerType.CASCADE_SYMBOL| Cascade[VerticalCascadeModule container]
    SM -->|SymbolOwnerType.PAYLINE_SYMBOL| Payline[PaylineSymbolModule]
    
    Cascade -->|1. getSymbolByIndex(index, CASCADE_SYMBOL)| SM
    Cascade -->|2. removeSymbol(symbol) / returnSymbol(symbol)| SM
    Cascade -->|3. updateSymbolSiblingIndex(flattenSymbols)| SM
```

### Symbol Borrowing and Recycling Lifecycle:
1. **Retrieve Node by Existing Position**:
   ```typescript
   const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
   ```
2. **Retrieve Fresh Node for Top Influx Inflow**:
   ```typescript
   const symbol = this.symbolManager.getSymbolByIndex(SymbolIndexType.UNUSED, SymbolOwnerType.CASCADE_SYMBOL);
   ```
3. **Recycle Winning Eliminated Tile**:
   ```typescript
   this.symbolManager.removeSymbol(symbol);
   symbol.parent = null;
   ```
4. **Clean Teardown Upon Cascade Completion**:
   ```typescript
   this.symbolManager.returnSymbol(symbol);
   ```

---

## 2. Direct Interaction with `SlotSymbolModule` Component

Every pooled symbol node is wrapped by the **`SlotSymbolModule`** (or `MultipleSlotSymbolModule`) component. `VerticalCascadeModule` coordinates visual presentation by directly dispatching commands and events to `SlotSymbolModule`:

```mermaid
sequenceDiagram
    participant VCM as VerticalCascadeModule
    participant Node as symbol (cc.Node)
    participant SSM as SlotSymbolModule (Component)

    Note over VCM, SSM: 1. Initialize Incoming Drop Symbol
    VCM->>SSM: symbolComp.init(code, new Vec2(1, size))
    VCM->>SSM: symbolComp.changeToSymbol(code)
    VCM->>SSM: symbolComp.setIndex(newGlobalIndex)

    Note over VCM, SSM: 2. Freefall Tumble Phase
    VCM->>Node: symbol.emit("SHOW_STATIC")
    Note over Node: Switches to static Sprite display for 60 FPS optimization

    Note over VCM, SSM: 3. Impact & Bounce Settling
    VCM->>Node: symbol.emit("PLAY_ANIMATION_APPEAR")
    Note over Node: Triggers Spine impact sparkle / collision VFX
```

---

## 3. Interaction with Table Engine (`SlotTableModule`) & Ownership Handover

### A. Display Ownership Handover
* **Base Spin Phase**: `SlotTableModule` and its child `SlotReelModule` instances manage base rolling and initial spin stop display.
* **Cascade Respin Phase**:
  1. `SlotTableModule` holds state or transfers active matrix ownership to `VerticalCascadeModule`.
  2. `VerticalCascadeModule` renders active falling tiles inside `this.container` (positioned above or substituting reel tiles).
  3. `VerticalCascadeModule` assumes exclusive control of elimination, drop trajectories, and bounce physics.

### B. Interrupt Recovery Mechanics (`resetAllEffectAndTasks`)
If a player triggers Turbo / Fast Stop or reconnects during an in-flight tumble:
* `resetAllEffectAndTasks()` parses `this.matrix` and immediately reconstructs visual symbol nodes at their exact static landing coordinates:
  ```typescript
  const symbolComp = SlotSymbolModule.getModuleComponent(symbol);
  symbolComp.init(symbolValue);
  symbolComp.changeToSymbol(symbolValue);
  symbol.setPosition(position);
  ```

---

## 4. Coordinate Indexing & Dynamic Re-Indexing Math (`SYMBOL_INDEXES`)

### A. Matrix Index Generation via `SlotUtils.generateSymbolIndexes()`
In `CascadeModuleConfig`:
```typescript
public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.CASCADE_TABLE_CONFIG.format);
    }
    return this._symbolIndexes;
}
```

For a standard $5 \times 3$ matrix (`format: [3, 3, 3, 3, 3]`):
$$\begin{bmatrix}
(0,0)=0 & (1,0)=3 & (2,0)=6 & (3,0)=9 & (4,0)=12 \\
(0,1)=1 & (1,1)=4 & (2,1)=7 & (3,1)=10 & (4,1)=13 \\
(0,2)=2 & (1,2)=5 & (2,2)=8 & (3,2)=11 & (4,2)=14
\end{bmatrix}$$

### B. Critical Mandate: Updating `setIndex` During Symbol Downward Shifts
When a surviving symbol drops from an upper row $i$ down to empty lower row $currentIndex$:
```typescript
// Excerpt from VerticalCascadeModule.getOldSymbols(col):
this.swapSymbol(col, currentIndex, i);
SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getSymbolIndex(col, currentIndex));
```

> [!CRITICAL]
> **WHY `setIndex` UPDATE IS MANDATORY:**
> Subsequent evaluation subsystems (`SlotTablePaylineModule`, `PaylineWinFrameModule`, and `PaylineSymbolModule`) locate winning coordinates using global indices ($0 \dots 14$) received from server packets (e.g. payline winning cells `[0, 4, 8]`).
> If `VerticalCascadeModule` fails to invoke `setIndex(newIndex)` on dropped symbol nodes, the symbols retain their previous row indexes. This leads to **misaligned Win Frames, incorrect win line cycling, and Spine celebration animations rendering on the wrong cells!**
