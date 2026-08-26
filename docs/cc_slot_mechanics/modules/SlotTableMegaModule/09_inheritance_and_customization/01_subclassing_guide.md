---
id: "cc_slot_mechanics:SlotTableMegaModule:inheritance:subclassing_guide"
title: "SlotTableMegaModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ SlotTableMegaModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
