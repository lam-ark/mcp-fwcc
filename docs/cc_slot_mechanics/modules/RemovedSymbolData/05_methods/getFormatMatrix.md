---
id: "cc_slot_mechanics:RemovedSymbolData:methods:getFormatMatrix"
title: "RemovedSymbolData.getFormatMatrix Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "methods", "getFormatMatrix"]
---

# 📖 `RemovedSymbolData.getFormatMatrix()`

---

## 1. Method Signature & Overview

```typescript
getFormatMatrix(): string[]
```

- **Primary Role**: Implements getFormatMatrix within the RemovedSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getFormatMatrix(): string[] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
	}
```
