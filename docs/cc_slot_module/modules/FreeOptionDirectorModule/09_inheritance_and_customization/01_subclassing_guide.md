---
id: "cc_slot_module:FreeOptionDirectorModule:customization:subclassing_guide"
title: "FreeOptionDirectorModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeOptionDirectorModule Subclassing & Customization Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeOptionDirectorModule } from "../../../GameMode/FreeOption/FreeOptionDirectorModule";
const { ccclass } = _decorator;

@ccclass("FreeOptionDirector9666")
export class FreeOptionDirector9666 extends FreeOptionDirectorModule {
    // Custom option animation hooks
}
```

---

## 2. Invariant Subclassing Rules

1. **Always stop countdown timer**: When overriding `optionClick()`, ensure `this.stopCountDown()` executes.
2. **Synchronous Button Disabling**: Disable buttons immediately to avoid duplicate network payloads.
