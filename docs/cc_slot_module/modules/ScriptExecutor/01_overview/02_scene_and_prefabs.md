---
id: "cc_slot_module:ScriptExecutor:overview:scene_and_prefabs"
title: "ScriptExecutor Instantiation & Director Binding"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "overview", "scene", "prefabs", "instantiation"]
---

# 🌳 ScriptExecutor Instantiation & Director Binding

## 1. Instantiation Context

`ScriptExecutor` is a pure TypeScript helper class (not a `cc.Component`). It is instantiated inside `BaseGameDirector.init()` on each game mode node:

```typescript
// BaseGameDirector.ts
this.executor = new ScriptExecutor(
    this.writer,
    this.director,
    this.gameLogic,
    this.dataStore,
    this.gameSettings,
    this.node.name
);
```

---

## 2. Injected Companion Bridges

| Parameter | Type | Source | Role in Executor |
| :--- | :--- | :--- | :--- |
| **`writer`** | `any` | `this.node["writer"]` | Pure script generator invoking `makeScript[ActionName](data)`. |
| **`director`** | `any` | `this.node["director"]` | Target instance holding concrete async command methods. |
| **`dataStore`** | `GameDataStore` | Injected via IoC | Reads `playSession` data and sets runtime game speed. |
| **`gameSettings`**| `SlotGameSettings` | Injected via IoC | Queries `isTurboActive`, `isFastToResult`, and updates speed tiers. |
| **`name`** | `string` | `this.node.name` | Logging prefix (e.g. `[NormalGame]`, `[FreeGame]`). |
