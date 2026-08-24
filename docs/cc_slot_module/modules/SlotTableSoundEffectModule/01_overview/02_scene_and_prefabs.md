---
id: "cc_slot_module:SlotTableSoundEffectModule:overview:scene_and_prefabs"
title: "SlotTableSoundEffectModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTableSoundEffectModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

`SlotTableSoundEffectModule` is attached as an optional audio bridge on `SlotTableModule` or managed as a sub-module under `MainGamePrefab`:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── SlotTableSoundEffectModule (Audio event listener bridge)
    └── Table (cc.Mask)
```

---

## 2. Audio Service Linkage

`SlotTableSoundEffectModule` forwards spin start, reel stop, and scatter anticipation cues directly to `Canvas/Director/SlotSoundPlayer` (`SlotSoundPlayerModule`).
