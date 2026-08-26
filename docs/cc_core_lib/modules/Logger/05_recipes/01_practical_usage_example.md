---
id: "cc_core_lib:Logger:recipes:usage"
title: "Recipe: Practical Logger Integration in Slot Games"
category: "cc_core_lib"
tags: ["Logger", "logger", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `Logger` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { Logger } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (Logger) {
            this._instance = new Logger();
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
