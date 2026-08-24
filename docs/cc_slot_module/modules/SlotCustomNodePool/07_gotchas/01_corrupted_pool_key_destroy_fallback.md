---
id: "cc_slot_module:SlotCustomNodePool:gotcha:corrupted_pool_key_destroy_fallback"
title: "Gotcha: Node Destruction on Missing Custom Pool Key"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "gotchas", "memory_leak", "metadata_corruption"]
---

# 🛑 Gotcha: Node Destruction on Missing Custom Pool Key

---

## 1. Symptom & Technical Defect
During gameplay, symbol instances are continually instantiated and then destroyed rather than being recycled into their pools, resulting in high Garbage Collector (GC) pressure and frame stuttering.

---

## 2. Root Cause
In `SlotCustomNodePool.put()`:
```typescript
const poolName = symbol[CUSTOM_POOL_NAME_KEY] as string | undefined;
if (!poolName) {
    symbol.destroy();
    return;
}
```
If a custom project script overrides `symbol` properties or clones the node without preserving the `__custom_pool_name_` string, `SlotCustomNodePool` cannot determine which pool owns the node, forcing a fallback `symbol.destroy()`.

---

## 3. Safe Practice Rule
Never delete or reassign custom property keys starting with `__custom_pool_name_` on symbol nodes.
