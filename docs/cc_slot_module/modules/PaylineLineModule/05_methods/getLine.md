---
id: "cc_slot_module:PaylineLineModule:methods:getLine"
title: "PaylineLineModule.getLine Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "getLine"]
---

# 📖 `PaylineLineModule.getLine()`

---

## 1. Method Overview & Signature

Retrieves an available node from `linePool` or instantiates a fresh clone of `template`.

```typescript
protected getLine(): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
protected getLine(): cc.Node {
    if (this.linePool.size() > 0) {
        return this.linePool.get();
    }
    return instantiate(this.template);
}
```
