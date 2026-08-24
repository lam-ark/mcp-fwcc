---
id: "cc_slot_module:GameDataStore:customization:game_creation_workflow"
title: "Game Creation Workflow: GameDataStore Setup"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: GameDataStore Setup

Follow this 4-step checklist:

---

## Step 1: Create `GameDataStore[GameId].ts`
Inherit from `GameDataStore`. Override `parseDataPS()` to attach key remapping if the server sends short keys.

---

## Step 2: Mount to Scene Root
Attach `GameDataStore[GameId]` to `Canvas/Director/GameDataStore` and ensure IoC container binds it.

---

## Step 3: Configure Multiplier Tiers in `GameConfig`
Declare `WIN_LEVEL_CONFIG` with calibrated `THRESHOLDS`, `COUNT_MONEY_TIME`, and `WIN_LINE_TIME`.

---

## Step 4: Validate Immutability & Deep-Cloned Module Updates
Run automated spins and assert that mutating `SlotTableData.matrix` does not affect `GameDataStore.playSession.matrix`.
