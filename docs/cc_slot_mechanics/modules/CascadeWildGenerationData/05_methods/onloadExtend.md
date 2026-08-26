---
id: "cc_slot_mechanics:CascadeWildGenerationData:methods:onloadExtend"
title: "CascadeWildGenerationData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `CascadeWildGenerationData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the CascadeWildGenerationData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix", "wildAppearPosition"];
		super.onloadExtend();
		this.cascadeWildGenerationConfig = this.getComponent(CascadeWildGenerationConfig);
	}
```
