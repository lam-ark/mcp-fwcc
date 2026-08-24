---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptStopSpinningTable"
title: "GameModeWriterModule.makeScriptStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptStopSpinningTable", "_stopSpinningTable", "_setUpPaylines"]
---

# `GameModeWriterModule.makeScriptStopSpinningTable(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptStopSpinningTable(): Object[]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `BaseGameDirector.onStopSpinningTable()` or mode directors when server spin response is received and table stop begins.
* **Purpose**: Generates the primary two-step command sequence: stopping reels to display server matrix, then configuring paylines based on winning lines.

---

## 3. Detailed Algorithmic Execution Logic
1. **Initializes Command List**: `listScript = []`.
2. **Pushes Table Stop Command**: Adds `{ command: "_stopSpinningTable" }` (triggers reel deceleration, bounce landing, and symbol visibility updates).
3. **Pushes Payline Setup Command**: Adds `{ command: "_setUpPaylines" }` (draws winning lines, highlights winning symbol coordinates, and prepares payline presentation).
4. **Returns Array**: Returns `[{ command: "_stopSpinningTable" }, { command: "_setUpPaylines" }]`.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    Director[BaseGameDirector.onStopSpinningTable] --> makeScriptStopSpinningTable[GameModeWriterModule.makeScriptStopSpinningTable]
    makeScriptStopSpinningTable --> Queue["[{ command: '_stopSpinningTable' }, { command: '_setUpPaylines' }]"]
    Queue --> ScriptExecutor[ScriptExecutor.executeNextScript]
    ScriptExecutor --> Step1["Director._stopSpinningTable()"]
    Step1 --> Step2["Director._setUpPaylines()"]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
makeScriptStopSpinningTable(): Object[] {
	let listScript = [];
	listScript.push({
		command: "_stopSpinningTable",
	});
	listScript.push({
		command: "_setUpPaylines",
	});
	return listScript;
};
```
