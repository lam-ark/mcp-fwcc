---
id: "cc_slot_mechanics:TumblingReelModule:methods:recycleSymbol"
title: "TumblingReelModule.recycleSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "recycleSymbol"]
---

# 📖 `TumblingReelModule.recycleSymbol()`

---

## 1. Method Signature & Overview

```typescript
recycleSymbol(): void
```

- **Primary Role**: Implements recycleSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

        while (this.listSymbols.length) {
            const symbol = this.listSymbols.shift();
            this.symbolManager.removeSymbol(symbol);
        }
	}
```
