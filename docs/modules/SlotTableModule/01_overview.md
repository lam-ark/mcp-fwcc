# SlotTableModule: Overview & Architecture

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts`  
> **Inheritance**: `SlotTableModule` ➔ `SlotBaseModule` ➔ `cc.Component`  
> **Online Reference**: [SlotTableModule on Enotion Platform](https://slot-platform.enostd.gay/api-references/base-slot/SlotCellTable.html)

---

## 1. Purpose & Architectural Role
`SlotTableModule` is the **central orchestrator for the slot reel matrix**:
* Manages column instantiation and coordinate placement of `SlotReelModule` instances based on `TableModuleConfig.TABLE_FORMAT`.
* Controls spin physics: starting roll sequences, stagger delays between columns, near-win anticipation delays, and bounce stop easing.
* Coordinates with `SlotSymbolManager` to populate, update, and clear matrix symbols across Normal, Free, and Cascade modes.

---

## 2. Table Spin Execution Flow

```mermaid
sequenceDiagram
    participant Dir as SlotDirector
    participant Table as SlotTableModule
    participant Reel as SlotReelModule (Col 0..N)
    participant Mgr as SlotSymbolManager

    Dir->>Table: startSpin()
    Table->>Reel: startSpin() (Staggered by column delay)
    Dir->>Table: stopTable(matrix, callback)
    loop For Each Column
        Table->>Reel: stopReel(colMatrix, isNearWin)
        Reel->>Mgr: getSymbol() / Recycles old symbols
        Reel-->>Table: Column Stopped
    end
    Table-->>Dir: tableStopCallback() (TABLE_STOPPED)
```
