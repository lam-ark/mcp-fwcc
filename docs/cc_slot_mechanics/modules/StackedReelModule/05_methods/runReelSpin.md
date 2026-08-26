---
id: "cc_slot_mechanics:StackedReelModule:methods:runReelSpin"
title: "StackedReelModule.runReelSpin Method"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "methods", "runReelSpin"]
---

# 📖 `StackedReelModule.runReelSpin()`

---

## 1. Method Signature & Overview

```typescript
runReelSpin(mode): void
```

- **Primary Role**: Implements runReelSpin within the StackedReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
runReelSpin(mode): void {
		this._listRandomSymbols = this.generateStackedSymbol(true);
		super.runReelSpin(mode);
	}
```
