---
id: "cc_slot_module:PayTablePanel:methods:onDestroy"
title: "PayTablePanel.onDestroy Method"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `PayTablePanel.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
	this.observer.releaseAll(this.uiManagerData, this);
}
```
