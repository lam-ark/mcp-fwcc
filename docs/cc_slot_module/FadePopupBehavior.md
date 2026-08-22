# FadePopupBehavior

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Behavior/FadePopupBehavior.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FadePopupBehavior`** extends `PopupBehavior`

## Source Implementation
```typescript
const { _decorator } = cc;
import { PopupBehavior } from './PopupBehavior';
const { ccclass } = _decorator;

@ccclass
export class FadePopupBehavior extends PopupBehavior {
    showPopup(cb?: () => void): void {
        this.container.active = true;
        eno.setOpacity(this.container, 0);
        this.tweenPopupBehavior = eno.fadeIn(this.container, this.duration, {
            onComplete: () => {
                this.tweenPopupBehavior = null;
                cb && cb();
            }
        });
    }

    hidePopup(cb?: () => void): void {
        if (this.tweenPopupBehavior) {
            this.tweenPopupBehavior.stop();
            this.tweenPopupBehavior = null;
        }
        eno.setOpacity(this.container, 0);
        this.container.active = false;
        cb && cb();
    }
}

```
