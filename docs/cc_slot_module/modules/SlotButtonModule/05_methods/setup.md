---
id: "cc_slot_module:SlotButtonModule:methods:setup"
title: "SlotButtonModule.setup Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "setup"]
---

# 📖 `SlotButtonModule.setup()`

---

## 1. Method Overview & Signature

Resolves touch node references, locates the data model in `GameLogic`, and initializes reactive observers.

```typescript
public setup(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setup(): void {
    this.touchNode = this.spinButtonTouch || this.display;
    this.buttonModel = this.gameLogic.getDataModel()[this.modelName];
    this.setupObserver();
}
```
