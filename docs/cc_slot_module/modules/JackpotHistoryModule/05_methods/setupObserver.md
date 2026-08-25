---
id: "cc_slot_module:JackpotHistoryModule:methods:setupObserver"
title: "JackpotHistoryModule.setupObserver Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `JackpotHistoryModule.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.jackpotHistoryData, 'isShowing', this.onShowJackpotHistory.bind(this), this);
	this.observer.watch(this.jackpotHistoryData, 'recordData', this.onShowRecordView.bind(this), this);
	if (this.loading) {
		this.observer.watch(this.jackpotHistoryData, 'isEnableLoading', this.onShowLoading.bind(this), this);
	}
	if (this.messageNode && this.messageLabel) {
		this.observer.watch(this.jackpotHistoryData, 'isEnableMessage', this.onShowMessage.bind(this), this);
	}
	if (this.pageIndexNode && this.pageIndexLabel) {
		this.observer.watch(this.jackpotHistoryData, 'pageIndex', this.onUpdatePageIndex.bind(this), this);
	}
	this.observer.watch(this.jackpotHistoryData, 'isEnableNext', this.enableNextBtn.bind(this), this, { canTriggerSameValue: true });
	this.observer.watch(this.jackpotHistoryData, 'isEnablePrev', this.enablePreviousBtn.bind(this), this, { canTriggerSameValue: true });
}
```
