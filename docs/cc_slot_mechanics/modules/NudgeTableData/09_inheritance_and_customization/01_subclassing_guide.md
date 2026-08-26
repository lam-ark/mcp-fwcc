---
id: "cc_slot_mechanics:NudgeTableData:inheritance:subclassing_guide"
title: "NudgeTableData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ NudgeTableData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
