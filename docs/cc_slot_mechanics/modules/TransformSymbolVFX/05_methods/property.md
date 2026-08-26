---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:property"
title: "TransformSymbolVFX.property Method Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "property"]
---

# 📖 `TransformSymbolVFX.property()`

---

## 1. Method Signature

```typescript
property(sp.Skeleton) skeleton: sp.Skeleton = null; @property animation: string = "animation"; @property isLoop: boolean = false; onLoad(): void
```

- **Scope**: `TransformSymbolVFX`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
property(sp.Skeleton) skeleton: sp.Skeleton = null;
	@property animation: string = "animation";
	@property isLoop: boolean = false;

	onLoad(): void {
		if (!this.skeleton) {
			this.skeleton = this.node.getComponent(sp.Skeleton);
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
