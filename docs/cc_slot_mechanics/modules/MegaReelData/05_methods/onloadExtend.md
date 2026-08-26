---
id: "cc_slot_mechanics:MegaReelData:methods:onloadExtend"
title: "MegaReelData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `MegaReelData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "fBi", "hBi"];
        this._megaReelConfig = this.getComponent(MegaReelConfig);
		super.onloadExtend();
	}
```
