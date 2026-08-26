---
id: "cc_core_lib:BonusGameData:recipes:usage"
title: "Recipe: Practical BonusGameData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BonusGameData", "bonus_game_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BonusGameData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BonusGameData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BonusGameData) {
            this._instance = new BonusGameData();
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
