---
id: "cc_slot_mechanics:HorizontalCascadeModule:inheritance:subclassing_guide"
title: "HorizontalCascadeModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalCascadeModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
