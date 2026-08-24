---
id: "cc_slot_module:SlotTablePaylineModule:recipes:custom_payline_emitter_events_recipe"
title: "Recipe: Binding Custom Particle Emitters to payLineEmitter"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "recipes", "payLineEmitter", "particles"]
---

# 💡 Recipe: Binding Custom Particle Emitters to `payLineEmitter`

---

## 1. Context & Use Case

To display celebratory gold coins or lightning sparks along the winning payline path, create a custom component extending `BasePaylineComponent` and hook into `payLineEmitter`.

---

## 2. Implementation Component

```typescript
const { ccclass, property } = cc._decorator;
import { BasePaylineComponent } from "BasePaylineComponent";
import { PaylineEventTypes } from "PaylineTypes";

@ccclass
export class PaylineParticleVFXModule extends BasePaylineComponent {
    @property(cc.ParticleSystem) winParticles: cc.ParticleSystem = null;

    init(params: any): void {
        super.init(params);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.onSetData, this);
        this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_ITEM, this.onShowItem, this);
    }

    private onSetData(data: any): void {
        if (data.winSymbols && data.winSymbols.length > 0 && this.winParticles) {
            this.winParticles.resetSystem();
        }
    }

    private onShowItem(item: any): void {
        // Position particle emitter along line coordinates
    }
}
```
