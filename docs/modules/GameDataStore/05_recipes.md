# GameDataStore: Recipes & Usage

---

## Recipe 1: Accessing DataStore in Custom Component
```typescript
import { GameDataStore } from "../../../cc-common/cc-slot-module/Core/GameDataStore";

const { inject } = eno;

export default class CustomUI extends cc.Component {
    @inject(GameDataStore) dataStore: GameDataStore;

    onLoad() {
        eno.applyInjections(this);
        console.log("Total Win:", this.dataStore.getWinAmountPS());
    }
}
```
