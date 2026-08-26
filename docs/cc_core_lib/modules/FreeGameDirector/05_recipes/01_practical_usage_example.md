---
id: "cc_core_lib:FreeGameDirector:recipes:usage"
title: "Recipe: Practical FreeGameDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeGameDirector", "free_game_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeGameDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeGameDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeGameDirector) {
            this._instance = new FreeGameDirector();
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
