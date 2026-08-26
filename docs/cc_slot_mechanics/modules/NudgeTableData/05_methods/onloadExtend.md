---
id: "cc_slot_mechanics:NudgeTableData:methods:onloadExtend"
title: "NudgeTableData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `NudgeTableData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the NudgeTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		super.onloadExtend();
		this.registeredKeys.push("nud");
	}
```
