---
id: "cc_slot_module:CascadeModuleConfig:gotchas:uninitialized_positions_array_access"
title: "Gotcha: Uninitialized positions Array Access in onLoad"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "gotchas", "positions", "uninitialized_array"]
---

# ⚠️ Gotcha: Uninitialized `positions` Array Access in `onLoad`

---

## 1. Problem Description

In `CascadeModuleConfig`:
```typescript
public readonly CASCADE_TABLE_CONFIG = {
    format: [3, 3, 3, 3, 3],
    cellSize: new Vec2(180, 160),
    positions: [],
}
```
`positions` is declared as an empty array `[]`. It is populated dynamically at runtime by `VerticalCascadeModule.initLayout()` during its `onLoadExtend()` phase.

If another custom component attempts to read `config.CASCADE_TABLE_CONFIG.positions[col][row]` during `onLoad()` before `VerticalCascadeModule.initLayout()` has executed, it encounters `undefined` or throws `TypeError: Cannot read property of undefined`.

---

## 2. Best Practice

Only read `config.CASCADE_TABLE_CONFIG.positions` during or after `start()`, or call `initLayout()` explicitly before accessing cell coordinates.
