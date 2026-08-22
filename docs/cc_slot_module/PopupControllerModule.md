# PopupControllerModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/PopupControllerModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PopupControllerModule`** extends `Component`

## Key Methods
- `onLoad(): void`
- `isDisplayPopup(): boolean`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class PopupControllerModule extends Component {
	onLoad(): void {
		// Turn it on for entering onLoad
		this.node.children.forEach(child => {
			child.active = true;
		});
	}

	isDisplayPopup(): boolean {
		return this.node.children.some(child => child.active);
	}
}


```
