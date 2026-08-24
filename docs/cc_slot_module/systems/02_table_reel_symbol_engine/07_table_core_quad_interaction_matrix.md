---
id: "cc_slot_module:systems:table_engine:table_core_quad_interaction_matrix"
title: "The Table Core Quad: Interaction Matrix & Data Flow"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "table_quad", "table_module", "table_data", "table_config", "symbol_manager", "flow", "module_linkage"]
---

# 🏛️ The Table Core Quad: Interaction Matrix & Data Flow

---

## 1. Executive Concept: The 4 Pillars of the Table Subsystem

Every slot grid in `cc-slot-module` is powered by the **Table Core Quad**—a tightly synchronized 4-component ecosystem co-located on the `Canvas/Director/GameMode/.../Table` node:

```mermaid
graph TD
    subgraph Table Subsystem Co-Location: Canvas/Director/GameMode/.../Table
        View[🎮 1. SlotTableModule<br/>• Master Presentation Orchestrator<br/>• Controls Reel Columns & Near-Win<br/>• Injects Config & Pool into Reels]
        
        Data[💾 2. SlotTableData<br/>• Reactive State Parser<br/>• registeredKeys = ['matrix', 'matrix0']<br/>• Shapes 1D arrays into 2D [col][row]]
        
        Config[⚙️ 3. TableModuleConfig<br/>• Geometry & Timing Spec<br/>• TABLE_FORMAT: [3,3,3,3,3]<br/>• Cell Sizes & Bounce Physics]
        
        Pool[🏊 4. SlotSymbolManager<br/>• Zero-Allocation Node Pool<br/>• Manages cc.NodePool of SymbolNodes<br/>• Controls Z-Order Layer Sorting]
    end

    GDS[GameDataStore Single Source of Truth] -->|Auto-Ingests Matrix Packet| Data
    Config -->|Provides TABLE_FORMAT| Data
    Config -->|Provides Cell Dimensions & Speeds| View
    Data -->|Provides 2D Target Matrix| View
    View -->|Checks Out / Recycles Symbols| Pool
    Pool -->|Allocates & Recycles Nodes| Reels[SlotReelModule Column Instances]
```

---

## 2. Granular Responsibility Matrix

| Component | Architecture Role | Key Responsibilities | Consumed By |
| :--- | :--- | :--- | :--- |
| **`SlotTableModule`** | **Master Visual View** | • Coordinates start/stop spin commands from Director.<br/>• Spawns and manages `SlotReelModule` child columns.<br/>• Triggers anticipation VFX overlays on near-win. | Called by `NormalGameDirectorModule` / `FreeGameDirectorModule`. |
| **`SlotTableData`** | **Reactive Data Model** | • Subscribes to `"matrix"`, `"matrix0"`, `"normalGameMatrix"`, `"freeGameMatrix"`.<br/>• Transforms flat 1D payloads into 2D `string[col][row]` matrices.<br/>• Handles session state hydration on browser refresh (`getResumeMatrix`). | Consumed by `SlotTableModule` when stopping spin. |
| **`TableModuleConfig`** | **Configuration Model** | • Defines grid geometry (`SYMBOL_WIDTH: 180`, `SYMBOL_HEIGHT: 160`, `TABLE_FORMAT: [3,3,3,3,3]`).<br/>• Defines reel deceleration timings (`delayStop: 0.2s`, `easingStop: 25px`, `BUFFER_TOP: 1`, `BUFFER_BOT: 1`). | Read by `SlotTableData`, `SlotTableModule`, and `SlotReelModule`. |
| **`SlotSymbolManager`** | **Memory & Pool Manager** | • Manages `cc.NodePool` for static and motion-blur symbol nodes.<br/>• Allocates symbols via `createSymbol()` & `createBlurSymbol()`.<br/>• Safely recycles symbols via `resetBeforeBackToPool()` to prevent VRAM leaks.<br/>• Coordinates Z-order sorting during payline win presentations. | Injected into `SlotTableModule` and child `SlotReelModule` columns. |

---

## 3. End-to-End Runtime Execution Flow

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameModeDirectorModule
    participant Table as SlotTableModule
    participant Data as SlotTableData
    participant Config as TableModuleConfig
    participant Pool as SlotSymbolManager
    participant Reel as SlotReelModule Column

    Note over Table,Pool: Initialization Phase (onLoad & init)
    Table->>Data: getComponent(SlotTableData)
    Table->>Config: getComponent(TableModuleConfig)
    Table->>Pool: getComponent(SlotSymbolManager)
    Data->>Config: Reads TABLE_FORMAT: [3, 3, 3, 3, 3]
    Table->>Reel: initReel({ reelIndex: i, config: TableConfig, pool: SymbolManager })

    Note over Director,Reel: Spin Execution Phase
    Director->>Table: TABLE_START_SPIN
    Table->>Reel: runReelSpin(mode)
    loop Continuous Roll
        Reel->>Pool: createBlurSymbol(code, size)
        Reel->>Pool: removeSymbol(bottomSymbol) -> resetBeforeBackToPool()
    end

    Note over Director,Reel: Spin Stopping Phase
    Director->>Table: TABLE_STOP_SPIN
    Table->>Data: getMatrix()
    Data->>Config: eno.SlotUtils.convertSlotMatrix(rawMatrix, TABLE_FORMAT)
    Data-->>Table: Returns 2D Matrix: string[5][3]
    Table->>Reel: showResult(matrix[col], stopCallback, preStopCallback)
    Reel->>Pool: createSymbol(targetCode, size)
    Reel->>Reel: playStopAnimation() -> easeBackOut bounce
    Reel-->>Table: reelStopCB(reelIndex)
    Table-->>Director: Resolves stopSpinningTable Promise
```

---

## 4. Scene Co-Location & Inspector Wiring

In production scenes (`g9000L`, `g9000P`, `g9666L`), all 4 components are mounted **together on the exact same `Table` node**:

```text
Canvas/Director/GameMode/MainGamePrefab/SlotTableModule (Node)
├── [Component 1] SlotTableModule
│   ├── table: Points to child node "Table" (with cc.Mask)
│   ├── reelPrefab: Points to "ReelPrefab.prefab"
│   └── symbolManager: Points to child node "SymbolPool"
│
├── [Component 2] SlotTableData
│   └── registeredKeys: ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"]
│
├── [Component 3] TableModuleConfig
│   ├── TABLE_FORMAT: [3, 3, 3, 3, 3]
│   ├── SYMBOL_WIDTH: 180
│   ├── SYMBOL_HEIGHT: 160
│   ├── BUFFER_TOP: 1
│   └── BUFFER_BOT: 1
│
└── SymbolPool (Child Node: SlotSymbolManager)
    ├── symbolPrefab: Points to "SymbolPrefab.prefab"
    └── initPoolCount: 30
```

---

## 5. Cross-Subsystem Gotchas & Failure Modes

1. **Missing Component Null Crash**: If `SlotTableData` is omitted from the `Table` node, `SlotTableModule.onLoadExtend()` sets `this.tableData = null`, and the game crashes with `TypeError: Cannot read property 'getMatrix' of null` when the first spin attempts to stop.
2. **Buffer Top Pop-in Glitch**: If `TableModuleConfig.BUFFER_TOP` is smaller than the travel distance per frame during Turbo spins, symbols pop into view before `SlotSymbolManager` can allocate them.
3. **Spine VRAM Leak on Pool Return**: If `SlotSymbolManager.removeSymbol()` returns nodes to `cc.NodePool` without calling `SlotSymbolModule.resetBeforeBackToPool()`, skeletal bone caches accumulate in GPU memory, crashing mobile browsers during Auto-Spins.
