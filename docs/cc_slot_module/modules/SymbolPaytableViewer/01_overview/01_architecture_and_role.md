---
id: "cc_slot_module:SymbolPaytableViewer:overview:architecture_and_role"
title: "SymbolPaytableViewer Architecture & Role"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "overview", "architecture", "symbol_paytable", "touch_interaction"]
---

# 🏛️ SymbolPaytableViewer Architecture & Role

`SymbolPaytableViewer` is the interactive symbol touch inspector component in the `cc-common` Slot Framework SDK. Mounted on the Table root node, it intercepts touch events on active reel symbols during the `GAME_STATE_ENUM.IDLE` state, converts screen touch coordinates into 2D grid matrix indices (`colIndex`, `rowIndex`), and presents a floating payout callout bubble (`SymbolPayoutViewer`).

---

## 1. Architectural Role

- **Touch-to-Matrix Coordinate Mapping**: Translates world touch coordinates via `convertToNodeSpaceAR` and calculates column/row intersections against `TABLE_FORMAT`, `SYMBOL_WIDTH`, and `SYMBOL_HEIGHT`.
- **Dynamic Payout Callout**: Renders `SymbolPayoutViewer` with directional alignment (left-to-right or right-to-left based on column position relative to table center).
- **Matrix / Node Fallback**: Retrieves symbol codes from either `SlotTableData.getResumeMatrix()` or live `SlotTableModule.getSymbolByColRow()`.

---

## 2. Inheritance Diagram

```mermaid
classDiagram
    cc_Component <|-- SlotBaseModule
    SlotBaseModule <|-- SymbolPaytableViewer

    class SymbolPaytableViewer {
        +touchHolder: cc.Node
        +bgNode: cc.Node
        +topBlock: cc.Node
        +symbolPayoutViewer: SymbolPayoutViewer
        +dataStore: GameDataStore
        +gameSettings: SlotGameSettings
        +onLoadExtend()
        +handleTouchSymbol(event)
        +getSymbolCode(col, row)
        +getSymbolPosition(col, row)
        +showSymbolInfo(symbolData)
        +hideSymbolInfo()
    }
```
