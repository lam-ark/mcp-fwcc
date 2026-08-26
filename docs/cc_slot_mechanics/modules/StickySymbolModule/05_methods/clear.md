---
id: "cc_slot_mechanics:StickySymbolModule:methods:clear"
title: "StickySymbolModule.clear Method Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "clear"]
---

# 📖 `StickySymbolModule.clear()`

---

## 1. Method Signature

```typescript
clear(); this.data.cleanStickyIndexes(); } updateSymbolIndex(symbol: cc.Node, index: number): void
```

- **Scope**: `StickySymbolModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
clear();
		this.data.cleanStickyIndexes();
	}

	updateSymbolIndex(symbol: cc.Node, index: number): void {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.setIndex(index);
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
