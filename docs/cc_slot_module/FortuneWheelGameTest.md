# FortuneWheelGameTest

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/FortuneWheelGameTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelGameTest`** extends `SlotBaseModule`

## Key Methods
- `start(): void`
- `onStopButtonClick(): void`
- `onFastButtonClick(): void`
- `onResetButtonClick(): void`
- `updateTargetIndex(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../../Core/SlotBaseModule';
import { FortuneWheelGameDirector } from './Director/FortuneWheelGameDirector';
const { ccclass, property } = _decorator;

@ccclass
export class FortuneWheelGameTest extends SlotBaseModule {
    targetIndex = 1;

    start(): void {
        this.getComponentInChildren(FortuneWheelGameDirector).init();
    }

    onStopButtonClick(): void {
        this.getComponentInChildren(FortuneWheelGameDirector)._showWheelResult(this.targetIndex);
    }

    onFastButtonClick(): void {
        this.getComponentInChildren(FortuneWheelGameDirector)._fastStopWheel();
    }

    onResetButtonClick(): void {
        this.getComponentInChildren(FortuneWheelGameDirector).enter();
    }
    
    updateTargetIndex(evt): void {
        this.targetIndex = evt
    }
}


```
