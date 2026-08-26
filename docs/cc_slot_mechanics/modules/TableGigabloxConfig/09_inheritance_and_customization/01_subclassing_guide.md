---
id: "cc_slot_mechanics:TableGigabloxConfig:inheritance:subclassing_guide"
title: "TableGigabloxConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TableGigabloxConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
