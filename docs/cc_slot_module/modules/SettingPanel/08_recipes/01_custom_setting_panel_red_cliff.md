---
id: "cc_slot_module:SettingPanel:recipes:01_custom_setting_panel_red_cliff"
title: "Custom Setting Panel in Red Cliff"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Setting Panel in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { SettingPanel } from 'assets/cc-common/cc-slot-module/Popup/Setting/SettingPanel';

@ccclass('SettingPanel9666')
export class SettingPanel9666 extends SettingPanel {
    @property(cc.Toggle)
    turboToggle: cc.Toggle = null;

    onTurboToggle(): void {
        if (this.soundPlayer && this.initialized) {
            this.soundPlayer.playSFXClick();
            this.gameLogic.emit('TOGGLE_TURBO_MODE');
        }
    }
}
```
