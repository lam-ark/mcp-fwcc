---
id: "game-implement:9666:module:FreeGameWriterModule9666:methods:makeScriptStopRespinningTable"
title: "FreeGameWriterModule9666.makeScriptStopRespinningTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameWriterModule9666", "free_game_writer_module9666", "methods", "makeScriptStopRespinningTable"]
---

# 📖 `FreeGameWriterModule9666.makeScriptStopRespinningTable()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptStopRespinningTable(): Object[]
```

- **Declaring Class**: `FreeGameWriterModule9666` ([`FreeGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts))
- **Source Range**: Lines 76 to 100
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	makeScriptStopRespinningTable(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showRespinResultEntry",
		});
		listScript.push({
			command: "_stopRespinningTable",
		});
		listScript.push({
			command: "_syncStackWild",
		});
		listScript.push({
			command: "_collectWildMultiplier",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		listScript.push({
			command: "_syncJackpotCollection",
		});
		listScript.push({
			command: "_showRespinResultFinal",
		});
		return listScript;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **76** | `makeScriptStopRespinningTable(): Object[] {` | Method entry signature declaring `makeScriptStopRespinningTable()` returning `Object[]`. |
| **77** | `let listScript = [];` | Allocates local variable `listScript`. |
| **78** | `listScript.push({` | Executes core logic. |
| **79** | `command: "_showRespinResultEntry",` | Executes core logic. |
| **80** | `});` | Executes core logic. |
| **81** | `listScript.push({` | Executes core logic. |
| **82** | `command: "_stopRespinningTable",` | Executes core logic. |
| **83** | `});` | Executes core logic. |
| **84** | `listScript.push({` | Executes core logic. |
| **85** | `command: "_syncStackWild",` | Executes core logic. |
| **86** | `});` | Executes core logic. |
| **87** | `listScript.push({` | Executes core logic. |
| **88** | `command: "_collectWildMultiplier",` | Executes core logic. |
| **89** | `});` | Executes core logic. |
| **90** | `listScript.push({` | Executes core logic. |
| **91** | `command: "_setUpPaylines",` | Executes core logic. |
| **92** | `});` | Executes core logic. |
| **93** | `listScript.push({` | Executes core logic. |
| **94** | `command: "_syncJackpotCollection",` | Executes core logic. |
| **95** | `});` | Executes core logic. |
| **96** | `listScript.push({` | Executes core logic. |
| **97** | `command: "_showRespinResultFinal",` | Executes core logic. |
| **98** | `});` | Executes core logic. |
| **99** | `return listScript;` | Returns value or promise to calling sequence. |
| **100** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as FreeGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptStopRespinningTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
