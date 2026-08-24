---
id: "cc_slot_module:TurboButton:methods:setupObserver"
title: "TurboButton.setupObserver Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `TurboButton.setupObserver()`

---

## 1. Method Overview & Signature

Subscribes to `active`, `interactable`, and `state` on `TurboButtonData`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.turboModel, "active", this.onTurboActive.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.turboModel, "interactable", this.onTurboEnable.bind(this), this);
    this.observer.watch(this.turboModel, "state", this.onChangeState.bind(this), this);
}
```
