# SlotTableModuleEnum

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModuleEnum.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Source Implementation
```typescript
export enum ReelSpinState {
	IDLE,
	START,
	SHOWING_RESULT,
	STOPPED,
}

export enum TableSpinState {
	READY,
	START,
	SHOWING_RESULT,
	STOPPING_IMMEDIATELY,
	STOPPED,
}

export enum ReelType {
	VERTICAL,
	HORIZONTAL
}

export enum TableModuleEvents {
	TABLE_INIT = "TABLE_INIT",
	TABLE_START_SPIN = "TABLE_START_SPIN",
	TABLE_STOP_SPIN = "TABLE_STOP_SPIN",
	TABLE_FAST_STOP = "TABLE_FAST_STOP",
	HIDE_SYMBOLS_ON_REEL = "HIDE_SYMBOLS_ON_REEL",
	RESET_TABLE = "RESET_TABLE",
	SYNC_TABLE = "SYNC_TABLE",
	REEL_STOPPED = "REEL_STOPPED",
	TABLE_STOP_SPIN_WITH_RANDOM_MATRIX = "TABLE_STOP_SPIN_WITH_RANDOM_MATRIX",
	SHOW_BEAUTY_MATRIX = "SHOW_BEAUTY_MATRIX",
}
```
