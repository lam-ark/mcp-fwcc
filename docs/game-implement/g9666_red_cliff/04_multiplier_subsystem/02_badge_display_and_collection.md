---
id: "game-implement:9666:multiplier:badge_and_collection"
title: "Red Cliff (g9666) Multiplier Badge Display & Collection System"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectMultiModule9666", "badge", "collection", "tween", "pool"]
---

# 🎯 Red Cliff (g9666) Multiplier Badge Display & Collection System

---

## 1. Multiplier Collection Subsystem Architecture

The primary orchestration module is **`CollectMultiModule9666`** (working in conjunction with `CollectMultiModuleData` and `CollectMultiItem9666`).

### Key Components:
- **`CollectMultiModuleData`**: Extracts the active list of `K1` symbols on the matrix (`getK1Symbols()`), taking Mega Symbols formatting into account.
- **`CollectMultiModule9666`**: Coordinates the flight trajectory from the symbol position on the table to the Target Banner (Global Multiplier UI on HUD).
- **`itemPool` (`PoolFactoryModule`)**: Manages object pooling for floating particle nodes (`CollectMultiItem9666`).
- **`SpeedDecorator`**: Dynamically scales flight duration when Fast / Turbo Mode is active (`speed = 2` or `3`).

---

## 2. Sequence Diagram: Standard Multiplier Collection Flow

```mermaid
sequenceDiagram
    autonumber
    participant Writer as GameWriterModule9666
    participant Director as GameDirectorModule9666
    participant Collector as CollectMultiModule9666
    participant Data as CollectMultiModuleData
    participant Symbol as SlotSymbolModule9666
    participant Pool as PoolFactoryModule
    participant Banner as MultiplierModule9666

    Writer->>Director: Execute command `_collectWildMultiplier`
    Director->>Collector: onCollectWildMultiplier(slotSymbolManager)
    
    Collector->>Data: getK1Symbols()
    Data-->>Collector: Return array of { symbolCode, multiplier, symbolIndex }
    
    Note over Collector: Filter uncollected K1 symbols (!symbolModule.hasCollectedMultiplier)
    
    alt Eligible K1 symbols found
        Collector->>Banner: emit('SHOW_MULTIPLIER_PANEL')
        
        loop For each K1 symbol
            Collector->>Symbol: hideMultiplierLabel() & playCollectMultiplierTransition()
            Collector->>Pool: getObject() -> Retrieve itemNode (CollectMultiItem9666)
            Collector->>Collector: Calculate StartPos (Symbol) & EndPos (Target Banner)
            Collector->>Collector: tweenMoveToTarget(itemNode, targetPos, duration)
        end
        
        Note over Collector: When all flying items reach the Target Banner
        Collector->>Pool: returnObject(itemNode)
        Collector->>Banner: emit('ADD_MULTIPLIER', sumMultiplier)
        Banner->>Banner: updateLabel(animate=true) (Scale Up 1.4 -> Scale Down 1.0)
        Collector-->>Director: Resolve Promise
    else No K1 or multiplier <= previousMultiplier
        Collector-->>Director: Resolve Promise immediately
    end
```

---

## 3. Base Multiplier Subtraction Formula

In `onItemMoveComplete()` of `CollectMultiModule9666.ts`:

```typescript
private onItemMoveComplete(onComplete: () => void, completedCount: number, totalCount: number, collectedSymbols: any[]): void {
    if (completedCount >= totalCount) {
        this._isCollecting = false;

        let sumMultiplier = 0;
        for (const k1 of collectedSymbols) {
            sumMultiplier += k1.multiplier;
        }

        // NOTE: In Normal Game when initial multiplier is at base x1, 
        // subtract 1 to prevent double-counting the initial base multiplier.
        if (this.dataStore.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME && this.getCurrentMultiplier() === 1) {
            sumMultiplier -= 1;
        }

        if (sumMultiplier > 0) {
            this.eventManager.emit('ADD_MULTIPLIER', sumMultiplier);
        }

        this.updateTotalMultiplier();
        onComplete();
    }
}
```

---

## 4. Fast & Turbo Mode Handling

Using `SpeedDecorator` to dynamically shorten animation duration (`COLLECT_MULTI_DURATION / this.speed`):
- When the user presses Fast Stop mid-flight: The `TABLE_FAST_STOP` event is captured by `onFastToResultTriggered()` to instantly update the speed of all active `cc.speed` actions.
