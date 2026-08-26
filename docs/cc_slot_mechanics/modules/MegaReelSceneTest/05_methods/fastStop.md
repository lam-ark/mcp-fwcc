---
id: "cc_slot_mechanics:MegaReelSceneTest:methods:fastStop"
title: "MegaReelSceneTest.fastStop Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `MegaReelSceneTest.fastStop()`

---

## 1. Method Signature

```typescript
fastStop(): void
```

- **Scope**: `MegaReelSceneTest`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
fastStop(): void {
		this.table.fastStop();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
