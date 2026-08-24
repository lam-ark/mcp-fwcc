---
id: "cc_slot_module:SlotReelModule:methods:index"
title: "SlotReelModule Methods Index"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotReelModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`initReel({ reelIndex, config, pool }): void`](./initReel.md)** | `public` | Initializes reel column index, geometry, managers, and initial symbol nodes. |
| **[`runReelSpin(mode): void`](./runReelSpin.md)** | `public` | Starts the reel spinning loop in specified speed mode (`NORMAL`, `TURBO`). |
| **[`spinAction(): void`](./spinAction.md)** | `public` | Recursive frame-by-frame downward translation and recycling tween loop. |
| **[`showResult(symbols, stopCB, preStopCB): void`](./showResult.md)** | `public` | Populates server target symbols and begins stopping sequence countdown. |
| **[`fastStop(): void`](./fastStop.md)** | `public` | Accelerates reel speed and triggers immediate result presentation. |
| **[`playStopAnimation(): void`](./playStopAnimation.md)** | `protected` | Plays two-phase bounce overshoot and landing easing animation. |
| **[`recycleSymbol(): void`](./recycleSymbol.md)** | `protected` | Recycles symbols scrolling past bottom buffer and spawns new top symbols. |
| **[`spawnReelSymbol(): cc.Node`](./spawnReelSymbol.md)** | `protected` | Spawns either random blur symbols (during roll) or server target symbols. |
| **[`resetReel(): void`](./resetReel.md)** | `public` | Snaps reel container to original position and hides buffer rows. |
| **[`extendTimeToStop(isNearWin, isLastReel): void`](./extendTimeToStop.md)** | `public` | Delays stop timing for near-win scatter anticipation. |
| **[`resumeReel(symbols): void`](./resumeReel.md)** | `public` | Instantly renders static matrix on network reconnection without spin. |
| **[`getRealSymbols(): cc.Node[]`](./getRealSymbols.md)** | `public` | Returns array of visible onscreen symbol nodes (excluding buffer rows). |
| **[`getSymbolByRow(row: number): cc.Node`](./getSymbolByRow.md)** | `public` | Queries symbol node at specified row index. |
