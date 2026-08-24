---
id: "cc_slot_module:BonusGameItemModule:method:playAnimOpen"
title: "BonusGameItemModule.playAnimOpen() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "method", "playAnimOpen", "tween"]
---

# `BonusGameItemModule.playAnimOpen(value: number, callback?: Function): void`

---

## 1. Method Signature
```typescript
public playAnimOpen(value: number, callback: Function = () => {}): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Stores `this.callback = callback`.
2. Sets `this.node["isOpen"] = true` and calls `this.disableClick()`.
3. Plays `soundBoxOpen` sound effect.
4. Activates `this.itemSprite.node.active = true` and assigns `this.itemSprite.spriteFrame = this.staticFrameAssets[value]`.
5. Cancels existing `tweenOpen` if active.
6. Launches reveal tween:
   * Waits `0.5s` delay.
   * Calls `this.showScore(value)`.
   * Waits `0.5s` delay.
   * Calls `this.callback()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playAnimOpen(value: number, callback: Function = () => {}): void {
    this.callback = callback;
    this.node["isOpen"] = true;
    this.disableClick();
    this.soundBoxOpen && this.soundPlayer && this.soundPlayer.playSfx(this.soundBoxOpen);
    this.itemSprite.node.active = true;
    this.itemSprite.spriteFrame = this.staticFrameAssets[value];

    if (this.tweenOpen) {
        this.tweenOpen.stop();
    }
    this.tweenOpen = tween(this.node)
        .delay(0.5)
        .call(() => {
            this.showScore(value);
        })
        .delay(0.5)
        .call(() => {
            this.callback && this.callback();
            this.callback = null;
            this.tweenOpen = null;
        });
    this.tweenOpen.start();
}
```
