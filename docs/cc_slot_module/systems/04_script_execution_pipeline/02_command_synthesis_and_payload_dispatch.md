---
id: "cc_slot_module:systems:script_pipeline:command_synthesis_and_payload_dispatch"
title: "Command Synthesis & Parameterized Action Dispatch"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "command_synthesis", "dispatch", "writer", "flow"]
---

# ✍️ Command Synthesis & Parameterized Action Dispatch

---

## 1. Command Script Struct Formats

Writers synthesize action queues using two valid formats:

### Format A: Simple Method Name Strings
Used for parameterless sequential actions:
```typescript
let listScript = [
    "_startSpinningTable",
    "_playSpinSound"
];
```

### Format B: Parametrized Command Objects
Used when custom payload arguments must be passed to the target method:
```typescript
let listScript = [
    {
        command: "_showUnskippedCutscene",
        data: { 
            cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN, 
            amount: 50000 
        }
    },
    {
        command: "_updateSpinTimes",
        data: 10
    }
];
```

---

## 2. Dynamic Command Synthesis Logic

Writers evaluate conditions in `GameDataStore` to conditionally construct command pipelines:

```typescript
// Example from FreeGameWriterModule
makeScriptShowResultEntry(): Object[] {
    const { isJackpot, winAmount, freeGameRemain } = this.dataStore.playSession;
    let listScript = [];

    // 1. Conditionally inject Jackpot celebration
    if (isJackpot) {
        listScript.push({ command: "_playJackpotWin" });
    }

    // 2. Conditionally inject Big Win cutscene
    if (winAmount > 0) {
        listScript.push({ command: "_showResultEntry" });
    }

    // 3. Conditionally evaluate Free Spins conclusion
    if (freeGameRemain === 0) {
        listScript.push({
            command: "_showUnskippedCutscene",
            data: { cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN }
        });
        listScript.push({ command: "_gameExit" });
    }

    return listScript;
}
```

---

## 3. Dispatch & Resolution Mechanism

When `ScriptExecutor` parses an item from the queue:
```typescript
// ScriptExecutor execution step
const item = this.script.shift();
const command = typeof item === "string" ? item : item.command;
const data = typeof item === "object" ? item.data : undefined;

// Dynamic dispatch on target Director
const result = this.target[command](data);
```
