---
id: "cc_core_lib:DialogManager:recipes:usage"
title: "Recipe: Practical DialogManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["DialogManager", "dialog_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `DialogManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { DialogManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (DialogManager) {
            this._instance = new DialogManager();
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
