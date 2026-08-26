---
id: "cc_slot_mechanics:HorizontalTableModule:methods:onLoadExtend"
title: "HorizontalTableModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `HorizontalTableModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the HorizontalTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.config = this.getComponent(HorizontalTableConfig);
		if (!this.config) {
			warn("Config not add to this node");
			return;
		}

		this.currentMode = this.config.MODES.NORMAL;
		this._slotTableData = this.getComponent(HorizontalTableData);
	}
```
