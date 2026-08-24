---
id: "cc_slot_module:CascadeModuleConfig:properties_and_state:inspector_properties"
title: "CascadeModuleConfig Properties Specification"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ CascadeModuleConfig Properties Specification

---

## 1. Public Fields & Interfaces

```typescript
export interface CASCADE_TABLE_CONFIG {
    format: number[];
    cellSize: cc.Vec2;
    positions: cc.Vec2[][];
}
```

| Field Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `CASCADE_TABLE_CONFIG` | `CASCADE_TABLE_CONFIG` | `{ format: [3,3,3,3,3], cellSize: Vec2(180,160), positions: [] }` | Grid configuration descriptor. |
| `DROP_SYMBOL_CODE` | `string` | `'-1'` | Sentinel value for eliminated winning tiles. |
| `SYMBOL_SIZE` | `number` | `1` | Base symbol cell unit span. |
| `FALLING_TIME` | `number` | `0.2` | Drop time constant (seconds). |
| `DELAY_FALLING_TIME` | `number` | `0.2` | Near-win delay offset (seconds). |
| `CASCADING_TIME_COMPLETED` | `number` | `1.5` | Step timeout duration (seconds). |
