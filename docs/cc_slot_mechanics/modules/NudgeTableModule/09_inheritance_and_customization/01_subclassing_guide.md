---
id: "cc_slot_mechanics:NudgeTableModule:inheritance:subclassing_guide"
title: "NudgeTableModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ NudgeTableModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
