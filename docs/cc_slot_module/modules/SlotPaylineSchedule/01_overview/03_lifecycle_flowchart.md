---
id: "cc_slot_module:SlotPaylineSchedule:overview:lifecycle_flowchart"
title: "SlotPaylineSchedule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "overview", "lifecycle", "flowchart", "mermaid"]
---

# 🔄 SlotPaylineSchedule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Executor as ScriptExecutor / Writer
    participant SPS as SlotPaylineSchedule
    participant Emitter as payLineEmitter
    participant UI as EventManager (HUD)

    Note over Executor, UI: Stage 1: Async Concurrent Blink
    Executor->>SPS: moduleEvent.emit("BLINK_ALL_PAYLINES")
    SPS->>Emitter: emit(PAYLINE_BLINK_ALL, { blinkDuration })
    SPS->>SPS: tween delay(blinkDuration)
    SPS-->>Executor: Promise resolved after blinkDuration

    Note over Executor, UI: Stage 2: Idle Sequential Cycling
    Executor->>SPS: moduleEvent.emit("SHOW_ALL_PAYLINES")
    SPS->>SPS: Build chained cc.tween sequence
    loop Repeat Forever (until next spin)
        SPS->>UI: emit(ON_SHOW_PAYLINE_INFO, payLine)
        SPS->>Emitter: emit(PAYLINE_SHOW_LINE, payLine, duration)
        SPS->>SPS: tween delay(duration)
    end

    Note over Executor, UI: Stop & Cleanup
    Executor->>SPS: moduleEvent.emit("CLEAR_PAYLINES")
    SPS->>SPS: stopSchedule() ➔ tweenSchedule.stop()
    SPS->>UI: emit(ON_HIDE_PAYLINE_INFO)
    SPS->>Emitter: emit(PAYLINE_CLEAR)
```
