---
id: "cc_slot_mechanics:SlotCellTableModule:inheritance:subclassing_guide"
title: "SlotCellTableModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ SlotCellTableModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
