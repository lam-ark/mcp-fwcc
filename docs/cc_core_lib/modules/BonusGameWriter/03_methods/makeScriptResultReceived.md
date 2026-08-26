---
id: "cc_core_lib:BonusGameWriter:methods:makeScriptResultReceived"
title: "BonusGameWriter.makeScriptResultReceived Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "methods", "makeScriptResultReceived"]
---

# 📖 `BonusGameWriter.makeScriptResultReceived()`

---

## 1. Method Signature

```typescript
public makeScriptResultReceived(): IScriptWriter[]
```

- **Scope**: `eno.BonusGameWriter.makeScriptResultReceived`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
makeScriptResultReceived(): IScriptWriter[] {
    const listScript: Array<{ command: string; args?: any; delay?: number }> = [];
    
    // Command Pipeline Construction
    listScript.push({
        command: "_beforeResultReceived",
        args: { mode: "BonusGameWriter" }
    });
    listScript.push({
        command: "_executeResultReceived",
    });
    listScript.push({
        command: "_afterResultReceived",
    });
    
    return listScript;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `BonusGameWriter`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
