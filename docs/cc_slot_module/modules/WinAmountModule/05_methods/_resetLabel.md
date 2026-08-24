---
id: "cc_slot_module:WinAmountModule:methods:resetLabel"
title: "WinAmountModule._resetLabel Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "_resetLabel"]
---

# 📖 `WinAmountModule._resetLabel()`

---

## 1. Method Overview & Signature

Stops running tweens and restores label opacity to 255.

```typescript
private _resetLabel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
_resetLabel(): void {
    this.stopTweenFade();
    this.stopTweenValue();
    setOpacity(this.labelWinAmount.node, 255);
    (this.node as any).isFading = false;
}
```
