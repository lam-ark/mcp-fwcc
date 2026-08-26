---
id: "cc_core_lib:FreeGameWriter:recipes:usage"
title: "Recipe: Practical FreeGameWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeGameWriter", "free_game_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeGameWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeGameWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeGameWriter) {
            this._instance = new FreeGameWriter();
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
