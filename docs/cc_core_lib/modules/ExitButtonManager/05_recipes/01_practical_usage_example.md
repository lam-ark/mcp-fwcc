---
id: "cc_core_lib:ExitButtonManager:recipes:usage"
title: "Recipe: Practical ExitButtonManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["ExitButtonManager", "exit_button_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `ExitButtonManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { ExitButtonManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (ExitButtonManager) {
            this._instance = new ExitButtonManager();
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
