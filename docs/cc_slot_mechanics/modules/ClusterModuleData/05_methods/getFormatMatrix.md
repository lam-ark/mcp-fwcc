---
id: "cc_slot_mechanics:ClusterModuleData:methods:getFormatMatrix"
title: "ClusterModuleData.getFormatMatrix Method"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "methods", "getFormatMatrix"]
---

# 📖 `ClusterModuleData.getFormatMatrix()`

---

## 1. Method Signature & Overview

```typescript
getFormatMatrix(): string[][]
```

- **Primary Role**: Implements getFormatMatrix within the ClusterModuleData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getFormatMatrix(): string[][] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
	}
```
