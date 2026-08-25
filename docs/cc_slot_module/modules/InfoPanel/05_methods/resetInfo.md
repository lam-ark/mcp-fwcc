---
id: "cc_slot_module:InfoPanel:methods:resetInfo"
title: "InfoPanel.resetInfo Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "resetInfo"]
---

# 📖 `InfoPanel.resetInfo()`

---

## 1. Method Overview & Signature

```typescript
public resetInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetInfo(): void {
	this.pageView.scrollToPage(0, 0);
	this.pageView._lastPageIdx = 0;
	this.curInfoID = 0;
	this.activeButtons(this.curInfoID);
	if (this.scrollView) {
		this.scrollView.scrollToTop(0);
	}
}
```
