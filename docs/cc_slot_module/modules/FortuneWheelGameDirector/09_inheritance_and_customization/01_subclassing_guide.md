---
id: "cc_slot_module:FortuneWheelGameDirector:customization:subclassing_guide"
title: "FortuneWheelGameDirector Subclassing & Custom Wheel Guide"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "customization", "subclassing", "wheel_physics"]
---

# 🏗️ FortuneWheelGameDirector Subclassing & Custom Wheel Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FortuneWheelGameDirector } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("CustomFortuneWheelGameDirector")
export default class CustomFortuneWheelGameDirector extends FortuneWheelGameDirector {
    // Custom wheel physics hooks
}
```

---

## 2. Invariant Subclassing Rules

1. **Emit `STOP_SPIN_WHEEL` on Result**: Always provide the resolved `bonusValue` to allow `FortuneWheelModule` to compute the target resting angle.
2. **Support Fast Stop**: Provide `_fastStopWheel()` hook so players can quick-skip wheel spin animations.
