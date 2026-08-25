---
id: "cc_slot_module:BetHistoryDetailModule:methods:resetSessionGroup"
title: "BetHistoryDetailModule.resetSessionGroup Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "resetSessionGroup"]
---

# 📖 `BetHistoryDetailModule.resetSessionGroup()`

---

## 1. Method Overview & Signature

Emits RESET_SESSION_ID to sessionGroup node.

```typescript
public resetSessionGroup(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by _reset().
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
resetSessionGroup(): void {
	if (this.sessionGroup) {
		this.sessionGroup.emit("RESET_SESSION_ID");
	}
}
```
