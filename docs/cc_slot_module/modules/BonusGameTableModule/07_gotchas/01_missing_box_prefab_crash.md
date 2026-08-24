---
id: "cc_slot_module:BonusGameTableModule:gotcha:missing_box_prefab_crash"
title: "Gotcha: Missing Box Prefab Assignment Crashes on Mode Entry"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "gotchas", "null_prefab"]
---

# ⚠️ Gotcha: Missing Box Prefab Assignment Crashes on Mode Entry

## 1. Defect Symptom
Game crashes immediately upon triggering the Bonus Game when `initBoxes()` attempts to call `instantiate(this.boxPrefab)`.

---

## 2. Root Cause Analysis
`boxPrefab` is a mandatory `@property(cc.Prefab)` serialized on `BonusGameTableModule`. If omitted in the scene fire file or prefab, instantiation fails with an unhandled exception.

---

## 3. Recommended Resolution
Always drag the chest item prefab into `boxPrefab` in the Inspector, or assert validity in `onLoadExtend()`:
```typescript
onLoadExtend(): void {
    super.onLoadExtend();
    cc.assert(this.boxPrefab, "[BonusGameTableModule] boxPrefab MUST be assigned in Inspector!");
}
```
