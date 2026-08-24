---
id: "cc_slot_module:GameDirector:overview:scene_and_prefabs"
title: "GameDirector Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameDirector Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameDirector` is the master controller on `Canvas/Director`:

```text
Canvas
└── Director (GameConfig, GameDataStore, GameInit, GameDirector)
    ├── GameMode (OnAddGameMode - Holds mode prefabs: MainGamePrefab, FreeGamePrefab, BonusGamePrefab)
    ├── UIManager (UIManagerModule - Bottom & Top HUD controls)
    ├── CutsceneControl (CutsceneController - Overlays for Big Win, Free Intro)
    ├── PopupControl (PopupControllerModule - Dialogs, Setting, Info)
    └── SlotSoundPlayer (SlotSoundPlayerModule, SoundConvertList)
```

---

## 2. Injected Mode Prefab Stack

`GameDirector` toggles visibility and active state among child prefabs in `Canvas/Director/GameMode`:
- `MainGamePrefab`: Active during Base game spins.
- `FreeGamePrefab`: Activated upon Scatter trigger.
- `BonusGamePrefab`: Activated during pick-and-click bonus mini-games.
- `FreeOptionPrefab`: Activated when volatility selection is required.
