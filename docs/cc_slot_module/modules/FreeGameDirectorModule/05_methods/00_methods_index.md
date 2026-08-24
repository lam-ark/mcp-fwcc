---
id: "cc_slot_module:FreeGameDirectorModule:methods:index"
title: "FreeGameDirectorModule Methods Index"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "methods", "index"]
---

# 📋 FreeGameDirectorModule Methods Index

---

## 1. Declared Methods Catalog

| Member Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`enter(): void`](./enter.md)** | `public` | Entry point for Free Spins; plays BGM, syncs badges, renders initial table. |
| **[`_resumeFreeTable(): Promise<void>`](./_resumeFreeTable.md)** | `public` | Reconstructs Free Game matrix upon game reconnection. |
| **[`syncSpinTimes(): void`](./syncSpinTimes.md)** | `public` | Initializes `dataStore.freeSpinTimes` from `freeGameRemain \|\| freeGame` and updates HUD. |
| **[`syncNormalTable(data?): void`](./syncNormalTable.md)** | `public` | Emits `SYNC_TABLE` with `NORMAL_GAME` tag on initial transition. |
| **[`onBeforeSpinStart(): Promise<void>`](./onBeforeSpinStart.md)** | `public` | Triggers execution of the `"FreeSpinTrigger"` action script queue. |
| **[`_beforeSpinStart(): Promise<void>`](./_beforeSpinStart.md)** | `public` | Resets speed, skips previous effects, and applies auto-spin delay. |
| **[`_decreaseFreeGameSpinTimes(): Promise<void>`](./_decreaseFreeGameSpinTimes.md)** | `public` | Decrements `freeSpinTimes` locally by 1 and updates badge. |
| **[`_updateSpinTimes(spinTimes): Promise<void>`](./_updateSpinTimes.md)** | `public` | Syncs `freeSpinTimes` with exact server value. |
| **[`_gameExit(): Promise<void>`](./_gameExit.md)** | `public` | Clears paylines and syncs table before returning to Base Game. |
| **[`_showWinPayline(data): Promise<void>`](./_showWinPayline.md)** | `public` | Blinks and shows paylines using cumulative `winAmountPS`. |
