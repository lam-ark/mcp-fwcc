---
id: "game-implement:9666:module:BackgroundGroupModule9666:methods:onDestroy"
title: "BackgroundGroupModule9666.onDestroy Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BackgroundGroupModule9666", "background_group_module9666", "methods", "onDestroy"]
---

# 📖 `BackgroundGroupModule9666.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
public onDestroy(): void
```

- **Declaring Class**: `BackgroundGroupModule9666` ([`BackgroundGroupModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackgroundGroupModule9666.ts))
- **Source Range**: Lines 47 to 49
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onDestroy(): void {
		this.eventManager.targetOff(this);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **47** | `onDestroy(): void {` | Method entry signature declaring `onDestroy()` returning `void`. |
| **48** | `this.eventManager.targetOff(this);` | Executes core logic. |
| **49** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as BackgroundGroupModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onDestroy()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
