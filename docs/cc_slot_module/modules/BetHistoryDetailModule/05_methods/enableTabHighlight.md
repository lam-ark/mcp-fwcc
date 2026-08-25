---
id: "cc_slot_module:BetHistoryDetailModule:methods:enableTabHighlight"
title: "BetHistoryDetailModule.enableTabHighlight Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "enableTabHighlight"]
---

# 📖 `BetHistoryDetailModule.enableTabHighlight()`

---

## 1. Method Overview & Signature

Highlights active tab node and scrolls ScrollView horizontally to centered offset.

```typescript
public enableTabHighlight(index: number): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by currentIndex observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
enableTabHighlight(index: number): void {
	if (!this.hasScrollView()) {
		return;
	}
	this.usingScrollItem.forEach((item) => {
		item.emit('ACTIVE_HIGHLIGHT', item["indexPage"] === index);
	});
	this.scrollView.stopAutoScroll();
	if (index >= 1 && index + 1 <= this.usingScrollItem.length) {
		const itemLength = this.usingScrollItem[0].width;
		const offsetX = (index - 1) * itemLength;
		this.scrollView.scrollToOffset(v2(offsetX, 0));
	} else if (index == 0) {
		this.scrollView.scrollToOffset(v2(0, 0));
	}
}
```
