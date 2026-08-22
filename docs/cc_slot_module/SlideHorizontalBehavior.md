# SlideHorizontalBehavior

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Behavior/SlideHorizontalBehavior.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlideHorizontalBehavior`** extends `PopupBehavior`

## CC Properties
- `direction`

## Key Methods
- `onLoadExtend(): void`

## Source Implementation
```typescript
const { _decorator, Enum, tween } = cc;
import { PopupBehavior } from './PopupBehavior';
const { ccclass, property } = _decorator;

const SlideDirection = Enum({
	LEFT_TO_RIGHT: 0,
    RIGHT_TO_LEFT: 1
});

@ccclass
export class SlideHorizontalBehavior extends PopupBehavior {
    @property
    slideDistance: number = 720;

    @property({ type: SlideDirection })
    direction = SlideDirection.RIGHT_TO_LEFT;

    private originalPos: cc.Vec2 = new cc.Vec2();
    private startPos: cc.Vec2 = new cc.Vec2();
    private endPos: cc.Vec2 = new cc.Vec2();

    onLoadExtend(): void {
        this.originalPos = this.container.position.clone();
        this.startPos = this.originalPos.clone();
        this.startPos.x += this.direction === SlideDirection.LEFT_TO_RIGHT ? -this.slideDistance : this.slideDistance;
        this.container.setPosition(this.startPos);

        this.endPos = this.originalPos.clone();
        this.endPos.x += this.direction === SlideDirection.LEFT_TO_RIGHT ? -this.slideDistance : this.slideDistance;
    }

    showPopup(cb?: () => void): void {
        this.container.setPosition(this.startPos);
        eno.setOpacity(this.container, 255);
        this.container.active = true;

        this.tweenPopupBehavior = tween(this.container)
            .to(this.duration, { position: this.originalPos })
            .call(() => {
                this.tweenPopupBehavior = null;
                cb && cb();
            })
            .start();
    }

    hidePopup(cb?: () => void): void {
        this.tweenPopupBehavior = tween(this.container)
            .to(this.duration, { position: this.endPos })
            .call(() => {
                eno.setOpacity(this.container, 0);
                this.container.active = false;
                this.tweenPopupBehavior = null;
                cb && cb();
            })
            .start();
    }
}

```
