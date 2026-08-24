---
id: "cc_slot_module:PaylineNumberModule:methods:showNumber"
title: "PaylineNumberModule.showNumber Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "showNumber"]
---

# 📖 `PaylineNumberModule.showNumber()`

---

## 1. Method Overview & Signature

Looks up badge instances mapped to `paylineID` and calls `item.show()`.

```typescript
protected showNumber(paylineID: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showNumber(paylineID: string): void {
    const items = this.mapNumberToItem.get(paylineID);
    items && items.forEach(item => {
        item.show();
    });
}
```
