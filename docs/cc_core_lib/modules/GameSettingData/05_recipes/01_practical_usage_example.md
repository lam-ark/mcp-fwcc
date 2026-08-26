---
id: "cc_core_lib:GameSettingData:recipes:usage"
title: "Recipe: Practical GameSettingData Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameSettingData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameSettingData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameSettingData) {
            this._instance = new GameSettingData();
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
