---
id: "cc_slot_module:AutoSpinPanel:methods:onLoadExtend"
title: "AutoSpinPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `AutoSpinPanel.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.setupObserver();
	this.init();
	super.onLoadExtend();
}
```
