---
id: "cc_slot_mechanics:TransformSymbolData:methods:getMatrix"
title: "TransformSymbolData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `TransformSymbolData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[]
```

- **Primary Role**: Implements getMatrix within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[] {
		let rawMatrix = this["matrix"] || this["matrix0"];
		switch (this["state"]) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.RESPIN_GAME:
				rawMatrix = this["respinGameMatrix"] || rawMatrix;
				break;
		}
		return Array.from(rawMatrix || []);
	}
```
