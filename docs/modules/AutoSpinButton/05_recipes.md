# AutoSpinButton: Recipes & Real-World Usage

---

## Recipe 1: Customizing Auto-Spin Button with Spine Hover Effects
```typescript
import { AutoSpinButton } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CustomAutoSpinButton extends AutoSpinButton {
    @property(sp.Skeleton)
    glowSpine: sp.Skeleton = null!;

    override setEnableButton(isEnable: boolean): void {
        super.setEnableButton(isEnable);
        if (this.glowSpine) {
            this.glowSpine.node.active = isEnable;
        }
    }
}
```
