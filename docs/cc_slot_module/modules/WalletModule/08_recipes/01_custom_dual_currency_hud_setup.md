---
id: "cc_slot_module:WalletModule:recipes:custom_dual_currency_hud_setup"
title: "Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "recipes", "dual_currency"]
---

# 💡 Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween

---

## 1. Scene Assembly & Scripting

1. Attach `WalletModule` to `Canvas/Director/UIManager/Wallet`.
2. Attach a child script to `realWallet` and `trialWallet` listening to `ON_UPDATE_VALUE`, `PAUSE_WALLET`, and `RESUME_WALLET`.
3. Use `eno.MoneyTween.runNumber(label.node, 0.5, targetValue)` to count up balances smoothly.
