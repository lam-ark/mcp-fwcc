---
id: "SlotSymbolManager:recipes"
title: "SlotSymbolManager Recipes & Real-world Usage"
category: "cc_slot_module"
tags: ["recipes", "examples", "subclassing", "red_cliff", "sticky_wild"]
methods: ["initSymbolPool", "getSymbol", "removeSymbol"]
---

# SlotSymbolManager: Practical Recipes & Real-world Usage

---

## Recipe 1: Game Subclassing & Custom Symbols (`SlotSymbolManager9666.ts`)

In specific slot titles (such as Red Cliff Slot), extend `SlotSymbolManager` to customize game-specific symbols:

```typescript
import { SlotSymbolManager } from "../../../cc-common/cc-slot-module/SlotModuleExport";
import { SymbolIndexType } from "../../../cc-common/cc-slot-module/Components/Common/SlotEnum";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotSymbolManager9666 extends SlotSymbolManager {
    @property(cc.Prefab)
    expandWildPrefab: cc.Prefab = null!;

    /** Override initialization to prepare title-specific assets */
    override initSymbolPool(): void {
        super.initSymbolPool();
    }

    /** Spawns a full-column expanding Wild */
    createExpandedWild(columnIndex: number): cc.Node {
        const wildNode = this.getSymbol("ExpandWildFeature", "W_EXPAND");
        wildNode.setPosition(columnIndex * 150, 0);
        return wildNode;
    }
}
```

---

## Recipe 2: Creating a Sticky Wild Protected from Respin Resets

```typescript
// When a Wild transforms into a Sticky Wild:
const symbolModule = this.symbolManager.getSymbolModule(wildNode);
symbolModule.setIndex(SymbolIndexType.STICKY);

// When the table resets for the next respin:
this.symbolManager.removeAllSymbols(); 
// -> Wild with index STICKY remains intact on the reel!
```
