---
id: "cc_slot_module:FreeGameDirectorModule:methods:index"
title: "FreeGameDirectorModule Methods Index"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "methods", "index"]
---

# 📋 FreeGameDirectorModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`enter(): void`](./enter.md)** | `public` | Starts Free BGM, initializes spin counter via `syncSpinTimes()`, and flags `isFirstAutoSpin = true`. |
| **[`syncSpinTimes(): void`](./syncSpinTimes.md)** | `public` | Reads `freeGameRemain || freeGame` from `playSession` and emits `UPDATE_SPINTIMES` to HUD. |
| **[`_decreaseFreeGameSpinTimes(): Promise<void>`](./_decreaseFreeGameSpinTimes.md)** | `public` | Decrements `this.dataStore.freeSpinTimes` and updates HUD countdown label. |
| **[`_updateSpinTimes(spinTimes: number): Promise<void>`](./_updateSpinTimes.md)** | `public` | Overrides active spin counter with exact server figure. |
| **[`_gameExit(): Promise<void>`](./_gameExit.md)** | `public` | Clears paylines and syncs table grid before returning to base game. |
| **[`_showWinPayline(data: any): Promise<void>`](./_showWinPayline.md)** | `public` | Aggregates `winAmountPS` with `winAmount` and renders line animations. |
