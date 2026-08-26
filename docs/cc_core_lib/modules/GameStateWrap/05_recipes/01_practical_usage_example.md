---
id: "cc_core_lib:GameStateWrap:recipes:usage"
title: "Recipe: Practical GameStateWrap Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameStateWrap` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameStateWrap } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameStateWrap) {
            this._instance = new GameStateWrap();
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
