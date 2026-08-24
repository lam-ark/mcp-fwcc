---
id: "cc_slot_module:GameDataStore:gotcha:direct_playsession_mutation"
title: "Gotcha: Direct Mutation of playSession Reference Corrupts History"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "playSession", "mutation", "deep_clone", "memory_leak"]
---

# 🛑 Gotcha: Direct Mutation of `playSession` Reference Corrupts State

## 1. Symptom & Defect
A child component (such as `SlotTableModule` or a custom win animation script) modifies a nested array on `this.dataStore.playSession.matrix` (for example, replacing Wild symbols in-place). Later, when `updateDataModules()` re-evaluates or when entering Free Game replay, the previous round state is corrupted.

---

## 2. Root Cause & Technical Defect
`GameDataStore.playSession` is an in-memory object reference. Modifying `this.dataStore.playSession.matrix[0][1] = "W"` mutates the master data store object directly.

---

## 3. Standard Code Solution & Fix
Always treat `this.dataStore.playSession` as **READONLY**. When mutating matrices for local visuals, clone first or rely on the cloned copy passed into `BaseDataModule.onDataUpdate(key, value)`:

```typescript
// ✅ CORRECT: Clone before modifying local visual grid
const localMatrix = JSON.parse(JSON.stringify(this.dataStore.playSession.matrix));
localMatrix[0][1] = "W";
this.renderLocalGrid(localMatrix);
```
