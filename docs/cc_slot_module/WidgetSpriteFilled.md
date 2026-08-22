# WidgetSpriteFilled

> **Source Path**: `assets/cc-common/cc-slot-module/Components/UI/WidgetSpriteFilled.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WidgetSpriteFilled`** extends `Component`

## Key Methods
- `onLoad(): void`
- `update(): void`

## Source Implementation
```typescript
const { _decorator, Component, Sprite } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class WidgetSpriteFilled extends Component {
	_parentSprite: cc.Sprite = null;
	_parentUITransform: cc.Node = null; 

	onLoad(): void {
		this._parentSprite = this.node.parent.getComponent(Sprite);
		this._parentUITransform = this.node.parent;
	}

	update(dt: number): void {
		if (this._parentSprite && this._parentSprite.fillRange) {
			this.node.setPosition(this._parentSprite.fillRange * this._parentUITransform.width, this.node.position.y, 0);
		}
	}
}

```
