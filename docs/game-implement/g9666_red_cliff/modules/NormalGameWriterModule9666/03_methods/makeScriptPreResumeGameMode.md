---
id: "game-implement:9666:module:NormalGameWriterModule9666:methods:makeScriptPreResumeGameMode"
title: "NormalGameWriterModule9666.makeScriptPreResumeGameMode Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "normal_game_writer_module9666", "methods", "makeScriptPreResumeGameMode"]
---

# 📖 `NormalGameWriterModule9666.makeScriptPreResumeGameMode()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptPreResumeGameMode(): Object[]
```

- **Declaring Class**: `NormalGameWriterModule9666` ([`NormalGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts))
- **Source Range**: Lines 6 to 24
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptPreResumeGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_pauseWallet",
		});
		listScript.push({
			command: "_resumeNormalTable",
		});
		listScript.push({
			command: "_collectWildMultiplier",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		listScript.push({
			command: "_resumeWinAmount",
		});
		return listScript;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **6** | `makeScriptPreResumeGameMode(): Object[] {` | Method entry signature declaring `makeScriptPreResumeGameMode()` returning `Object[]`. |
| **7** | `let listScript = [];` | Allocates local variable `listScript`. |
| **8** | `listScript.push({` | Executes core logic. |
| **9** | `command: "_pauseWallet",` | Executes core logic. |
| **10** | `});` | Executes core logic. |
| **11** | `listScript.push({` | Executes core logic. |
| **12** | `command: "_resumeNormalTable",` | Executes core logic. |
| **13** | `});` | Executes core logic. |
| **14** | `listScript.push({` | Executes core logic. |
| **15** | `command: "_collectWildMultiplier",` | Executes core logic. |
| **16** | `});` | Executes core logic. |
| **17** | `listScript.push({` | Executes core logic. |
| **18** | `command: "_setUpPaylines",` | Executes core logic. |
| **19** | `});` | Executes core logic. |
| **20** | `listScript.push({` | Executes core logic. |
| **21** | `command: "_resumeWinAmount",` | Executes core logic. |
| **22** | `});` | Executes core logic. |
| **23** | `return listScript;` | Returns value or promise to calling sequence. |
| **24** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptPreResumeGameMode()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
