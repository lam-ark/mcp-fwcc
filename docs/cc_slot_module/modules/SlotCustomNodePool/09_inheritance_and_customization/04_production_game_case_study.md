---
id: "cc_slot_module:SlotCustomNodePool:customization:production_game_case_study"
title: "Production Case Study: Red Cliff Multiple Symbol Pooling"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff Multiple Symbol Pooling

---

## 1. Context & Setup
In Red Cliff (`g9666L`), the 1x3 Stacked Guan Yu Wild symbol uses a dedicated prefab `SymbolWildGuanYu.prefab` with dynamic cape physics, while regular low-pay symbols use a lightweight static quad prefab `SymbolStandard.prefab`.

---

## 2. Production Integration Excerpt

```typescript
// Configured in MultipleSymbolManager9666:
// normalTemplate = SymbolStandard.prefab (initCount = 20)
// specialSymbolTemplates = [
//   { symbolCode: "WILD_GUANYU", template: SymbolWildGuanYu.prefab, initCount: 5 }
// ]
```
