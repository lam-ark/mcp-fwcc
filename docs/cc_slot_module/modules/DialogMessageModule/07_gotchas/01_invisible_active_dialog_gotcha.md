---
id: "cc_slot_module:DialogMessageModule:gotchas:01_invisible_active_dialog_gotcha"
title: "Invisible Active Dialog Gotcha"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "gotchas", "opacity_bug"]
---

# ⚠️ Invisible Active Dialog Gotcha

---

## 1. Defect & Solution

Always set opacity explicitly alongside node active state:

```typescript
showDialog(active: boolean): void {
    this.node.active = active;
    eno.setOpacity(this.node, active ? 255 : 0);
}
```
