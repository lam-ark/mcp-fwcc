---
id: "cc_slot_module:InfoPanel:methods:onDestroy"
title: "InfoPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `InfoPanel.onDestroy()`

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
