---
id: "cc_core_lib:NormalGameWriter:recipes:usage"
title: "Recipe: Practical NormalGameWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["NormalGameWriter", "normal_game_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NormalGameWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { NormalGameWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (NormalGameWriter) {
            this._instance = new NormalGameWriter();
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
