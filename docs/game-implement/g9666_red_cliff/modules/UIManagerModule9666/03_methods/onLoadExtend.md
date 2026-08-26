---
id: "game-implement:9666:module:UIManagerModule9666:methods:onLoadExtend"
title: "UIManagerModule9666.onLoadExtend Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "UIManagerModule9666", "uimanager_module9666", "methods", "onLoadExtend"]
---

# 📖 `UIManagerModule9666.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `UIManagerModule9666` ([`UIManagerModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/UIManagerModule9666.ts))
- **Source Range**: Lines 11 to 16
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	onLoadExtend(): void {
		super.onLoadExtend();
		this._trialModeLoopController = new TrialModeLoopController9666(this.gameLogic);
		this._trialModeLoopController.install();
		this._registerDebugSendRQ();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **11** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` returning `void`. |
| **12** | `super.onLoadExtend();` | Delegates to parent superclass lifecycle implementation. |
| **13** | `this._trialModeLoopController = new TrialModeLoopController9666(this.gameLogic);` | Executes core logic. |
| **14** | `this._trialModeLoopController.install();` | Executes core logic. |
| **15** | `this._registerDebugSendRQ();` | Executes core logic. |
| **16** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as UIManagerModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call onLoadExtend()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return void
```
