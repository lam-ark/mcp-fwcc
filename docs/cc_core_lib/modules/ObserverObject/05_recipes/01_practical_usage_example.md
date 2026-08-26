---
id: "cc_core_lib:ObserverObject:recipes:usage"
title: "Recipe: Practical ObserverObject Integration in Slot Games"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `ObserverObject` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { ObserverObject } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (ObserverObject) {
            this._instance = new ObserverObject();
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
