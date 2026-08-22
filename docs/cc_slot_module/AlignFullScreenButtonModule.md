# AlignFullScreenButtonModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/AlignFullScreenButtonModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AlignFullScreenButtonModule`** extends `Component`

## CC Properties
- `position`

## Key Methods
- `onLoad(): void`
- `start(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component, Enum } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class AlignFullScreenButtonModule extends Component {
	@property() position = eno.ALIGN_POSITION.TOP_RIGHT;

	_alignFullSceneButton: eno.AlignFullScreenButtonWrapper;

	onLoad(): void {
		this._alignFullSceneButton = new eno.AlignFullScreenButtonWrapper(this.position);
		this.node.on('UPDATE_POSITION', this._alignFullSceneButton.updatePosition, this);
	}

	start(): void {
		this._alignFullSceneButton.updatePosition();
	}

	onDestroy(): void {
		this._alignFullSceneButton && this._alignFullSceneButton.onDestroy();
	}
}
```
