---
id: "cc_slot_module:SpinTimesModule:properties_and_state:inspector_properties"
title: "SpinTimesModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SpinTimesModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `gameMode` | `GAME_MODE_ENUM` | `NORMAL_GAME` | Associated game mode (`NORMAL_GAME` for auto-spins, `FREE_GAME` for free spins). |
| `spinTimesLabel` | `cc.Label` | `null` | Label node displaying remaining rounds or `'∞'`. |
