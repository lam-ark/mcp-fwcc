---
id: "cc_slot_module:GameInit:overview:scene_and_prefabs"
title: "GameInit Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameInit", "game_init", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameInit Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `GameInit` is attached directly to the root `Canvas/Director` node alongside the core orchestrator suite:

```text
Canvas (cc.Canvas, CanvasModuleController, cc.Widget)
├── Main Camera (cc.Camera)
└── Director [Root Node]
    ├── [Component 1] GameInit (Bootstrap orchestrator & Service Locator registration)
    ├── [Component 2] GameConfig (Master game configuration)
    ├── [Component 3] GameDataStore (Reactive state store)
    ├── [Component 4] GameDirector (Scene orchestrator & network router)
    └── [Children Nodes]:
        ├── GameMode (OnAddGameMode)
        │   ├── BG_MainG (cc.Sprite)
        │   ├── BoardG (cc.Sprite)
        │   ├── MainGamePrefab (Normal game mode)
        │   ├── FreeGamePrefab (Free spins mode)
        │   ├── BonusGamePrefab (Bonus mini-game mode)
        │   └── FreeOptionPrefab (Free spin option selection)
        ├── UIManager (UIManagerModule)
        ├── CutsceneControl (CutsceneController)
        ├── PopupControl (PopupControllerModule)
        ├── Toast (ToastInfoModule)
        ├── DialogMessage (DialogMessageModule)
        ├── waitingScene (WaitingSceneModule)
        └── SlotSoundPlayer (SlotSoundPlayerModule, SoundConvertList)
```

---

## 2. Component Co-Location on `Canvas/Director`

`GameInit` runs on Frame 0 at `onLoad()` to instantiate and register all shared singletons into the Service Locator container:

| Attached Component | Type | Responsibility |
| :--- | :--- | :--- |
| **`GameInit`** | `cc.Component` | Bootstrap lifecycle, IoC registration, network initialization. |
| **`GameConfig`** | `cc.Component` | Master config parameters (`PAY_SYSTEM`, `TABLE_FORMAT`). |
| **`GameDataStore`** | `cc.Component` | Central reactive store (`playSession`, `wallet`, `bet`, `winAmount`). |
| **`GameDirector`** | `cc.Component` | Top-level scene loop, mode switching, network dispatching. |
