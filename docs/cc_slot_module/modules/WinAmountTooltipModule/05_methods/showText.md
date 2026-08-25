---
id: "cc_slot_module:WinAmountTooltipModule:methods:showText"
title: "WinAmountTooltipModule.showText Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showText", "tween", "infinite_ticker"]
---

# 📖 `WinAmountTooltipModule.showText()`

---

## 1. Method Overview & Signature

Initiates an infinite horizontal sliding ticker loop for promotional feature hints across portrait slot headers.

```typescript
public showText(): void
```

---

## 2. Trigger Source & Execution Context

- **Trigger**: Called on scene load, upon receiving `SHOW_TOOLTIP_TEXT` event, on `JOIN_GAME_SUCCESS` without pending wins, or after `hideTooltip()` clears a win presentation.
- **Guard**: Immediately aborts if `_currentType === TOOL_TIP_TYPE.WIN_AMOUNT` to ensure winning count-up animations take top priority.

---

## 3. Sequence Animation Breakdown

1. **State Mutation**: Sets `this._currentType = TOOL_TIP_TYPE.TEXT` and stops previous running tweens (`stopAllTweens()`).
2. **Content Extraction**: Fetches current item from `featureSfs[this._currentIndex]`, reads `featureSf` and `width`, and increments `_currentIndex = (_currentIndex + 1) % featureSfs.length`.
3. **Reset Coordinates & Opacity**: Places `featureSprite.node` at `cc.Vec3.ZERO` with opacity 0.
4. **Tween Sequence Chaining**:
   - **Fade In**: Calls `eno.fadeIn(tip, this.fadeTime)` (0.5s).
   - **Hold**: `delay(this.delayTime)` (1.5s pause at center).
   - **Slide Out**: `to(this.movingTime, { position: new cc.Vec2(-width, 0) })` (5.0s linear translation).
   - **Recursion**: On completion, cleans up tween handles and invokes `this.showText()` recursively to display the next feature tip.

---

## 4. Complete Source Code Implementation

```typescript
showText(): void {
    if (this._currentType === TOOL_TIP_TYPE.WIN_AMOUNT) {
        return;
    }
    this._currentType = TOOL_TIP_TYPE.TEXT;
    this.stopAllTweens();
    this.hideWinAmount();
    this.featureSprite.node.active = true;

    const featureText = this.featureSfs[this._currentIndex];
    const spriteFrame = featureText.featureSf;
    const endX = -featureText.width;

    this.featureSprite.spriteFrame = spriteFrame;
    this._currentIndex = (this._currentIndex + 1) % this.featureSfs.length;

    const tip = this.featureSprite.node;
    tip.setPosition(cc.Vec3.ZERO);
    eno.setOpacity(tip, 0);
    this._currentTween = tween(tip)
        .call(() => {
            this._tweenFade = eno.fadeIn(tip, this.fadeTime);
        })
        .delay(this.delayTime)
        .to(this.movingTime, { position: new cc.Vec2(endX, 0) })
        .call(() => {
            eno.setOpacity(tip, 255);

            this._tweenFade = null;
            this._currentTween = null;
            this.showText();
        })
        .start();
}
```
