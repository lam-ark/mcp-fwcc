---
id: "cc_slot_mechanics:GigabloxReelModule:methods:runReelSpin"
title: "GigabloxReelModule.runReelSpin Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "runReelSpin"]
---

# 📖 `GigabloxReelModule.runReelSpin()`

---

## 1. Method Signature & Overview

```typescript
runReelSpin(mode: any): void
```

- **Primary Role**: Implements runReelSpin within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
runReelSpin(mode: any): void {
		super.runReelSpin(mode);
		this.reelManager.totalSymbol = this.config.BUFFER_TOP + this.reelManager.showSymbol + this.config.BUFFER_BOT;
		this.listSymbols.forEach((s) => s.active = !this._isGigablox);
		this._isGigablox = false; // reset gigablox state
		this._gigabloxIndex = -1;
		this._isBeginHidingSymbol = false;
	}
```
