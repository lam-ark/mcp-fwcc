# CompositeCascadeConfig

> **Source Path**: `assets/cc-common/cc-slot-features/CompositeCascade/scripts/CompositeCascadeConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-features`.

## Classes
- **`export`**
- **`CompositeCascadeConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component, Node } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class CompositeCascadeConfig extends Component {
	public readonly HORIZONTAL_SYMBOL_INDEXES: number[] = [4, 9, 14, 19];

}


```
