---
id: "cc_slot_mechanics:TransformSymbolModule:inheritance:subclassing_guide"
title: "TransformSymbolModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TransformSymbolModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
