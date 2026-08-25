---
id: "cc_slot_module:BetHistoryModule:methods:onEnableLoading"
title: "BetHistoryModule.onEnableLoading Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onEnableLoading"]
---

# 📖 `BetHistoryModule.onEnableLoading()`

---

## 1. Method Overview & Signature

Toggles active state of loading node overlay.

```typescript
public onEnableLoading(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isEnableLoading observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onEnableLoading(isActive: boolean): void {
	this.loading.active = isActive;
}
```
