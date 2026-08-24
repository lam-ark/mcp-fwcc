---
id: "cc_slot_module:WinAmountModule:overview:lifecycle_flowchart"
title: "WinAmountModule Lifecycle & Tween Execution Flowchart"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 WinAmountModule Lifecycle & Tween Execution Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Writer as WinAmountWriter / Director
    participant WAM as WinAmountModule
    participant Tween as eno.MoneyTween
    participant Label as labelWinAmount

    Writer->>WAM: updateWinAmount({ winAmount: 50000, time: 2.0, winLevel: 2 })
    WAM->>WAM: playWinEffect(2)
    WAM->>Tween: runNumber(node, 2.0, 50000)
    
    loop Every Frame during 2.0s
        Tween->>Label: Updates numeric text with formatting
    end
    
    Tween-->>WAM: onComplete() callback
    WAM->>WAM: currentValue = 50000
    WAM->>WAM: resolve() -> Promise resolves
    WAM-->>Writer: Pipeline proceeds to next command
```
