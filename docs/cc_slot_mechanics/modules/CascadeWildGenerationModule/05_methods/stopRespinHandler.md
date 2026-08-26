---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:stopRespinHandler"
title: "CascadeWildGenerationModule.stopRespinHandler Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "stopRespinHandler"]
---

# 📖 `CascadeWildGenerationModule.stopRespinHandler()`

---

## 1. Method Signature & Overview

```typescript
stopRespinHandler(): Promise<void>
```

- **Primary Role**: Implements stopRespinHandler within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
async stopRespinHandler(): Promise<void> {
		const { verticalMatrix, listTraceWayVertical } = this.cascadeWildGenerationData.formatData();
		const wildIndex = this.cascadeWildGenerationData.getWildIndex();
		this.col = wildIndex.col;
		this.row = wildIndex.row;
		await this.stopRespin(verticalMatrix, listTraceWayVertical);
	}
```
