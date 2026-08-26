---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:onLoad"
title: "TransformSymbolVFX.onLoad Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "onLoad"]
---

# 📖 `TransformSymbolVFX.onLoad()`

---

## 1. Method Signature & Overview

```typescript
public onLoad(): void
```

- **Declaring Class**: `TransformSymbolVFX` (`assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolVFX.ts`)
- **Source Code Location**: Lines 11 to 21
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoad(): void {
		if (!this.skeleton) {
			this.skeleton = this.node.getComponent(sp.Skeleton);
		}

		if (this.skeleton) {
			this.node.on('PLAY_ANIMATION', this.onPlayAnimation, this);
			this.node.on('STOP_ANIMATION', this.onStopAnimation, this);
		}
		this.node.active = false;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **11** | `onLoad(): void {` | Method entry signature declaring `onLoad()` with return type `void`. |
| **12** | `if (!this.skeleton) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **13** | `this.skeleton = this.node.getComponent(sp.Skeleton);` | Queries attached component instance from scene graph node. |
| **14** | `}` | Method exit boundary, closing block scope. |
| **15** | `` | Applies operational logic and state mutation. |
| **16** | `if (this.skeleton) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **17** | `this.node.on('PLAY_ANIMATION', this.onPlayAnimation, this);` | Applies operational logic and state mutation. |
| **18** | `this.node.on('STOP_ANIMATION', this.onStopAnimation, this);` | Applies operational logic and state mutation. |
| **19** | `}` | Method exit boundary, closing block scope. |
| **20** | `this.node.active = false;` | Applies operational logic and state mutation. |
| **21** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TransformSymbolVFX
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoad()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
