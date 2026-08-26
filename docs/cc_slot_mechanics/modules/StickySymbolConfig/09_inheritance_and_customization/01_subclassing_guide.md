---
id: "cc_slot_mechanics:StickySymbolConfig:inheritance:subclassing_guide"
title: "StickySymbolConfig Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ StickySymbolConfig Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
