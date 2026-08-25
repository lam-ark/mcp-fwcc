---
id: "cc_slot_module:DialogMessageModule:methods:showButtonCancel"
title: "DialogMessageModule.showButtonCancel Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showButtonCancel"]
---

# 📖 `DialogMessageModule.showButtonCancel()`

---

## 1. Method Overview & Signature

```typescript
public showButtonCancel(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showButtonCancel(active: boolean): void {
	this.buttonCancel.node.active = active;
}
```
