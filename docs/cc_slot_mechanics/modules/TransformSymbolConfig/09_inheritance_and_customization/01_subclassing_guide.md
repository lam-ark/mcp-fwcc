---
id: "cc_slot_mechanics:TransformSymbolConfig:inheritance:subclassing_guide"
title: "TransformSymbolConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TransformSymbolConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
