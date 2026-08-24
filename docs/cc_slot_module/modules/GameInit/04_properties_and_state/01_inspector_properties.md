---
id: "cc_slot_module:GameInit:properties:inspector_properties"
title: "GameInit Inspector @property Schema"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "properties", "inspector", "decorator"]
---

# 🎛️ GameInit Inspector `@property` Schema

## 1. Inspector Properties Reference Table

The following properties are exposed to the Cocos Creator 2.4 Inspector panel on the `Canvas/Director` node:

| Property Name | TypeScript Type | Default Value | When Set | Where Read | Impact If Misconfigured |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`isConsoleTest`** | `boolean` | `false` | Editor Scene Setup | `GameInit.setUpGame()` | If `true`, switches `_gameLogic` into console test mode allowing manual spin triggering without server. |
| **`isModuleTest`** | `boolean` | `false` | Editor Scene Setup | `GameInit.setupTest()` | If `true`, dynamically attaches `SetupModuleTest` component to execute automated unit tests. |

---

## 2. Code Declaration Excerpt

```typescript
@property
isConsoleTest: boolean = false;

@property
isModuleTest: boolean = false;
```
