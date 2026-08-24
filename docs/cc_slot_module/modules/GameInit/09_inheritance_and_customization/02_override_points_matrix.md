---
id: "cc_slot_module:GameInit:customization:override_points_matrix"
title: "GameInit Lifecycle Override Points Matrix"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "customization", "override_matrix", "lifecycle", "setupDependencyInjection"]
---

# 📊 GameInit Lifecycle Override Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Class Implementation | Safe to Override? | Required `super` Call | Customization Purpose in New Game |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoad()`** | Executes 9-step bootstrap pipeline | `EXTEND_ONLY` | `MANDATORY` | Hook early pre-render tasks before network connect. |
| **`setupDependencyInjection()`** | Registers 12 core singleton tokens | `YES` | `MANDATORY` | Register additional game-specific services via `eno.provide(CustomToken, inst, gameId)`. |
| **`setupGameText()`** | Loads default text & `EXTEND_GAME_TEXT` | `YES` | `MANDATORY` | Inject custom dynamic runtime translations. |
| **`connect()`** | Calls `connectNetwork.loginScene()` | `YES` | `MANDATORY` | Customize network auth parameters or reconnection policies. |
| **`setUpGame()`** | Inits socket network packet router | `YES` | `MANDATORY` | Attach custom packet interceptors or dev cheat overlays. |
| **`onDestroy()`** | Calls `clearGameDependencies(gameId)` | `YES` | `MANDATORY` | Free custom services and release singleton listeners. |
