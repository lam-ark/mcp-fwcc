---
id: "game-implement:9666:cascade:horizontal_mechanics"
title: "Red Cliff (g9666) Horizontal Top Reel Cascade Mechanics"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "HorizontalTableModule9666", "HorizontalReelModule9666", "stack_wild", "top_reel"]
---

# ➡️ Red Cliff (g9666) Horizontal Top Reel Cascade Mechanics

---

## 1. Top Horizontal Reel Overview

The top horizontal reel serves as a specialized 4-symbol modifier track above Reels 2, 3, 4, and 5:
- **Component**: [`HorizontalTableModule9666`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalTableModule9666.ts).
- **Reel Sub-Component**: `HorizontalReelModule9666`.
- **Indices in Unified Matrix**: `[4, 9, 14, 19]`.
- **Slide Direction**: Right-to-Left slide motion.

```mermaid
graph LR
    subgraph Top Horizontal Grid
        Sym4[Index 4 (Reel 2)] --- Sym9[Index 9 (Reel 3)] --- Sym14[Index 14 (Reel 4)] --- Sym19[Index 19 (Reel 5)]
    end
    Slide[Right to Left Slide Direction] --> TopGrid
```

---

## 2. Event Lifecycle & Stack Wild Landing

```mermaid
sequenceDiagram
    autonumber
    participant Writer as GameWriterModule9666
    participant TopTable as HorizontalTableModule9666
    participant MainTable as SlotTableModule9666
    participant Director as GameDirectorModule9666

    Writer->>TopTable: emit('TABLE_STOP_SPIN_TOP')
    TopTable->>TopTable: stopSpin()
    Note over TopTable: When top reel completes stop
    TopTable->>TopTable: emit('STACK_WILD_LANDED')
    
    Writer->>MainTable: Execute _stopSpinningTable
    MainTable->>MainTable: stopSpin()
    
    Writer->>Director: Execute _syncStackWild
    Director->>MainTable: emit('SYNC_STACK_WILD_TO_TABLE')
```

---

## 3. Implementation Highlights (`HorizontalTableModule9666.ts`)

```typescript
protected registerEvents(): void {
    super.registerEvents();
    this.moduleEvent.off(TableModuleEvents.TABLE_STOP_SPIN, this.stopSpin, this);
    this.moduleEvent.on('TABLE_STOP_SPIN_TOP', this.stopSpin, this);
    this.eventManager.on('JOIN_GAME_SUCCESS', this.onJoinGameSuccess, this);
    this.moduleEvent.on(TableModuleEvents.TABLE_FAST_STOP, this.onForceStopRequested, this);
}

protected onReelStop(reelIndex: number): void {
    super.onReelStop(reelIndex);
    if (this.reelCount >= this.reels.length) {
        this._stackWildLandedPromise = this.moduleEvent.emit('STACK_WILD_LANDED');
    }
}
```

### Key Differences from Vertical Reels:
1. Listens for **`TABLE_STOP_SPIN_TOP`** instead of default `TABLE_STOP_SPIN` to allow phased stop timing between top and vertical reels.
2. Emits **`STACK_WILD_LANDED`** as soon as the horizontal track settles, allowing Wild expansion checks to be ready before vertical reels conclude their spin.
