---
id: "cc_slot_mechanics:ClusterModule:methods:getConfig"
title: "ClusterModule.getConfig Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "getConfig"]
---

# 📖 `ClusterModule.getConfig()`

---

## 1. Method Signature & Overview

```typescript
getConfig(): ClusterModuleConfig
```

- **Primary Role**: Implements getConfig within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public getConfig(): ClusterModuleConfig {
		return this.getComponent(ClusterModuleConfig);
	}
```
