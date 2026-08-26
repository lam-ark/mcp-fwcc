---
id: "cc_slot_module:LoadingScreenModule:methods:methods_index"
title: "LoadingScreenModule Methods Master Index"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "index"]
---

# 📖 LoadingScreenModule Methods Master Index

---

## 1. Declared Methods

| Method | Scope | Description |
| :--- | :--- | :--- |
| **`onLoad()`** | `void` | Initiates the loading sequence pipeline if `sceneName` is valid. |
| **`resetProgress()`** | `void` | Resets progress bar value and label text to 0%. |
| **`startLoadingPipeline()`** | `void` | Waits for `IS_FINISHED_REMOTE` configuration before triggering preloading. |
| **`redirectSceneName()`** | `void` | Computes SD, Iframe, or Bet History scene redirection names. |
| **`addHomeEvent()`** | `void` | Displays and binds the Home button after a 10s safety delay. |
| **`startLoadScene()`** | `void` | Activates the loader node, sets opacity to 255, and begins preloading. |
| **`onHideSplashScreen()`** | `void` | Event listener resetting progress when splash screen is hidden. |
| **`preloadScene()`** | `void` | Calls `cc.director.preloadScene` with progress tracking callbacks. |
| **`setProgressFull(delay, cb)`**| `void` | Tweens progress to 100% using a sine easing curve before scene switch. |
| **`updateLabelProgressFull()`** | `void` | Updates label text to "100%". |
| **`updateLabelProgress(val)`** | `void` | Updates label text with calculated integer percentage string. |
| **`update(dt)`** | `void` | Per-frame catch-up interpolation for smooth progress bar animation. |
| **`setEventId(id)`** | `void` | Sets analytics / tracking event identifier. |
| **`onDestroy()`** | `void` | Cleans up tweens, scheduled callbacks, and unregisters Howler hooks. |
