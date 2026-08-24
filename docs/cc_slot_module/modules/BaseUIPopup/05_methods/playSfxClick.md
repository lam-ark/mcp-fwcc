---
id: "cc_slot_module:BaseUIPopup:methods:playSfxClick"
title: "BaseUIPopup.playSfxClick Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "playSfxClick"]
---

# 📖 `BaseUIPopup.playSfxClick()`

---

## 1. Method Overview & Signature

Triggers click sound via `soundPlayer.playSFXClick()` if the popup is open.

```typescript
public playSfxClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxClick(): void {
    if (this.isClose) {
        return;
    }
    this.soundPlayer && this.soundPlayer.playSFXClick();
}
```
