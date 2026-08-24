---
id: "cc_slot_module:WalletModule:inheritance:override_points_matrix"
title: "WalletModule Override Points Matrix"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 WalletModule Override Points Matrix

---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `start` | `public` | Recommended | Model resolution. |
| `setupObserver` | `public` | Optional | Custom balance stream subscriptions. |
| `pauseWallet` / `resumeWallet` | `public` | Recommended | Balance rolling state management. |
| `onSwitchMode` | `public` | Recommended | Currency switch event routing. |
