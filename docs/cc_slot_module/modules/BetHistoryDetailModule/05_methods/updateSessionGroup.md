---
id: "cc_slot_module:BetHistoryDetailModule:methods:updateSessionGroup"
title: "BetHistoryDetailModule.updateSessionGroup Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "updateSessionGroup"]
---

# 📖 `BetHistoryDetailModule.updateSessionGroup()`

---

## 1. Method Overview & Signature

Emits SET_SESSION_ID with session identifier to sessionGroup node.

```typescript
public updateSessionGroup(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by onRenderDataView.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
updateSessionGroup(data: any): void {
	if (this.sessionGroup) {
		this.sessionGroup.emit("SET_SESSION_ID", data.sessionId);
	}
}
```
