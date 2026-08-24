---
id: "cc_slot_module:ScriptExecutor:customization:production_game_case_study"
title: "Production Case Study: ScriptExecutor Pipeline in Red Cliff Slot"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: ScriptExecutor Pipeline in Red Cliff Slot

## 1. Context & Use Case

In **Red Cliff (`g9666L`)**, when normal game spin results arrive, `NormalGameDirectorModule` dispatches action `SpinResult`.

---

## 2. Production Code Flow

```typescript
// 1. NormalGameWriterModule9666 builds array:
makeScriptSpinResult(data: any): script[] {
    return [
        { command: "STOP_TABLE_SPIN", data },
        { command: "CHECK_REFILL_NEAR_WIN", data },
        { command: "CHECK_STACK_WILD", data },
        { command: "SHOW_WIN_EFFECT", data }
    ];
}

// 2. NormalGameDirectorModule executes via ScriptExecutor:
async handleSpinResult(data: any): Promise<void> {
    await this.runAction("SpinResult", data);
}
```

Each step runs sequentially, and `ScriptExecutor` automatically logs color-coded badges to the browser console during QA testing.
