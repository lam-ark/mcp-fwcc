---
id: "cc_slot_module:SlotPaylineSchedule:overview:architecture_and_role"
title: "SlotPaylineSchedule Architectural Role & Timing Scheduler"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "overview", "architecture", "scheduler", "tween"]
---

# 🏛️ SlotPaylineSchedule Architectural Role & Timing Scheduler

---

## 1. Architectural Mission

`SlotPaylineSchedule` is the timing orchestrator for the win presentation pipeline. It transforms static payline arrays into asynchronous Promise-driven sequences (Stage 1 `blinkAllPaylines`) and recurring infinite Tween loops (Stage 2 `showAllPaylines`) during player idle states.

```mermaid
graph TD
    Writer[NormalGameWriterModule] -->|Writer Step: BLINK_ALL_PAYLINES| SPS[SlotPaylineSchedule]
    SPS -->|emits PAYLINE_BLINK_ALL| Emitter[payLineEmitter]
    SPS -->|returns Promise delayed by timelineConfig| Writer
    
    Writer -->|Writer Step: SHOW_ALL_PAYLINES| SPS
    SPS -->|cc.tween sequence repeatForever| Loop[Sequential Payline Cycle]
    Loop -->|Every timelineConfig seconds| Line[showPayline(payline)]
    Line -->|emit: ON_SHOW_PAYLINE_INFO| UI[Bottom HUD Payline Info]
    Line -->|emit: PAYLINE_SHOW_LINE| Emitter
```

---

## 2. Key Responsibilities

1. **Async Step Coordination**:
   - Implements async methods (`blinkAllPaylines`, `onShowScatter`, `onShowBonus`, `onShowJackpot`) returning `Promise<void>` resolved after `timelineConfig` duration, allowing `ScriptExecutor` to seamlessly pause the pipeline.
2. **Infinite Idle Sequence (`cc.tween`)**:
   - Constructs a sequence of chained tweens cycling each sorted line ID (`a.payLineID - b.payLineID`) followed by `tween().delay(duration)`.
3. **HUD Information Synchronization**:
   - Dispatches `GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO` and `ON_HIDE_PAYLINE_INFO` to update bottom win info labels.
4. **Special Symbol Triggers**:
   - Coordinates dedicated presentation periods for Scatter, Bonus, and Jackpot hits before normal payline cycling begins.
