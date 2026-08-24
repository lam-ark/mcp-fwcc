---
id: "cc_slot_module:SlotTableNearWinModule:gotchas:missing_spine_animation_fallback"
title: "Gotcha: Missing Spine Component on NearWin Effect Node"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "gotchas", "missing_spine", "null_pointer"]
---

# 🛑 Gotcha: Missing Spine Component on NearWin Effect Node

---

## 1. Symptom & Technical Defect

When near-win anticipation is activated, the game crashes with `TypeError: Cannot read property 'setAnimation' of null`.

---

## 2. Root Cause

If `useSpine` is checked in the Inspector (`true`), `_getAnimNearWin()` attempts `this.nearWinEffect.getComponent(sp.Skeleton)`. If the artist mounted a prefab with a legacy `cc.Animation` component or attached the script before adding the Skeleton, `_nearWinAnim` becomes `null`.

---

## 3. Standard Fix

Guard against null component retrieval in `_getAnimNearWin()` or ensure the Inspector property `useSpine` accurately matches the attached component:

```typescript
_getAnimNearWin(): void {
    if (this.useSpine) {
        this._nearWinAnim = this.nearWinEffect.getComponent(sp.Skeleton) || this.nearWinEffect.getComponentInChildren(sp.Skeleton);
    } else {
        this._nearWinAnim = this.nearWinEffect.getComponent(Animation) || this.nearWinEffect.getComponentInChildren(Animation);
    }
}
```
