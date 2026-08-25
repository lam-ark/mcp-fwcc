---
id: "cc_slot_module:InfoPanel:gotchas:01_pageview_content_offset_glitch"
title: "PageView Content Offset Glitch"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "gotchas", "pageview"]
---

# ⚠️ PageView Content Offset Glitch

---

## 1. Defect & Solution

In Cocos Creator 2.4, reopening a PageView from an inactive parent node can freeze page boundaries. Use the `onResetPageView` scheduling hack:

```typescript
onResetPageView(): void {
    this.pageView.node.active = false;
    this.scheduleOnce(() => {
        this.pageView.node.active = true;
    });
}
```
