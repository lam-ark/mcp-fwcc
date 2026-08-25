---
id: "cc_slot_module:BetHistoryModule:methods:enablePreviousBtn"
title: "BetHistoryModule.enablePreviousBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "enablePreviousBtn"]
---

# 📖 `BetHistoryModule.enablePreviousBtn()`

---

## 1. Method Overview & Signature

Updates backBtn interactable state.

```typescript
public enablePreviousBtn(isEnablePrev: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isEnablePrev observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
enablePreviousBtn(isEnablePrev: boolean): void {
	this.backBtn.interactable = isEnablePrev;
}
```
