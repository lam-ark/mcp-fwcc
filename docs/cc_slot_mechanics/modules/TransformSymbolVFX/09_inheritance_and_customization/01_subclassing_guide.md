---
id: "cc_slot_mechanics:TransformSymbolVFX:inheritance:subclassing_guide"
title: "TransformSymbolVFX Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TransformSymbolVFX Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
