---
id: "cc_slot_module:PaylineWinFrameModule:methods:index"
title: "PaylineWinFrameModule Methods Index"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "index"]
---

# 📋 PaylineWinFrameModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`registerPaylineEvents(): void`](./registerPaylineEvents.md)** | `protected` | Subscribes to `SYMBOL_PLAY_ANIMATION_WIN`, `PAYLINE_STOP_ALL`, `PAYLINE_CLEAR`. |
| **[`playAnimation(data): void`](./playAnimation.md)** | `protected` | Activates border animation at symbol's reel/row coordinates. |
| **[`hideAll(): void`](./hideAll.md)** | `protected` | Emits `HIDE` to all cached frames. |
| **[`clearAll(): void`](./clearAll.md)** | `protected` | Resets frames and returns them to `winFramePool`. |
| **[`getWinFrame(reel, row, position): cc.Node`](./getWinFrame.md)** | `protected` | Fetches or spawns frame for coordinate cell. |
| **[`spawnFrame(reel, row, position): cc.Node`](./spawnFrame.md)** | `protected` | Spawns frame from pool or instantiates template prefab. |
