---
id: "cc_slot_mechanics:CellTableData:inheritance:subclassing_guide"
title: "CellTableData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ CellTableData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
