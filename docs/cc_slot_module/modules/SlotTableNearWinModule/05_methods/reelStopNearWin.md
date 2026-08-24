---
id: "cc_slot_module:SlotTableNearWinModule:method:reelStopNearWin"
title: "SlotTableNearWinModule.reelStopNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "reelStopNearWin"]
---

# 🚀 `SlotTableNearWinModule.reelStopNearWin(params): void`

---

## 1. Method Signature

```typescript
public reelStopNearWin({ reelCount, context }: {
    reelCount: number;
    context: any;
}): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("REEL_STOP_NEARWIN", ...)` by `SlotTableModule` every time an individual reel stops.

---

## 3. Algorithmic Steps

1. If `reelCount >= context.reels.length`, all reels have stopped; calls `resetNearWin()`.
2. If `context.isFastToResult()` is true, aborts immediately without showing anticipation.
3. Otherwise, calls `_playNearWinEffect(reelCount)` to display anticipation on the next spinning column.

---

## 4. Full Source Code

```typescript
reelStopNearWin({ reelCount, context }): void {
    if (reelCount >= context.reels.length) {
        return this.resetNearWin();
    }
    if (context.isFastToResult()) {
        return;
    }
    this._playNearWinEffect(reelCount);
}
```
