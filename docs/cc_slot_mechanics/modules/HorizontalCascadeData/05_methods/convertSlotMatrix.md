---
id: "cc_slot_mechanics:HorizontalCascadeData:methods:convertSlotMatrix"
title: "HorizontalCascadeData.convertSlotMatrix Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "methods", "convertSlotMatrix"]
---

# 📖 `HorizontalCascadeData.convertSlotMatrix()`

---

## 1. Method Signature

```typescript
convertSlotMatrix(matrix, this.config.CASCADE_TABLE_CONFIG.format); } getTraceWay(): number[]
```

- **Scope**: `HorizontalCascadeData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
convertSlotMatrix(matrix, this.config.CASCADE_TABLE_CONFIG.format);
	}

	getTraceWay(): number[] {
		return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
			return a - b; 
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
