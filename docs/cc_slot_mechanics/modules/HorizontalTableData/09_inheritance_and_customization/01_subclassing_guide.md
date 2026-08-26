---
id: "cc_slot_mechanics:HorizontalTableData:inheritance:subclassing_guide"
title: "HorizontalTableData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalTableData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
