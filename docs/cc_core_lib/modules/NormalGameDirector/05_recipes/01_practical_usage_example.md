---
id: "cc_core_lib:NormalGameDirector:recipes:usage"
title: "Recipe: Practical NormalGameDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["NormalGameDirector", "normal_game_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NormalGameDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { NormalGameDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (NormalGameDirector) {
            this._instance = new NormalGameDirector();
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
