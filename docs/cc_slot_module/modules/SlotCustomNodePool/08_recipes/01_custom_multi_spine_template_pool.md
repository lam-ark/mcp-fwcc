---
id: "cc_slot_module:SlotCustomNodePool:recipe:custom_multi_spine_template_pool"
title: "Production Recipe: Multi-Spine Template Node Pooling"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "recipes", "multi_spine", "template_pooling"]
---

# 💡 Production Recipe: Multi-Spine Template Node Pooling

---

## 1. Context & Use Case
A game features standard paying card symbols (`SymbolNormal.prefab`) alongside a heavyweight Dragon Wild with interactive particle emitters (`SymbolWildDragon.prefab`).

---

## 2. Inspector Setup & Integration
1. Attach `MultipleSymbolManager` to `Canvas/Director/GameMode/.../SymbolPool`.
2. Assign `template = SymbolNormal.prefab` (`initCount = 25`).
3. Add entry to `specialSymbolTemplates`:
   - `symbolCode: "WILD"`
   - `template: SymbolWildDragon.prefab`
   - `initCount: 5`
4. Run simulator and verify `SlotCustomNodePool` maintains isolated pools for each asset type.
