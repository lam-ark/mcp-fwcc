---
id: "cc_slot_module:PaylineFactory:gotchas:index"
title: "PaylineFactory Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineFactory Gotchas & Engine Defects Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_lost_prefab_name_tag`](./01_lost_prefab_name_tag.md)** | Lost `__prefabName__` Property on External Clones | MEDIUM | Manually instantiated nodes returned to `PaylineFactory` are destroyed instead of recycled. |
| **[`02_double_pool_get_leak`](./02_double_pool_get_leak.md)** | Double `pool.get()` Redundancy & Node Discarding | HIGH | `getObject()` calls `pool.get()` twice, causing orphaned nodes in memory and redundant allocations. |
