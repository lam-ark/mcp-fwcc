# DisableMultiTouch

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/DisableMultiTouch.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`DisableMultiTouch`** extends `Component`

## Key Methods
- `start(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component, macro } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class DisableMultiTouch extends Component {
	_canMultiTouch: boolean = false;

	start(): void {}

	onDestroy(): void {}
}


```
