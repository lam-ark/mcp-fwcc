---
id: "cc_slot_mechanics:TableGigabloxModule:methods:start"
title: "TableGigabloxModule.start Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "start"]
---

# 📖 `TableGigabloxModule.start()`

---

## 1. Method Signature & Overview

```typescript
start(): void
```

- **Primary Role**: Implements start within the TableGigabloxModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
		this.node.on("PROCESS_BEFORE_STOP_REELS", this.onStopReels, this);
	}
```
