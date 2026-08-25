---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:enablePreviousRespinBtn"
title: "BetHistoryDetailPortrait.enablePreviousRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "enablePreviousRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.enablePreviousRespinBtn()`

---

## 1. Method Overview & Signature

```typescript
public enablePreviousRespinBtn(isEnablePrevRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enablePreviousRespinBtn(isEnablePrevRespin: boolean): void {
	this.prevRespinBtn.interactable = isEnablePrevRespin;
}
```
