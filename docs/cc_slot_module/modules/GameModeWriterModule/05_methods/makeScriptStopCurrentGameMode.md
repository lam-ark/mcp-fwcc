---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptStopCurrentGameMode"
title: "GameModeWriterModule.makeScriptStopCurrentGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptStopCurrentGameMode", "emergency_stop"]
---

# `GameModeWriterModule.makeScriptStopCurrentGameMode(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptStopCurrentGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles emergency mode abort sequence:
   * `_stopCurrentGameMode`: Halts table spins and timers immediately.
   * `_forceResetGameMode`: Resets data store and settings to `IDLE`.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStopCurrentGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_stopCurrentGameMode",
    });
    listScript.push({
        command: "_forceResetGameMode",
    });
    return listScript;
}
```
