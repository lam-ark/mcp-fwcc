---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:onLoadExtend"
title: "CascadeWildGenerationModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `CascadeWildGenerationModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.config = this.getConfig();
		this.initLayout();
		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
		this.cascadeWildGenerationData = this.getComponent(CascadeWildGenerationData);
	}
```
