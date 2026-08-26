---
id: "cc_slot_mechanics:HorizontalCascadeData:inheritance:subclassing_guide"
title: "HorizontalCascadeData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalCascadeData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
