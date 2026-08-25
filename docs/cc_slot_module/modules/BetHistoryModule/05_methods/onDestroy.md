---
id: "cc_slot_module:BetHistoryModule:methods:onDestroy"
title: "BetHistoryModule.onDestroy Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `BetHistoryModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases all observer bindings from modelData to prevent memory leaks.

```typescript
public onDestroy(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Standard Cocos component destruction lifecycle hook.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onDestroy(): void {
	if (this.modelData) {
		this.observer.releaseAll(this.modelData, this);
	}
}
```
