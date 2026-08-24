---
id: "cc_slot_module:FreeGameDirectorModule:overview:scene_and_prefabs"
title: "FreeGameDirectorModule Scene Structure & Node Hierarchy"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "overview", "scene"]
---

# 🌳 FreeGameDirectorModule Scene Structure & Node Hierarchy

## 1. Scene Hierarchy Placement

Attached to the Free Game container under `Canvas/Director/GameMode/FreeGameDirector`:

```text
Canvas/Director/GameMode/FreeGameDirector
├── FreeGameDirectorModule (Orchestrator component)
├── FreeGameWriterModule (Script command synthesizer)
├── ScriptExecutor (Command queue runner)
└── moduleList (Attached child modules)
    ├── Table (Free Game customized table or shared table)
    ├── Payline (Free Game win display)
    └── SpinTimes (HUD badge displaying remaining free spins)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `FREE_GAME` | Identifies this director as Free Game mode. |
| **`moduleList`** | `cc.Node[]` | `[]` | List of child UI components initialized with this director's `moduleEvent` bus. |
| **`isFirstAutoSpin`** | `boolean` | `false` | Internal flag set upon `enter()` to bypass delays on the very first free spin. |
