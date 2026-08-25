---
id: "cc_slot_module:InfoPanel:methods:pageViewEvent"
title: "InfoPanel.pageViewEvent Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "pageViewEvent"]
---

# 📖 `InfoPanel.pageViewEvent()`

---

## 1. Method Overview & Signature

```typescript
public pageViewEvent(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pageViewEvent(): void {
	let newIndex = this.pageView.getCurrentPageIndex();
	if (Math.abs(newIndex - this.curInfoID) !== 1) {
		this.pageView.scrollToPage(this.curInfoID, 0.1);
		return;
	}
	this.curInfoID = newIndex;
	this.activeButtons(this.curInfoID);
}
```
