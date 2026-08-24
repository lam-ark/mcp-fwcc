---
id: "cc_slot_module:CascadeModuleConfig:overview:architecture_and_role"
title: "CascadeModuleConfig Architectural Role & Parameters"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "overview", "architecture", "config"]
---

# 🏛️ CascadeModuleConfig Architectural Role & Parameters

---

## 1. Architectural Mission

`CascadeModuleConfig` is the configuration data container defining the geometry, drop physics timing constants, elimination symbols codes, and symbol index maps for the Cascade & Avalanche Subsystem.

---

## 2. Key Parameters

- `CASCADE_TABLE_CONFIG`: Matrix format `[3, 3, 3, 3, 3]`, cell size `Vec2(180, 160)`, and pre-calculated cell positions.
- `DROP_SYMBOL_CODE = '-1'`: Elimination sentinel string.
- `FALLING_TIME = 0.2`: Base drop duration (in seconds).
- `DELAY_FALLING_TIME = 0.2`: Near-win delay offset.
- `CASCADING_TIME_COMPLETED = 1.5`: Overall step timeout budget.
- `SYMBOL_INDEXES`: Lazy-cached 2D symbol index matrix.
