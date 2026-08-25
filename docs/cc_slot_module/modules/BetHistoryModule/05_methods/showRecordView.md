---
id: "cc_slot_module:BetHistoryModule:methods:showRecordView"
title: "BetHistoryModule.showRecordView Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "showRecordView"]
---

# 📖 `BetHistoryModule.showRecordView()`

---

## 1. Method Overview & Signature

Toggles recordView node visibility if popup animation is not actively running.

```typescript
public showRecordView(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isShowingRecord change.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
showRecordView(isActive: boolean): void {
	if (this.popupBehavior.isPlaying()) {
		return;
	}
	this.recordView.active = isActive;
}
```
