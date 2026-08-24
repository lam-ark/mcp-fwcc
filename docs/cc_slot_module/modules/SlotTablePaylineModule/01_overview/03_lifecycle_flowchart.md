---
id: "cc_slot_module:SlotTablePaylineModule:overview:lifecycle_flowchart"
title: "SlotTablePaylineModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotTablePaylineModule Lifecycle Flowchart

---

## 1. Payline Presentation Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameModeDirectorModule
    participant Table as SlotTableModule
    participant Payline as SlotTablePaylineModule
    participant Data as SlotTablePaylineData
    participant Emitter as payLineEmitter
    participant Schedule as SlotPaylineSchedule
    participant Symbols as PaylineSymbolModule

    Note over Director,Symbols: 1. Setup & Data Ingestion
    Director->>Table: TABLE_STOP_SPIN (Reels decelerate and stop)
    Table->>Director: All reels stopped
    Director->>Payline: moduleEvent.emit("SETUP_PAYLINES")
    Payline->>Data: getMatrix(), getPayLines(), getWinSymbols()
    Payline->>Emitter: emit("PAYLINE_SET_DATA", data)

    Note over Director,Symbols: 2. Stage 1: Show All Paylines
    Emitter->>Symbols: PAYLINE_SHOW_ALL
    Symbols->>Symbols: Plays win animation on all winning symbols

    Note over Director,Symbols: 3. Stage 2: Sequential Payline Cycling
    Director->>Payline: moduleEvent.emit("START_PAYLINE_CYCLE")
    Payline->>Schedule: Starts step timer
    loop For each winning payline 0..K-1
        Schedule->>Emitter: emit("PAYLINE_SHOW_ITEM", payLineItem)
        Emitter->>Symbols: Highlights only current line's symbols
    end
```
