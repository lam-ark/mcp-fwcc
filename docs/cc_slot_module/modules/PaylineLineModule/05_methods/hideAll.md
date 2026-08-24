---
id: "cc_slot_module:PaylineLineModule:methods:hideAll"
title: "PaylineLineModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "hideAll"]
---

# 📖 `PaylineLineModule.hideAll()`

---

## 1. Method Overview & Signature

Emits `"HIDE"` across all instantiated line nodes.

```typescript
protected hideAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hideAll(): void {
    this.lines.forEach(line => {
        line.emit("HIDE");
    });
}
```
