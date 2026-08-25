---
id: "cc_slot_module:BetHistoryModule:methods:localizeText"
title: "BetHistoryModule.localizeText Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "localizeText"]
---

# 📖 `BetHistoryModule.localizeText()`

---

## 1. Method Overview & Signature

Localizes the textPage label using gameLogic text provider.

```typescript
public localizeText(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called during start() or language change.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
localizeText(): void {
	if (this.textPage) {
		this.textPage.string = this.gameLogic.getGameText("HISTORY_PAGE");
	}
}
```
