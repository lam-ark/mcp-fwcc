---
id: "cc_slot_module:InfoPanel:methods:next"
title: "InfoPanel.next Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "next"]
---

# 📖 `InfoPanel.next()`

---

## 1. Method Overview & Signature

```typescript
public next(): void
```

---

## 2. Complete Source Code Implementation

```typescript
next(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.pageView.scrollToPage(this.curInfoID + 1, 0);
	this.curInfoID++;
	this.activeButtons(this.curInfoID);
}
```
