---
id: "cc_slot_mechanics:CascadeWildGenerationData:methods:onloadExtend"
title: "CascadeWildGenerationData.onloadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `CascadeWildGenerationData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onloadExtend(): void
```

- **Declaring Class**: `CascadeWildGenerationData` (`assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationData.ts`)
- **Source Code Location**: Lines 24 to 28
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix", "wildAppearPosition"];
		super.onloadExtend();
		this.cascadeWildGenerationConfig = this.getComponent(CascadeWildGenerationConfig);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **24** | `onloadExtend(): void {` | Method entry signature declaring `onloadExtend()` with return type `void`. |
| **25** | `this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix", "wildAppearPosition"];` | Applies operational logic and state mutation. |
| **26** | `super.onloadExtend();` | Applies operational logic and state mutation. |
| **27** | `this.cascadeWildGenerationConfig = this.getComponent(CascadeWildGenerationConfig);` | Queries attached component instance from scene graph node. |
| **28** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CascadeWildGenerationData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onloadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
