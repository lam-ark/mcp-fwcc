# BaseGameDirector: Recipes & Real-World Usage

---

## Recipe 1: Implementing a Respin Cascade Sequence in Normal Game
```typescript
import { BaseGameDirector } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class NormalGameDirectorModule9666 extends BaseGameDirector {
    async _showStartRespinEffect(): Promise<void> {
        if (this.dataStore.playSession.payLines) {
            this._blinkAllPaylines();
            await this.delayAction(2);
            await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT");
            await this.eventManager.emit("COMMIT_RESPIN_WIN_AMOUNT");
            await this._clearPaylines();
        }
    }
}
```
