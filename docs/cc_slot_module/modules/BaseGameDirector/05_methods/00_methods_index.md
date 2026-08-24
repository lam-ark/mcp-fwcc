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
| **[`init(): void`](./init.md)** | `public` | Binds `this.writer` and `this.director` to instantiate the `ScriptExecutor` instance. |
| **[`runAction(actionName: string, data?: any): Promise<void>`](./runAction.md)** | `public` | Generates declarative script via writer and runs action queue asynchronously. |
| **[`executeNextScript(script: any): void`](./executeNextScript.md)** | `public` | Shifts the next action step descriptor from the queue and triggers step dispatch. |
| **[`onResetScript(actionName: string): Promise<void>`](./onResetScript.md)** | `public` | Converts in-flight skippable commands to `_reset[Command]` to fast-forward execution. |
| **[`onResetAllScripts(): void`](./onResetAllScripts.md)** | `public` | Aborts all active action queues and rejects pending promises with mode abort error. |
| **[`forceToExit(script: any): void`](./forceToExit.md)** | `public` | Sets `forceToExitMode = true` and runs mandatory exit teardown script. |
| **[`setGameSpeed(mode: number): void`](./setGameSpeed.md)** | `public` | Mutates runtime game speed level across `ScriptExecutor`, `GameDataStore`, and `SlotGameSettings`. |
| **[`onDestroy(): void`](./onDestroy.md)** | `protected` | Invokes `executor.destroy()` to abort and clean up all in-flight queues. |
