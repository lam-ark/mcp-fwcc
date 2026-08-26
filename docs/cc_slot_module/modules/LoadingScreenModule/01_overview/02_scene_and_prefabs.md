---
id: "cc_slot_module:LoadingScreenModule:overview:scene_and_prefabs"
title: "LoadingScreenModule Scene Placement & Prefab Configuration"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌲 LoadingScreenModule Scene Placement & Prefab Configuration

---

## 1. Canonical Scene Node Anchor

```text
LoadingScene.fire
└── Canvas (cc.Canvas, CanvasModuleController)
    └── LoadingScreen (LoadingScreenModule)
        ├── BG_Splash (cc.Sprite)
        ├── GameLogo (sp.Skeleton / cc.Sprite)
        ├── ProgressBar (cc.ProgressBar)
        │   └── Bar (cc.Sprite)
        ├── ProgressLabel (cc.Label - e.g. "75%")
        └── HomeBtn (cc.Button - Returns to lobby)
```

---

## 2. Inspector Properties Schema

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`sceneName`** | `string` | `''` | Target main game scene name (e.g. `"g9000L"`). |
| **`sdSceneName`** | `string` | `''` | Standard-definition scene name for low-end mobile. |
| **`sceneNameIframe`** | `string` | `''` | Alternative scene loaded inside partner iframes. |
| **`sceneNameHistory`** | `string` | `''` | Standalone history replay viewer scene name. |
| **`progressBar`** | `cc.ProgressBar` | `null` | Visual progress bar component. |
| **`progressLabel`** | `cc.Label` | `null` | Percentage readout text label. |
| **`homeBtn`** | `cc.Node` | `null` | Home / Return to lobby button node. |
