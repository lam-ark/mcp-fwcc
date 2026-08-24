---
id: "cc_slot_module:SlotGameSettings:overview:scene_and_prefabs"
title: "SlotGameSettings IoC Provider & Consumer Hierarchy"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "overview", "scene", "prefabs", "ioc", "inject"]
---

# 🌳 SlotGameSettings IoC Provider & Consumer Hierarchy

## 1. Provider Registration

`SlotGameSettings` is a pure TypeScript data class (not a `cc.Component`). It is instantiated during `GameInit.onLoad()` and registered to the container:

```typescript
// GameInit.ts
const gameSettings = new SlotGameSettings();
provide(SlotGameSettings, gameSettings, gameId);
```

---

## 2. Injected Consumers Across the Scene Graph

| Consumer Component | Node Path in Scene Graph | Injected Property | Purpose in Component |
| :--- | :--- | :--- | :--- |
| **`SlotButtonNormal`** | `Canvas/Director/UIManager/BottomBar/SpinBtn` | `@inject(SlotGameSettings) gameSettings` | Updates button visual state (`NORMAL`, `HOVER`, `SPINNING`, `DISABLE`) based on `currentGameState`. |
| **`TurboButton`** | `Canvas/Director/UIManager/BottomBar/TurboBtn` | `@inject(SlotGameSettings) gameSettings` | Toggles `isTurboActive` and changes speed between `NORMAL` and `TURBO`. |
| **`SlotTableModule`** | `Canvas/Director/Table` | `@inject(SlotGameSettings) gameSettings` | Checks `isTurboActive` to switch reel spin deceleration curves. |
| **`ScriptExecutor`** | Helper Class in Directors | `gameSettings` resolved via IoC | Modulates action step delays according to `gameSpeed`. |
| **`WalletModule`** | `Canvas/Director/UIManager/BottomBar/Wallet` | `@inject(SlotGameSettings) gameSettings` | Toggles display between real wallet and virtual trial credits based on `isTrialMode`. |
