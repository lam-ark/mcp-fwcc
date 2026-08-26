---
id: "cc_slot_mechanics:ClusterModuleData:methods:onloadExtend"
title: "ClusterModuleData.onloadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `ClusterModuleData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onloadExtend(): void
```

- **Declaring Class**: `ClusterModuleData` (`assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleData.ts`)
- **Source Code Location**: Lines 19 to 23
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix"];
		super.onloadExtend();
		this.clusterModuleConfig = this.getComponent(ClusterModuleConfig);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **19** | `onloadExtend(): void {` | Method entry signature declaring `onloadExtend()` with return type `void`. |
| **20** | `this.registeredKeys = [...this.registeredKeys, "formatMatrix", "normalFormatMatrix", "freeFormatMatrix"];` | Applies operational logic and state mutation. |
| **21** | `super.onloadExtend();` | Applies operational logic and state mutation. |
| **22** | `this.clusterModuleConfig = this.getComponent(ClusterModuleConfig);` | Queries attached component instance from scene graph node. |
| **23** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as ClusterModuleData
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
