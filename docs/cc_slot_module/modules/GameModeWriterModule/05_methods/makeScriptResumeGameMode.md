---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptResumeGameMode"
title: "GameModeWriterModule.makeScriptResumeGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptResumeGameMode", "reconnect", "resume"]
---

# `GameModeWriterModule.makeScriptResumeGameMode(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptResumeGameMode(): Object[]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `GameModeDirectorModule` / `BaseGameDirector` during reconnection hydration when resuming an in-progress game mode (`isResume = true`).
* **Purpose**: Generates the action queue required to restore UI, table matrices, multipliers, and remaining spin counters when a player reconnects into an ongoing feature.

---

## 3. Detailed Algorithmic Execution Logic
1. **Initializes Empty Command Array**: Instantiates `listScript = []`.
2. **Returns Default Virtual Implementation**: Returns the empty script list. Subclasses (e.g. `FreeGameWriterModule`, `BonusGameWriterModule`) override this method to inject specific resume commands such as `_updateSpinTimes`, `_updateMultiplier`, and `_restoreMatrix`.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    Director[GameModeDirectorModule.onResumeGameMode] --> makeScriptResumeGameMode[GameModeWriterModule.makeScriptResumeGameMode]
    makeScriptResumeGameMode --> ReturnArray[Returns Object Array]
    ReturnArray --> Executor[ScriptExecutor.executeNextScript]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
makeScriptResumeGameMode(): Object[] {
	let listScript = [];
	return listScript;
}
```
