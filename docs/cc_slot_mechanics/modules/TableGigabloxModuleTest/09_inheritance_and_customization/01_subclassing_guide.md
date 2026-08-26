---
id: "cc_slot_mechanics:TableGigabloxModuleTest:inheritance:subclassing_guide"
title: "TableGigabloxModuleTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TableGigabloxModuleTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
