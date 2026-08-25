---
id: "cc_slot_module:DialogMessageModule:recipes:01_custom_dialog_theme_red_cliff"
title: "Custom Dialog Theme in Red Cliff"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Dialog Theme in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { DialogMessageModule } from 'assets/cc-common/cc-slot-module/DialogMessage/DialogMessageModule';

@ccclass('DialogMessageModule9666')
export class DialogMessageModule9666 extends DialogMessageModule {
    @property(cc.Node)
    dragonBorder: cc.Node = null;

    showDialog(active: boolean): void {
        super.showDialog(active);
        if (this.dragonBorder) {
            this.dragonBorder.active = active;
        }
    }
}
```
