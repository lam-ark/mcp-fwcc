---
id: "cc_slot_module:SlotSymbolModule:gotcha:special_symbol_key_skeleton_retention"
title: "Gotcha: SPECIAL_SYMBOL_KEY Retention for Sticky Wilds"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "gotchas", "special_symbol_key", "sticky_wild", "skeleton_retention"]
---

# 🛑 Gotcha: SPECIAL_SYMBOL_KEY Retention for Sticky Wilds

---

## 1. Symptom & Technical Defect
In games with persistent Sticky Wilds (e.g. Hold & Spin or Free Spins locking Wilds), when the table is reset or symbols are updated, sticky Wilds unexpectedly lose their Spine skeleton animation, reverting to a blank texture or popping into static pose.

---

## 2. Root Cause
`clearSkeletonData()` by default nulls `spine.skeletonData`:
```typescript
if (this.spine && !this.node[SPECIAL_SYMBOL_KEY]) {
    this.spine.skeletonData = null;
}
```
If the developer forgot to tag the persistent Wild node with `node[SPECIAL_SYMBOL_KEY] = true`, the engine aggressively wipes the SkeletonData asset to prevent memory leaks, causing the Sticky Wild to blank out.

---

## 3. Standard Fix Pattern
Always tag locking Wild nodes during transformation:
```typescript
import { SPECIAL_SYMBOL_KEY } from "cc-slot-module/Components/Common/SlotEnum";

// When locking wild on grid:
wildNode[SPECIAL_SYMBOL_KEY] = true;
```
