---
id: "cc_slot_mechanics:StickySymbolModule:inheritance:subclassing_guide"
title: "StickySymbolModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ StickySymbolModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
