---
id: "cc_slot_module:GameEventManager:gotcha:async_promise_rejection_in_emit"
title: "Gotcha: Unhandled Async Promise Rejection Inside emit()"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "gotchas", "async", "promise_rejection", "unhandled_rejection", "try_catch"]
---

# 🛑 Gotcha: Unhandled Async Promise Rejection Inside `emit()`

## 1. Symptom & Visual Defect
A spin sequence hangs indefinitely or logs `UnhandledPromiseRejection` when an event listener throws an asynchronous error inside a timer or await block.

---

## 2. Root Cause & Technical Defect
In `GameEventManager.emit()`, synchronous exceptions are caught by the `try / catch` block. However, if a subscriber defines an `async` method and an error is thrown **after an `await`**, the returned Promise rejects. Because `Promise.all(executions)` halts on the first rejected promise, other parallel listeners may fail to settle cleanly.

```typescript
// Inside GameEventManager.ts:
try {
    const result = boundFn(...args);
    // If boundFn is async and rejects after await, result is a rejected Promise!
    return result instanceof Promise ? result : Promise.resolve();
} catch (err) {
    // Only catches synchronous errors before the first await!
    return Promise.resolve();
}
```

---

## 3. Standard Code Solution & Fix
When writing async event listeners in subclasses, always wrap internal asynchronous operations in internal `try / catch` blocks to prevent rejecting the outer promise:

```typescript
private async onUpdateWinAmount(data: any): Promise<void> {
    try {
        await this.playWinAnimationAsync(data);
    } catch (err) {
        cc.error("[WinAmountModule] Error playing win animation:", err);
    }
}
```
