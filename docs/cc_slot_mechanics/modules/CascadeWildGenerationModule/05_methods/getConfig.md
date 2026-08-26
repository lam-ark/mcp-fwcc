---
id: "cc_slot_mechanics:CascadeWildGenerationModule:methods:getConfig"
title: "CascadeWildGenerationModule.getConfig Method"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "methods", "getConfig"]
---

# 📖 `CascadeWildGenerationModule.getConfig()`

---

## 1. Method Signature & Overview

```typescript
getConfig(): CascadeWildGenerationConfig
```

- **Primary Role**: Implements getConfig within the CascadeWildGenerationModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public getConfig(): CascadeWildGenerationConfig {
		return this.getComponent(CascadeWildGenerationConfig);
	}
```
