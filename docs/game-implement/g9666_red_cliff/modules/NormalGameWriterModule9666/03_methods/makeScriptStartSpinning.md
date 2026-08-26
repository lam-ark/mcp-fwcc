---
id: "game-implement:9666:module:NormalGameWriterModule9666:methods:makeScriptStartSpinning"
title: "NormalGameWriterModule9666.makeScriptStartSpinning Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "normal_game_writer_module9666", "methods", "makeScriptStartSpinning"]
---

# 📖 `NormalGameWriterModule9666.makeScriptStartSpinning()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptStartSpinning(): Object[]
```

- **Declaring Class**: `NormalGameWriterModule9666` ([`NormalGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts))
- **Source Range**: Lines 26 to 35
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptStartSpinning(): Object[] {
		let listScript = [];
		listScript.push({
			command: '_resetMultiplier',
		})
		listScript.push({
			command: "_startSpinningTable",
		});
		return listScript;
	};
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **26** | `makeScriptStartSpinning(): Object[] {` | Method entry signature declaring `makeScriptStartSpinning()` returning `Object[]`. |
| **27** | `let listScript = [];` | Allocates local variable `listScript`. |
| **28** | `listScript.push({` | Executes core logic. |
| **29** | `command: '_resetMultiplier',` | Executes core logic. |
| **30** | `})` | Executes core logic. |
| **31** | `listScript.push({` | Executes core logic. |
| **32** | `command: "_startSpinningTable",` | Executes core logic. |
| **33** | `});` | Executes core logic. |
| **34** | `return listScript;` | Returns value or promise to calling sequence. |
| **35** | `};` | Executes core logic. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptStartSpinning()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
