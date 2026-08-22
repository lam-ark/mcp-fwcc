# SlidePopupBehavior

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Behavior/SlidePopupBehavior.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlideUpBehavior`** extends `PopupBehavior`

## Key Methods
- `onLoadExtend(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { PopupBehavior } from './PopupBehavior';
const { ccclass, property } = _decorator;

@ccclass
export class SlideUpBehavior extends PopupBehavior {
    @property
    slideDistance: number = 1280;

    private originalPos: cc.Vec2 = new cc.Vec2();
    private startPos: cc.Vec2 = new cc.Vec2();
    private endPos: cc.Vec2 = new cc.Vec2();

    onLoadExtend(): void {
        this.originalPos = this.container.position.clone();
        this.startPos = this.originalPos.clone();
        this.startPos.y -= this.slideDistance;
        this.container.setPosition(this.startPos);
        this.endPos = this.originalPos.clone();
        this.endPos.y -= this.slideDistance;
    }

    showPopup(cb?: () => void): void {
        this.container.setPosition(this.startPos);
        this.container.active = true;
        eno.setOpacity(this.container, 255);

        this.tweenPopupBehavior && this.tweenPopupBehavior.stop();
        this.tweenPopupBehavior = tween(this.container)
            .to(this.duration, { position: this.originalPos })
            .call(() => {
                this.tweenPopupBehavior = null;
                cb && cb();
            })
            .start();
    }

    hidePopup(cb?: () => void): void {
        this.tweenPopupBehavior && this.tweenPopupBehavior.stop();
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
