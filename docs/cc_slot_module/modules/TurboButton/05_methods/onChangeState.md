---
id: "cc_slot_module:TurboButton:methods:onChangeState"
title: "TurboButton.onChangeState Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onChangeState"]
---

# 📖 `TurboButton.onChangeState()`

---

## 1. Method Overview & Signature

Dispatches `TURBO_BUTTON_STATE_CHANGE` to the `display` node.

```typescript
public onChangeState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeState(state): void {
    this.display.emit("TURBO_BUTTON_STATE_CHANGE", state);
}
```
