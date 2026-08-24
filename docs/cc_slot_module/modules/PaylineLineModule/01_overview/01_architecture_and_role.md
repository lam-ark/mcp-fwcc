---
id: "cc_slot_module:PaylineLineModule:overview:architecture_and_role"
title: "PaylineLineModule Architectural Role & Core Responsibilities"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "overview", "architecture", "line_drawing", "vector_lines"]
---

# 🏛️ PaylineLineModule Architectural Role & Core Responsibilities

---

## 1. Architectural Mission

`PaylineLineModule` is the visual line rendering component of the Payline subsystem in `cc-slot-module`. Its primary responsibility is to render connecting vector paths or display line segment prefabs across the reel matrix corresponding to winning line IDs (`payLineID`).

```mermaid
graph TD
    Emitter[payLineEmitter EventTarget] -->|PAYLINE_SET_DATA| PLM[PaylineLineModule]
    Emitter -->|PAYLINE_BLINK_ALL| PLM
    Emitter -->|PAYLINE_SHOW_LINE| PLM
    Emitter -->|PAYLINE_STOP_ALL| PLM
    Emitter -->|PAYLINE_CLEAR| PLM
    
    PLM -->|Pool / Instantiate| Pool[NodePool: SlotLineItem]
    Pool --> LineNode[Line Instance Prefab]
    LineNode -->|emit: INIT, SHOW, HIDE, RESET| Visual[Vector Line Display / cc.Graphics]
```

---

## 2. Key Responsibilities

1. **Node Pooling (`SlotLineItem`)**:
   - Manages a zero-allocation `cc.NodePool("SlotLineItem")` for line prefabs (`template`).
2. **Dual Operation Modes**:
   - `usePrefab = true`: Dynamically instantiates and pools line visual items.
   - `usePrefab = false`: Uses pre-placed node arrays (`lines[lineID]`).
3. **Stage 1 Concurrent Blink**:
   - On `PAYLINE_BLINK_ALL`, iterates through all winning `payLines` and displays each connecting line simultaneously.
4. **Stage 2 Isolated Cycling**:
   - On `PAYLINE_SHOW_LINE`, hides other lines (`hideAll()`) and displays only the active `payLineID`.
5. **Event Emission to Line Nodes**:
   - Drives child line nodes using localized lifecycle events: `"INIT"`, `"SHOW"`, `"HIDE"`, `"RESET"`.
