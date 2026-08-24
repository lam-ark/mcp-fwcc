---
id: "cc_slot_module:systems:cascade_and_avalanche_system:event_bus_and_writer_integration"
title: "Cascade Event Bus & Script Pipeline Integration"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "events", "script_executor", "writer_pipeline"]
---

# 🔗 Cascade Event Bus & Script Pipeline Integration

---

## 1. Subscribed Scoped `moduleEvent` Steps

| Event Name | Method | Mode | Return Type | Pipeline Impact |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_START_RESPIN` | `startRespin(matrix, traceWays)` | Synchronous | `void` | Eliminates winning nodes and prepares state. |
| `TABLE_STOP_RESPIN` | `stopRespin(matrix, traceWays)` | Asynchronous | `Promise<void>` | Drops symbols with physics; resolves after `CASCADING_TIME_COMPLETED`. |

---

## 2. Writer Script Generation Example

```typescript
// Inside CascadeGameWriterModule.ts:
public makeSpinScript(playSession: any): any[] {
    const script: any[] = [];
    script.push({ command: "START_SPIN" });
    script.push({ command: "STOP_TABLE" });

    // Multi-step cascade loop
    if (playSession.cascadeSteps && playSession.cascadeSteps.length > 0) {
        for (let i = 0; i < playSession.cascadeSteps.length; i++) {
            const step = playSession.cascadeSteps[i];
            script.push({ command: "BLINK_ALL_PAYLINES", data: step.winLines });
            script.push({ command: "TABLE_START_RESPIN", data: step });
            script.push({ command: "TABLE_STOP_RESPIN", data: step });
        }
    }

    script.push({ command: "SHOW_TOTAL_WIN" });
    return script;
}
```
