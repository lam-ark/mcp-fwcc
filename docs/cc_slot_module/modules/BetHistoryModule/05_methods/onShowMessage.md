---
id: "cc_slot_module:BetHistoryModule:methods:onShowMessage"
title: "BetHistoryModule.onShowMessage Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onShowMessage"]
---

# 📖 `BetHistoryModule.onShowMessage()`

---

## 1. Method Overview & Signature

Toggles messageNode active state and populates messageLabel text.

```typescript
public onShowMessage(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isEnableMessage observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onShowMessage(isActive: boolean): void {
	this.messageNode.active = isActive;
	this.messageLabel.string = isActive ? this.modelData.messageText : "";
}
```
