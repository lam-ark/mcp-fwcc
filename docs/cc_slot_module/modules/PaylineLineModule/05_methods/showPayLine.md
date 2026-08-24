---
id: "cc_slot_module:PaylineLineModule:methods:showPayLine"
title: "PaylineLineModule.showPayLine Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "showPayLine"]
---

# 📖 `PaylineLineModule.showPayLine()`

---

## 1. Method Overview & Signature

Displays an individual payline by its `payLineID`.

```typescript
protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void {
    if (hideAll) {
        this.hideAll();
    }

    if (!payLine.payLineID) {
        return;
    }

    this.showLineNumber(payLine.payLineID);
}
```
