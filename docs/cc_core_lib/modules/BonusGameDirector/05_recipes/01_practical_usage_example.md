---
id: "cc_core_lib:BonusGameDirector:recipes:usage"
title: "Recipe: Practical BonusGameDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["BonusGameDirector", "bonus_game_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BonusGameDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BonusGameDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BonusGameDirector) {
            this._instance = new BonusGameDirector();
        }
    }

    onDestroy() {
        // Safe cleanup
        if (this._instance && typeof this._instance.destroy === 'function') {
            this._instance.destroy();
        }
    }
}
```
