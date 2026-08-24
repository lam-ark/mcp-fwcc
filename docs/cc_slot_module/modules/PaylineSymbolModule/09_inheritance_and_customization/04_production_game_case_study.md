---
id: "cc_slot_module:PaylineSymbolModule:inheritance:production_game_case_study"
title: "PaylineSymbolModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 PaylineSymbolModule Production Case Study (Red Cliff `g9666L`)

---

## 1. Production Context

In Red Cliff (`g9666L`), Wild symbols expand with full-screen warrior spine animations when forming win combinations.

---

## 2. Production Subclass

```typescript
const { ccclass } = cc._decorator;
import { PaylineSymbolModule } from "PaylineSymbolModule";

@ccclass
export default class PaylineSymbolModule9666 extends PaylineSymbolModule {
    protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
        super.playSymbolAnimation(symbol, duration);
        if (symbol["symbolCode"] === "K") {
            symbol.scale = 1.1;
        }
    }

    protected clearAll(): void {
        for (const symbol of this.symbols) {
            symbol.scale = 1.0;
        }
        super.clearAll();
    }
}
```
