---
id: "cc_slot_module:SlotObjectPool:gotchas:invalid_prefab"
title: "SlotObjectPool Gotcha: Missing Inspector Prefab Reference"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "gotchas", "null_prefab"]
---

# ⚠️ SlotObjectPool Gotcha: Missing Inspector Prefab Reference

---

## 1. Symptom
Calling `get()` throws an error in the console: `"Prefab object is not valid in Object Pool..."` and returns `null`, causing downstream coordinate assignments to crash with `TypeError: Cannot set property 'position' of null`.

## 2. Solution
Always verify in Cocos Creator Editor that the `prefabObject` property is populated, or guard calls with `if (node) { ... }`.
