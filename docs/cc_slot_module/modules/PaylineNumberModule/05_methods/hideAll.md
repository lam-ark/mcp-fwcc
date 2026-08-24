---
id: "cc_slot_module:PaylineNumberModule:methods:hideAll"
title: "PaylineNumberModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "hideAll"]
---

# 📖 `PaylineNumberModule.hideAll()`

---

## 1. Method Overview & Signature

Hides/dims all line number items across both table gutters.

```typescript
protected hideAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hideAll(): void {
    this.numbers.forEach(item => {
        item.hide();
    });
}
```
