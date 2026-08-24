---
id: "cc_slot_module:ScriptExecutor:method:runCommand"
title: "ScriptExecutor.runCommand() Method Specification"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "method", "runCommand", "dispatch", "director"]
---

# `ScriptExecutor.runCommand(actionName: string, action: any): void`

---

## 1. Method Signature
```typescript
public runCommand(actionName: string, action: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Computes speed command name: `const command = this.getCommandName(action.command)`.
2. Validates if director method exists: `this.isValidAction(command)`.
3. Records `this.lastActionName = actionName` and `this.lastCommandName = command`.
4. Executes `this.director[command](action.data)` and chains `.then()` to call `this.executeNextScript(actionName)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
runCommand(actionName: string, action: any): void {
    const command = this.getCommandName(action.command);
    if (this.isValidAction(command)) {
        this.lastActionName = actionName;
        this.lastCommandName = command;
        this.logger && this.logger.log(`[${this.name}]`, command);
        
        this.director[command](action.data)
            .then(() => {
                this.executeNextScript(actionName);
            })
            .catch((err) => {
                //@ts-ignore
                if (CC_DEBUG) {
                    console.groupEnd();
                }
                error(err);
            });
    } else {
        this.logger.log(`[${this.name}]`, `run command: ${action.command} is not a valid function`);
        error(`[GameView][${this.name}][${actionName}] run command: ${action.command} is not a valid function`);
    }
}
```
