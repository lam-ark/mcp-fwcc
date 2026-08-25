---
id: "cc_slot_module:DialogMessageModule:methods:setupObserver"
title: "DialogMessageModule.setupObserver Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `DialogMessageModule.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.dialogData, "active", this.showDialog.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "message", this.updateMessage.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "isOkBtnActive", this.showButtonOK.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "isCancelBtnActive", this.showButtonCancel.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
}
```
