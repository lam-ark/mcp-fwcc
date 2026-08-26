---
id: "cc_slot_mechanics:MegawayModule:methods:getTotalWayCol"
title: "MegawayModule.getTotalWayCol Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "getTotalWayCol"]
---

# 📖 `MegawayModule.getTotalWayCol()`

---

## 1. Method Signature

```typescript
getTotalWayCol(col); this.updateMegawayString(ways); } updateTotalMegaway(totalWay: number): void
```

- **Scope**: `MegawayModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getTotalWayCol(col);
		this.updateMegawayString(ways);
	}

	updateTotalMegaway(totalWay: number): void {
		const ways = totalWay || this._data.getTotalWay();
		this.updateMegawayString(ways);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
