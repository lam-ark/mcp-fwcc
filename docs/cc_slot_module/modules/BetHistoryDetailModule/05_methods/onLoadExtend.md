---
id: "cc_slot_module:BetHistoryDetailModule:methods:onLoadExtend"
title: "BetHistoryDetailModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `BetHistoryDetailModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes event listeners, NodePool, and default view visibilities.

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked on node initialization.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.node.on("INIT_DETAIL_VIEW", this.initDetailView, this);
	this.eventManager.on(GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK, this.onScrollClick, this);
	this.scrollPool = new NodePool("ScrollHistoryPool");
	this.usingScrollItem = [];
	this.summaryView.active = false;
	this.gameModeView.active = false;
}
```
