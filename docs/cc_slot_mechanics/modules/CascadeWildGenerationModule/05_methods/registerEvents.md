---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:registerEvents"
title: "CascadeWildGenerationModule.registerEvents Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "registerEvents"]
---

# 📖 `CascadeWildGenerationModule.registerEvents()`

---

## 1. Method Signature & Overview

```typescript
registerEvents(): void
```

- **Primary Role**: Implements registerEvents within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
		if (!this.moduleEvent) {
			return;
		}

		this.moduleEvent.on("TABLE_START_RESPIN", this.startRespinHandler, this);
		this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespinHandler, this);
	}
```
