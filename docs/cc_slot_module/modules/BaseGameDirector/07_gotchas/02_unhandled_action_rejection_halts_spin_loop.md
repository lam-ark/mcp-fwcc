---
id: "cc_slot_module:BaseGameDirector:gotcha:unhandled_action_rejection_halts_spin_loop"
title: "Gotcha: Unhandled Step Exception Freezes Director Pipeline"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "gotchas", "promise_rejection", "ui_lock"]
---

# 🛑 Gotcha: Unhandled Step Exception Freezes Director Pipeline

## 1. Symptom & Defect
A spine animation callback throws a null reference error inside a custom step. The promise returned by `runAction()` never resolves, leaving `SlotButtonNormal` in `SPINNING` state indefinitely.

---

## 2. Root Cause & Technical Defect
`ScriptExecutor` expects each director method to return a resolved Promise or invoke the step callback. If an unhandled exception occurs before returning, the action queue stalls.

---

## 3. Standard Code Solution & Fix
Wrap asynchronous custom step bodies in `try...catch` blocks and ensure the step completes even on visual errors:

```typescript
async playCustomFeatureAnimation(data: any): Promise<void> {
    try {
        await this.runSpineCutscene();
    } catch (e) {
        cc.error("[Director] Visual step failed, bypassing to maintain game loop:", e);
    }
}
```
