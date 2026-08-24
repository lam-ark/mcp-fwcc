---
id: "cc_slot_module:systems:gui_dashboard:wallet_and_rolling_money_tweening"
title: "Wallet Currency Isolation & Animated Money Tweening"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "wallet", "win_amount", "money_tween", "currency"]
---

# 💳 Wallet Currency Isolation & Animated Money Tweening

---

## 1. Dual Wallet Isolation Architecture

To ensure strict separation between real money balances and demo trial credits:
- **`RealWallet`**: Observes real player balance received from the game server wallet gateway.
- **`TrialWallet`**: Observes local demo credits initialized with simulated fun balance (e.g. $10,000.00$).

When `UIManagerModule.onSwitchMode(isTrial)` executes, the active wallet component switches gracefully without affecting backend accounting.

---

## 2. Animated Win Count-Ups (`WinAmountModule`)

When paylines or cascades award wins:
1. `WinAmountModule` receives the new total from `dataStore.getWinAmount()`.
2. Uses `MoneyTween.runNumber()` to roll up the score label over $0.5\text{s} - 2.0\text{s}$.
3. Formats numbers using `MoneyFormatter` to support multi-currency formatting, decimals, and custom currency symbols ($€, \$, \text{₫}, \text{¥}$).
