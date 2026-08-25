---
id: "cc_slot_module:DialogMessageModule:inheritance:subclassing_guide"
title: "DialogMessageModule Subclassing Guide"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ DialogMessageModule Subclassing Guide

---

## 1. Guidelines

1. Extend `DialogMessageModule`.
2. Do not override `onLoad()`; implement `onLoadExtend()`.
3. In `onDestroy()`, invoke `super.onDestroy()` to release observer bindings.
