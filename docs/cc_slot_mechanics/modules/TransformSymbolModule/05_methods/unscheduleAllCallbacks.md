---
id: "cc_slot_mechanics:TransformSymbolModule:methods:unscheduleAllCallbacks"
title: "TransformSymbolModule.unscheduleAllCallbacks Method Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "unscheduleAllCallbacks"]
---

# 📖 `TransformSymbolModule.unscheduleAllCallbacks()`

---

## 1. Method Signature

```typescript
unscheduleAllCallbacks(); } createVFXTransform(symbol: cc.Node): void
```

- **Scope**: `TransformSymbolModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
unscheduleAllCallbacks();
	}

	createVFXTransform(symbol: cc.Node): void {
		if (!this.vfxPool) {
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
