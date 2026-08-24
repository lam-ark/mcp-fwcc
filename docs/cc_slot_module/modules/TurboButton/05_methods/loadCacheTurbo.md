---
id: "cc_slot_module:TurboButton:methods:loadCacheTurbo"
title: "TurboButton.loadCacheTurbo Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "loadCacheTurbo"]
---

# 📖 `TurboButton.loadCacheTurbo()`

---

## 1. Method Overview & Signature

Synchronizes active turbo state from data model into `SlotGameSettings` and updates visual display.

```typescript
public loadCacheTurbo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
loadCacheTurbo(): void {
    const active = this.turboModel.active;
    this.gameSettings.isTurboActive = active;
    this.display.emit("ON_TURBO_ACTIVE", active);
}
```
