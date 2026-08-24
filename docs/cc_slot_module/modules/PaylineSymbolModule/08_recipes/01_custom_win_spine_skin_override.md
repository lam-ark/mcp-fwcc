---
id: "cc_slot_module:PaylineSymbolModule:recipes:custom_win_spine_skin_override"
title: "Recipe: Dynamic Win Spine Skin Swapping"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "recipes", "spine", "skin"]
---

# 💡 Recipe: Dynamic Win Spine Skin Swapping

---

## 1. Context & Use Case

To display upgraded golden symbol visuals when the player hits 5-of-a-kind.

---

## 2. Implementation

```typescript
const { ccclass } = cc._decorator;
import { PaylineSymbolModule } from "PaylineSymbolModule";

@ccclass
export class GoldSkinPaylineSymbolModule extends PaylineSymbolModule {
    protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
        super.playSymbolAnimation(symbol, duration);
        const spine = symbol.getComponentInChildren(sp.Skeleton);
        if (spine && symbol["symbolCode"] === "K") {
            spine.setSkin("gold_win");
        }
    }
}
```
