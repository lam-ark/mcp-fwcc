---
id: "cc_slot_mechanics:MultiplierReel:methods:property"
title: "MultiplierReel.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `MultiplierReel.property()`

---

## 1. Method Signature

```typescript
property(cc.Label) lbMultiplier: cc.Label = null; onLoad(): void
```

- **Scope**: `MultiplierReel`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(cc.Label) lbMultiplier: cc.Label = null;
	onLoad(): void {
		this.node.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.node.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
