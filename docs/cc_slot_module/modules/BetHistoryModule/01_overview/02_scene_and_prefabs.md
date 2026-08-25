---
id: "cc_slot_module:BetHistoryModule:overview:scene_and_prefabs"
title: "BetHistoryModule Scene & Prefabs"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "overview", "prefabs", "scene_graph"]
---

# 📦 BetHistoryModule Scene & Prefabs

---

## 1. Canonical Scene Node Anchor

The standard anchor path within the master scene (`g9000L.fire` / `g9666L.fire`) is:
`Canvas/Director/Popup/BetHistory`

Mounted Components on Node:
- `BetHistoryModule` (Main view controller)
- `FadePopupBehavior` or `PopupBehavior` (Animation tween driver)

---

## 2. Referenced Prefabs & Asset Manifest

| Asset Name | Asset Relative Path | Purpose |
| :--- | :--- | :--- |
| `BetHistoryPopup.prefab` | `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetHistoryPopup.prefab` | Pre-built root modal prefab with layout, header, footer, and buttons. |
| `BetCellHistory.prefab` | `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetCellHistory.prefab` | Individual session row item displaying bet timestamp, bet amount, and win amount. |
| `BetHistoryDetail.prefab`| `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetHistoryDetail.prefab`| Detailed step replay panel with reel table snapshots and payout breakdowns. |

---

## 3. Companion Subsystems

- **`BaseUIPopup`**: Parent class providing base backdrop fade and audio click handling.
- **`BetHistoryDetailModule`**: Nested controller managing individual spin round replay steps.
- **`BetHistoryData`**: BaseDataModule storing current page index, total items, and session arrays.
