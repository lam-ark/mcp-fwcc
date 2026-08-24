---
id: "cc_slot_module:BaseDataModule:customization:game_creation_workflow"
title: "Game Creation Workflow: BaseDataModule Implementation"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: BaseDataModule Implementation

Follow this 4-step checklist:

---

## Step 1: Create Data Module Subclass
Create `FeatureData.ts` extending `BaseDataModule` and declare `registeredKeys = ['featurePayload']`.

---

## Step 2: Attach to Feature UI Node
Mount `FeatureData` on the same scene node as `FeatureModule` (`SlotBaseModule`).

---

## Step 3: Implement Custom Getters
Expose typed accessor methods (`getFeatureState()`, `getMultiplier()`) for UI consumption.

---

## Step 4: Validate Data Update Loop
Simulate incoming WebSocket spin response and ensure `onDataUpdate()` populates local data before UI animations begin.
