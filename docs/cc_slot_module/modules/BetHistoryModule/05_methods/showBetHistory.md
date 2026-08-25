---
id: "cc_slot_module:BetHistoryModule:methods:showBetHistory"
title: "BetHistoryModule.showBetHistory Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "showBetHistory"]
---

# 📖 `BetHistoryModule.showBetHistory()`

---

## 1. Method Overview & Signature

Opens or closes the bet history popup with fade animation and emits INIT_BET_HISTORY.

```typescript
public showBetHistory(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked by showContent(isActive).
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
showBetHistory(isActive: boolean): void {
	if (isActive) {
		this.togglePopup(true, () => {
			this.openPopup();
			this.showRecordView(true);
		});
	} else {
		this.togglePopup(false);
	}
}
```
