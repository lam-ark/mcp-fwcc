---
id: "cc_slot_module:SlotReelModule:properties:inspector_properties"
title: "SlotReelModule Inspector Properties Reference"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "properties", "inspector_properties", "ccclass"]
---

# 🎛️ SlotReelModule Inspector Properties Reference

---

## 1. Component Configuration & Dynamically Injected Fields

`SlotReelModule` is typically instantiated programmatically by `SlotTableModule` and configured via `initReel()`:

| Property Field | Type | Injection Point | Purpose |
| :--- | :--- | :--- | :--- |
| `reelIndex` | `number` | Injected via `initReel` | Index identifier of this column ($0 \dots \text{N}-1$). |
| `config` | `TableModuleConfig` | Injected via `initReel` | Reference to global table configuration. |
| `symbolManager` | `SlotSymbolManager` | Injected via `initReel` | Reference to shared symbol pooling manager. |

---

## 2. Geometry & Symbol Dimensions (Derived from Config)

* `SYMBOL_WIDTH`: Grid width in pixels.
* `SYMBOL_HEIGHT`: Grid height in pixels.
* `DEFAULT_SIZE`: Base cell size (`cc.Vec2(1, 1)`).
* `DEFAULT_FORMAT`: Array of row counts per column (`[3, 3, 3, 3, 3]`).
