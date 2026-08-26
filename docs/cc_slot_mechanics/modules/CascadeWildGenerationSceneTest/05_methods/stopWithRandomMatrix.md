---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:methods:stopWithRandomMatrix"
title: "CascadeWildGenerationSceneTest.stopWithRandomMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `CascadeWildGenerationSceneTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
public stopWithRandomMatrix(): void
```

- **Declaring Class**: `CascadeWildGenerationSceneTest` (`assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationSceneTest.ts`)
- **Source Code Location**: Lines 25 to 39
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            const cascadeData = this.cascadeModule.getComponent(CascadeWildGenerationData);
            cascadeData["matrix"] = slotData["matrix"];
            cascadeData["traceWay"] = [1, 3, 7, 8];
            cascadeData["wildAppearPosition"] = "11:11";
            this.cascadeModule.startRespinHandler();
			this.stopRespin();
		}, 4);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **25** | `stopWithRandomMatrix(): void {` | Method entry signature declaring `stopWithRandomMatrix()` with return type `void`. |
| **26** | `const slotData = this.table.getComponent(SlotTableData);` | Local variable initialization allocating `slotData`. |
| **27** | `slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);` | Applies operational logic and state mutation. |
| **28** | `this.table.stopSpin();` | Applies operational logic and state mutation. |
| **29** | `` | Applies operational logic and state mutation. |
| **30** | `this.scheduleOnce(() => {` | Schedules delayed execution callback using Cocos Creator timer. |
| **31** | `// fake respin` | Applies operational logic and state mutation. |
| **32** | `const cascadeData = this.cascadeModule.getComponent(CascadeWildGenerationData);` | Local variable initialization allocating `cascadeData`. |
| **33** | `cascadeData["matrix"] = slotData["matrix"];` | Applies operational logic and state mutation. |
| **34** | `cascadeData["traceWay"] = [1, 3, 7, 8];` | Applies operational logic and state mutation. |
| **35** | `cascadeData["wildAppearPosition"] = "11:11";` | Applies operational logic and state mutation. |
| **36** | `this.cascadeModule.startRespinHandler();` | Applies operational logic and state mutation. |
| **37** | `this.stopRespin();` | Applies operational logic and state mutation. |
| **38** | `}, 4);` | Applies operational logic and state mutation. |
| **39** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CascadeWildGenerationSceneTest
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke stopWithRandomMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
