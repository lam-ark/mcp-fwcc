# SlotBaseModule: Recipes & Real-World Usage

---

## Recipe 1: Standard Subclassing Pattern
```typescript
import { SlotBaseModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";
import { GameDataStore } from "../../../cc-common/cc-slot-module/Core/GameDataStore";

const { ccclass } = cc._decorator;
const { inject } = eno;

@ccclass
export default class CustomGameModule extends SlotBaseModule {
    @inject(GameDataStore) dataStore: GameDataStore;

    override onLoadExtend(): void {
        console.log("Current Bet:", this.dataStore.playSession.betId);
    }

    override registerEvents(): void {
        this.eventManager.on("SPIN_START", this.onSpinStart, this);
    }

    private onSpinStart(): void {
        // Handle spin start logic
    }
}
```
