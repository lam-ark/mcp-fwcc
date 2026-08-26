---
id: "cc_slot_mechanics:HorizontalTableTest:inheritance:subclassing_guide"
title: "HorizontalTableTest Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalTableTest Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
