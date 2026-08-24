---
id: "cc_slot_module:PaylineNumberModule:methods:setupPaylines"
title: "PaylineNumberModule.setupPaylines Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "setupPaylines"]
---

# 📖 `PaylineNumberModule.setupPaylines()`

---

## 1. Method Overview & Signature

Saves the winning paylines list.

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
