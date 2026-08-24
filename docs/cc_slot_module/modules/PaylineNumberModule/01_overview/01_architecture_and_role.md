---
id: "cc_slot_module:PaylineNumberModule:overview:architecture_and_role"
title: "PaylineNumberModule Architectural Role & Core Responsibilities"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "overview", "architecture", "line_numbers"]
---

# 🏛️ PaylineNumberModule Architectural Role & Core Responsibilities

---

## 1. Architectural Mission

`PaylineNumberModule` manages the visual payline index markers positioned along the left and right border gutters of the slot table. It coordinates with `payLineEmitter` to light up all hit line numbers during Stage 1 and isolate individual active line badges during Stage 2 idle cycling.

```mermaid
graph TD
    Emitter[payLineEmitter EventTarget] -->|PAYLINE_SET_DATA| PNM[PaylineNumberModule]
    Emitter -->|PAYLINE_BLINK_ALL| PNM
    Emitter -->|PAYLINE_SHOW_LINE| PNM
    Emitter -->|PAYLINE_STOP_ALL / CLEAR| PNM
    
    PNM -->|mapNumberToItem: Map<string, PaylineNumberItem[]>| Items[PaylineNumberItem Component instances]
    Items -->|item.show() / hide()| Badges[Left/Right Table Border Gutter Number Badges]
```

---

## 2. Key Responsibilities

1. **Hierarchy Discovery & Mapping (`mapNumberToItem`)**:
   - In `onLoadExtend()`, queries all `PaylineNumberItem` components within configured `container` nodes and indexes them by `numberID`.
2. **Multi-Side Synchronization**:
   - Supports duplicate line numbers (e.g. Line 1 displayed on both left and right table gutters).
3. **Stage 1 Concurrent Highlighting**:
   - On `PAYLINE_BLINK_ALL`, lights up all winning line numbers concurrently.
4. **Stage 2 Isolated Cycling**:
   - On `PAYLINE_SHOW_LINE`, dims all other numbers and highlights only the active cycling line.
