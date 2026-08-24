---
id: "cc_slot_module:PaylineNumberModule:methods:showPayLine"
title: "PaylineNumberModule.showPayLine Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "showPayLine"]
---

# 📖 `PaylineNumberModule.showPayLine()`

---

## 1. Method Overview & Signature

Stage 2 handler isolating a single payline number.

```typescript
protected showPayLine(payline: PayLineInfo): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayLine(payline: PayLineInfo): void {
    this.hideAll();
    this.showNumber(payline.payLineID);
}
```
