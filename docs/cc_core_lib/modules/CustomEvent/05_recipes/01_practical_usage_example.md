---
id: "cc_core_lib:CustomEvent:recipes:usage"
title: "Recipe: Practical CustomEvent Integration in Slot Games"
category: "cc_core_lib"
tags: ["CustomEvent", "custom_event", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CustomEvent` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CustomEvent } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CustomEvent) {
            this._instance = new CustomEvent();
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
