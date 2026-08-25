---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:activeNextRespinBtn"
title: "BetHistoryDetailPortrait.activeNextRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "activeNextRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.activeNextRespinBtn()`

---

## 1. Method Overview & Signature

```typescript
public activeNextRespinBtn(isActiveNextRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
activeNextRespinBtn(isActiveNextRespin: boolean): void {
	this.nextRespinBtn.node.active = isActiveNextRespin;
}
```
