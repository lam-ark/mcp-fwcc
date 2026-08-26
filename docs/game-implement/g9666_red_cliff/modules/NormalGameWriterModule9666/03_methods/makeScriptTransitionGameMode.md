---
id: "game-implement:9666:module:NormalGameWriterModule9666:methods:makeScriptTransitionGameMode"
title: "NormalGameWriterModule9666.makeScriptTransitionGameMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "normal_game_writer_module9666", "methods", "makeScriptTransitionGameMode"]
---

# 📖 `NormalGameWriterModule9666.makeScriptTransitionGameMode()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptTransitionGameMode(): Object[]
```

- **Declaring Class**: `NormalGameWriterModule9666` ([`NormalGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts))
- **Source Range**: Lines 106 to 115
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptTransitionGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_initJackpotCollection",
		});
		listScript.push({
			command: "_showTransitionGameMode",
		});
		return listScript;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **106** | `makeScriptTransitionGameMode(): Object[] {` | Method entry signature declaring `makeScriptTransitionGameMode()` returning `Object[]`. |
| **107** | `let listScript = [];` | Allocates local variable `listScript`. |
| **108** | `listScript.push({` | Executes core logic. |
| **109** | `command: "_initJackpotCollection",` | Executes core logic. |
| **110** | `});` | Executes core logic. |
| **111** | `listScript.push({` | Executes core logic. |
| **112** | `command: "_showTransitionGameMode",` | Executes core logic. |
| **113** | `});` | Executes core logic. |
| **114** | `return listScript;` | Returns value or promise to calling sequence. |
| **115** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptTransitionGameMode()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
