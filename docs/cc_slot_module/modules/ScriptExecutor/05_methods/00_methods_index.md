---
id: "cc_slot_module:ScriptExecutor:methods:index"
title: "ScriptExecutor Methods Index"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "methods", "index"]
---

# 📋 ScriptExecutor Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`runAction(actionName, data?): Promise<void>`](./runAction.md)** | `public` | Instantiates action queue via `writer.makeScript[ActionName]` and initiates step execution. |
| **[`executeNextScript(actionName): void`](./executeNextScript.md)** | `public` | Shifts the next action descriptor from the queue and triggers `runCommand()`. |
| **[`runCommand(actionName, action): void`](./runCommand.md)** | `public` | Resolves target speed command and executes `director[command](data)`. |
| **[`getCommandName(command: string): string`](./getCommandName.md)** | `public` | Checks for speed-suffixed variants (e.g. `command_2`, `command_1`) on the director. |
| **[`onResetScript(actionName: string): Promise<void>`](./onResetScript.md)** | `public` | Converts active steps to `_reset[Command]` to fast-forward skippable actions. |
| **[`onResetAllScripts(): void`](./onResetAllScripts.md)** | `public` | Aborts all pending script queues and clears references. |
| **[`forceToExit(script: any): void`](./forceToExit.md)** | `public` | Marks `forceToExitMode = true` and triggers emergency exit sequence. |
