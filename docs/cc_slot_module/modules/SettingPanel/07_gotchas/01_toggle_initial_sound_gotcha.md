---
id: "cc_slot_module:SettingPanel:gotchas:01_toggle_initial_sound_gotcha"
title: "Toggle Initial Sound Gotcha"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "gotchas", "audio_glitch"]
---

# ⚠️ Toggle Initial Sound Gotcha

---

## 1. Defect & Workaround

Setting `this.bgmToggle.isChecked` during startup can trigger Cocos toggle event callbacks, creating audio clicks during loading. Guard click handlers using `this.initialized`:

```typescript
onBgmToggle(): void {
    if (this.soundPlayer && this.initialized) {
        this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
        this.soundPlayer.playSFXClick();
    }
}
```
