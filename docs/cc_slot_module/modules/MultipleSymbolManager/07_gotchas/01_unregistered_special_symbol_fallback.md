---
id: "cc_slot_module:MultipleSymbolManager:gotcha:unregistered_special_symbol_fallback"
title: "Gotcha: Silent Fallback to Normal Symbol Template"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "gotchas", "silent_fallback"]
---

# 🛑 Gotcha: Silent Fallback to Normal Symbol Template

---

## 1. Symptom & Technical Defect
A newly added special Wild symbol appears on screen with standard low-pay symbol layout and missing 3D Spine effects without throwing any runtime errors.

---

## 2. Root Cause
In `SlotCustomNodePool.get()`:
```typescript
const specialPool = this._pools.get(specialPoolName);
if (specialPool) {
    return this.getSymbolFromPool(specialPool, symbolCode, true);
}
// Fallback:
const normalPool = this._pools.get(NORMAL_POOL_NAME);
return this.getSymbolFromPool(normalPool, null, false);
```
If `"WILD"` was omitted from `MultipleSymbolManager.specialSymbolTemplates`, the engine silently falls back to the default `normalPool` rather than crashing, masking the missing template.

---

## 3. Fix Pattern
Cross-reference `specialSymbolTemplates` entries against `GameConfig.SPECIAL_SYMBOLS`.
