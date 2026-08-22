# TrialModeOption

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeOption.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TrialModeOption`** extends `Component`

## Key Methods
- `onLoad(): void`

## Source Implementation
```typescript
const { _decorator, Button, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class TrialModeOption extends Component {
	protected onLoad(): void {
		this.node.on('SET_INTERACTABLE', (interactable) => {
			this.node.getComponent(Button).interactable = interactable;
		});
	}
}


```
