---
id: "cc_slot_module:WinAmountTooltipModule:recipes:01_custom_feature_banners_red_cliff"
title: "Custom Feature Banners in Red Cliff"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Feature Banners in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { WinAmountTooltipModule } from 'assets/cc-common/cc-slot-module/BasePortrait/WinAmountTooltip/WinAmountTooltipModule';

@ccclass('WinAmountTooltipModule9666')
export class WinAmountTooltipModule9666 extends WinAmountTooltipModule {
    showWinAmount(payload: any): void {
        super.showWinAmount(payload);
    }
}
```
