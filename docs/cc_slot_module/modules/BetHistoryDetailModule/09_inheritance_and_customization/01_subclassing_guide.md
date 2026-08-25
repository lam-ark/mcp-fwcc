---
id: "cc_slot_module:BetHistoryDetailModule:inheritance:subclassing_guide"
title: "BetHistoryDetailModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetHistoryDetailModule Subclassing Guide

---

## 1. Subclassing Rules

1. Inherit from `BetHistoryDetailModule`.
2. Do not override `onLoad()` directly; implement `onLoadExtend()`.
3. When overriding `updateGameModeInfo()` or `onRenderDataView()`, invoke `super` to ensure base formatting logic executes.
4. Clean up custom node pools or event subscriptions in `onDestroy()`.
