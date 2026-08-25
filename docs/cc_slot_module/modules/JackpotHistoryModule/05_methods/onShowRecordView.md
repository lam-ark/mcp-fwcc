---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowRecordView"
title: "JackpotHistoryModule.onShowRecordView Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowRecordView"]
---

# 📖 `JackpotHistoryModule.onShowRecordView()`

---

## 1. Method Overview & Signature

```typescript
public onShowRecordView(data: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowRecordView(data: any): void {
	if (data === null) {
		this.recordView.emit("CLEAR_DATA");
		return;
	}
	this.recordView.active = true;
	const originalData = JSON.parse(JSON.stringify(data));
	this.recordView.emit('UPDATE_DATA', originalData, this.itemPerPage);
}
```
