---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:help"
title: "CascadeWildGenerationModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `CascadeWildGenerationModule.help()`

---

## 1. Method Signature

```typescript
help(HelpDocuments.CASCADE_WILD_GENERATION_MODULE) export class CascadeWildGenerationModule extends VerticalCascadeModule { protected cascadeWildGenerationData: CascadeWildGenerationData; protected generationPosition: cc.Vec2 = null; protected col: number; protected row: number; onLoadExtend(): void
```

- **Scope**: `CascadeWildGenerationModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.CASCADE_WILD_GENERATION_MODULE)
export class CascadeWildGenerationModule extends VerticalCascadeModule {
    
	protected cascadeWildGenerationData: CascadeWildGenerationData;
	protected generationPosition: cc.Vec2 = null;
	protected col: number;
	protected row: number;

	onLoadExtend(): void {
		this.config = this.getConfig();
		this.initLayout();
		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
