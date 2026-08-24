---
id: "cc_slot_module:PaylineNumberModule:methods:onLoadExtend"
title: "PaylineNumberModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `PaylineNumberModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes the number mapping dictionary by scanning children of all registered container nodes.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.numbers = [];
    this.container.forEach(child => {
        this.numbers.push(...child.getComponentsInChildren(PaylineNumberItem));
    });
    this.numbers.forEach(item => {
        const list = this.mapNumberToItem.get(item.numberID) || [];
        list.push(item);
        this.mapNumberToItem.set(item.numberID, list);
    });
    this.hideAll();
}
```
