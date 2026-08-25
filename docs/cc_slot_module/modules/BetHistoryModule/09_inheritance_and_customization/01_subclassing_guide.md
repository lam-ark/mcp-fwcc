---
id: "cc_slot_module:BetHistoryModule:inheritance:subclassing_guide"
title: "BetHistoryModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetHistoryModule Subclassing Guide

---

## 1. Subclassing Rules

1. Inherit from `BetHistoryModule`.
2. Override `onLoadExtend()` and invoke `super.onLoadExtend()` to ensure observer bindings.
3. Configure `itemPerPage` in `onLoadExtend()` or Inspector.
4. Do not override `onLoad()` directly.
5. In `onDestroy()`, invoke `super.onDestroy()` to release model observers.
