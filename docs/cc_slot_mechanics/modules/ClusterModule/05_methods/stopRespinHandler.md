---
id: "cc_slot_mechanics:ClusterModule:methods:stopRespinHandler"
title: "ClusterModule.stopRespinHandler Method"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "stopRespinHandler"]
---

# 📖 `ClusterModule.stopRespinHandler()`

---

## 1. Method Signature & Overview

```typescript
stopRespinHandler(): Promise<void>
```

- **Primary Role**: Implements stopRespinHandler within the ClusterModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
async stopRespinHandler(): Promise<void> {
		const { verticalMatrix, listTraceWayVertical, listClusters } = this._clusterModuleData.formatData();
		await this.stopRespin(verticalMatrix, listTraceWayVertical);
	}
```
