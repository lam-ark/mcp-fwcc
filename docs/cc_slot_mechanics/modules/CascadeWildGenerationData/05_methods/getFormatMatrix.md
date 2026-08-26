---
id: "cc_slot_mechanics:CascadeWildGenerationData:methods:getFormatMatrix"
title: "CascadeWildGenerationData.getFormatMatrix Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "methods", "getFormatMatrix"]
---

# 📖 `CascadeWildGenerationData.getFormatMatrix()`

---

## 1. Method Signature & Overview

```typescript
getFormatMatrix(): string[][]
```

- **Primary Role**: Implements getFormatMatrix within the CascadeWildGenerationData mechanics lifecycle.

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
