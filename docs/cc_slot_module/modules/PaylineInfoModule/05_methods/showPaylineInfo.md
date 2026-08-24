---
id: "cc_slot_module:PaylineInfoModule:methods:showPaylineInfo"
title: "PaylineInfoModule.showPaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "showPaylineInfo"]
---

# 📖 `PaylineInfoModule.showPaylineInfo()`

---

## 1. Method Overview & Signature

Activates node and renders payline metadata if authorized in current game mode.

```typescript
protected showPaylineInfo(data: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showPaylineInfo(data: any): void {
    if (!this.shouldWorkInCurrentGameMode()) {
        return;
    }
    this.node.active = true;
    this.setPaylineInfo(data);
}
```
