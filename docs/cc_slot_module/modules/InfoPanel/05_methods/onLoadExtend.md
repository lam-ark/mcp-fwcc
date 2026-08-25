---
id: "cc_slot_module:InfoPanel:methods:onLoadExtend"
title: "InfoPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `InfoPanel.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.node.on("NEXT_GAME_INFO", this.next, this);
	this.node.on("PREVIOUS_GAME_INFO", this.previous, this);
	this.curInfoID = 0;
	this.pageView.node.on("page-turning", this.pageViewEvent, this);
	this.activeButtons(this.curInfoID);
	this.setupObserver();
	super.onLoadExtend();
}
```
