# GameDirectorMixin

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameDirectorMixin.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`NormalGameDirector9000`** extends `BaseGameDirector9000`
- **`extends`**

## Key Methods
- `_showCustomAction1(): Promise<void>`
- `_showCustomAction2(): Promise<void>`

## Source Implementation
```typescript
/**
 * BaseGameDirector9000 Mixin
 * Provide common features for NormalGameDirector9000 and FreeGameDirector9000
 * @example
 * export class NormalGameDirector9000 extends BaseGameDirector9000(NormalGameDirector) {
 *     // Custom methods
 * }
 */
export function BaseGameDirector9000<T extends new (...args: any[]) => any>(Base: T): T {
	return class extends Base {
		// Common methods for game 9000
		_showCustomAction1(): Promise<void> {
			return this.moduleEvent.emit("SHOW_CUSTOM_ACTION_1");
		}

		_showCustomAction2(): Promise<void> {
			return this.moduleEvent.emit("SHOW_CUSTOM_ACTION_2");
		}
	} as T;
}
```
