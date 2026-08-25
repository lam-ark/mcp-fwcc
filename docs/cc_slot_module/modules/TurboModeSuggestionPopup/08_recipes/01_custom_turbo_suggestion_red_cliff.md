---
id: "cc_slot_module:TurboModeSuggestionPopup:recipes:01_custom_turbo_suggestion_red_cliff"
title: "Custom Turbo Suggestion in Red Cliff"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Turbo Suggestion in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { TurboModeSuggestionPopup } from 'assets/cc-common/cc-slot-module/BasePortrait/TurboModeSuggestionPopup/TurboModeSuggestionPopup';

@ccclass('TurboModeSuggestionPopup9666')
export class TurboModeSuggestionPopup9666 extends TurboModeSuggestionPopup {
    onConfirm(): void {
        super.onConfirm();
    }
}
```
