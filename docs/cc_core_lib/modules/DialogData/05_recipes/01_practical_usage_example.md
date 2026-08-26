---
id: "cc_core_lib:DialogData:recipes:usage"
title: "Recipe: Practical DialogData Integration in Slot Games"
category: "cc_core_lib"
tags: ["DialogData", "dialog_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `DialogData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { DialogData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (DialogData) {
            this._instance = new DialogData();
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
