---
id: "cc_slot_mechanics:ClusterModule:methods:updateNewSymbolPosition"
title: "ClusterModule.updateNewSymbolPosition Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "updateNewSymbolPosition"]
---

# 📖 `ClusterModule.updateNewSymbolPosition()`

---

## 1. Method Signature & Overview

```typescript
updateNewSymbolPosition(): void
```

- **Primary Role**: Implements updateNewSymbolPosition within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateNewSymbolPosition(): void {
		for (let i = 0; i < this._listClusterSymbols.length; i++) {
			const { col, row } = this._listClusterSymbols[i];
			const symbol = this.getSymbolAt(col, row);
			if (symbol) {
				this._listSymbolPosition.push(new cc.Vec2(symbol.position.x, symbol.position.y));
			}
		}
	}
```
