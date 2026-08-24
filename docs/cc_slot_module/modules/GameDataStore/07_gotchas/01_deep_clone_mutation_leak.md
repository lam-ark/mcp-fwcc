---
id: "cc_slot_module:GameDataStore:gotcha:deep_clone_mutation_leak"
title: "Gotcha: Direct Mutation of playSession Reference Corrupting State"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "mutation", "deep_clone", "state_corruption"]
---

# 🛑 Gotcha: Direct Mutation of `playSession` Reference Corrupting State

## 1. Symptom & Visual Defect
During cascade transitions or free spin triggers, win lines highlight incorrect symbol cells or calculate wrong payout amounts.

---

## 2. Root Cause & Technical Defect
When `GameDataStore.updateDataModules()` dispatches keys, it uses `JSON.parse(JSON.stringify(value))` to protect data. However, if a custom director reads `this.dataStore.playSession.matrix` directly and modifies elements in-place (e.g. replacing a scatter symbol with wild during animation), the underlying source session is corrupted for subsequent rollback steps or history recording.

---

## 3. Standard Code Solution & Fix
Always clone data arrays before mutating them in Directors or visual modules:

```typescript
// Incorrect (mutates global store):
const matrix = this.dataStore.playSession.matrix;
matrix[0][1] = "K";

// Correct:
const matrix = JSON.parse(JSON.stringify(this.dataStore.playSession.matrix));
matrix[0][1] = "K";
```
