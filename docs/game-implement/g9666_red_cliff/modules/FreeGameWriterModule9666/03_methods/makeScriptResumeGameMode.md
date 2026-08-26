---
id: "game-implement:9666:module:FreeGameWriterModule9666:methods:makeScriptResumeGameMode"
title: "FreeGameWriterModule9666.makeScriptResumeGameMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameWriterModule9666", "free_game_writer_module9666", "methods", "makeScriptResumeGameMode"]
---

# 📖 `FreeGameWriterModule9666.makeScriptResumeGameMode()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptResumeGameMode(): Object[]
```

- **Declaring Class**: `FreeGameWriterModule9666` ([`FreeGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts))
- **Source Range**: Lines 7 to 28
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptResumeGameMode(): Object[] {
		let listScript = super.makeScriptResumeGameMode();
		listScript.push({
			command: "_collectWildMultiplier",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		listScript.push({
			command: "_resumeFreeTable",
		});
		listScript.push({
			command: "_resumeWinAmount",
		});
		listScript.push({
			command: "_initJackpotCollection",
		});
		listScript.push({
			command: "_showAllPaylines",
		});
		return listScript;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **7** | `makeScriptResumeGameMode(): Object[] {` | Method entry signature declaring `makeScriptResumeGameMode()` returning `Object[]`. |
| **8** | `let listScript = super.makeScriptResumeGameMode();` | Allocates local variable `listScript`. |
| **9** | `listScript.push({` | Executes core logic. |
| **10** | `command: "_collectWildMultiplier",` | Executes core logic. |
| **11** | `});` | Executes core logic. |
| **12** | `listScript.push({` | Executes core logic. |
| **13** | `command: "_setUpPaylines",` | Executes core logic. |
| **14** | `});` | Executes core logic. |
| **15** | `listScript.push({` | Executes core logic. |
| **16** | `command: "_resumeFreeTable",` | Executes core logic. |
| **17** | `});` | Executes core logic. |
| **18** | `listScript.push({` | Executes core logic. |
| **19** | `command: "_resumeWinAmount",` | Executes core logic. |
| **20** | `});` | Executes core logic. |
| **21** | `listScript.push({` | Executes core logic. |
| **22** | `command: "_initJackpotCollection",` | Executes core logic. |
| **23** | `});` | Executes core logic. |
| **24** | `listScript.push({` | Executes core logic. |
| **25** | `command: "_showAllPaylines",` | Executes core logic. |
| **26** | `});` | Executes core logic. |
| **27** | `return listScript;` | Returns value or promise to calling sequence. |
| **28** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptResumeGameMode()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
