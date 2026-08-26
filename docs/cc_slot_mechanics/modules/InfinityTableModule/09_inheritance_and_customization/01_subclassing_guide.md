---
id: "cc_slot_mechanics:InfinityTableModule:inheritance:subclassing_guide"
title: "InfinityTableModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ InfinityTableModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
