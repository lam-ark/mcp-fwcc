---
id: "cc_slot_module:InfoPanel:methods:previous"
title: "InfoPanel.previous Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "previous"]
---

# 📖 `InfoPanel.previous()`

---

## 1. Method Overview & Signature

```typescript
public previous(): void
```

---

## 2. Complete Source Code Implementation

```typescript
previous(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.pageView.scrollToPage(this.curInfoID - 1, 0);
	this.curInfoID--;
	this.activeButtons(this.curInfoID);
}
```
