---
id: "cc_slot_mechanics:TumblingTableConfig:inheritance:subclassing_guide"
title: "TumblingTableConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TumblingTableConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
