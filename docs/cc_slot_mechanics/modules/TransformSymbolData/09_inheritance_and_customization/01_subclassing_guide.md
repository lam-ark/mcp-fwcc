---
id: "cc_slot_mechanics:TransformSymbolData:inheritance:subclassing_guide"
title: "TransformSymbolData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ TransformSymbolData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
