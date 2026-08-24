---
id: "cc_slot_module:PaylineLineModule:overview:lifecycle_flowchart"
title: "PaylineLineModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "overview", "lifecycle", "flowchart", "mermaid"]
---

# 🔄 PaylineLineModule Lifecycle Sequence Flowchart

---

## 1. Complete Event Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameModeDirector / Writer
    participant SPM as SlotTablePaylineModule
    participant Emitter as payLineEmitter
    participant PLM as PaylineLineModule
    participant Pool as NodePool (SlotLineItem)
    participant Line as Line Instance Node

    Note over Director, PLM: Initialization Phase
    SPM->>PLM: init({ payLineEmitter, config, moduleEvent })
    PLM->>Emitter: on(PAYLINE_SET_DATA, setupPaylines)
    PLM->>Emitter: on(PAYLINE_BLINK_ALL, blinkAllPayLines)
    PLM->>Emitter: on(PAYLINE_SHOW_LINE, showPayLine)
    PLM->>Emitter: on(PAYLINE_STOP_ALL, hideAll)
    PLM->>Emitter: on(PAYLINE_CLEAR, clearAll)

    Note over Director, PLM: Stage 1 (Blink All Lines)
    SPM->>Emitter: emit(PAYLINE_SET_DATA, { payLines })
    PLM->>PLM: setupPaylines(data)
    SPM->>Emitter: emit(PAYLINE_BLINK_ALL)
    PLM->>PLM: blinkAllPayLines()
    loop For each payLine in payLines
        PLM->>Pool: getLine()
        Pool-->>PLM: lineNode
        PLM->>Line: setParent(container)
        PLM->>Line: emit("INIT", lineID)
        PLM->>Line: emit("SHOW")
    end

    Note over Director, PLM: Stage 2 (Cycle Single Line)
    SPM->>Emitter: emit(PAYLINE_SHOW_LINE, payLine)
    PLM->>PLM: showPayLine(payLine, true)
    PLM->>Line: emit("HIDE") on all other lines
    PLM->>Line: emit("SHOW") on active line

    Note over Director, PLM: Clean Up Phase
    SPM->>Emitter: emit(PAYLINE_CLEAR)
    PLM->>PLM: clearAll()
    loop For each line in lines
        PLM->>Line: emit("RESET")
        PLM->>Pool: put(line)
    end
```
