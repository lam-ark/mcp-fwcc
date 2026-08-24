---
id: "cc_slot_module:SlotSymbolModule:customization:game_creation_workflow"
title: "SlotSymbolModule Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "workflow"]
---

# 🚀 SlotSymbolModule Game Creation Workflow Checklist

---

## 1. Step-by-Step Integration Checklist

1. **Symbol Prefab Creation**: Create `SymbolPrefab.prefab` containing `SlotSymbolModule`, `cc.Sprite` (sprite & bg), and `sp.Skeleton`.
2. **Resource Manager Configuration**: Ensure `SlotSymbolResourceManager` maps all symbol codes (`"K1"`, `"K2"`, `"WILD"`, `"SCATTER"`) to their respective SpriteFrames and SkeletonData.
3. **Node Pool Setup**: Link `SymbolPrefab` to `SlotSymbolManager.symbolPrefab`.
4. **Spine Event Testing**: Verify `appear`, `idle`, and `win` animations trigger cleanly during spins.
