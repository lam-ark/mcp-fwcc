---
id: "cc_slot_module:WinAmountTooltipModule:methods:onDestroy"
title: "WinAmountTooltipModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WinAmountTooltipModule.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.stopAllTweens();
	super.onDestroy();
}
```
