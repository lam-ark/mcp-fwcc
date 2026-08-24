---
id: "cc_slot_module:SlotCustomNodePool:gotchas:index"
title: "SlotCustomNodePool Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotCustomNodePool Gotchas & Pitfalls Index

---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_corrupted_pool_key_destroy_fallback.md`](./01_corrupted_pool_key_destroy_fallback.md)** | Nodes destroyed instead of reused in pool, causing GC memory spikes. | External script cleared `node['__custom_pool_name_']` property. | Never overwrite dynamic metadata properties on pooled symbol nodes. |
