---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:getConfig"
title: "HorizontalCascadeModule.getConfig Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "getConfig"]
---

# 📖 `HorizontalCascadeModule.getConfig()`

---

## 1. Method Signature & Overview

```typescript
getConfig(): HorizontalCascadeModuleConfig
```

- **Primary Role**: Implements getConfig within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public getConfig(): HorizontalCascadeModuleConfig {
		return this.getComponent(HorizontalCascadeModuleConfig);
	}
```
