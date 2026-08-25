---
id: "cc_slot_module:AutoSpinPanel:methods:onDestroy"
title: "AutoSpinPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `AutoSpinPanel.onDestroy()`

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
