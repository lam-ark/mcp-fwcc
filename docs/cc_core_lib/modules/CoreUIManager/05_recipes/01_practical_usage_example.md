---
id: "cc_core_lib:CoreUIManager:recipes:usage"
title: "Recipe: Practical CoreUIManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["CoreUIManager", "core_uimanager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CoreUIManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CoreUIManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CoreUIManager) {
            this._instance = new CoreUIManager();
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
