---
id: "cc_slot_module:SlotSoundPlayerModule:customization:subclassing_guide"
title: "SlotSoundPlayerModule Subclassing & Audio Integration Guide"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "customization", "subclassing", "audio", "musicList", "sfxList"]
---

# 🏗️ SlotSoundPlayerModule Subclassing & Audio Integration Guide

## 1. Class Inheritance & Scene Node Anchor

When building a new slot game (e.g. Red Cliff `g9666L`), inherit from `SlotSoundPlayerModule` and attach it to **`Canvas/Director/SlotSound`**:

```typescript
const { _decorator } = cc;
import { SlotSoundPlayerModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("SlotSoundPlayerModule9666")
export class SlotSoundPlayerModule9666 extends SlotSoundPlayerModule {
    // Custom audio extensions
}
```

---

## 2. Audio Database Population Pattern
`SlotSoundPlayerModule` relies on two serialized arrays in the Cocos Inspector:
1. **`musicList`**: Assign `BGM_MAIN`, `BGM_FREE`, `BGM_BONUS` audio clips.
2. **`sfxList`**: Assign all sound effect clips (`BTN_SPIN`, `REEL_STOP_1`..`5`, `WIN_LEVEL_1`..`4`, `JACKPOT_WIN`).

---

## 3. Subclassing Override Guardrails
1. **Never bypass `super.onLoad()`**: `SoundPlayerModuleImpl.onLoad()` initializes the Howler/Cocos sound driver bridge and mobile user gesture listeners.
2. **Preserve Sound IDs**: Ensure standard SDK sound token names (`BGM_MAIN`, `BGM_FREE`, `BTN_GENERAL`) remain consistent so base components can trigger them automatically.
