---
id: "cc_slot_module:GameInit:gotcha:early_inject_access_before_provide"
title: "Gotcha: Early @inject Access Before GameInit provide()"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "gotchas", "early_inject_access", "engine_defect", "null_pointer", "execution_order"]
---

# 🛑 Gotcha: Early `@inject` Access Before GameInit `provide()`

## 1. Symptom & Visual Defect
Upon game load, console crashes with:
```text
TypeError: Cannot read property 'on' of undefined
at CustomModule.onLoad (CustomModule.ts:12)
```

---

## 2. Root Cause & Cocos 2.4 Engine Quirk
In Cocos Creator 2.4, the order of `onLoad()` execution across multiple nodes in the scene graph is deterministic based on the scene hierarchy tree. If a custom component on another node runs its `onLoad()` before `GameInit.onLoad()` executes `eno.provide()`, the IoC container will return `undefined` for requested injected tokens.

---

## 3. Reproduction Steps
1. Place a component inheriting `SlotBaseModule` on a node higher in the scene graph than `Canvas/Director`.
2. Access `this.eventManager` inside property initializer or raw `onLoad()`.
3. Launch game ➔ crash occurs due to unprovided dependency.

---

## 4. Standard Code Solution & Fix
1. Ensure `GameInit` is mounted at `Canvas/Director`.
2. Subclasses must only access injected services in `onLoadExtend()` or `start()`, never in constructor or raw `onLoad()` without `super.onLoad()`.
