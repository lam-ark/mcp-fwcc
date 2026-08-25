---
id: "cc_slot_module:DialogMessageModule:methods:showButtonOK"
title: "DialogMessageModule.showButtonOK Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showButtonOK"]
---

# 📖 `DialogMessageModule.showButtonOK()`

---

## 1. Method Overview & Signature

```typescript
public showButtonOK(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showButtonOK(active: boolean): void {
	this.buttonOK.node.active = active;
}
```
