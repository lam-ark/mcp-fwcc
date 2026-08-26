---
id: "cc_slot_mechanics:InfinityTableTest:inheritance:subclassing_guide"
title: "InfinityTableTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ InfinityTableTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
