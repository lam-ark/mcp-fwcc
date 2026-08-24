---
id: "cc_slot_module:FreeGameDirectorModule:method:showWinPayline"
title: "FreeGameDirectorModule._showWinPayline() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_showWinPayline", "cumulative_win"]
---

# `FreeGameDirectorModule._showWinPayline(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
async _showWinPayline(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Extracts `delayTime` from `data`.
2. Reads `winAmount` and `winAmountPS` from `this.dataStore.playSession`.
3. Sets cumulative total: `const win = winAmountPS || winAmount; data.winAmount = win;`.
4. Updates win label via `this._updateWinningAmount(data)`.
5. Emits `BLINK_ALL_PAYLINES`, followed by `SHOW_ALL_PAYLINES`.
6. Awaits `this.delayAction(delayTime)` to allow players to appreciate the winning paylines.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showWinPayline(data): Promise<void> {
    const { delayTime } = data;
    const { winAmount, winAmountPS } = this.dataStore.playSession;

    const win = winAmountPS || winAmount;
    data.winAmount = win;

    this._updateWinningAmount(data);
    this.moduleEvent.emit("BLINK_ALL_PAYLINES", data).then(() => {
        this.moduleEvent.emit("SHOW_ALL_PAYLINES", data);
    });
    await this.delayAction(delayTime);

    return Promise.resolve();
}
```
