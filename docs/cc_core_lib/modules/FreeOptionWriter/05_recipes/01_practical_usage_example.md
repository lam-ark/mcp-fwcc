---
id: "cc_core_lib:FreeOptionWriter:recipes:usage"
title: "Recipe: Practical FreeOptionWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeOptionWriter", "free_option_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeOptionWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeOptionWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeOptionWriter) {
            this._instance = new FreeOptionWriter();
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
