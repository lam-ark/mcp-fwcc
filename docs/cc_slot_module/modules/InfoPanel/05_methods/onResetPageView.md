---
id: "cc_slot_module:InfoPanel:methods:onResetPageView"
title: "InfoPanel.onResetPageView Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onResetPageView"]
---

# 📖 `InfoPanel.onResetPageView()`

---

## 1. Method Overview & Signature

```typescript
public onResetPageView(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onResetPageView(): void {
	this.pageView.node.active = false;
	this.scheduleOnce(() => {
		this.pageView.node.active = true;
	});
}
```
