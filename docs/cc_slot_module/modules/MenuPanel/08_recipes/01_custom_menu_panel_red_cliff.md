---
id: "cc_slot_module:MenuPanel:recipes:01_custom_menu_panel_red_cliff"
title: "Custom Menu Panel in Red Cliff"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Menu Panel in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { MenuPanel } from 'assets/cc-common/cc-slot-module/BasePortrait/MenuPanel/MenuPanel';

@ccclass('MenuPanel9666')
export class MenuPanel9666 extends MenuPanel {
    onShowLanguageSelector(): void {
        this.playSfxClick();
        this.gameLogic.emit('OPEN_LANGUAGE_POPUP');
    }
}
```
