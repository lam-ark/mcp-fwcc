---
id: "cc_slot_module:FreeOptionDirectorModule:customization:subclassing_guide"
title: "FreeOptionDirectorModule Subclassing & Custom Options Guide"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeOptionDirectorModule Subclassing & Custom Options Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeOptionDirectorModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("FreeOptionDirectorModule9666")
export default class FreeOptionDirectorModule9666 extends FreeOptionDirectorModule {
    // Custom option animations
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Disable Buttons on Click**: Call `option.optionNode.getComponent(Button).interactable = false` immediately upon selection.
2. **Stop Countdown Tween in `onDestroy()`**: Ensures no timer leak occurs if the player closes or reloads during the choice screen.
