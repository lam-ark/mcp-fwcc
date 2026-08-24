---
id: "cc_slot_module:BonusGameDirectorModule:methods:index"
title: "BonusGameDirectorModule Methods Index"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "methods", "index"]
---

# 📋 BonusGameDirectorModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`startBonusGame(): void`](./startBonusGame.md)** | `public` | Resets state, blocks UI, starts BGM, launches countdown timer, and emits `START_BONUS_GAME`. |
| **[`startCountDown(): void`](./startCountDown.md)** | `public` | Runs 1s repeat tween countdown; calls `_runAutoTrigger()` on timeout. |
| **[`onClickItem(evt: SlotCustomEvent): void`](./onClickItem.md)** | `public` | Handles item clicks, blocks duplicate picks, and emits `SEND_BONUS_GAME_REQUEST`. |
| **[`_openItem(bonusValue: any): Promise<void>`](./_openItem.md)** | `public` | Emits scoped `OPEN_ITEM` with picked chest ID and revealed payout. |
| **[`_openFinalItem(bonusValue: any): Promise<void>`](./_openFinalItem.md)** | `public` | Emits scoped `OPEN_FINAL_ITEM` for the round-concluding pick. |
| **[`_openAllItems(matrix: any): Promise<void>`](./_openAllItems.md)** | `public` | Emits scoped `OPEN_ALL_ITEMS` to reveal hidden values in unpicked boxes. |
| **[`_playFinalResultEffect(): Promise<void>`](./_playFinalResultEffect.md)** | `public` | Triggers concluding `JACKPOT_WIN` or `TOTAL_WIN` celebration cutscene dialogue. |
