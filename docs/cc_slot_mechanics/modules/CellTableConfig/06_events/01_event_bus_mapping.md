---
id: "cc_slot_mechanics:CellTableConfig:events:mapping"
title: "CellTableConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CellTableConfig` Event Bus Mapping & Subscriptions

---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`CELL_START_SPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_START_SPIN. |
| **`CELL_STOP_SPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_STOP_SPIN. |
| **`CELL_BOUNCE_SETTLE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_BOUNCE_SETTLE. |
