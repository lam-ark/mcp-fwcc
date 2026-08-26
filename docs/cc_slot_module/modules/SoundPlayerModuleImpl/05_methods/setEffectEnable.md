---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:setEffectEnable"
title: "SoundPlayerModuleImpl.setEffectEnable Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "setEffectEnable"]
---

# 📖 `SoundPlayerModuleImpl.setEffectEnable()`

---

## 1. Complete Source Code Implementation

```typescript
setEffectEnable(enable: boolean): void {
    this.isEnableSFX = enable;
    sys.localStorage.setItem(this.storageKeySFX, this.isEnableSFX.toString());
    if (this.isEnableSFX) {
        this.unmuteAllEffects();
    } else {
        this.muteAllEffects();
    }

    if (cc.director) {
        cc.director.emit("UPDATE_SFX_SETTING", enable);
    }
}
```
