---
id: "cc_slot_module:PortraitBetModule:gotchas:01_inverted_active_logic_gotcha"
title: "Inverted Active Logic Gotcha"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "gotchas", "active_logic"]
---

# ⚠️ Inverted Active Logic Gotcha

---

## 1. Defect & Solution

Note that `this.minBetBtn.node.active = !minBetEnable` means the button is visible *only when the bet can still be decreased*:

```typescript
onMinBetEnable(minBetEnable: boolean): void {
    super.onMinBetEnable(minBetEnable);
    this.minBetBtn.node.active = !minBetEnable;
}
```
