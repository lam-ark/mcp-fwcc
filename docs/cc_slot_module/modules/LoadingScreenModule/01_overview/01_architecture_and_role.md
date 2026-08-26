---
id: "cc_slot_module:LoadingScreenModule:overview:architecture_and_role"
title: "LoadingScreenModule Architectural Role & Scene Preloader"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "overview", "architecture", "preloader", "scene_routing"]
---

# 🏛️ LoadingScreenModule Architectural Role & Scene Preloader

---

## 1. Architectural Mission

`LoadingScreenModule` is the **Bootstrap Scene Preloader & Multi-Target Scene Router** mounted on the loading scene of all Cocos Common slot games (`Canvas/Director/Loading`). It manages:
- Async asset bundle and scene preloading via `cc.director.preloadScene`.
- Smooth progress bar interpolation with `cc.tween` easing (`sineIn`) to prevent jarring jumps.
- Multi-resolution and environment-driven scene name redirection (SD scenes for low-end mobile, IFrame wrapper modes, and Bet History replay scene redirection).
- Howler.js audio context pre-registration (`JsbUtils.registerLoadHowl()`) on web/mobile browsers.
- In-loading Home / Lobby return button with graceful iframe exit handling.

```mermaid
graph TD
    Start[Loading Screen Start] --> CheckConfig{IS_FINISHED_REMOTE?}
    CheckConfig -- No --> Poll[Schedule retry 100ms] --> CheckConfig
    CheckConfig -- Yes --> Redirect[redirectSceneName: SD / Iframe / History]
    Redirect --> Preload[cc.director.preloadScene]
    Preload -->|Progress Callback| Interp[Interpolate progress label & bar]
    Preload -->|Preload Success| TweenFull[setProgressFull 100% tween]
    TweenFull --> SwitchScene[cc.director.loadScene updatedScene]
    Preload -->|Preload Error| FlowOut[handleFlowOutGame Network Error]
```

---

## 2. Key Responsibilities

1. **Multi-Target Scene Routing (`redirectSceneName`)**:
   - Parses URL search parameters (`?history=true`) to route into `sceneNameHistory`.
   - Checks `sys.isMobile` to select lower-memory `sdSceneName` (Standard Definition assets).
   - Validates existence against `cc.game._sceneInfos`.
2. **Smooth Progress Smoothing (`update`, `setProgressFull`)**:
   - Gradually catches up the visual progress bar towards the actual preload percentage (`totalPercent`) at 20 steps per second.
3. **WebAudio / Mobile Audio Initialization**:
   - Pre-initializes Howler audio context under Iframe environments to enable zero-latency audio playback upon main scene entry.
