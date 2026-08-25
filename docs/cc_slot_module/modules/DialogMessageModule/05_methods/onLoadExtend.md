---
id: "cc_slot_module:DialogMessageModule:methods:onLoadExtend"
title: "DialogMessageModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `DialogMessageModule.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.dialogData = this.gameLogic.getDataModel().DialogData;
	this.setupObserver();
}
```
