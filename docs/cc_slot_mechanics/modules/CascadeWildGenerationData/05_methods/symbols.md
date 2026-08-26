---
id: "cc_slot_mechanics:CascadeWildGenerationData:methods:symbols"
title: "CascadeWildGenerationData.symbols Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "methods", "symbols"]
---

# 📖 `CascadeWildGenerationData.symbols()`

---

## 1. Method Signature

```typescript
symbols(traceWay) and wild generation position formatData(): 
```

- **Scope**: `CascadeWildGenerationData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
symbols (traceWay) and wild generation position
	formatData(): { verticalMatrix: any[]; listTraceWayVertical: any[] } {
		const matrix = this.getMatrix().filter((e) => e.length > 0 && e[0] != "");
		const formatMatrix = this.getFormatMatrix() || this.cascadeWildGenerationConfig.CASCADE_TABLE_CONFIG.format;
		const traceWay = this.getTraceWay();
		let index = 0;
		let verticalMatrix = [];

		const sortedListSymbols = traceWay.sort(function (a, b) {
			return a - b;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
