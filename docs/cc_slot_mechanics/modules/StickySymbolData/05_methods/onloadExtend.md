---
id: "cc_slot_mechanics:StickySymbolData:methods:onloadExtend"
title: "StickySymbolData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `StickySymbolData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the StickySymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		if (this.customStickyProperty) {
			this.registeredKeys.push(this.customStickyProperty);
		}
	}
```
