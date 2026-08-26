---
id: "game-implement:9666:module:UIManagerModule9666:methods:onDestroy"
title: "UIManagerModule9666.onDestroy Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "UIManagerModule9666", "uimanager_module9666", "methods", "onDestroy"]
---

# 📖 `UIManagerModule9666.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
public onDestroy(): void
```

- **Declaring Class**: `UIManagerModule9666` ([`UIManagerModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/UIManagerModule9666.ts))
- **Source Range**: Lines 18 to 24
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onDestroy(): void {
		if (this._trialModeLoopController) {
			this._trialModeLoopController.destroy();
			this._trialModeLoopController = null;
		}
		super.onDestroy();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **18** | `onDestroy(): void {` | Method entry signature declaring `onDestroy()` returning `void`. |
| **19** | `if (this._trialModeLoopController) {` | Conditional guard evaluating branching prerequisite. |
| **20** | `this._trialModeLoopController.destroy();` | Executes core logic. |
| **21** | `this._trialModeLoopController = null;` | Executes core logic. |
| **22** | `}` | Scope boundary closing block. |
| **23** | `super.onDestroy();` | Delegates to parent superclass lifecycle implementation. |
| **24** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as UIManagerModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onDestroy()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
