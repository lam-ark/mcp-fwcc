---
id: "cc_slot_mechanics:HorizontalTableModule:methods:getComponent"
title: "HorizontalTableModule.getComponent Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "methods", "getComponent"]
---

# 📖 `HorizontalTableModule.getComponent()`

---

## 1. Method Signature

```typescript
getComponent(HorizontalTableData); } initTable(): void
```

- **Scope**: `HorizontalTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getComponent(HorizontalTableData);
	}

	initTable(): void {
		const horizontalReel = instantiate(this.reelPrefab);
		horizontalReel.setPosition(0, 0);
		horizontalReel.setParent(this.table);

		const reelComponent = horizontalReel.getComponent(HorizontalReelModule);
		reelComponent.initReel({ reelIndex: 0, config: this.config, pool: this.symbolManager });
		this.reels.push(reelComponent);
		this.showBeautyMatrix();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
