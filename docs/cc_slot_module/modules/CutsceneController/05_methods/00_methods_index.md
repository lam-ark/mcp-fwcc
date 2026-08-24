---
id: "cc_slot_module:CutsceneController:methods:index"
title: "CutsceneController Methods Catalog Index"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "methods", "index"]
---

# 📚 CutsceneController Methods Catalog Index

---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Forces child node `onLoad`, hydrates map, and binds events. |
| **[`playCutScene`](./playCutScene.md)** | `public` | `Promise<void>` | Looks up cutscene by type, starts play, and returns Promise. |
| **[`closeCutScene`](./closeCutScene.md)** | `public` | `Promise<void>` | Closes active cutscene by type and returns Promise. |
| **[`skipCutScenes`](./skipCutScenes.md)** | `public` | `void` | Broadcasts `skip()` to all registered cutscenes. |
| **[`isDisplayDialog`](./isDisplayDialog.md)** | `public` | `boolean` | Returns boolean dialog display status (`false` by default). |
| **[`isDisplayCutscene`](./isDisplayCutscene.md)**| `public` | `boolean` | Checks if any full-display cutscene is currently active. |
| **[`makeCutSceneList`](./makeCutSceneList.md)** | `public` | `void` | Discovers and populates `this.cutScenes` map. |
| **[`getDisplayCutscene`](./getDisplayCutscene.md)**| `public` | `string` | Returns name of currently active cutscene. |
| **[`closeAllNotices`](./closeAllNotices.md)** | `public` | `void` | Emits `CLOSE_NOTICE` on all cutscene nodes. |
