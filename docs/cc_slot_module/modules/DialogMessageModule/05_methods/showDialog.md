---
id: "cc_slot_module:DialogMessageModule:methods:showDialog"
title: "DialogMessageModule.showDialog Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showDialog"]
---

# 📖 `DialogMessageModule.showDialog()`

---

## 1. Method Overview & Signature

```typescript
public showDialog(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showDialog(active: boolean): void {
	this.node.active = active;
	eno.setOpacity(this.node, active ? 255 : 0);
	if (this.buttonHolder) {
		const isActive = active && (this.dialogData.isOkBtnActive || this.dialogData.isCancelBtnActive);
		this.buttonHolder.active = isActive;
	}
}
```
