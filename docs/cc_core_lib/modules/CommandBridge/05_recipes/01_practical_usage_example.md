---
id: "cc_core_lib:CommandBridge:recipes:usage"
title: "Recipe: Practical CommandBridge Integration in Slot Games"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CommandBridge` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CommandBridge } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CommandBridge) {
            this._instance = new CommandBridge();
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
