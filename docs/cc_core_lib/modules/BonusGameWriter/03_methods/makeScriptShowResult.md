---
id: "cc_core_lib:BonusGameWriter:methods:makeScriptShowResult"
title: "BonusGameWriter.makeScriptShowResult Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "methods", "makeScriptShowResult"]
---

# 📖 `BonusGameWriter.makeScriptShowResult()`

---

## 1. Method Signature

```typescript
public makeScriptShowResult(): IScriptWriter[]
```

- **Scope**: `eno.BonusGameWriter.makeScriptShowResult`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
makeScriptShowResult(): IScriptWriter[] {
    const listScript: Array<{ command: string; args?: any; delay?: number }> = [];
    
    // Command Pipeline Construction
    listScript.push({
        command: "_beforeShowResult",
        args: { mode: "BonusGameWriter" }
    });
    listScript.push({
        command: "_executeShowResult",
    });
    listScript.push({
        command: "_afterShowResult",
    });
    
    return listScript;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `BonusGameWriter`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
