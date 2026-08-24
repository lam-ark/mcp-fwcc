---
id: "cc_slot_module:BonusGameItemModule:method:onClickItem"
title: "BonusGameItemModule.onClickItem() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "method", "onClickItem", "bubbling"]
---

# `BonusGameItemModule.onClickItem(_e: any, isAutoTrigger?: boolean): void`

---

## 1. Method Signature
```typescript
public onClickItem(_e: any, isAutoTrigger: boolean = false): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. If `this.node["isOpen"]` is already `true`, ignores touch and returns.
2. Constructs a bubbling `SlotCustomEvent`:
   `let event = new SlotCustomEvent("CLICK_ITEM", true, { itemId: this.itemId, isAutoTrigger });`
3. Dispatches event up the node hierarchy: `this.node.dispatchEvent(event)`.
4. Flags `this.isSelected = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onClickItem(_e: any, isAutoTrigger: boolean = false): void {
    if (this.node["isOpen"]) {
        return;
    }
    let event = new SlotCustomEvent("CLICK_ITEM", true, { itemId: this.itemId, isAutoTrigger });
    this.node.dispatchEvent(event);
    this.isSelected = true;
}
```
