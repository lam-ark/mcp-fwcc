---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:on"
title: "CascadeWildGenerationModule.on Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "on"]
---

# 📖 `CascadeWildGenerationModule.on()`

---

## 1. Method Signature

```typescript
on("TABLE_START_RESPIN", this.startRespinHandler, this); this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespinHandler, this); } startRespinHandler(): void
```

- **Scope**: `CascadeWildGenerationModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
on("TABLE_START_RESPIN", this.startRespinHandler, this);
		this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespinHandler, this);
	}

	startRespinHandler(): void {
		const { verticalMatrix, listTraceWayVertical } = this.cascadeWildGenerationData.formatData();
		this.startRespin(verticalMatrix, listTraceWayVertical);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
