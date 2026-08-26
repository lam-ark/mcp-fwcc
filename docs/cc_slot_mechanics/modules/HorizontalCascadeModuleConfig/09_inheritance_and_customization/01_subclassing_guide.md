---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:inheritance:subclassing_guide"
title: "HorizontalCascadeModuleConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ HorizontalCascadeModuleConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
