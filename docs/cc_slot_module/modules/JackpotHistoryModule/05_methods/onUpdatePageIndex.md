---
id: "cc_slot_module:JackpotHistoryModule:methods:onUpdatePageIndex"
title: "JackpotHistoryModule.onUpdatePageIndex Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onUpdatePageIndex"]
---

# 📖 `JackpotHistoryModule.onUpdatePageIndex()`

---

## 1. Method Overview & Signature

```typescript
public onUpdatePageIndex(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdatePageIndex(index: number): void {
	this.pageIndexNode.active = index && index > 0;
	this.pageIndexLabel.string = " " + index;
}
```
