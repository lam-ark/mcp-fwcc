---
id: "cc_slot_mechanics:ClusterModuleData:methods:onloadExtend"
title: "ClusterModuleData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `ClusterModuleData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the ClusterModuleData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix"];
		super.onloadExtend();
		this.clusterModuleConfig = this.getComponent(ClusterModuleConfig);
	}
```
