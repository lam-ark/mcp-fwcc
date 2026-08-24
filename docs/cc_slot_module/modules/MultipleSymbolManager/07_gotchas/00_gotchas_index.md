---
id: "cc_slot_module:MultipleSymbolManager:gotchas:index"
title: "MultipleSymbolManager Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ MultipleSymbolManager Gotchas & Pitfalls Index

---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_unregistered_special_symbol_fallback.md`](./01_unregistered_special_symbol_fallback.md)** | Wild or Scatter symbol renders using generic normal symbol template. | Symbol code was not registered in `specialSymbolTemplates` array. | Ensure all high-tier special symbols have matching entries in `specialSymbolTemplates`. |
