---
id: "cc_slot_module:PaylineInfoModule:methods:onLoadExtend"
title: "PaylineInfoModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `PaylineInfoModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Registers event listeners for show/hide, populates symbol asset map, and localizes text.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on('ON_SHOW_PAYLINE_INFO', this.showPaylineInfo, this);
    this.eventManager.on('ON_HIDE_PAYLINE_INFO', this.hidePaylineInfo, this);

    this._symbolAssets = eno.CommonUtils.convertAssetArrayToObject(this.smallSymbolFrames, true);
    this.localizeText();
}
```
