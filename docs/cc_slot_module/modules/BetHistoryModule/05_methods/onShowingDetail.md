---
id: "cc_slot_module:BetHistoryModule:methods:onShowingDetail"
title: "BetHistoryModule.onShowingDetail Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onShowingDetail"]
---

# 📖 `BetHistoryModule.onShowingDetail()`

---

## 1. Method Overview & Signature

Toggles detailView node and passes detailData via INIT_DETAIL_VIEW event.

```typescript
public onShowingDetail(isOpen: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isShowingDetail observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onShowingDetail(isOpen: boolean): void {
	this.detailView.active = isOpen;
	if (!isOpen || !this.modelData) {
		return;
	}
	const { detailData } = this.modelData;
	this.detailView.emit("INIT_DETAIL_VIEW", detailData);
}
```
