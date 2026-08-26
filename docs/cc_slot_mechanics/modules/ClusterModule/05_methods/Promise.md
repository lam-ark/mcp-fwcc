---
id: "cc_slot_mechanics:ClusterModule:methods:Promise"
title: "ClusterModule.Promise Method Implementation"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "Promise"]
---

# 📖 `ClusterModule.Promise()`

---

## 1. Method Signature

```typescript
Promise((resolve) => { this._stopRespinCB = resolve; }); } protected updateNewSymbolPosition(): void
```

- **Scope**: `ClusterModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}

	protected updateNewSymbolPosition(): void {
		for (let i = 0; i < this._listClusterSymbols.length; i++) {
			const { col, row } = this._listClusterSymbols[i];
			const symbol = this.getSymbolAt(col, row);
			if (symbol) {
				this._listSymbolPosition.push(new cc.Vec2(symbol.position.x, symbol.position.y));
			}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
