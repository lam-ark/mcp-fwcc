---
id: "cc_slot_module:PaylineLineModule:methods:setupPaylines"
title: "PaylineLineModule.setupPaylines Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "setupPaylines"]
---

# 📖 `PaylineLineModule.setupPaylines()`

---

## 1. Method Overview & Signature

Stores the parsed `payLines` payload sent via `PAYLINE_SET_DATA`.

```typescript
protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
    this.payLines = data.payLines;
}
```
