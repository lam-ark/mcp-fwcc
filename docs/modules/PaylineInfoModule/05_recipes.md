# PaylineInfoModule: Recipes & Real-World Usage

---

## Recipe 1: Subclassing with Floating Multiplier Spine Animation
```typescript
import { PaylineInfoModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CustomPaylineInfo extends PaylineInfoModule {
    @property(sp.Skeleton)
    combineSpine: sp.Skeleton = null!;

    playMultiplierAnimation(multiplier: number, onComplete: () => void): void {
        if (this.combineSpine) {
            this.combineSpine.setAnimation(0, "active_money", false);
            this.combineSpine.setCompleteListener(onComplete);
        }
    }
}
```
