---
id: "cc_slot_mechanics:TableGigabloxData:inheritance:subclassing_guide"
title: "TableGigabloxData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TableGigabloxData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
