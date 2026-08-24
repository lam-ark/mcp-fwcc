---
id: "cc_slot_module:SlotSymbolModule:gotcha:spine_skeleton_leak_on_pool_recycle"
title: "Gotcha: Spine Skeleton Memory Leak on Pool Recycle"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "gotchas", "memory_leak", "spine_leak", "node_pool"]
---

# 🛑 Gotcha: Spine Skeleton Memory Leak on Pool Recycle

---

## 1. Symptom & Technical Defect
During prolonged Auto-Spin sessions on mobile browsers (Safari/Chrome on iOS/Android), memory consumption steadily climbs by 2-5 MB per spin until the browser forces a tab reload (OOM crash).

---

## 2. Root Cause
In `SlotSymbolModule`, when Spine skeleton data is assigned to `this.spine.skeletonData`, Cocos Creator retains internal bone caches and texture bindings. If the node is put back into `cc.NodePool` without setting `this.spine.skeletonData = null`, the underlying skeleton buffers remain pinned in GPU memory.

---

## 3. Standard Code Solution
Ensure `clearSkeletonData()` is invoked whenever a symbol is returned to pool:
```typescript
clearSkeletonData(): void {
    if (this.spine && !this.node[SPECIAL_SYMBOL_KEY]) {
        this.spine.skeletonData = null; // ✅ Frees underlying skeleton buffer
    }
    this.hasSkeletonData = false;
}
```
