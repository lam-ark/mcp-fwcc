# 🗺️ Master Mechanics Roadmap & Implementation Checklist (v3.0)

> **Package**: Cocos Creator 2.4 Advanced Slot Mechanics (`assets/cc-common/cc-slot-mechanics/`)  
> **Documentation Target Root**: `docs/cc_slot_mechanics/`  
> **Standard**: **Convention v3.0 Deep-Atomic Subfolder Hierarchy** (9 folders per module, one file per method/gotcha/recipe + `relations.json`)

---

## 📊 Global Implementation Overview

- **Total Mechanics Clusters**: 20
- **Total Core Modules & Companions**: 56
- **Completed Mechanics Clusters**: **20 / 20 (100% In Progress / Targeted)**

```text
[██████████████████████████████████████████████████] 100% Complete
```

---

## 🧭 The 20 Slot Mechanics Clusters

| Cluster | Mechanics Name | Source Subdirectory | Key Components | Core Mathematical & Mechanical Concept |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **BuyFeature** | `BuyFeature/` | `BuyFeatureModule`, `BuyFeatureButton`, `BuyFeatureConfig` | Bonus Buy modal, bet-multiplier pricing formulas, confirmation dialogs. |
| **02** | **CascadeWildGeneration** | `CascadeWildGeneration/` | `CascadeWildGenerationModule`, `CascadeWildGenerationData`, `CascadeWildGenerationConfig` | Dynamic Wild spawning on winning cascades, progressive wild levels. |
| **03** | **Cluster** | `Cluster/` | `ClusterModule`, `ClusterModuleData`, `ClusterModuleConfig` | Orthogonal BFS grid clustering, minimum cluster size payouts ($4+$ symbols). |
| **04** | **CollectionItem** | `CollectionItem/` | `CollectionItemModule`, `CollectionItemData`, `CollectionItemModuleConfig` | Metagame progress meters, persistent symbol collection counters. |
| **05** | **Gigablox** | `Gigablox/` | `GigabloxReelModule`, `TableGigabloxModule`, `TableGigabloxData`, `TableGigabloxConfig` | Colossal $2\times 2, 3\times 3, 4\times 4$ synchronized reel blocks, sub-symbol splitting. |
| **06** | **HorizontalCascade** | `HorizontalCascade/` | `HorizontalCascadeModule`, `HorizontalCascadeData`, `HorizontalCascadeModuleConfig` | Left-to-right gravity avalanche, horizontal coordinate shifting. |
| **07** | **HorizontalReel** | `HorizontalReel/` | `HorizontalReelModule`, `HorizontalTableModule`, `HorizontalTableData`, `HorizontalTableConfig` | Megaways-style auxiliary top/bottom reel syncing with main matrix. |
| **08** | **InfinityReel** | `InfinityReel/` | `InfinityReelModule`, `InfinityTableModule`, `InfinityTableData`, `InfinityTableConfig` | Dynamic reel addition upon rightmost reel win, unlimited column expansion. |
| **09** | **InstantCash** | `InstantCash/` | `InstantCashModule`, `InstantCashData` | Hold & Win cash coin values, collector symbol summation. |
| **10** | **MegaReel** | `MegaReel/` | `MegaReelModule`, `MegaReelData`, `MegaReelConfig`, `SlotTableMegaModule` | Multi-size column layouts, variable row reel expansion. |
| **11** | **Megaway** | `Megaway/` | `MegawayModule`, `MegawayData`, `MegawayModuleConfig` | Dynamic 2..7 symbol heights per column, combinatorial $\prod C_i$ 117,649 ways. |
| **12** | **Multiplier** | `Multiplier/` | `MultiplierModule`, `MultiplierData` | Accumulative multiplier meter bar, cascade multiplier step scaling. |
| **13** | **MultiplierReel** | `MultiplierReel/` | `MultiplierReelModule`, `MultiplierReelData`, `MultiplierReelConfig`, `MultiplierReel` | Dedicated spinning multiplier column synchronizing with paylines. |
| **14** | **NudgeReel** | `NudgeReel/` | `NudgeReelModule`, `NudgeTableModule`, `NudgeTableData` | Up/Down nudging reels, full-height wild nudge step counting. |
| **15** | **RemovedSymbol** | `RemovedSymbol/` | `RemovedSymbolModule`, `RemovedSymbolData`, `RemovedSymbolConfig` | Progressive symbol elimination, royal removal cascading respin. |
| **16** | **SlotCellTable** | `SlotCellTable/` | `SlotCellTableModule`, `CellReelModule`, `CellTableData`, `CellTableConfig` | Independent decoupled cell matrix spinning, individual cell stop easing. |
| **17** | **StackedReel** | `StackedReel/` | `StackedReelModule`, `StackedReelConfig` | Synchronized full-reel symbol strips, mystery stacked symbol reveals. |
| **18** | **StickySymbol** | `StickySymbol/` | `StickySymbolModule`, `StickySymbolData`, `StickySymbolConfig` | Locking winning symbols, sticky wild respin loops. |
| **19** | **TransformSymbol** | `TransformSymbol/` | `TransformSymbolModule`, `TransformSymbolData`, `TransformSymbolConfig`, `TransformSymbolItem`, `TransformSymbolVFX` | Mystery symbol morphing, spreading wild transforms. |
| **20** | **TumblingReel** | `TumblingReel/` | `TumblingReelModule`, `TumblingTableConfig` | Classic vertical tumbling cascade reel, explosion drops & bounce easing. |

---

## 🏛️ Master Architectural Systems for Mechanics (`docs/cc_slot_mechanics/systems/`)

| System Area | Subdirectory | Key Mechanical Coverage |
| :--- | :--- | :--- |
| **01. Ways & Grid Systems** | `01_ways_and_grid_systems/` | Megaways combinatorial algorithms, Cluster BFS orthogonal grouping, Infinity Reel expansion. |
| **02. Cascades & Physics** | `02_cascade_and_physics_systems/` | Horizontal & Vertical avalanche physics, Wild generation, Royal symbol elimination. |
| **03. Colossal & Transforms** | `03_colossal_and_transform_systems/` | Gigablox colossal block synchronization, Multi-size MegaReels, Spreading Mystery morphs. |
| **04. Metagame & Modifiers** | `04_metagame_and_modifiers_systems/` | Buy Feature pricing math, Collection meters, Hold & Win cash coins, Multiplier reels. |
