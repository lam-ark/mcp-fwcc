---
id: "cc_core_lib:HowlerSoundPlayer:recipes:usage"
title: "Recipe: Practical HowlerSoundPlayer Integration in Slot Games"
category: "cc_core_lib"
tags: ["HowlerSoundPlayer", "howler_sound_player", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `HowlerSoundPlayer` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { HowlerSoundPlayer } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (HowlerSoundPlayer) {
            this._instance = new HowlerSoundPlayer();
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
