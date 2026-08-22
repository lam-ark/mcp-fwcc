# IntroFreeGameModule

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/IntroFreeGame/IntroFreeGameModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`IntroFreeGameModule`** extends `BaseCutscene`

## Key Methods
- `enter(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseCutscene } from '../BaseCutscene';
const { ccclass, property } = _decorator;

@ccclass
export class IntroFreeGameModule extends BaseCutscene {
    @property
    timeShow: number = 2;

    enter(): void {
		this.scheduleOnce(this.exit, this.timeShow);
	}
}


```
