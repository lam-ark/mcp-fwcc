---
id: "cc_slot_module:SlotTableSoundEffectModule:inheritance:subclassing_guide"
title: "SlotTableSoundEffectModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTableSoundEffectModule Subclassing Guide

---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { SlotTableSoundEffectModule } from "SlotTableSoundEffectModule";

@ccclass
export default class SlotTableSoundEffectModule9666 extends SlotTableSoundEffectModule {
    // Custom audio behavior
}
```

---

## 2. Invariant Rules

1. **Retain Base Event Handlers**: Always invoke `super.onLoadExtend()` to keep `REEL_START_SOUND` and `REEL_STOP_SOUND` active.
2. **Audio Volume Normalization**: Rely on `SlotSoundPlayerModule` for master volume levels rather than hardcoding sound properties.
