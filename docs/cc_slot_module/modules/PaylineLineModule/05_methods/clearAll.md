---
id: "cc_slot_module:PaylineLineModule:methods:clearAll"
title: "PaylineLineModule.clearAll Method"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "methods", "clearAll"]
---

# 📖 `PaylineLineModule.clearAll()`

---

## 1. Method Overview & Signature

Emits `"RESET"` on each active line and returns it cleanly to `linePool`.

```typescript
protected clearAll(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected clearAll(): void {
    this.lines.forEach(line => {
        line.emit("RESET");
        this.linePool.put(line);
    });
    this.lines.length = 0;
}
```
