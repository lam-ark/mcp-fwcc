---
id: "cc_core_lib:BonusGameWriter:recipes:usage"
title: "Recipe: Practical BonusGameWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BonusGameWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BonusGameWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BonusGameWriter) {
            this._instance = new BonusGameWriter();
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
