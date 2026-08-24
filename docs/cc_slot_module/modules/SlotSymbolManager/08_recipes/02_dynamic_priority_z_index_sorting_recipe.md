---
id: "cc_slot_module:SlotSymbolManager:recipe:dynamic_priority_z_index_sorting"
title: "Recipe: Dynamic Priority Z-Index Sorting Configuration"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "recipe", "z_index_sorting"]
---

# 🍳 Recipe: Dynamic Priority Z-Index Sorting Configuration

## 1. Problem Statement
Ensure that Mega Scatter symbols with large Spine glow borders always render above expanding Wilds and regular payline symbols.

---

## 2. Configuration Setup

In `GameConfig.ts`:
```typescript
export const GAME_SYMBOL_CONFIG = {
    MEGA_SCATTER: { Id: "MS", Priority: 1 },  // Top layer (Rendered last)
    WILD:         { Id: "K",  Priority: 2 },
    SCATTER:      { Id: "A",  Priority: 3 },
    HIGH_PAY_1:   { Id: "H1", Priority: 4 },
    LOW_PAY_1:    { Id: "L1", Priority: 10 },
};
```
When `updateSymbolSiblingIndex()` executes, `sortSymbols()` arranges nodes matching these priorities so `MEGA_SCATTER` receives the highest Sibling Index.
