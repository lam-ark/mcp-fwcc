---
id: "cc_slot_mechanics:StickySymbolModule:methods:registerGameEvents"
title: "StickySymbolModule.registerGameEvents Method"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "registerGameEvents"]
---

# 📖 `StickySymbolModule.registerGameEvents()`

---

## 1. Method Signature & Overview

```typescript
registerGameEvents(): void
```

- **Primary Role**: Implements registerGameEvents within the StickySymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
registerGameEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
			this.moduleEvent.on('BEFORE_RESET_TABLE', this.setupStickySymbols, this);
			this.moduleEvent.on('TABLE_START_RESPIN', this.setupStickySymbols, this);
		}
	}
```
