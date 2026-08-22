# PopupBehavior

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Behavior/PopupBehavior.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PopupBehavior`** extends `Component`

## CC Properties
- `container`

## Key Methods
- `onLoad(): void`
- `onLoadExtend(): void`
- `start(): void`
- `activePopup(): void`
- `isPlaying(): boolean`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class PopupBehavior extends Component {
    @property(cc.Node)
	container: cc.Node = null;
    @property
    duration: number = 0.3;

    tweenPopupBehavior: any = null;

    protected onLoad(): void {
        if (!this.container) {
            this.container = this.node;
        }
        this.onLoadExtend();
    }

    onLoadExtend(): void {}

    protected start(): void {
        this.container.active = false;
        eno.setOpacity(this.container, 0);
    }

    showPopup(cb?: () => void): void {
        this.container.active = true;
        eno.setOpacity(this.container, 255);
        cb && cb();
    }

    hidePopup(cb?: () => void): void {
        this.container.active = false;
        eno.setOpacity(this.container, 0);
        cb && cb();
    }

    activePopup(isActive: boolean): void {
        eno.setOpacity(this.container, isActive ? 255 : 0);
        this.container.active = isActive;
    }

    isPlaying(): boolean {
        return !!this.tweenPopupBehavior === true;
    }

    protected onDestroy(): void {
        this.tweenPopupBehavior && this.tweenPopupBehavior.stop();
    }
}


```
