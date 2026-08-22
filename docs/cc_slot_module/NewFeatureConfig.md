# NewFeatureConfig

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/templates/scripts/NewFeatureConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NewFeatureConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component, Node } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class NewFeatureConfig extends Component {
	public readonly temp: number = 5;
}


```
