---
id: "cc_slot_module:JackpotHistoryModule:methods:onLoadExtend"
title: "JackpotHistoryModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotHistoryModule.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.jackpotHistoryData = this.gameLogic.getDataModel().JackpotHistoryData;
	this.pageIndexNode.active = false;
	this.setupObserver();
	super.onLoadExtend();
}
```
