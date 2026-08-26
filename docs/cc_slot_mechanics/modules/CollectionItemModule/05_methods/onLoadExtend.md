---
id: "cc_slot_mechanics:CollectionItemModule:methods:onLoadExtend"
title: "CollectionItemModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `CollectionItemModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `CollectionItemModule` (`assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModule.ts`)
- **Source Code Location**: Lines 19 to 27
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this._data = this.getComponent(CollectionItemData);
		this._config = this.getComponent(CollectionItemModuleConfig);
        
		this.moduleEvent.on('SHOW_COLLECTION_ITEM', this.showCollectionItem, this);
		this.moduleEvent.on('RESET_COLLECTION_ITEM', this.resetCollectionItem, this);

		this.init();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **19** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **20** | `this._data = this.getComponent(CollectionItemData);` | Queries attached component instance from scene graph node. |
| **21** | `this._config = this.getComponent(CollectionItemModuleConfig);` | Queries attached component instance from scene graph node. |
| **22** | `` | Applies operational logic and state mutation. |
| **23** | `this.moduleEvent.on('SHOW_COLLECTION_ITEM', this.showCollectionItem, this);` | Applies operational logic and state mutation. |
| **24** | `this.moduleEvent.on('RESET_COLLECTION_ITEM', this.resetCollectionItem, this);` | Applies operational logic and state mutation. |
| **25** | `` | Applies operational logic and state mutation. |
| **26** | `this.init();` | Applies operational logic and state mutation. |
| **27** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CollectionItemModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
