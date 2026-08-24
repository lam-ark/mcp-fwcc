---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptPlayPreStopSpinningEffect"
title: "GameModeWriterModule.makeScriptPlayPreStopSpinningEffect() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptPlayPreStopSpinningEffect", "pre_stop", "anticipation"]
---

# `GameModeWriterModule.makeScriptPlayPreStopSpinningEffect(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptPlayPreStopSpinningEffect(): Object[]
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by Director / Writer pipeline when evaluating pre-stop anticipation effects (such as near-win scatter anticipation, expanding wild tease animations, or feature anticipation).
* **Purpose**: Virtual hook allowing game modes to generate custom pre-stop visual/sound action sequences before the reels begin decelerating.

---

## 3. Detailed Algorithmic Execution Logic
1. **Initializes Empty Command Array**: Instantiates `listScript = []`.
2. **Returns Extensible Array**: Returns empty array in the base class. Overridden by specific game writers (e.g. `NormalGameWriterModule`, `FreeGameWriterModule`) to push commands like `_showNearWinEffect` or `_playExpandingWildTease`.

---

## 4. Caller & Callee Relationship
```mermaid
graph TD
    PreStop[PreStop Evaluation Phase] --> makeScriptPlayPreStopSpinningEffect[GameModeWriterModule.makeScriptPlayPreStopSpinningEffect]
    makeScriptPlayPreStopSpinningEffect --> ScriptList[Return Script Queue]
    ScriptList --> Executor[ScriptExecutor]
```

---

## 5. Un-truncated Source Code Implementation
```typescript
makeScriptPlayPreStopSpinningEffect(): Object[] {
	let listScript = [];
	return listScript;
};
```
