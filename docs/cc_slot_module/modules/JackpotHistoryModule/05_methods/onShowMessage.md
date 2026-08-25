---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowMessage"
title: "JackpotHistoryModule.onShowMessage Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowMessage"]
---

# 📖 `JackpotHistoryModule.onShowMessage()`

---

## 1. Method Overview & Signature

```typescript
public onShowMessage(value: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowMessage(value: boolean): void {
	this.messageNode.active = value;
	if (value) {
		this.messageLabel.string = this.jackpotHistoryData.messageText;
	}
}
```
