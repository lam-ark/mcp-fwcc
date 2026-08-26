---
id: "cc_slot_mechanics:StickySymbolModule:methods:onDestroy"
title: "StickySymbolModule.onDestroy Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "onDestroy"]
---

# 📖 `StickySymbolModule.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
onDestroy(): void
```

- **Primary Role**: Implements onDestroy within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}
```
