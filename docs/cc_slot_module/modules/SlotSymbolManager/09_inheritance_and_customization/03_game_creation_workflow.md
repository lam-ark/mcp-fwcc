---
id: "cc_slot_module:SlotSymbolManager:customization:game_creation_workflow"
title: "Game Creation Workflow: Symbol Manager Setup"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Symbol Manager Setup

Follow this 4-step checklist when setting up `SlotSymbolManager`:

---

## Step 1: Create Symbol Prefab
Create `SymbolTemplate.prefab` containing `SlotSymbolModule`, sprite renderers, and Spine skeletons.

---

## Step 2: Mount `SlotSymbolManager`
Attach `SlotSymbolManager` to `Canvas/Director/GameMode/BoardG/Table`.

---

## Step 3: Configure Priorities in `GameConfig`
Declare `Priority` values for all symbol codes in `GameConfig.SYMBOL_CONFIG`.

---

## Step 4: Validate Pooling & Recycling
1. Start game ➔ Verify `initCount` (15) nodes pre-warmed in `symbolPool`.
2. Spin ➔ Verify blur symbols borrowed and returned cleanly without memory growth.
3. Payline Hit ➔ Verify `updateSymbolSiblingIndex` sorts winning symbols to front.
