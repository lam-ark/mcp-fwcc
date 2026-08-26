---
id: "cc_slot_mechanics:StackedReelConfig:methods:getStackedConfig"
title: "StackedReelConfig.getStackedConfig Method"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "methods", "getStackedConfig"]
---

# 📖 `StackedReelConfig.getStackedConfig()`

---

## 1. Method Signature & Overview

```typescript
getStackedConfig(reelIndex: number): StackedConfig | undefined
```

- **Primary Role**: Implements getStackedConfig within the StackedReelConfig mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getStackedConfig(reelIndex: number): StackedConfig | undefined {
		return this.STACKED_CONFIG.find(config => config.reel === reelIndex);
	}
```
