# 📋 Master Task List: Deep Enhancement of `cc_slot_mechanics`

> **Package Target**: `assets/cc-common/cc-slot-mechanics` (20 Packages / 75 Modules)  
> **Documentation Target**: `mcp/mcp-fwcc/docs/cc_slot_mechanics/`  
> **Language**: 100% Technical English  
> **Standard**: Complete math formulas, de-obfuscated TypeScript implementations, sequence diagrams, event buses, gotchas & real-world game recipes.

---

## 📊 Progress Summary Matrix

| Batch | Functional Group | Packages Included | Module Count | Status |
| :---: | :--- | :--- | :---: | :---: |
| **01** | **Dynamic Reels & Grids** | `Megaway`, `HorizontalReel`, `Gigablox`, `SlotCellTable`, `InfinityReel` | 18 | ✅ Completed |
| **02** | **Cascades & Physics** | `HorizontalCascade`, `TumblingReel`, `CascadeWildGeneration`, `RemovedSymbol` | 14 | ✅ Completed |
| **03** | **Symbol Modifiers & Morphing** | `TransformSymbol`, `StickySymbol`, `StackedReel`, `NudgeReel` | 15 | ✅ Completed |
| **04** | **Pay Evaluation & Features** | `Cluster`, `CollectionItem`, `InstantCash`, `Multiplier`, `MultiplierReel`, `BuyFeature`, `MegaReel` | 28 | ✅ Completed |
| **05** | **System Architecture & Indexing** | Systems, Overviews, Re-indexing & Tool Verification | - | ✅ Completed |

---

## 📝 Detailed Atomic Task Breakdown

### 🔹 Batch 01: Dynamic Reels & Grids (18 Modules)

- [x] **Task 1.1: `Megaway` Package Enhancement**
  - [x] `MegawayModule`: State machine, `UPDATE_MEGAWAY` & `REEL_STOPPED` event handling, label coin formatting.
  - [x] `MegawayData`: Combinatorial ways calculation algorithm ($\prod_{c=0}^{C-1} \text{height}[c]$), dynamic row mapping per column ($2 \le \text{rows} \le 7$).
  - [x] `MegawayModuleConfig`: Column limits, minimum column evaluation index, default strings.

- [x] **Task 1.2: `HorizontalReel` Package Enhancement**
  - [x] `HorizontalTableModule`: Sub-Reel table container, custom reel prefab instantiation, `TABLE_STOP_SPIN_TOP` handling.
  - [x] `HorizontalReelModule`: Horizontal symbol spawning, right-to-left layout offsets, motion blur integration.
  - [x] `HorizontalTableData` & `HorizontalTableConfig`: 4-column horizontal matrix formatting across main reels 2..5.

- [x] **Task 1.3: `Gigablox` Package Enhancement**
  - [x] `TableGigabloxModule`: Multi-column colossal symbol ($2\times 2, 3\times 3, 4\times 4$) grouping and spin synchronization.
  - [x] `GigabloxReelModule`: Reel sync master/slave linking, colossal bounding box coordinates.
  - [x] `TableGigabloxData` & `TableGigabloxConfig`: Merged block size probability matrices and fallback layouts.

- [x] **Task 1.4: `SlotCellTable` Package Enhancement**
  - [x] `SlotCellTableModule`: Grid of independent single-cell reels ($5\times 5$ / $6\times 6$), per-cell spin lifecycle.
  - [x] `CellReelModule`: Single-cell spinning animation, individual bounce physics, stop delay offsets.
  - [x] `CellTableData` & `CellTableConfig`: Cell coordinate mapping $M[r][c]$ and payline indexing.

- [x] **Task 1.5: `InfinityReel` Package Enhancement**
  - [x] `InfinityTableModule`: Dynamic column spawning on winning rightmost reel, infinite expansion loop.
  - [x] `InfinityReelModule`: Dynamic reel node pooling, rightward translation animations.
  - [x] `InfinityTableData` & `InfinityTableConfig`: Expansion criteria, maximum reel bounds, reset rules.

---

### 🔹 Batch 02: Cascades, Falling Physics & Respin Logic (14 Modules)

- [x] **Task 2.1: `HorizontalCascade` Package Enhancement**
  - [x] `HorizontalCascadeModule`: Right-to-left symbol slide physics, disappearance tweening, refill symbol spawning.
  - [x] `HorizontalCascadeData`: Step matrix diff formatting, `listTraceWay` column index mapping.
  - [x] `HorizontalCascadeModuleConfig`: Slide velocity, bounce parameters, drop delay constants.

- [x] **Task 2.2: `TumblingReel` Package Enhancement**
  - [x] `TumblingReelModule`: Gravity-based falling cascade physics, multi-symbol stack dropping.
  - [x] `TumblingTableConfig`: Gravitational acceleration, bounce damping, settle durations.

- [x] **Task 2.3: `CascadeWildGeneration` Package Enhancement**
  - [x] `CascadeWildGenerationModule`: Spawning Wild symbols at explosion epicenter during cascade refill.
  - [x] `CascadeWildGenerationData` & `CascadeWildGenerationConfig`: Wild spawn rate, eligible winning symbol types.

- [x] **Task 2.4: `RemovedSymbol` Package Enhancement**
  - [x] `RemovedSymbolModule`: Eliminating low-paying symbols from reel pool upon subsequent cascades.
  - [x] `RemovedSymbolData` & `RemovedSymbolConfig`: Active removal list tracking, pool filter arrays.

---

### 🔹 Batch 03: Symbol Modifiers, Morphing & Stacks (15 Modules)

- [x] **Task 3.1: `TransformSymbol` Package Enhancement**
  - [x] `TransformSymbolModule`: 2-Tier frame morphing (Silver Frame $\rightarrow$ Gold Frame $\rightarrow$ Wild Symbol).
  - [x] `TransformSymbolItem` & `TransformSymbolVFX`: Spine particle burst on transformation, skin switching.
  - [x] `TransformSymbolData` & `TransformSymbolConfig`: Frame criteria, transformation rules.

- [x] **Task 3.2: `StickySymbol` Package Enhancement**
  - [x] `StickySymbolModule`: Retaining winning / Scatter / Wild symbols in-place across respins.
  - [x] `StickySymbolData` & `StickySymbolConfig`: Sticky lock matrix, countdown counters.

- [x] **Task 3.3: `StackedReel` Package Enhancement**
  - [x] `StackedReelModule`: Full-reel stacked symbol expansion (e.g. Guan Yu / Zhao Yun full-height Wild).
  - [x] `StackedReelConfig`: Stack replacement mapping, reel index eligibility.

- [x] **Task 3.4: `NudgeReel` Package Enhancement**
  - [x] `NudgeTableModule` & `NudgeReelModule`: Vertical reel nudge up/down to align high-pay or Wild symbols.
  - [x] `NudgeTableData`: Nudge step evaluation, distance calculation.

---

### 🔹 Batch 04: Pay Evaluation, Multipliers & Special Features (28 Modules)

- [x] **Task 4.1: `Cluster` Package Enhancement**
  - [x] `ClusterModule`: Orthogonal adjacency cluster payout evaluation ($O(R \times C)$ BFS flood-fill).
  - [x] `ClusterModuleData` & `ClusterModuleConfig`: Minimum cluster count threshold (e.g. 5+ symbols), pay table tiers.

- [x] **Task 4.2: `CollectionItem` Package Enhancement**
  - [x] `CollectionItemModule` & `CollectionItem`: Scatter / Token collection fly-in animation to HUD meter.
  - [x] `CollectionItemData` & `CollectionItemModuleConfig`: Collection milestone thresholds, Free Game triggers.

- [x] **Task 4.3: `InstantCash` Package Enhancement**
  - [x] `InstantCashModule`: Hold & Win cash prize coins, 3-respin reset counter, credit balance aggregation.
  - [x] `InstantCashData`: Coin multiplier values, jackpot symbol identification.

- [x] **Task 4.4: `Multiplier` & `MultiplierReel` Package Enhancement**
  - [x] `MultiplierModule` & `MultiplierData`: Step multiplier accumulation (+1, +2, +5) per cascade.
  - [x] `MultiplierReelModule`, `MultiplierReel`, `MultiplierReelData`: Dedicated 7th multiplier reel evaluation.

- [x] **Task 4.5: `BuyFeature` Package Enhancement**
  - [x] `BuyFeatureModule` & `BuyFeatureButton`: Feature Buy confirmation dialog, bet cost calculation ($100\times \text{Bet}$).
  - [x] `BuyFeatureConfig`: Buy feature pricing tiers, RTP settings.

- [x] **Task 4.6: `MegaReel` Package Enhancement**
  - [x] `MegaReelModule` & `SlotTableMegaModule`: Dynamic 2x3 or 3x3 reel linking with synchronized symbol spin.
  - [x] `MegaReelData` & `MegaReelConfig`: Linked reel index groups, synchronization timers.

---

### 🔹 Batch 05: System Architecture & Search Verification

- [x] **Task 5.1: Cross-Mechanic System Architecture Overviews**
  - [x] `docs/cc_slot_mechanics/over_view/`: Comprehensive architecture blueprint & component coordination.
  - [x] `docs/cc_slot_mechanics/systems/`: Physics, Cascade Pipeline, and Payline/Ways Evaluator subsystems.

- [x] **Task 5.2: Rebuild & Search Index Verification**
  - [x] Run `npm run build` in `mcp/mcp-fwcc`.
  - [x] Verify `DocsSearchEngine` query performance and `fwcc_get_doc` lookup across all 20 mechanics packages (17,283 chunks / 6,399 topics indexed).
