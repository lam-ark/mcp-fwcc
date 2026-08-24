---
id: "cc_slot_module:ScriptExecutor:gotcha:unhandled_action_rejection"
title: "Gotcha: Broken Promise Chain Halts executeNextScript Progression"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "gotchas", "promise_chain", "executeNextScript"]
---

# 🛑 Gotcha: Broken Promise Chain Halts `executeNextScript` Progression

## 1. Symptom & Defect
During a spin, one director method fails (e.g. attempting to play an unassigned audio clip). The action queue freezes permanently on that step, and `executeNextScript()` is never called.

---

## 2. Root Cause & Technical Defect
In `runCommand()`:
```typescript
this.director[command](action.data)
    .then(() => {
        this.executeNextScript(actionName);
    })
    .catch((err) => {
        error(err); // ⚠️ executeNextScript is NOT called in catch block!
    });
```
Because the `.catch()` block only logs the error and does not call `executeNextScript()`, any rejected promise halts the queue forever.

---

## 3. Standard Code Solution & Fix
Ensure all director methods catch internal errors or resolve cleanly so the queue pipeline continues:

```typescript
async myDirectorCommand(data: any): Promise<void> {
    try {
        await this.riskyVisualOperation();
    } catch (e) {
        cc.warn("[Director] Recovered from step failure:", e);
    }
}
```
