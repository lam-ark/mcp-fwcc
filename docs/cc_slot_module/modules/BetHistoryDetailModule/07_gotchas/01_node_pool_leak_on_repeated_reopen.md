---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:01_node_pool_leak_on_repeated_reopen"
title: "NodePool Leak on Detail View Reopen"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "node_pool", "memory_leak"]
---

# ⚠️ NodePool Leak on Repeated Reopen

---

## 1. Defect & Root Cause

If `_clearScrollItem()` is not called during `_reset()`, existing `usingScrollItem` references are overwritten, abandoning active nodes in the scene graph and instantiating redundant prefabs.

---

## 2. Code Fix

Always execute `this._clearScrollItem()` inside `_reset()`:

```typescript
_clearScrollItem(): void {
    this.usingScrollItem.forEach((item) => {
        item.emit("RESET");
        this.scrollPool.put(item);
    });
    this.usingScrollItem = [];
}
```
