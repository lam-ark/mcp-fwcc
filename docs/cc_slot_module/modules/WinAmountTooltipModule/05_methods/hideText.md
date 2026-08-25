---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideText"
title: "WinAmountTooltipModule.hideText Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideText"]
---

# 📖 `WinAmountTooltipModule.hideText()`

---

## 1. Method Overview & Signature

```typescript
public hideText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideText(): void {
	this.winTextSprite.node.active = false;
	this.featureSprite.node.active = false;
}
```
