---
id: "cc_slot_mechanics:HorizontalTableModule:inheritance:subclassing_guide"
title: "HorizontalTableModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalTableModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
