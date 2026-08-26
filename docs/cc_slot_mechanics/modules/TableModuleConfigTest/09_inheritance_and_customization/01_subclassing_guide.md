---
id: "cc_slot_mechanics:TableModuleConfigTest:inheritance:subclassing_guide"
title: "TableModuleConfigTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TableModuleConfigTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
