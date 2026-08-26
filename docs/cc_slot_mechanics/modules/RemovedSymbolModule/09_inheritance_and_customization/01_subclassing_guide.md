---
id: "cc_slot_mechanics:RemovedSymbolModule:inheritance:subclassing_guide"
title: "RemovedSymbolModule Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ RemovedSymbolModule Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
