---
id: "cc_slot_module:BonusGameItemModule:methods:index"
title: "BonusGameItemModule Methods Index"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "methods", "index"]
---

# 📋 BonusGameItemModule Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`init(itemId: number): void`](./init.md)** | `public` | Initializes item index and resets UI state. |
| **[`onClickItem(_e: any, isAutoTrigger?: boolean): void`](./onClickItem.md)** | `public` | Handles tap input and bubbles `CLICK_ITEM` event to parent director. |
| **[`playAnimOpen(value: number, callback?: Function): void`](./playAnimOpen.md)** | `public` | Plays open SFX, assigns sprite frame, and runs timed reveal tween. |
| **[`dim(): void`](./dim.md)** | `public` | Sets `itemSprite.node.color = this.colorDim`. |
| **[`undim(): void`](./undim.md)** | `public` | Restores `itemSprite.node.color = this.colorNormal`. |
| **[`resetBoxUI(): void`](./resetBoxUI.md)** | `public` | Hides item sprite, marks `isOpen = false`, and restores untinted color. |
| **[`enableClick(): void`](./enableClick.md)** | `public` | Enables `cc.Button.interactable = true` if box is unopened. |
| **[`disableClick(): void`](./disableClick.md)** | `public` | Disables `cc.Button.interactable = false`. |
