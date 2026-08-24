---
id: "cc_slot_module:BonusGameItemModule:customization:production_game_case_study"
title: "Production Case Study: Dynamic Sprite Mapping in Pick Items"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Dynamic Sprite Mapping in Pick Items

## 1. Context & Frame Resolution

`BonusGameItemModule` initializes its asset dictionary in `onLoad()`:

```typescript
for (const frame of this.itemSfList) {
    this.staticFrameAssets[frame.symbolId] = frame.symbolSf;
}
```
When `BOX_OPEN` is received with value `500`, it immediately switches `itemSprite.spriteFrame = this.staticFrameAssets[500]`, avoiding runtime asynchronous asset loads.
