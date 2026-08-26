---
id: "cc_slot_mechanics:StickySymbolModule:methods:onLoadExtend"
title: "StickySymbolModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `StickySymbolModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		this.data = this.getComponent(StickySymbolData);
		this.registerGameEvents();
	}
```
