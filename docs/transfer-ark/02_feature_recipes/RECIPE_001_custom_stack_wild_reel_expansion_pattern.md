---
id: "transfer-ark:feature:custom_stack_wild_reel_expansion_pattern"
title: "Custom Stack Wild Reel Expansion & Symbol Replacement Pattern"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotReelModule", "SlotTableModule", "SlotSymbolModule", "SlotSymbolManager"]
tags: ["wild", "stack_wild", "expansion", "symbol_replacement", "node_pool", "buffer_symbols", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# RECIPE-001: Custom Stack Wild Reel Expansion & Symbol Replacement Pattern

---

## 1. 📌 Problem / Feature Overview
- **Business Requirement**: In slot games with expanding Wild mechanics (such as Red Cliff Game 9666), landing a full Stack Wild on a reel requires replacing all existing individual symbols on that column with newly spawned / transformed 1x1 Stack Wild symbols.
- **Visual & Choreography Goal**:
  - The stack wild must expand smoothly, play animated Spine visuals (`9666_wild_expand` / idle animations), and maintain correct rendering order.
  - The top and bottom buffer symbols (used for smooth spin scrolling) must **not** be destroyed or disrupted during the replacement.
  - Replaced symbols must be safely returned to the `SlotSymbolManager` node pool to prevent memory leaks and dangling Spine animation listeners.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**:
  - The base `SlotReelModule` and `SlotTableModule` only handle static reel initialization, spinning, and result mapping.
  - The base SDK does not provide a native API to swap out a reel column's active `listSymbols` mid-spin or post-spin without tearing down the entire reel via `removeAllSymbols()`.
- **ARK Business Requirement**:
  - Seamless in-place symbol transformation on specific reels triggered by a decoupled event (`SYNC_STACK_WILD_TO_TABLE`).
  - Strict preservation of the reel strip buffer hierarchy (`BUFFER_TOP` and `BUFFER_BOT`) while cleanly recycling previous symbol nodes.

---

## 3. 🔍 Root Cause & Technical Challenges in Base SDK
1. **Reel Strip Integrity**:
   In `SlotReelModule`, `this.listSymbols` contains both visible "real" symbols and invisible "buffer" symbols (`BUFFER_TOP` + `BUFFER_BOT`). If a developer simply overwrites `this.listSymbols = symbolNodes`, subsequent spins or bounces will fail because top and bottom buffer anchors are missing.
2. **Node Pool Leakage**:
   If replaced symbol nodes are simply discarded or set to `active = false` without calling `symbolManager.returnSymbol(node)`, their Spine skeleton instances remain allocated, rapidly inflating draw calls and GPU memory.
3. **Z-Order & Sibling Index Desync**:
   When new nodes are attached to `reel.node`, their sibling index may render behind the background or over HUD layers unless explicitly sorted via `symbolManager.updateSymbolSiblingIndex`.

---

## 4. 🛠️ Implementation & Override Solution

### Step 1: Implement `replaceWithStackWildSymbols` in `SlotReelModule` Subclass
In `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotReelModule9666.ts`:

```typescript
import { SlotReelModule, SlotSymbolModule, SymbolOwnerType } from "../../../../cc-common/cc-slot-module/SlotModuleExport";

const { _decorator } = cc;
const { ccclass } = _decorator;

@ccclass
export class SlotReelModule9666 extends SlotReelModule {

    /**
     * Replace all real symbols in this reel with stack wild symbol nodes
     * @param symbolNodes Symbol nodes from StackWildModule (1x1 size)
     * @param symbolIndexes List of symbol indexes for this reel
     */
    replaceWithStackWildSymbols(symbolNodes: cc.Node[], symbolIndexes: number[]): void {
        const realSymbols = this.getRealSymbols();

        // 1. Return all old real symbols (both 1x1 and mega symbols) safely to pool
        realSymbols.forEach((oldSymbol) => {
            if (oldSymbol && oldSymbol.isValid && this.symbolManager) {
                this.symbolManager.returnSymbol(oldSymbol);
            }
        });

        // 2. Separate buffer symbols (top and bottom) to preserve reel strip continuity
        const bufferSymbols = this.listSymbols.filter((sym) => !realSymbols.includes(sym));
        const bufferTopThreshold = this.reelManager.startY - (this.config.BUFFER_TOP - 0.5) * this.SYMBOL_HEIGHT;
        const bufferTopSymbols: cc.Node[] = [];
        const bufferBotSymbols: cc.Node[] = [];

        bufferSymbols.forEach((sym) => {
            if (sym.position.y > bufferTopThreshold) {
                bufferTopSymbols.push(sym);
            } else {
                bufferBotSymbols.push(sym);
            }
        });

        // 3. Configure and position the new stack wild symbols
        const newRealSymbols: cc.Node[] = [];
        for (let row = 0; row < symbolNodes.length; row++) {
            const node = symbolNodes[row];
            if (!node || !node.isValid) continue;

            const symbolModule = SlotSymbolModule.getModuleComponent(node);
            if (symbolModule) {
                symbolModule.setIndex(symbolIndexes[row]);
                symbolModule.setOwner(SymbolOwnerType.REEL_SYMBOL);
                symbolModule.setSize(this.DEFAULT_SIZE);
            }

            const position = this.initPositionByType(row + this.config.BUFFER_TOP, this.DEFAULT_SIZE);
            node.setParent(this.node);
            node.setPosition(position.x, position.y);
            node.active = true;
            node.emit('PLAY_ANIMATION_IDLE');

            newRealSymbols.push(node);
        }

        // 4. Reassemble reel listSymbols with buffers preserved and sort sibling Z-indexes
        this.listSymbols = [...bufferTopSymbols, ...newRealSymbols, ...bufferBotSymbols];
        this.sortSymbols();
    }

    /**
     * Sort symbols by Y coordinate and update rendering sibling index
     */
    protected sortSymbols(): void {
        this.listSymbols.sort((a: cc.Node, b: cc.Node) => b.position.y - a.position.y);
        this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
    }
}
```

### Step 2: Wire Event Dispatcher in `SlotTableModule` Subclass
In `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableModule9666.ts`:

```typescript
    protected registerEvents(): void {
        super.registerEvents();
        // Listen for Stack Wild sync from game feature director / writer
        this.moduleEvent.on('SYNC_STACK_WILD_TO_TABLE', this.onSyncStackWild, this);
    }

    protected onSyncStackWild(reelStackWild: { mainReelIndex: number, symbolNodes: cc.Node[] }): void {
        const indexes = this.config.SYMBOL_INDEXES[reelStackWild.mainReelIndex];
        const reel = this.reels[reelStackWild.mainReelIndex] as SlotReelModule9666;
        if (indexes && reel && reel.replaceWithStackWildSymbols) {
            reel.replaceWithStackWildSymbols(reelStackWild.symbolNodes, indexes);
        }
    }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Buffer Threshold Calculation**:
   - `bufferTopThreshold = this.reelManager.startY - (this.config.BUFFER_TOP - 0.5) * this.SYMBOL_HEIGHT`.
   - Never hardcode coordinate thresholds; use `startY` and `SYMBOL_HEIGHT` from configuration so dynamic table layouts and aspect ratios remain aligned.
2. **Double Return to Pool**:
   - Verify `oldSymbol.isValid` before calling `this.symbolManager.returnSymbol(oldSymbol)`. Symbols destroyed during fast-spin or scene unload can trigger Cocos null reference exceptions if returned twice.
3. **Event Registration on Reconnection**:
   - When player reconnects (`JOIN_GAME_SUCCESS` with `isResume: true`), ensure the server resume matrix is loaded via `syncTable()` before triggering any deferred stack wild animations.

---

## 6. ♻️ Reusability Guide for Future Game Titles
When implementing expanding wilds or symbol morphing in a new slot title (e.g. `g9777`):
1. **Subclass Reel Module**: Create `SlotReelModule<GameId>.ts` and copy `replaceWithStackWildSymbols` and `sortSymbols`.
2. **Subclass Table Module**: Create `SlotTableModule<GameId>.ts` and register the `SYNC_STACK_WILD_TO_TABLE` event listener.
3. **Prefab Binding**: Attach `SlotTableModule<GameId>` and `SlotReelModule<GameId>` to the Table and Column Reel nodes in Cocos Creator.
4. **Trigger Event**: In your feature Writer or Director script, emit:
   ```typescript
   this.moduleEvent.emit('SYNC_STACK_WILD_TO_TABLE', {
       mainReelIndex: targetCol,
       symbolNodes: generatedWildNodes
   });
   ```

---

## 7. 🔗 Codebase References
- Base Reel Module: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`
- Base Table Module: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts`
- Game Reel Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotReelModule9666.ts`
- Game Table Implementation: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableModule9666.ts`
