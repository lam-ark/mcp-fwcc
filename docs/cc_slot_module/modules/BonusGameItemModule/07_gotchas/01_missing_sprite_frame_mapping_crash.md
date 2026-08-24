---
id: "cc_slot_module:BonusGameItemModule:gotcha:missing_sprite_frame_mapping_crash"
title: "Gotcha: Missing SpriteFrame Mapping in itemSfList"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "gotchas", "missing_sprite_frame"]
---

# ⚠️ Gotcha: Missing SpriteFrame Mapping in itemSfList

## 1. Defect Symptom
When opening a chest with value `"GRAND"`, `this.staticFrameAssets["GRAND"]` evaluates to `undefined`, leaving the opened chest empty or crashing.

---

## 2. Root Cause Analysis
`staticFrameAssets` dictionary is constructed once in `onLoad()` from the serialized `itemSfList` array. If any possible server prize ID is missing from `itemSfList`, the frame assignment fails.

---

## 3. Recommended Resolution
Ensure all payout values declared in backend paytables have a corresponding entry in `itemSfList` in the Cocos Inspector.
