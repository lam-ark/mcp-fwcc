---
id: "cc_slot_module:IntroGameModule:methods:index"
title: "IntroGameModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "index"]
---

# 📚 IntroGameModule Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Binds `JOIN_GAME_SUCCESS` and calls `init()`. |
| **[`joinGameSuccess`](./joinGameSuccess.md)**| `public` | `void` | Evaluates reconnect/promotion flags to auto-skip intro. |
| **[`init`](./init.md)** | `public` | `void` | Reads cached preference from `sys.localStorage`. |
| **[`onClickJoinGame`](./onClickJoinGame.md)**| `public` | `void` | Fades out modal, saves preference, and emits dismissal events. |
| **[`onCheckDoNotShowAgain`](./onCheckDoNotShowAgain.md)**| `public` | `void` | Toggles `_isHideIntroGame` boolean state. |
| **[`showButtonJoinGame`](./showButtonJoinGame.md)**| `public` | `void` | Toggles visibility of progressBar vs join button and checkbox. |
| **[`cacheHideIntroGame`](./cacheHideIntroGame.md)**| `public` | `void` | Serializes preference JSON into `sys.localStorage`. |
| **[`playSfxClick`](./playSfxClick.md)** | `public` | `void` | Plays standard button click sound. |
| **[`onDisable`](./onDisable.md)** | `public` | `void` | Stops all active node tweens. |
