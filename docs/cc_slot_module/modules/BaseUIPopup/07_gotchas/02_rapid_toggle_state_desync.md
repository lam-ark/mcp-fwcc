---
id: "cc_slot_module:BaseUIPopup:gotchas:rapid_toggle_state_desync"
title: "Gotcha: Mid-Animation Toggle Desynchronization"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "gotchas", "animation_desync"]
---

# ⚠️ Gotcha: Mid-Animation Toggle Desynchronization

---

## 1. Problem Description

Calling `togglePopup` rapidly during an active tween can cause `popupBehavior.isPlaying()` conflicts. Subclasses like `BetHistoryModule` guard buttons with:
```typescript
if (this.popupBehavior && this.popupBehavior.isPlaying()) {
    return;
}
```

---

## 2. Prevention

Always check `popupBehavior.isPlaying()` before triggering open/close operations.
