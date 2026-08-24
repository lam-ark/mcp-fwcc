---
id: "cc_slot_module:ScriptExecutor:gotcha:director_method_must_return_promise"
title: "Gotcha: Director Methods in Writer Pipeline Must Return a Promise"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "gotchas", "promise", "type_error_then_undefined", "director_command"]
---

# 🛑 Gotcha: Director Command Methods Must Return a `Promise`

---

## 1. Symptom & Runtime Crash
When adding a new command into a `Writer` script (e.g. `listScript.push({ command: "_myCustomAction" })`) and implementing `_myCustomAction()` on the `Director`, the game crashes immediately upon executing that step with the error:

```text
Uncaught TypeError: Cannot read property 'then' of undefined
    at ScriptExecutor.runCommand (ScriptExecutor.ts:45)
```

---

## 2. Root Cause in `ScriptExecutor.runCommand`

In `ScriptExecutor.ts`, commands synthesized by the `Writer` are dispatched dynamically on the `Director` instance:

```typescript
// assets/cc-common/cc-slot-module/GameMode/Core/ScriptExecutor.ts
runCommand(actionName: string, action: any): void {
    const command = this.getCommandName(action.command);
    if (this.isValidAction(command)) {
        // ⚠️ DIRECTLY CHAINS .then() WITHOUT CHECKING IF RETURN VALUE IS A PROMISE
        this.director[command](action.data)
            .then(() => {
                this.executeNextScript(actionName);
            })
            .catch((err) => {
                error(err);
            });
    }
}
```

Because `ScriptExecutor.runCommand()` directly calls `.then()` on the return value of `this.director[command](action.data)`:
* If a director method returns `void` (i.e. `undefined`), invoking `undefined.then()` causes an unhandled fatal `TypeError`.
* Even for synchronous actions that take $0\text{ms}$, the method **MUST** return a resolved `Promise` (or be declared with `async`).

---

## 3. Standard Code Rules & Fixes

### ❌ Incorrect (Returns `void` ➔ Crashes with `Cannot read property 'then' of undefined`):
```typescript
// In CustomDirector.ts
_myCustomAction(): void {
    this.updateCustomHUD(); // Synchronous action returning void
}
```

### ✅ Correct Pattern A (Declare with `async`):
```typescript
// In CustomDirector.ts
async _myCustomAction(): Promise<void> {
    this.updateCustomHUD();
}
```

### ✅ Correct Pattern B (Explicit `Promise.resolve()` for Synchronous Actions):
```typescript
// In CustomDirector.ts
_myCustomAction(): Promise<void> {
    this.updateCustomHUD();
    return Promise.resolve();
}
```

### ✅ Correct Pattern C (Visual Asynchronous Animations / Tweens):
```typescript
// In CustomDirector.ts
_myCustomVisualAction(): Promise<void> {
    return new Promise((resolve) => {
        cc.tween(this.myNode)
            .to(0.5, { scale: 1.2 })
            .to(0.5, { scale: 1.0 })
            .call(() => resolve())
            .start();
    });
}
```
