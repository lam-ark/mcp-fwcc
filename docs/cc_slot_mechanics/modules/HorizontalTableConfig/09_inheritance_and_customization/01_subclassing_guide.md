---
id: "cc_slot_mechanics:HorizontalTableConfig:inheritance:subclassing_guide"
title: "HorizontalTableConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalTableConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
