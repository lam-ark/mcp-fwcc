---
id: "cc_slot_mechanics:HorizontalReelModule:methods:updateReelResult"
title: "HorizontalReelModule.updateReelResult Method"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "updateReelResult"]
---

# 📖 `HorizontalReelModule.updateReelResult()`

---

## 1. Method Signature & Overview

```typescript
updateReelResult(symbols: string[]): void
```

- **Primary Role**: Implements updateReelResult within the HorizontalReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
updateReelResult(symbols: string[]): void {
		this.data = [...symbols];
		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}
	}
```
