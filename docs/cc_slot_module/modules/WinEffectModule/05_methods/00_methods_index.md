---
id: "cc_slot_module:WinEffectModule:methods:index"
title: "WinEffectModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "index"]
---

# 📚 WinEffectModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`enter`](./enter.md)** | `public` | `void` | Selects between normal celebration and fast particle Turbo mode. |
| **[`showEffectWin`](./showEffectWin.md)** | `public` | `void` | Initializes normal celebration UI, particles, and starts rolling count. |
| **[`showFastEffectWin`](./showFastEffectWin.md)**| `public` | `void` | Triggers 1s fast particle burst and resolves callback immediately. |
| **[`startUpdateWinAmount`](./startUpdateWinAmount.md)**| `public` | `void` | Drives `MoneyTween.runBigWinNumber` rolling count-up. |
| **[`updateCurrentTitle`](./updateCurrentTitle.md)**| `public` | `void` | Checks if count-up crossed Mega or Super thresholds. |
| **[`changeTitle`](./changeTitle.md)** | `public` | `void` | Scales title sprite to 2.0x and switches sprite frame. |
| **[`onClick`](./onClick.md)** | `public` | `void` | Fast-forwards rolling money count to final amount on tap. |
| **[`finish`](./finish.md)** | `public` | `void` | Displays formatted final total and schedules `exit()`. |
| **[`exit`](./exit.md)** | `public` | `void` | Restores BGM and deactivates overlay. |
| **[`bindQuickShow`](./bindQuickShow.md)** | `public` | `void` | Manages `_skippable` grace period timer. |
