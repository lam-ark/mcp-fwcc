---
id: "cc_slot_module:SlotTableModule:customization:subclassing_guide"
title: "SlotTableModule Subclassing & Matrix Customization Guide"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotTableModule Subclassing & Matrix Customization Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { SlotTableModule, SlotSymbolModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("SlotTableModule9666")
export default class SlotTableModule9666 extends SlotTableModule {
    protected override onReelStopExtend(reelIndex: number): void {
        super.onReelStopExtend(reelIndex);
        // Custom column landing shake / particle effect
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Do Not Block `onReelStop()`**: Always ensure `super.onReelStop(reelIndex)` or internal callback executes to allow `_tableStopCB` to resolve.
2. **Synchronize Symbol Pools**: Ensure `this.symbolManager` has its game configuration injected before reel column instantiation.
