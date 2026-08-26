---
id: "cc_slot_mechanics:TransformSymbolItem:inheritance:subclassing_guide"
title: "TransformSymbolItem Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TransformSymbolItem Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
