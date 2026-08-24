---
id: "cc_slot_module:PaylineFactory:methods:_spawnObject"
title: "PaylineFactory._spawnObject Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "_spawnObject"]
---

# 📖 `PaylineFactory._spawnObject()`

---

## 1. Method Overview & Signature

Instantiates the registered prefab asset and tags it with `__prefabName__`.

```typescript
protected _spawnObject(name: string): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
protected _spawnObject(name: string): cc.Node {
    const prefab = this.prefabMap.get(name);
    const node = instantiate(prefab);
    node['__prefabName__'] = name;
    return node;
}
```
