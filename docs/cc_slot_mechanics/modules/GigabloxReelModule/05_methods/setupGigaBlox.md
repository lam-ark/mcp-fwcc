---
id: "cc_slot_mechanics:GigabloxReelModule:methods:setupGigaBlox"
title: "GigabloxReelModule.setupGigaBlox Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "setupGigaBlox"]
---

# 📖 `GigabloxReelModule.setupGigaBlox()`

---

## 1. Method Signature & Overview

```typescript
setupGigaBlox(blox: any): void
```

- **Primary Role**: Implements setupGigaBlox within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
setupGigaBlox(blox: any): void {
		this._isGigablox = true;
		this._gigabloxIndex = blox.col;
		this._gigabloxSize = blox.size;
		//this._symbolBlox = blox.symbols;
		this._gigabloxStep = (this._gigabloxSize - blox.rows[0]) % this._gigabloxSize;
	}
```
