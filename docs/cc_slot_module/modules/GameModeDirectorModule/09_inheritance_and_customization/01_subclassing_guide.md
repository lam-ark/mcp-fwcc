---
id: "cc_slot_module:GameModeDirectorModule:customization:subclassing_guide"
title: "GameModeDirectorModule Subclassing & Customization Master Guide"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "customization", "subclassing", "NormalGame", "FreeGame", "BonusGame"]
---

# 🏗️ GameModeDirectorModule Subclassing & Customization Master Guide

## 1. Class Inheritance Declaration

`GameModeDirectorModule` is designed to be subclassed by every concrete game mode director in your slot title:

```typescript
const { _decorator } = cc;
import { GameModeDirectorModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";
import CustomGameWriterModule from "./CustomGameWriterModule";
const { ccclass, property } = _decorator;

@ccclass("NormalGameDirectorModule9666")
export default class NormalGameDirectorModule9666 extends GameModeDirectorModule {
    // Game-specific visual nodes
    @property(cc.Node)
    dragonTransitionSpine: cc.Node = null;

    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(CustomGameWriterModule);
        this.init();
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Call `super.onExtendedLoad()`**: `GameModeDirectorModule.onExtendedLoad()` initializes event listeners for `GAME_INIT`, `GAME_ENTER`, spin buttons, and Free Spin counters, then executes `this.setupModules()`.
2. **Assign `this.node["director"]` and `this.node["writer"]` Before `this.init()`**: `BaseGameDirector.init()` expects these two properties to instantiate `ScriptExecutor`.
3. **Respect `isResume` in Transitions**: When reconnecting into an active session (`this.dataStore.playSession.isResume === true`), bypass intro dialogue animations to provide immediate gameplay resumption.
4. **Clean up Timers in `onDestroy()`**: Always call `super.onDestroy()` to clean up the private `GameModuleEvent` bus and tween delays.
