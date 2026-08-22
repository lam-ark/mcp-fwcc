# SingleSlideDrawer

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Drawer/SingleSlideDrawer.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SingleSliceDrawer`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Color, Component, Graphics } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class SingleSliceDrawer extends Component {
    @property
    radius: number = 200;
    @property
    totalSegments: number = 12;

    sliceColor: cc.Color = cc.Color.WHITE;
    graphics: cc.Graphics = null;
    onLoad() {
        this.graphics = this.getComponent(Graphics);
        this.node.on("INIT", this.init, this);
    }

    // start() {
    //     this.drawSingleSlice();
    // }
    init(index) {
        this.sliceColor = index % 2 ? Color.GRAY : Color.WHITE;
        this.drawSingleSlice();
    }

    drawSingleSlice() {
        if (!this.graphics) return;
        this.graphics.clear();
        if (this.totalSegments <= 0) return;
        const anglePerSegment = (2 * Math.PI) / this.totalSegments;
        const anglePerItem = 180 / this.totalSegments;
        this.graphics.fillColor = this.sliceColor;
        this.graphics.moveTo(0, 0);
        this.graphics.arc(0, 0, this.radius, anglePerSegment, 0);
        this.graphics.lineTo(0, 0);
        this.graphics.fill();
    }
}
```
