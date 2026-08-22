# AutoScaleBackgroundModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/AutoScaleBackgroundModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoScaleBackground`** extends `Component`

## Key Methods
- `onLoad(): void`
- `start(): void`
- `scaleCanvasByOrientation(): void`
- `onDestroy(): void`
- `onScreenResized(): void`

## Source Implementation
```typescript
const { _decorator, Component, sys, view,} = cc;
const { ccclass, property } = _decorator;

@ccclass
export class AutoScaleBackground extends Component {
    _thisOnResized: any = null;
    onLoad(): void {
        this._thisOnResized = this.onScreenResized.bind(this);
        if (sys.isBrowser) {
            window.addEventListener('resize', this._thisOnResized);
        } else {
            view.on('canvas-resize', this._thisOnResized);
        }
    };

    start(): void {
        this.scaleCanvasByOrientation();
    }

    scaleCanvasByOrientation(): void {
        let widthBackground = 960;
        let heightBackground = 640;

        // let isPortrait = false;
        // if (widthView > heightView) {
        //     isPortrait = false; // landscape
        // } else {
        //     isPortrait = true;
        // }

        let heightDefaultCanvas = 1280;
        let widthView = cc.view.getFrameSize().width;
        let heightView = cc.view.getFrameSize().height;

        let scaleHeightDevice = heightView / heightDefaultCanvas;
        let scaleWidthDevice = widthView/ heightDefaultCanvas;

        let realScaleDevice = scaleHeightDevice > scaleWidthDevice ? scaleWidthDevice : scaleHeightDevice;

        let convertWithBG = widthBackground * realScaleDevice;
        let convertHeightBG = heightBackground * realScaleDevice;
        
        let ratioW = widthView / convertWithBG;
        let ratioH = heightView / convertHeightBG;

        if (ratioW > ratioH) {
            this.node.scale = ratioW;
        } else {
            this.node.scale = ratioH;
        }
    };

    onDestroy(): void {
        if (sys.isBrowser) {
            window.removeEventListener('resize', this._thisOnResized);
        } else {
            view.off('canvas-resize', this._thisOnResized);
        }
    };

    onScreenResized(): void {
        this.scaleCanvasByOrientation();
    };
}

```
