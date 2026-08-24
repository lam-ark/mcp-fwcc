---
id: "cc_slot_module:SlotCustomNodePool:overview:scene_and_prefabs"
title: "SlotCustomNodePool Instantiation & Template Registration"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "overview", "scene_prefabs", "templates"]
---

# 🌳 SlotCustomNodePool Instantiation & Template Registration

---

## 1. Context & Instantiation Layer

`SlotCustomNodePool` is a pure TypeScript helper class instantiated directly by `MultipleSymbolManager` in `initSymbolPool()`:

```typescript
this.symbolPool = new SlotCustomNodePool(this.template, this.initCount, this.specialSymbolTemplates);
this.symbolPool.initSymbolPool();
```

---

## 2. Serialized Inspector Template Definition (`SpecialSymbolTemplates`)

```typescript
@ccclass('SpecialSymbolTemplates')
export class SpecialSymbolTemplates {
    @property() symbolCode: string = '';        // e.g. "WILD", "SCATTER", "BONUS"
    @property(cc.Prefab) template: cc.Prefab = null; // Custom Prefab asset
    @property() initCount: number = 1;          // Pre-warmed pool capacity
}
```
