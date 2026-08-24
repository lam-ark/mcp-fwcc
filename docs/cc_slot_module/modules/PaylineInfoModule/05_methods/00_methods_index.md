---
id: "cc_slot_module:PaylineInfoModule:methods:index"
title: "PaylineInfoModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "index"]
---

# 📚 PaylineInfoModule Methods Catalog Index

---

## 1. Declared Methods Index (All 13 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Registers event listeners, maps symbol assets, and localizes text. |
| **[`start`](./start.md)** | `public` | `void` | Initially hides the notification banner. |
| **[`localizeText`](./localizeText.md)** | `public` | `void` | Fetches localized "LINE" and "WIN" strings from `GameLogic`. |
| **[`getWinText`](./getWinText.md)** | `public` | `string` | Returns `"WIN_TEXT_1"` for line games, `"WIN"` otherwise. |
| **[`shouldWorkInCurrentGameMode`](./shouldWorkInCurrentGameMode.md)**| `protected`| `boolean`| Checks if component should activate for current mode. |
| **[`showPaylineInfo`](./showPaylineInfo.md)** | `protected` | `void` | Activates node and populates payline data. |
| **[`hidePaylineInfo`](./hidePaylineInfo.md)** | `protected` | `void` | Deactivates notification banner. |
| **[`convertPayLineInfo`](./convertPayLineInfo.md)** | `protected` | `any` | Dispatches formatting by math type (`LINES`, `ALLWAYS`, `CLUSTER`, `SCATTER_PAY`). |
| **[`convertPayLineInfoLine`](./convertPayLineInfoLine.md)**| `protected`| `any` | Formats payline info for Line-based games. |
| **[`convertPayLineInfoAllWays`](./convertPayLineInfoAllWays.md)**| `protected`| `any`| Formats payline info for 243/1024 AllWays games. |
| **[`convertPayLineInfoCluster`](./convertPayLineInfoCluster.md)**| `protected`| `any`| Formats payline info for Cluster-pay games. |
| **[`convertPayLineInfoScatterPay`](./convertPayLineInfoScatterPay.md)**| `protected`| `any`| Formats payline info for Scatter-pay games. |
| **[`setPaylineInfo`](./setPaylineInfo.md)** | `protected` | `void` | Updates label strings and thumbnail sprite frame. |
