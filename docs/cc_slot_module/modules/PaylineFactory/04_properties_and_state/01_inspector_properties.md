---
id: "cc_slot_module:PaylineFactory:properties_and_state:inspector_properties"
title: "PaylineFactory Inspector Properties Specification"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineFactory Inspector Properties Specification

---

## 1. Property Schema

```typescript
@ccclass('PoolItem')
export class PoolItem {
    @property() name: string = '';
    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property() initCount: number = 0;
}
```

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `poolItems` | `PoolItem[]` | `[]` | List of prefab pool configurations. |
