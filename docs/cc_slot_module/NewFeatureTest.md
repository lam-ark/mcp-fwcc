# NewFeatureTest

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/templates/scripts/NewFeatureTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NewFeatureTest`** extends `Component`

## CC Properties
- `newFeature`

## Key Methods
- `onLoad(): void`

## Source Implementation
```typescript
const { _decorator, Component, Node } = cc;
import { NewFeatureModule } from './NewFeatureModule';
const { ccclass, property } = _decorator;

@ccclass
export class NewFeatureTest extends Component {
	@property({ type: NewFeatureModule })
	newFeature: NewFeatureModule = null;

	onLoad(): void {
		this.newFeature.newFeatureInit();
		this.scheduleOnce(() => {
			this.newFeature.newFeatureStart();
		}, 5);
	}
}


```
