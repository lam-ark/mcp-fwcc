---
id: "cc_slot_module:PaylineSymbolModule:overview:scene_and_prefabs"
title: "PaylineSymbolModule Scene Graph Placement"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ PaylineSymbolModule Scene Graph Placement

---

## 1. Scene Placement

Attached as a child node under `Payline` inside `BoardG`:

```text
Canvas/Director/GameMode/BoardG/Payline
└── WinSymbolsLayer (PaylineSymbolModule)
    ├── Container (cc.Node - Top visual layer)
    └── DisableHighlightContainer (cc.Node - Dimmed symbol background)
```

---

## 2. Dependencies & Injected Components

| Property / Component | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node` | Parent node hosting actively animating winning symbols. |
| `factory` | `SlotSymbolManager` | Symbol pooling factory providing instances by index. |
| `disableHighlightContainer` | `cc.Node` | Optional parent holding dimmed/darkened unhit symbols. |
