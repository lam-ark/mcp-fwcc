---
id: "cc_slot_module:BetSelectionPanel:gotchas:01_layout_unresolved_offset_jump_gotcha"
title: "Layout Unresolved Offset Jump Gotcha"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "gotchas", "layout"]
---

# ⚠️ Layout Unresolved Offset Jump Gotcha

---

## 1. Defect & Solution

Always call `layout.updateLayout()` before computing `calculateOffsetY` when opening the panel:

```typescript
updateLayout(): void {
    const layoutTotal = this.scrollViewTotal.getComponentInChildren(Layout);
    const layoutDenom = this.scrollViewDenom.getComponentInChildren(Layout);
    if (layoutTotal) layoutTotal.updateLayout();
    if (layoutDenom) layoutDenom.updateLayout();
}
```
