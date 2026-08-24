---
id: "cc_slot_module:TurboButton:methods:index"
title: "TurboButton Methods Catalog Index"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "index"]
---

# 📚 TurboButton Methods Catalog Index

---

## 1. Declared Methods Index (All 14 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Initializes model, observers, and input event bindings. |
| **[`loadCacheTurbo`](./loadCacheTurbo.md)** | `public` | `void` | Synchronizes active state with stored user preferences. |
| **[`listenEvents`](./listenEvents.md)** | `public` | `void` | Attaches pointer event listeners to `display` node. |
| **[`setupObserver`](./setupObserver.md)** | `public` | `void` | Observes `active`, `interactable`, and `state` fields on `TurboButtonData`. |
| **[`onTurboActive`](./onTurboActive.md)** | `public` | `void` | Updates `gameSettings.isTurboActive` and emits `ON_TURBO_ACTIVE`. |
| **[`onTurboEnable`](./onTurboEnable.md)** | `public` | `void` | Hook for button interactability changes. |
| **[`onChangeState`](./onChangeState.md)** | `public` | `void` | Emits `TURBO_BUTTON_STATE_CHANGE` to `display`. |
| **[`onTurboHover`](./onTurboHover.md)** | `public` | `void` | Emits `TURBO_BUTTON_HOVER` to `GameLogic`. |
| **[`onTurboExitHover`](./onTurboExitHover.md)**| `public`| `void` | Emits `TURBO_BUTTON_EXIT_HOVER` to `GameLogic`. |
| **[`onTurboClick`](./onTurboClick.md)** | `public` | `void` | Triggers SFX and emits `TURBO_BUTTON_CLICK` to `GameLogic`. |
| **[`playSfxTurbo`](./playSfxTurbo.md)** | `public` | `void` | Plays `sfxTurboOn` or `sfxTurboOff` audio clip. |
| **[`onTurboPressed`](./onTurboPressed.md)**| `public` | `void` | Emits `TURBO_BUTTON_PRESSED` to `GameLogic`. |
| **[`onTurboCancel`](./onTurboCancel.md)** | `public` | `void` | Emits `TURBO_BUTTON_CANCEL` to `GameLogic`. |
| **[`onDestroy`](./onDestroy.md)** | `public` | `void` | Releases reactive observer subscriptions. |
