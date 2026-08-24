---
id: "cc_slot_module:SlotSymbolResourceManager:gotcha:missing_sprite_frame_fallback"
title: "Gotcha: Unmapped Symbol Code Yields Blank Frame"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "gotchas", "missing_frame"]
---

# 🛑 Gotcha: Unmapped Symbol Code Yields Blank Frame

---

## 1. Symptom & Technical Defect
When a column stops, one of the cells renders as an invisible blank space with no sprite, and the console warns `[SlotSymbolModule] Sprite Frame of Symbol SCATTER not found`.

---

## 2. Root Cause
In `SlotSymbolResourceManager.getSymbolFrame()`:
```typescript
return this.staticFrameAssets[symbolCode];
```
If the new game designer added a new symbol code `"SCATTER"` or `"BONUS"` in backend math but forgot to add an entry in `symbolSfList` inside the `SymbolPrefab` in Cocos Creator, `staticFrameAssets["SCATTER"]` returns `undefined`.

---

## 3. Standard Verification Checklist
Before releasing a new slot game, verify that all symbols listed in `GameConfig.ts` (`RANDOM_SYMBOLS_CODE`) have matching SpriteFrames in `SlotSymbolResourceManager.symbolSfList`.
