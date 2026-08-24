---
id: "cc_slot_module:TurboButton:methods:onTurboActive"
title: "TurboButton.onTurboActive Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboActive"]
---

# 📖 `TurboButton.onTurboActive()`

---

## 1. Method Overview & Signature

Synchronizes `SlotGameSettings.isTurboActive` and emits `ON_TURBO_ACTIVE` to the `display` node.

```typescript
public onTurboActive(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboActive(active: boolean): void {
    this.gameSettings.isTurboActive = active;
    this.display.emit("ON_TURBO_ACTIVE", active);
}
```
