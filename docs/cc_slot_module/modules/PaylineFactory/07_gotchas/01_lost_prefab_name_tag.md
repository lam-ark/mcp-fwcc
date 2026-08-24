---
id: "cc_slot_module:PaylineFactory:gotchas:lost_prefab_name_tag"
title: "Gotcha: Lost __prefabName__ Tag on External Clones"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "gotchas", "prefab_tag", "memory_leak"]
---

# ⚠️ Gotcha: Lost `__prefabName__` Tag on External Clones

---

## 1. Problem Description

`returnObject(node)` checks:
```typescript
const name = node['__prefabName__'];
if (!this.poolMap.has(name)) {
    warn(`Pool ${name} not found.`);
    node.destroy();
    return;
}
```
If a developer spawns a node manually via `cc.instantiate(prefab)` without setting `node['__prefabName__'] = name`, returning it to the factory destroys the node instead of caching it in the pool.

---

## 2. Recommended Best Practice

Always use `paylineFactory.getObject(name)` to obtain instances so the `__prefabName__` tag is automatically stamped.
