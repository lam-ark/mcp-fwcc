---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:setupObserver"
title: "BetHistoryDetailPortrait.setupObserver Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetHistoryDetailPortrait.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	super.setupObserver();
	if (this.hasRespin) {
		this.observer.watch(this.betHistoryDetailData, 'isEnableNextRespin', this.enableNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isEnablePrevRespin', this.enablePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isActiveNextRespin', this.activeNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isActivePrevRespin', this.activePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	}
}
```
