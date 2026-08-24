---
id: "cc_slot_module:MultipleSymbolManager:customization:override_points_matrix"
title: "MultipleSymbolManager Override Points Matrix"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "override_points"]
---

# 📋 MultipleSymbolManager Override Points Matrix

---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `initSymbolPool(): void` | `YES` | Optional | Custom `SlotCustomNodePool` instantiation. |
| `getSymbolFromPool(code)` | `YES` | Optional | Custom dynamic routing logic. |
