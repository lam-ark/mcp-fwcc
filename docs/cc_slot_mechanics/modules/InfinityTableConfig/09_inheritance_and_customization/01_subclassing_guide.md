---
id: "cc_slot_mechanics:InfinityTableConfig:inheritance:subclassing_guide"
title: "InfinityTableConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ InfinityTableConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
