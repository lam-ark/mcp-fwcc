---
id: "cc_slot_module:SlotTableNearWinModule:methods:index"
title: "SlotTableNearWinModule Methods Index"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTableNearWinModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `public` | Initializes layout coordinates and caches animation component. |
| **[`start(): void`](./start.md)** | `public` | Registers event listeners on `this.node`. |
| **[`initNearWinValue(): void`](./initNearWinValue.md)** | `public` | Resets tracking counters and calculates `_startX`. |
| **[`extendInit(): void`](./extendInit.md)** | `public` | Virtual extension point for subclasses. |
| **[`setupNearWin(params): void`](./setupNearWin.md)** | `public` | Evaluates spin matrix for Scatters/Bonus/Jackpot triggers. |
| **[`reelPreStopNearWin(): void`](./reelPreStopNearWin.md)** | `public` | Hook invoked before reel deceleration begins. |
| **[`reelStopNearWin(params): void`](./reelStopNearWin.md)** | `public` | Handles anticipation playback upon reel column landing. |
| **[`resetNearWin(): void`](./resetNearWin.md)** | `public` | Halts anticipation animations and tension audio. |
| **[`_getMatrix(data): string[][]`](./_getMatrix.md)** | `private` | Clones or converts raw matrix array. |
| **[`_canWinBonus(col): boolean`](./_canWinBonus.md)** | `private` | Evaluates if Bonus game can be triggered from current column. |
| **[`_canWinFree(col): boolean`](./_canWinFree.md)** | `private` | Evaluates if Free game can be triggered from current column. |
| **[`_canWinJP(col): boolean`](./_canWinJP.md)** | `private` | Evaluates if Jackpot line can be formed. |
| **[`_getXPosition(col): number`](./_getXPosition.md)** | `private` | Calculates target X coordinate for column overlay. |
| **[`_getAnimNearWin(): void`](./_getAnimNearWin.md)** | `private` | Resolves Spine vs Animation component. |
| **[`_setDataNearWin(col): void`](./_setDataNearWin.md)** | `private` | Aggregates column near-win flags. |
| **[`_isNearWinBonus(): boolean`](./_isNearWinBonus.md)** | `private` | Checks if Bonus count satisfies threshold. |
| **[`_isNearWinScatter(): boolean`](./_isNearWinScatter.md)** | `private` | Checks if Scatter count satisfies threshold. |
| **[`_isNearWinJp(): boolean`](./_isNearWinJp.md)** | `private` | Checks if Jackpot count satisfies threshold. |
| **[`_playNearWinEffect(col): void`](./_playNearWinEffect.md)** | `private` | Positions and enables anticipation overlay node. |
| **[`_playNearWinAnim(): void`](./_playNearWinAnim.md)** | `private` | Starts looping Spine track or Animation clip. |
| **[`_stopNearWinEffect(): void`](./_stopNearWinEffect.md)** | `private` | Stops animation and deactivates overlay node. |
| **[`_playSoundNearWin(): void`](./_playSoundNearWin.md)** | `private` | Triggers tension sound via `SlotSoundPlayerModule`. |
| **[`_stopSoundNearWin(): void`](./_stopSoundNearWin.md)** | `private` | Halts tension sound via `SlotSoundPlayerModule`. |
