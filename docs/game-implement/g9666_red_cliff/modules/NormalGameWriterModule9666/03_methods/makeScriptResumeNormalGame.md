---
id: "game-implement:9666:module:NormalGameWriterModule9666:methods:makeScriptResumeNormalGame"
title: "NormalGameWriterModule9666.makeScriptResumeNormalGame Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "normal_game_writer_module9666", "methods", "makeScriptResumeNormalGame"]
---

# 📖 `NormalGameWriterModule9666.makeScriptResumeNormalGame()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptResumeNormalGame(): Object[]
```

- **Declaring Class**: `NormalGameWriterModule9666` ([`NormalGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts))
- **Source Range**: Lines 38 to 47
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptResumeNormalGame(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showAllPaylines",
		});
		listScript.push({
			command: '_resetMultiplier',
		})
		return listScript;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **38** | `makeScriptResumeNormalGame(): Object[] {` | Method entry signature declaring `makeScriptResumeNormalGame()` returning `Object[]`. |
| **39** | `let listScript = [];` | Allocates local variable `listScript`. |
| **40** | `listScript.push({` | Executes core logic. |
| **41** | `command: "_showAllPaylines",` | Executes core logic. |
| **42** | `});` | Executes core logic. |
| **43** | `listScript.push({` | Executes core logic. |
| **44** | `command: '_resetMultiplier',` | Executes core logic. |
| **45** | `})` | Executes core logic. |
| **46** | `return listScript;` | Returns value or promise to calling sequence. |
| **47** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptResumeNormalGame()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
