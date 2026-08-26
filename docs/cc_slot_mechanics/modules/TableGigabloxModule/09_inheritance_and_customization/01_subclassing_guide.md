---
id: "cc_slot_mechanics:TableGigabloxModule:inheritance:subclassing_guide"
title: "TableGigabloxModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TableGigabloxModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
