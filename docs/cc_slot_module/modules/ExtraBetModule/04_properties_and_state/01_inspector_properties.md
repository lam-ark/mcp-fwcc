---
id: "cc_slot_module:ExtraBetModule:properties_and_state:inspector_properties"
title: "ExtraBetModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ ExtraBetModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `extraBetLabel` | `cc.Label` | `null` | Label displaying current extra bet modifier value. |
| `increaseExtraBet` | `cc.Button` | `null` | Button to increment extra bet level. |
| `decreaseExtraBet` | `cc.Button` | `null` | Button to decrement extra bet level. |
| `sfxIncreaseExtraBetId` | `string` | `""` | Optional audio key for extra bet increment. |
| `sfxDecreaseExtraBetId` | `string` | `""` | Optional audio key for extra bet decrement. |
