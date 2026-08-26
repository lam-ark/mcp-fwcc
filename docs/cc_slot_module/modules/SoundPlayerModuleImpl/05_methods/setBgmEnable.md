---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:setBgmEnable"
title: "SoundPlayerModuleImpl.setBgmEnable Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "setBgmEnable"]
---

# 📖 `SoundPlayerModuleImpl.setBgmEnable()`

---

## 1. Complete Source Code Implementation

```typescript
setBgmEnable(enable: boolean): void {
    this.isEnableBGM = enable;
    sys.localStorage.setItem(this.storageKeyBGM, this.isEnableBGM.toString());

    if (this.enableMusicFunc) {
        clearTimeout(this.enableMusicFunc);
    }
    this.enableMusicFunc = setTimeout(() => {
        if (this.isEnableBGM) {
            this.unmuteMusic();
        } else {
            this.muteMusic();
        }
        this.enableMusicFunc = null;
    }, 100);
}
```
