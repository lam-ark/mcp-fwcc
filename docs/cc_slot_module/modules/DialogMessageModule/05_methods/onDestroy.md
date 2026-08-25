---
id: "cc_slot_module:DialogMessageModule:methods:onDestroy"
title: "DialogMessageModule.onDestroy Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `DialogMessageModule.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.observer.releaseAll(this.dialogData, this);
}
```
