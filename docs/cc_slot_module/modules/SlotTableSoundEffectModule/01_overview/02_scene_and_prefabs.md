---
id: "cc_slot_module:SlotTableSoundEffectModule:overview:scene_and_prefabs"
title: "SlotTableSoundEffectModule Scene Placement & Dependencies"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SlotTableSoundEffectModule Scene Placement & Dependencies

---

## 1. Scene Graph Placement

`SlotTableSoundEffectModule` is mounted on the Table container node alongside `SlotTableModule` and `TableModuleConfig`:

```text
Canvas
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── BoardG
            └── Table (SlotTableModule, TableModuleConfig, SlotTableSoundEffectModule)
```

---

## 2. Audio ID Configurations

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sfxReelStopId` | `string` | `"REEL_STOP"` | Sound identifier for standard reel stop click. |
| `sfxScatterIds` | `string[]` | `["SCATTER_1", "SCATTER_2", ...]` | Tiered audio clips for 1st, 2nd, 3rd Scatter landing. |
| `sfxBonusIds` | `string[]` | `["BONUS_1", "BONUS_2", ...]` | Tiered audio clips for 1st, 2nd, 3rd Bonus landing. |
| `sfxJackpotIds` | `string[]` | `["JACKPOT_1", "JACKPOT_2", ...]` | Tiered audio clips for progressive Jackpot symbols. |
