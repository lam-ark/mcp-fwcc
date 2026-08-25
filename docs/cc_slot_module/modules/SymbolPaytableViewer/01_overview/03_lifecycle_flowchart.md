---
id: "cc_slot_module:SymbolPaytableViewer:overview:lifecycle_flowchart"
title: "SymbolPaytableViewer Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 SymbolPaytableViewer Lifecycle Flowchart

---

## 1. Touch to Popup Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Table as TouchHolder
    participant Viewer as SymbolPaytableViewer
    participant Popup as SymbolPayoutViewer

    Player->>Table: Taps symbol on reel 1, row 2
    Table->>Viewer: handleTouchSymbol(event)
    Viewer->>Viewer: Convert touch to local (col: 1, row: 2)
    Viewer->>Viewer: getSymbolCode(1, 2) -> "K"
    Viewer->>Viewer: Calculate callout position & alignment
    Viewer->>Popup: showSymbolInfo(symbolData)
    Popup->>Popup: Displays multiplier table (3x: $5, 4x: $15, 5x: $50)
```
