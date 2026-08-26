---
id: "cc_slot_mechanics:RemovedSymbolData:inheritance:subclassing_guide"
title: "RemovedSymbolData Subclassing Guide"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "inheritance", "subclassing"]
---

# 🏗️ RemovedSymbolData Subclassing Guide

---

## 1. Extension Guardrails
1. Never override `onLoad()` directly; implement `onLoadExtend()` if available.
2. Always ensure `super` is called when overriding event or lifecycle methods.
