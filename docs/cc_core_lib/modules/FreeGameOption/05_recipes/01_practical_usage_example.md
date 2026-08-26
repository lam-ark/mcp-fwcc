---
id: "cc_core_lib:FreeGameOption:recipes:usage"
title: "Recipe: Practical FreeGameOption Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeGameOption", "free_game_option", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeGameOption` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeGameOption } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeGameOption) {
            this._instance = new FreeGameOption();
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
