---
id: "cc_slot_module:PaylineNumberModule:inheritance:production_game_case_study"
title: "PaylineNumberModule Production Game Case Study (Classic Slot 20 Lines)"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "case_study", "production"]
---

# 🎰 PaylineNumberModule Production Game Case Study (Classic Slot 20 Lines)

---

## 1. Production Context

In 20-line Classic Fruit slot (`g9000L`):
- **Layout**: 10 line numbers positioned along the left gutter (1 to 10) and 10 along the right gutter (11 to 20).
- **Wiring**: `PaylineNumberModule` caches all 20 `PaylineNumberItem` components on scene load, seamlessly lighting up numbers during Stage 1 blink and Stage 2 line cycles.
