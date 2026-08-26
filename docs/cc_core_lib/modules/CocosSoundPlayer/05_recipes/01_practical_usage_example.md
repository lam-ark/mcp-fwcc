---
id: "cc_core_lib:CocosSoundPlayer:recipes:usage"
title: "Recipe: Practical CocosSoundPlayer Integration in Slot Games"
category: "cc_core_lib"
tags: ["CocosSoundPlayer", "cocos_sound_player", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CocosSoundPlayer` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CocosSoundPlayer } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CocosSoundPlayer) {
            this._instance = new CocosSoundPlayer();
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
