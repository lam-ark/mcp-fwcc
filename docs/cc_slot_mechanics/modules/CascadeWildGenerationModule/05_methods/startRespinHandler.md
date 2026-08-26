---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:startRespinHandler"
title: "CascadeWildGenerationModule.startRespinHandler Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "startRespinHandler"]
---

# 📖 `CascadeWildGenerationModule.startRespinHandler()`

---

## 1. Method Signature & Overview

```typescript
startRespinHandler(): void
```

- **Primary Role**: Implements startRespinHandler within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startRespinHandler(): void {
		const { verticalMatrix, listTraceWayVertical } = this.cascadeWildGenerationData.formatData();
		this.startRespin(verticalMatrix, listTraceWayVertical);
	}
```
