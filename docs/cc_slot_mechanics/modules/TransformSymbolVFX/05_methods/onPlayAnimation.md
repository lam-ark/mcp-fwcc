---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:onPlayAnimation"
title: "TransformSymbolVFX.onPlayAnimation Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "onPlayAnimation"]
---

# 📖 `TransformSymbolVFX.onPlayAnimation()`

---

## 1. Method Signature & Overview

```typescript
public onPlayAnimation(): void
```

- **Declaring Class**: `TransformSymbolVFX` (`assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolVFX.ts`)
- **Source Code Location**: Lines 23 to 26
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onPlayAnimation(): void {
		this.skeleton.node.active = true;
		this.skeleton.setAnimation(0, this.animation, this.isLoop);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **23** | `onPlayAnimation(): void {` | Method entry signature declaring `onPlayAnimation()` with return type `void`. |
| **24** | `this.skeleton.node.active = true;` | Applies operational logic and state mutation. |
| **25** | `this.skeleton.setAnimation(0, this.animation, this.isLoop);` | Applies operational logic and state mutation. |
| **26** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TransformSymbolVFX
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onPlayAnimation()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
