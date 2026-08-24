---
id: "cc_slot_module:SlotSoundPlayerModule:overview:scene_and_prefabs"
title: "SlotSoundPlayerModule Scene Node Placement & Prefab Wiring"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSoundPlayerModule Scene Node Placement & Prefab Wiring

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotSoundPlayerModule` is mounted on the `SlotSoundPlayer` child node directly under `Canvas/Director`:

```text
Canvas
└── Director
    ├── GameMode (MainGamePrefab, FreeGamePrefab, BonusGamePrefab)
    ├── UIManager (UIManagerModule)
    ├── CutsceneControl (CutsceneController)
    ├── PopupControl (PopupControllerModule)
    └── SlotSoundPlayer [Node]
        ├── [Component 1] SlotSoundPlayerModule (Audio Manager & SFX Dispatcher)
        └── [Component 2] SoundConvertList (Audio clip mapping & dynamic sound converter)
```

---

## 2. Injected Audio Clips & Channels

| Attached Component | Type | Responsibility |
| :--- | :--- | :--- |
| **`SlotSoundPlayerModule`** | `SlotBaseModule` | BGM playback, loop management, win roll audio loops, mobile unlock audio context. |
| **`SoundConvertList`** | `cc.Component` | Maps string sound keys (`SPIN_CLICK`, `REEL_STOP`, `NEAR_WIN`, `PAYLINE_WIN`) to `cc.AudioClip` assets. |
