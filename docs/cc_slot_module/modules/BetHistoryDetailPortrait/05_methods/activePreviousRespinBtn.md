---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:activePreviousRespinBtn"
title: "BetHistoryDetailPortrait.activePreviousRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "activePreviousRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.activePreviousRespinBtn()`

---

## 1. Method Overview & Signature

```typescript
public activePreviousRespinBtn(isActivePrevRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
activePreviousRespinBtn(isActivePrevRespin: boolean): void {
	this.prevRespinBtn.node.active = isActivePrevRespin;
}
```
