---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:02_scrollview_offset_negative_bounce"
title: "ScrollView Offset Calculation Gotcha"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "scrollview"]
---

# ⚠️ ScrollView Offset Calculation Gotcha

---

## 1. Defect & Fix

When `index === 0`, calculating `(index - 1) * itemLength` produces a negative offset. Always branch on `index == 0` to explicitly scroll to `v2(0, 0)`:

```typescript
if (index >= 1 && index + 1 <= this.usingScrollItem.length) {
    const itemLength = this.usingScrollItem[0].width;
    const offsetX = (index - 1) * itemLength;
    this.scrollView.scrollToOffset(v2(offsetX, 0));
} else if (index == 0) {
    this.scrollView.scrollToOffset(v2(0, 0));
}
```
