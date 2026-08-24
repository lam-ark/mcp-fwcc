---
id: "cc_slot_module:BaseGameDirector:method:executeNextScript"
title: "BaseGameDirector.executeNextScript() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "executeNextScript", "ScriptExecutor"]
---

# `BaseGameDirector.executeNextScript(script: any): void`

---

## 1. Method Signature
```typescript
public executeNextScript(script: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Forwards the shift and execution request to `this.executor.executeNextScript(script)`.
2. Inspects remaining items in the active action queue.
3. If more commands remain, shifts the head command and triggers `runCommand()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
executeNextScript(script: any): void {
    return this.executor.executeNextScript(script);
}
```
