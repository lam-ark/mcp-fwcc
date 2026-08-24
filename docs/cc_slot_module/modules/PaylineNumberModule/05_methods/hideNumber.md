---
id: "cc_slot_module:PaylineNumberModule:methods:hideNumber"
title: "PaylineNumberModule.hideNumber Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "hideNumber"]
---

# 📖 `PaylineNumberModule.hideNumber()`

---

## 1. Method Overview & Signature

Looks up badge instances mapped to `paylineID` and calls `item.hide()`.

```typescript
protected hideNumber(paylineID: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hideNumber(paylineID: string): void {
    const items = this.mapNumberToItem.get(paylineID);
    items && items.forEach(item => {
        item.hide();
    });
}
```
