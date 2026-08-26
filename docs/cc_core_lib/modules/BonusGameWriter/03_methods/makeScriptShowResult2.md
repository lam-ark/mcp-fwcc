---
id: "cc_core_lib:BonusGameWriter:methods:makeScriptShowResult2"
title: "BonusGameWriter.makeScriptShowResult2 Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "methods", "makeScriptShowResult2"]
---

# 📖 `BonusGameWriter.makeScriptShowResult2()`

---

## 1. Method Signature

```typescript
public makeScriptShowResult2(): IScriptWriter[]
```

- **Scope**: `eno.BonusGameWriter.makeScriptShowResult2`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
makeScriptShowResult2(): IScriptWriter[] {
    const listScript: Array<{ command: string; args?: any; delay?: number }> = [];
    
    // Command Pipeline Construction
    listScript.push({
        command: "_beforeShowResult2",
        args: { mode: "BonusGameWriter" }
    });
    listScript.push({
        command: "_executeShowResult2",
    });
    listScript.push({
        command: "_afterShowResult2",
    });
    
    return listScript;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `BonusGameWriter`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
