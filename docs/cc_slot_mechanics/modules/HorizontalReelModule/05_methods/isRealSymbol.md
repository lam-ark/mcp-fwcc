---
id: "cc_slot_mechanics:HorizontalReelModule:methods:isRealSymbol"
title: "HorizontalReelModule.isRealSymbol Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "isRealSymbol"]
---

# 📖 `HorizontalReelModule.isRealSymbol()`

---

## 1. Method Signature & Overview

```typescript
isRealSymbol(index: number): boolean
```

- **Primary Role**: Implements isRealSymbol within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected isRealSymbol(index: number): boolean {
		return index >= this.config.BUFFER_LEFT && index < this.reelManager.totalSymbol - this.config.BUFFER_RIGHT;
	}
```
