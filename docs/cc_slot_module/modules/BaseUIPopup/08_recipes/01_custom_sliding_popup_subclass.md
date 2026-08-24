---
id: "cc_slot_module:BaseUIPopup:recipes:custom_sliding_popup_subclass"
title: "Recipe: Implementing a Sliding Drawer Modal Subclass"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "recipes", "subclass_example"]
---

# 💡 Recipe: Implementing a Sliding Drawer Modal Subclass

---

## 1. Subclass Definition

```typescript
const { ccclass, property } = cc._decorator;
import { BaseUIPopup } from "cc-common/cc-slot-module/Popup/BaseUIPopup";
import { SlidePopupBehavior } from "cc-common/cc-slot-module/Popup/Behavior/SlidePopupBehavior";

@ccclass
export class CustomSlideDrawer extends BaseUIPopup {
    onLoadExtend(): void {
        this.popupBehavior = this.node.getComponent(SlidePopupBehavior);
        if (!this.popupBehavior) {
            this.popupBehavior = this.node.addComponent(SlidePopupBehavior);
        }
        super.onLoadExtend();
    }
}
```
