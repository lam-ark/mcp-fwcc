---
id: "cc_slot_module:IntroGameModule:properties_and_state:inspector_properties"
title: "IntroGameModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ IntroGameModule Inspector Properties Specification

---

## 1. Inspector Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `btnJoinGame` | `cc.Button` | `null` | Button triggering game entry and modal fade out. |
| `doNotShowNode` | `cc.Node` | `null` | Container holding the "Do not show again" checkbox toggle. |
| `progressBar` | `cc.Node` | `null` | Optional loading indicator node displayed before connection is ready. |
| `gameId` | `string` | `""` | Unique game identifier used for localStorage caching. |
