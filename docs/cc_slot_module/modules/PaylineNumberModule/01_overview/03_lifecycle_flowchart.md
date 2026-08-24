---
id: "cc_slot_module:PaylineNumberModule:overview:lifecycle_flowchart"
title: "PaylineNumberModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "overview", "lifecycle", "flowchart", "mermaid"]
---

# 🔄 PaylineNumberModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant SPM as SlotTablePaylineModule
    participant Emitter as payLineEmitter
    participant PNM as PaylineNumberModule
    participant Items as PaylineNumberItem List

    Note over SPM, PNM: Initialization Phase
    PNM->>PNM: onLoadExtend(): query components & build mapNumberToItem
    PNM->>PNM: hideAll()
    SPM->>PNM: init({ payLineEmitter })
    PNM->>Emitter: on(PAYLINE_SET_DATA, setupPaylines)
    PNM->>Emitter: on(PAYLINE_BLINK_ALL, blinkAllPayLines)
    PNM->>Emitter: on(PAYLINE_SHOW_LINE, showPayLine)
    PNM->>Emitter: on(PAYLINE_STOP_ALL / CLEAR, hideAll)

    Note over SPM, PNM: Stage 1 (Blink All)
    SPM->>Emitter: emit(PAYLINE_BLINK_ALL)
    PNM->>PNM: blinkAllPayLines()
    loop For each payLine in payLines
        PNM->>Items: showNumber(payLineID) ➔ item.show()
    end

    Note over SPM, PNM: Stage 2 (Cycle Single Line)
    SPM->>Emitter: emit(PAYLINE_SHOW_LINE, payLine)
    PNM->>PNM: showPayLine(payLine)
    PNM->>Items: hideAll()
    PNM->>Items: showNumber(payLine.payLineID) ➔ item.show()
```
