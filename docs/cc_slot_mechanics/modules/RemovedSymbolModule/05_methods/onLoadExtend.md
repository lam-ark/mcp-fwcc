---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:onLoadExtend"
title: "RemovedSymbolModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `RemovedSymbolModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.initLayout();
		this.tableData = this.getComponent(RemovedSymbolData);
		
		if(!this.symbolManager){
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
	}
```
