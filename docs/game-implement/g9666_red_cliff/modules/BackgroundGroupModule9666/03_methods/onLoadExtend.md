---
id: "game-implement:9666:module:BackgroundGroupModule9666:methods:onLoadExtend"
title: "BackgroundGroupModule9666.onLoadExtend Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BackgroundGroupModule9666", "background_group_module9666", "methods", "onLoadExtend"]
---

# 📖 `BackgroundGroupModule9666.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `BackgroundGroupModule9666` ([`BackgroundGroupModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackgroundGroupModule9666.ts))
- **Source Range**: Lines 22 to 24
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, this.onUpdateGameMode, this);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **22** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` returning `void`. |
| **23** | `this.eventManager.on(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, this.onUpdateGameMode, this);` | Subscribes listener for `Event` event. |
| **24** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as BackgroundGroupModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onLoadExtend()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
