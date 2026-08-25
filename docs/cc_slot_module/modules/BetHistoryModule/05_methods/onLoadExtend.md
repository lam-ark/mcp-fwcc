---
id: "cc_slot_module:BetHistoryModule:methods:onLoadExtend"
title: "BetHistoryModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `BetHistoryModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes component, binds observers, and invokes super lifecycle.

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked by Cocos Creator engine upon component node activation via SlotBaseModule onLoad.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.init();
	this.setupObserver();
	super.onLoadExtend();
}
```
