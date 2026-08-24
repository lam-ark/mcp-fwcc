---
id: "cc_slot_module:PaylineLineModule:methods:blinkAllPayLines"
title: "PaylineLineModule.blinkAllPayLines Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "blinkAllPayLines"]
---

# 📖 `PaylineLineModule.blinkAllPayLines()`

---

## 1. Method Overview & Signature

Stage 1 handler rendering all hit line tracks simultaneously without hiding previously shown lines.

```typescript
protected blinkAllPayLines(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected blinkAllPayLines(): void {
    this.clearAll();
    this.payLines.forEach(payLine => {
        this.showPayLine(payLine, false);
    });
}
```
