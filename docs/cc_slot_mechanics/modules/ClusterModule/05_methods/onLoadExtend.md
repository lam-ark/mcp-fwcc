---
id: "cc_slot_mechanics:ClusterModule:methods:onLoadExtend"
title: "ClusterModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `ClusterModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		super.onLoadExtend();
		this._clusterModuleData = this.getComponent(ClusterModuleData);
	}
```
