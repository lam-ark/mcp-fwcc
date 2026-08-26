---
id: "cc_slot_mechanics:ClusterModule:methods:startRespinHandler"
title: "ClusterModule.startRespinHandler Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "startRespinHandler"]
---

# 📖 `ClusterModule.startRespinHandler()`

---

## 1. Method Signature & Overview

```typescript
startRespinHandler(): void
```

- **Primary Role**: Implements startRespinHandler within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startRespinHandler(): void {
		const { verticalMatrix, listTraceWayVertical, listClusters } = this._clusterModuleData.formatData();
		this._listClusterSymbols = listClusters;
		this.startRespin(verticalMatrix, listTraceWayVertical);
	}
```
