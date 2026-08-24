---
id: "cc_slot_module:SlotSymbolResourceManager:customization:production_game_case_study"
title: "Production Case Study: Red Cliff Symbol Resource Manager"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff Symbol Resource Manager

---

## 1. Context & Setup
In Red Cliff (`g9666L`), `SlotSymbolResourceManager` is embedded directly into `SymbolPrefab9666.prefab`. It defines textures for 11 distinct pay symbols, 3 wild stack variations, and 2 scatter triggers.

---

## 2. Production Integration Excerpt

```typescript
// Mounted on SymbolPrefab9666.prefab
// Configured lists:
// symbolSfList: ["K1", "K2", "K3", "K4", "A", "K", "Q", "J", "10", "WILD", "SCATTER"]
// blurSymbolSfList: ["K1_BLUR", "K2_BLUR", ...]
// symbolSkeletons: [{ symbolCode: "WILD", skeletonData: WildSpineAsset }, ...]
```
