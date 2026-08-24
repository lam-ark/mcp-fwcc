---
id: "cc_slot_module:SlotReelModule:customization:subclassing_guide"
title: "SlotReelModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "subclassing", "inheritance"]
---

# 🏗️ SlotReelModule Subclassing & Customization Guide

---

## 1. Extension Principles & Guardrails

When creating custom reel behaviors for new slot titles:
* 🛑 **NEVER modify `spinAction()` recursive structure directly** without preserving `recycleSymbol()` calls.
* 🛑 **ALWAYS invoke `super.playStopAnimation()`** or ensure `reelStopCB(this.reelIndex)` is called upon landing.
* 🟢 **OVERRIDE `customizeNewSymbol(symbol)`** to inject game-specific Spine overlays or trigger sound ticks.

---

## 2. Standard Subclassing Declaration

```typescript
const { _decorator } = cc;
import { SlotReelModule } from "cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule";
const { ccclass } = _decorator;

@ccclass("SlotReelModule9888")
export class SlotReelModule9888 extends SlotReelModule {
    // Custom game logic overrides
}
```
