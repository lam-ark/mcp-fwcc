---
id: "game-implement:9666:module:NormalGameWriterModule9666:methods:makeScriptStopRespinningTable"
title: "NormalGameWriterModule9666.makeScriptStopRespinningTable Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameWriterModule9666", "normal_game_writer_module9666", "methods", "makeScriptStopRespinningTable"]
---

# 📖 `NormalGameWriterModule9666.makeScriptStopRespinningTable()`

---

## 1. Method Signature & Overview

```typescript
public makeScriptStopRespinningTable(): Object[]
```

- **Declaring Class**: `NormalGameWriterModule9666` ([`NormalGameWriterModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameWriterModule9666.ts))
- **Source Range**: Lines 71 to 92
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
			command: "_showRespinResultFinal",
		});
		return listScript;
	};
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **71** | `makeScriptStopRespinningTable(): Object[] {` | Method entry signature declaring `makeScriptStopRespinningTable()` returning `Object[]`. |
| **72** | `let listScript = [];` | Allocates local variable `listScript`. |
| **73** | `listScript.push({` | Executes core logic. |
| **74** | `command: "_showRespinResultEntry",` | Executes core logic. |
| **75** | `});` | Executes core logic. |
| **76** | `listScript.push({` | Executes core logic. |
| **77** | `command: "_stopRespinningTable",` | Executes core logic. |
| **78** | `});` | Executes core logic. |
| **79** | `listScript.push({` | Executes core logic. |
| **80** | `command: "_syncStackWild",` | Executes core logic. |
| **81** | `});` | Executes core logic. |
| **82** | `listScript.push({` | Executes core logic. |
| **83** | `command: "_collectWildMultiplier",` | Executes core logic. |
| **84** | `});` | Executes core logic. |
| **85** | `listScript.push({` | Executes core logic. |
| **86** | `command: "_setUpPaylines",` | Executes core logic. |
| **87** | `});` | Executes core logic. |
| **88** | `listScript.push({` | Executes core logic. |
| **89** | `command: "_showRespinResultFinal",` | Executes core logic. |
| **90** | `});` | Executes core logic. |
| **91** | `return listScript;` | Returns value or promise to calling sequence. |
| **92** | `};` | Executes core logic. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as NormalGameWriterModule9666
    participant Target as Engine / UI

    Caller->>Mod: Call makeScriptStopRespinningTable()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return Object[]
```
