---
id: "cc_slot_module:GameModeWriterModule:gotcha:asynchronous_writer_method_mutation"
title: "Gotcha: Asynchronous makeScript Generator Methods Lock Execution"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "gotchas", "async_writer"]
---

# ⚠️ Gotcha: Asynchronous makeScript Generator Methods Lock Execution

## 1. Defect Symptom
`ScriptExecutor` fails to execute steps or logs errors when invoking `writer[scriptName](data)`.

---

## 2. Root Cause Analysis
`ScriptExecutor.runAction()` expects `writer[scriptName]` to synchronously return an Array `[{ command, data }]`. If the developer marks the method `async`, it returns a `Promise<Array>`, causing `executeScripts()` to fail.

---

## 3. Recommended Resolution
Always keep all `makeScript` methods 100% synchronous:
```typescript
// CORRECT:
makeScriptStartSpinning(): Object[] {
    return [{ command: "_startSpinningTable" }];
}

// INCORRECT:
async makeScriptStartSpinning(): Promise<Object[]> { ... }
```
