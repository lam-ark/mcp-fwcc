---
id: "cc_slot_module:GameDirector:customization:subclassing_guide"
title: "GameDirector Subclassing & Custom Dispatcher Guide"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "subclassing", "mode_dispatcher"]
---

# 🏗️ GameDirector Subclassing & Custom Dispatcher Guide

## 1. Class Inheritance Declaration

When extending the root `GameDirector` in a new slot title:

```typescript
const { _decorator } = cc;
import { GameDirector } from "../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameDirector9666")
export default class GameDirector9666 extends GameDirector {
    // Custom global mode transitions
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Call `super.onLoadExtend()` and `super.start()`**: Ensures game modes initialize and the default `NORMAL_GAME` activates.
2. **Never Break `currentModes` Stack Order**: Mode transitions rely on LIFO stack ordering to properly restore the prior mode on `onExitGameMode()`.
