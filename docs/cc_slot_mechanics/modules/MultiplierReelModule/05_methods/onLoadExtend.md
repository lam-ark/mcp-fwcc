---
id: "cc_slot_mechanics:MultiplierReelModule:methods:onLoadExtend"
title: "MultiplierReelModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MultiplierReelModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the MultiplierReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this._data = this.getComponent(MultiplierReelData);
		this._config = this.getComponent(MultiplierReelConfig);
        
		this.initReel();
	}
```
