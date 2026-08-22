# ScaleGameNodeModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/ScaleGameNodeModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ScaleGameNodeModule`** extends `cc`

## CC Properties
- `canvas`
- `standardDesignResolution`
- `customDesignResolution`

## Source Implementation
```typescript
const {ccclass, property} = cc._decorator;

@ccclass
export class ScaleGameNodeModule extends cc.Component {
    @property(cc.Canvas)
    canvas: cc.Canvas = null;
    @property(cc.Size)
    standardDesignResolution: cc.Size = new cc.Size(1280, 720);
    @property(cc.Size)
    customDesignResolution: cc.Size = new cc.Size(1560, 720);

    currentScale: number = 1;

    onLoad () {
        if(cc.game) {
            cc.game.on('FINISHED_UPDATE_VIEW', this.onResizeCanvas, this);
        }
        if(!this.canvas) {
            this.canvas = cc.find('Canvas').getComponent(cc.Canvas);
        }
        this.currentScale = this.node.scale;
    };

    start() {
        this.scaleNode();
    };

    onResizeCanvas() {
        this.scaleNode();
    };

    scaleNode() {
        if(!this.canvas || !this.node) {
            return;
        }
        const scale = Math.max(1, this.getScaleFactor());
        if(this.currentScale != scale) {
            this.node.scale = scale;
            this.currentScale = scale;
        }
    };

    getScaleFactor() {
        const frameSize = cc.view.getFrameSize();
        const standardDesignScaleRatio = this.standardDesignResolution.height / this.standardDesignResolution.width;
        let scaledRatio = 1;

        if(this.canvas.fitWidth) {
            const standardWidth = frameSize.width;
            const standardDesignScaledWidth = (this.standardDesignResolution.width / this.customDesignResolution.width) * standardWidth;
            const standardDesignScaledHeight = standardDesignScaleRatio * standardDesignScaledWidth;
            const widthRatio = frameSize.width / standardDesignScaledWidth;
            const heightRatio = frameSize.height / standardDesignScaledHeight;
            scaledRatio = Math.min(widthRatio, heightRatio);
        } else if(this.canvas.fitHeight) {
            const standardHeight = frameSize.height;
            const standardDesignScaledHeight = (this.standardDesignResolution.height / this.customDesignResolution.height) * standardHeight;
            const standardDesignScaledWidth = standardDesignScaledHeight / standardDesignScaleRatio;
            const widthRatio = frameSize.width / standardDesignScaledWidth;
            const heightRatio = frameSize.height / standardDesignScaledHeight;
            scaledRatio = Math.min(widthRatio, heightRatio);
        }
        cc.log(`getScaleFactor: ${scaledRatio}`);
        return scaledRatio;
    };

    onDestroy() {
        if(cc.game) {
            cc.game.off('FINISHED_UPDATE_VIEW', this.onResizeCanvas, this);
        }
    }
}

```
