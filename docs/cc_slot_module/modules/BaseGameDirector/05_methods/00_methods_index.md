---
id: "cc_slot_module:BaseGameDirector:methods:index"
title: "BaseGameDirector Methods Index"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "methods", "index"]
---

# 📋 BaseGameDirector Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`init(): void`](./init.md)** | `public` | Binds `writer` and `director` from node properties and instantiates `ScriptExecutor`. |
| **[`runAction(actionName: string, data?: any): Promise<void>`](./runAction.md)** | `public` | Generates command queue via `writer.makeScript[ActionName]` and executes steps sequentially. |
| **[`executeNextScript(script: any): void`](./executeNextScript.md)** | `public` | Delegates execution of the subsequent command step to `executor`. |
| **[`onResetScript(actionName: string): Promise<void>`](./onResetScript.md)** | `public` | Clears and resets a specific named action queue. |
| **[`onResetAllScripts(): void`](./onResetAllScripts.md)** | `public` | Aborts all currently running script queues across the director. |
| **[`forceToExit(script): void`](./forceToExit.md)** | `public` | Forcefully aborts mode execution to switch scenes or exit to real mode. |
| **[`setGameSpeed(mode): void`](./setGameSpeed.md)** | `public` | Sets speed tier inside `ScriptExecutor`. |
