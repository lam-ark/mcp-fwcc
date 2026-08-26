---
id: "cc_core_lib:SlotGameDirector:recipes:usage"
title: "Recipe: Practical SlotGameDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["SlotGameDirector", "slot_game_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotGameDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SlotGameDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SlotGameDirector) {
            this._instance = new SlotGameDirector();
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
