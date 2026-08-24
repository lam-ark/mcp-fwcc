---
id: "cc_slot_module:BonusGameDirectorModule:method:onClickItem"
title: "BonusGameDirectorModule.onClickItem() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "method", "onClickItem", "pick", "SEND_BONUS_GAME_REQUEST"]
---

# `BonusGameDirectorModule.onClickItem(evt: SlotCustomEvent): void`

---

## 1. Method Signature
```typescript
public onClickItem(evt: SlotCustomEvent): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Halts propagation: `evt.stopPropagation()`.
2. Extracts `{ itemId, isAutoTrigger } = evt.details`.
3. Validates pick: `if (this.checkOpenedBox(itemId)) return;`.
4. Blocks further touches: `this.blockBonusGame()`.
5. Records ID: `this.addItemToOpenBoxes(itemId)`.
6. Resets timer if manual pick: `this.resetCountDown()`.
7. Sends backend request: `this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, itemId)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onClickItem(evt: SlotCustomEvent): void {
    evt.stopPropagation();
    const { itemId, isAutoTrigger } = evt.details;
    if (this.checkOpenedBox(itemId)) {
        return;
    }
    this.blockBonusGame();
    this.addItemToOpenBoxes(itemId);
    if (!isAutoTrigger) {
        this.setAutoOpen(false);
        this.resetCountDown();
    }
    this.selectedBox = itemId;
    this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, itemId);
}
```
