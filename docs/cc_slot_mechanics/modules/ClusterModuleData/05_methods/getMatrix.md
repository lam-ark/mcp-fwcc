---
id: "cc_slot_mechanics:ClusterModuleData:methods:getMatrix"
title: "ClusterModuleData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `ClusterModuleData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[][]
```

- **Primary Role**: Implements getMatrix within the ClusterModuleData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return matrix;
	}
```
