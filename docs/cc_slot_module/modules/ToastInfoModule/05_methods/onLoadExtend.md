---
id: "cc_slot_module:ToastInfoModule:methods:onLoadExtend"
title: "ToastInfoModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `ToastInfoModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Registers listener for `NETWORK_WARNING` on `GameLogic` and sets initial node visibility to false.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.gameLogic.on("NETWORK_WARNING", this.showMessage, this);
    this.node.active = false;
}
```
