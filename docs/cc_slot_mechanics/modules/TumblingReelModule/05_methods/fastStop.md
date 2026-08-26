---
id: "cc_slot_mechanics:TumblingReelModule:methods:fastStop"
title: "TumblingReelModule.fastStop Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `TumblingReelModule.fastStop()`

---

## 1. Method Signature

```typescript
fastStop(): void
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
fastStop(): void {
        if (this.reelManager.state == ReelSpinState.START) {
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
