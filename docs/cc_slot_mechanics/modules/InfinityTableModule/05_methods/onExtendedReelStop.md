---
id: "cc_slot_mechanics:InfinityTableModule:methods:onExtendedReelStop"
title: "InfinityTableModule.onExtendedReelStop Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "onExtendedReelStop"]
---

# 📖 `InfinityTableModule.onExtendedReelStop()`

---

## 1. Method Signature & Overview

```typescript
public onExtendedReelStop(reelIndex: number): void
```

- **Declaring Class**: `InfinityTableModule` (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableModule.ts`)
- **Source Code Location**: Lines 169 to 176
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected onExtendedReelStop(reelIndex: number): void {
		this.onReelStopExtend(reelIndex);
		if (this.moduleEvent) {
			this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.extendedReels[this.currentReelExtended - 1].getResultSymbols());
		}
		this.reelCount++;
        this.onChangeState(TableSpinState.STOPPED);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **169** | `protected onExtendedReelStop(reelIndex: number): void {` | Method entry signature declaring `onExtendedReelStop(reelIndex: number)` with return type `void`. |
| **170** | `this.onReelStopExtend(reelIndex);` | Applies operational logic and state mutation. |
| **171** | `if (this.moduleEvent) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **172** | `this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.extendedReels[this.currentReelExtended - 1].getResultSymbols());` | Dispatches event to subscribers on the event bus. |
| **173** | `}` | Method exit boundary, closing block scope. |
| **174** | `this.reelCount++;` | Applies operational logic and state mutation. |
| **175** | `this.onChangeState(TableSpinState.STOPPED);` | Applies operational logic and state mutation. |
| **176** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InfinityTableModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onExtendedReelStop(reelIndex: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
