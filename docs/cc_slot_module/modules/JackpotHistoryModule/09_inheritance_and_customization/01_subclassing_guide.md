---
id: "cc_slot_module:JackpotHistoryModule:inheritance:subclassing_guide"
title: "JackpotHistoryModule Subclassing Guide"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ JackpotHistoryModule Subclassing Guide

---

## 1. Subclassing Guidelines

1. Extend `JackpotHistoryModule`.
2. Configure `jpList` and `itemPerPage` in `onLoadExtend()`.
3. In `onDestroy()`, invoke `super.onDestroy()` to release observer bindings.
