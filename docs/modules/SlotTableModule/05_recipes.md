# SlotTableModule: Recipes & Real-World Usage

---

## Recipe 1: Customizing Stop Bounce Curve in Red Cliff Slot
```typescript
import { SlotTableModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class SlotTableModule9666 extends SlotTableModule {
    override stopTable(matrix: string[][], callback: Function): void {
        // Custom near-win sound trigger before base stop
        super.stopTable(matrix, callback);
    }
}
```
