---
id: "cc_core_lib:BaseWriter:recipes:usage"
title: "Recipe: Practical BaseWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["BaseWriter", "base_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BaseWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BaseWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BaseWriter) {
            this._instance = new BaseWriter();
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
