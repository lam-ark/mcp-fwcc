---
id: "cc_slot_module:SymbolPaytableViewer:recipes:01_custom_special_symbol_descriptions_red_cliff"
title: "Custom Special Symbol Descriptions in Red Cliff"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Special Symbol Descriptions in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { SymbolPaytableViewer } from 'assets/cc-common/cc-slot-module/BasePortrait/SymbolPaytable/SymbolPaytableViewer';

@ccclass('SymbolPaytableViewer9666')
export class SymbolPaytableViewer9666 extends SymbolPaytableViewer {
    showSymbolInfo(symbolData: any): void {
        super.showSymbolInfo(symbolData);
        // Custom feature audio trigger
        this.soundPlayer.playSFXClick();
    }
}
```
