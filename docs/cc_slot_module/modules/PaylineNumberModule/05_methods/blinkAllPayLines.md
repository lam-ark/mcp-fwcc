---
id: "cc_slot_module:PaylineNumberModule:methods:blinkAllPayLines"
title: "PaylineNumberModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 📖 `PaylineNumberModule.blinkAllPayLines()`

---

## 1. Method Overview & Signature

Stage 1 handler illuminating the line number badges for all winning lines.

```typescript
protected blinkAllPayLines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected blinkAllPayLines(): void {
    this.payLines.forEach(payline => {
        this.showNumber(payline.payLineID);
    });
}
```
