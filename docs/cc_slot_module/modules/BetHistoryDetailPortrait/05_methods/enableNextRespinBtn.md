---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:enableNextRespinBtn"
title: "BetHistoryDetailPortrait.enableNextRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "enableNextRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.enableNextRespinBtn()`

---

## 1. Method Overview & Signature

```typescript
public enableNextRespinBtn(isEnableNextRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enableNextRespinBtn(isEnableNextRespin: boolean): void {
	this.nextRespinBtn.interactable = isEnableNextRespin;
}
```
