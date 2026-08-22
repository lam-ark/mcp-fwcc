# StackedReelConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/StackedReel/StackedReelConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`StackedReelConfig`** extends `Component`

## Key Methods
- `getStackedConfig(): StackedConfig | undefined`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

export interface StackedConfig {
	reel: number;
	startIndex: number[];
	stackedCount: number[];
	stackedSymbols: string[];
}

@ccclass
export class StackedReelConfig extends Component {
	public readonly STACKED_CONFIG: StackedConfig[] = [
		{
			reel: 0,
			startIndex: [0, 0, 0],
			stackedCount: [3, 3, 3],
			stackedSymbols: ['K', '2', '3']
		},
		{
			reel: 1,
			startIndex: [0, 0, 0],
			stackedCount: [3, 3, 3],
			stackedSymbols: ['K', '2', '3']
		},
		{
			reel: 2,
			startIndex: [0, 0, 0],
			stackedCount: [3, 3, 3],
			stackedSymbols: ['K', '2', '3']
		},
		{
			reel: 3,
			startIndex: [0, 0, 0],
			stackedCount: [3, 3, 3],
			stackedSymbols: ['K', '2', '3']
		},
		{
			reel: 4,
			startIndex: [0, 0, 0],
			stackedCount: [0, 0, 0],
			stackedSymbols: []
		}
	]

	getStackedConfig(reelIndex: number): StackedConfig | undefined {
		return this.STACKED_CONFIG.find(config => config.reel === reelIndex);
	}
}
```
