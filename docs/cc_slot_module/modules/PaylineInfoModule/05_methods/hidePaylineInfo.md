---
id: "cc_slot_module:PaylineInfoModule:methods:hidePaylineInfo"
title: "PaylineInfoModule.hidePaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "hidePaylineInfo"]
---

# 📖 `PaylineInfoModule.hidePaylineInfo()`

---

## 1. Method Overview & Signature

Deactivates payline info toast node.

```typescript
protected hidePaylineInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected hidePaylineInfo(): void {
    if (!this.shouldWorkInCurrentGameMode()) {
        return;
    }
    this.node.active = false;
}
```
