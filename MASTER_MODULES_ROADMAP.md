# 🗺️ Master Modules Roadmap & Implementation Checklist (v3.2)

> **Roadmap Objective**: Comprehensive, production-grade documentation across all Cocos Creator (`cc-common`) Slot Framework SDK modules (`assets/cc-common/cc-slot-module/`).  
> **Documentation Standard**: **Convention v3.0 Deep-Atomic Subfolder Hierarchy** (One file per method, per gotcha, per recipe, per phase breakdown, and complete `09_inheritance_and_customization/`).  
> **Verification**: MiniSearch relevance validation + GraphEngine semantic link resolution.

---

## 📊 Global Implementation Progress

- **Total SDK Clusters**: 10
- **Total Modules & Core Components**: ~75
- **Completed Modules (v3.0)**: **65 / 75 (87% Complete)**
  - Cluster 1 (Core Foundation & Bootstrap): **9 / 9 (100%)**
  - Cluster 2 (Game Mode Directors, Writers & Mini-Games): **14 / 14 (100%)**
  - Cluster 3 (Matrix, Reels & Symbols): **11 / 11 (100%)**
  - Cluster 4 (Paylines, Win Frames & Line Numbers): **8 / 8 (100%)**
  - Cluster 5 (Cascade & Avalanche Engine): **3 / 3 (100%)**
  - Cluster 6 (Cutscenes & Celebratory Overlays): **7 / 7 (100%)**
  - Cluster 7 (GUI Dashboard, Controls & Betting System): **13 / 13 (100%)**
- **Completed Architecture Systems & Overviews**: **100% Complete** (14 Global Guides + 8 Core Architecture Systems)
- **In-Progress / Upcoming Modules**: **10**

```text
[████████████████████████████████████████████████░░░░] 87% Total Completed
```

---

## 🧭 Master Architectural Systems & Overviews (100% Complete)

### 🏛️ Core Architecture Systems (`docs/cc_slot_module/systems/`)

| Status | System Area | Subdirectory Path | Key Architectural & Technical Coverage |
| :--- | :--- | :--- | :--- |
| [x] | **Game Mode Subsystem** | [`01_game_mode_system`](docs/cc_slot_module/systems/01_game_mode_system/00_index.md) | FSM concepts, 5 standard mode types, component anatomy, 4 communication channels, mode transition lifecycle. |
| [x] | **Table, Reels & Symbol Engine** | [`02_table_reel_symbol_engine`](docs/cc_slot_module/systems/02_table_reel_symbol_engine/00_index.md) | 7-part Table engine, 2D matrix coordinate math, buffer rows, Z-index sorting, mega symbols, zero-allocation pooling. |
| [x] | **Reactive Data & Reconnection** | [`03_reactive_data_system`](docs/cc_slot_module/systems/03_reactive_data_system/00_index.md) | Ingestion pipeline, key normalization (`mapNewKeys`), state immutability & deep-cloning, `isResume` session hydration. |
| [x] | **Script Execution & Pipeline** | [`04_script_execution_pipeline`](docs/cc_slot_module/systems/04_script_execution_pipeline/00_index.md) | 3-tier Scripting Triad (Director-Writer-Executor), command synthesis, async Promise chaining, Turbo / FTR, DevTools logging. |
| [x] | **Payline & Win Presentation** | [`05_payline_and_win_presentation_system`](docs/cc_slot_module/systems/05_payline_and_win_presentation_system/00_index.md) | 4 payline modes (Lines/AllWays/Cluster/ScatterPay), 2-stage presentation lifecycle, Component Quad & 4 rendering layers, payLineEmitter bus. |
| [x] | **Cascade & Avalanche Engine** | [`06_cascade_and_avalanche_system`](docs/cc_slot_module/systems/06_cascade_and_avalanche_system/00_index.md) | Deterministic elimination mapping, downward gravity drops with bounce easing, mega symbol offset math, 2-stage respin lifecycle. |
| [x] | **Cutscenes & Celebrations** | [`07_cutscenes_and_celebration_system`](docs/cc_slot_module/systems/07_cutscenes_and_celebration_system/00_index.md) | Centralized Map registry, Promise wrapping, dynamic multiplier escalation (Big->Mega->Super), touch-to-skip fast forwarding, and FTR fallback. |
| [x] | **GUI Dashboard & Betting** | [`08_gui_dashboard_and_controls_system`](docs/cc_slot_module/systems/08_gui_dashboard_and_controls_system/00_index.md) | Master HUD orchestration, spin button state machines, bet calculation matrices, currency wallet isolation, and trial play promotions. |

### 🌐 Global SDK Overviews (`docs/cc_slot_module/over_view/`)

| Status | Overview Document | Title / Scope | Key Conceptual Topics Covered |
| :---: | :--- | :--- | :--- |
| [x] | [`01_module_architecture`](docs/cc_slot_module/over_view/01_module_architecture_and_philosophy.md) | Module Architecture & Philosophy | Separation of Data - Presentation - Director, scalability. |
| [x] | [`02_dependency_injection_ioc`](docs/cc_slot_module/over_view/02_dependency_injection_ioc.md) | Dependency Injection & IoC | `@inject` decorator, Service Locator container. |
| [x] | [`03_dual_event_bus_system`](docs/cc_slot_module/over_view/03_dual_event_bus_system.md) | Dual Event Bus System | Scoped `moduleEvent` vs Global `EventManager`. |
| [x] | [`04_module_lifecycle`](docs/cc_slot_module/over_view/04_module_lifecycle_and_registration.md) | Module Lifecycle & Registration | Scene bootstrap, `onLoad`, `start`, `onDestroy` hooks. |
| [x] | [`05_module_ecosystem`](docs/cc_slot_module/over_view/05_module_ecosystem_and_classification.md) | Module Ecosystem & Classification | 5 major module clusters. |
| [x] | [`06_best_practices_gotchas`](docs/cc_slot_module/over_view/06_module_best_practices_and_gotchas.md) | Best Practices & Gotchas | Coding standards, memory safety. |
| [x] | [`07_game_mode_architecture`](docs/cc_slot_module/over_view/07_game_mode_architecture_and_composition.md) | Game Mode Composition | Mode Anatomy (Director+Writer+Data), and 4 Communication Channels. |
| [x] | [`08_table_reel_symbol_engine`](docs/cc_slot_module/over_view/08_table_reel_symbol_engine_architecture.md) | Table, Reels & Symbols | 7-part Table Engine, 2D matrix `[col][row]`, Buffer Rows, Z-Order sorting. |
| [x] | [`09_reactive_data_flow`](docs/cc_slot_module/over_view/09_reactive_data_flow_and_reconnection_architecture.md) | Reactive Data & Reconnection | WebSocket ➔ DataStore (mapNewKeys, Deep-Clone) ➔ BaseDataModule. |
| [x] | [`10_script_executor_pipeline`](docs/cc_slot_module/over_view/10_script_executor_and_writer_command_pipeline.md) | Command Pipeline | Scripting Triad (Director ➔ Writer ➔ ScriptExecutor), Async Promise chaining. |
| [x] | [`11_win_presentation_hierarchy`](docs/cc_slot_module/over_view/11_win_evaluation_payline_and_celebration_hierarchy.md) | Win Presentation Hierarchy | Multiplier tiers, Paylines (Blink all ➔ Cycle), Win rolling count-up. |
| [x] | [`12_audio_choreography`](docs/cc_slot_module/over_view/12_audio_choreography_and_sound_pipeline.md) | Audio Choreography | BGM per mode, Reel spin loops, Near-win tension music, Coin roll. |
| [x] | [`13_scene_graph_prefabs`](docs/cc_slot_module/over_view/13_scene_graph_prefabs_and_packaging_conventions.md) | Scene Graph & Prefabs | Canvas node tree, prefab override principles, game creation workflow. |
| [x] | [`14_create_setup_new_module`](docs/cc_slot_module/over_view/14_guide_how_to_create_and_setup_new_module.md) | Create & Setup New Module | Master Step-by-Step Guide: Script Boilerplate, Scene Node Placement, Tag Editor, Writer Integration & Golden Tips. |

---

## 🏛️ Cluster 1: Core Foundation & Bootstrap (9/9 Complete - 100%)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`GameInit`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameInit.ts` | **COMPLETED (v3.0)** - Bootstrap entry point, IoC container registration, network auto-connect. |
| [x] | **`GameConfig`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameConfig.ts` | **COMPLETED (v3.0)** - Master config (`PAY_SYSTEM`, `TABLE_FORMAT`, `CURRENCY_CONFIG`, 25+ parameters). |
| [x] | **`SlotBaseModule`** | Base Class for All Modules | `assets/cc-common/cc-slot-module/Core/SlotBaseModule.ts` | **COMPLETED (v3.0)** - Universal base class (`@inject`, `applyInjections`, dual event bus). |
| [x] | **`BaseDataModule`** | Base Class for Data Stores | `assets/cc-common/cc-slot-module/Core/BaseDataModule.ts` | **COMPLETED (v3.0)** - Reactive data state wrapper with `registeredKeys` listeners. |
| [x] | **`GameDataStore`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameDataStore.ts` | **COMPLETED (v3.0)** - Central reactive store (`playSession`, `wallet`, `bet`, `winAmount`, `updateDataModules`). |
| [x] | **`GameEventManager`** | Injected via `GameInit` | `assets/cc-common/cc-slot-module/Core/GameEventManager.ts` | **COMPLETED (v3.0)** - Asynchronous global event bus (`emit` awaits `Promise.all()`). |
| [x] | **`SlotGameSettings`** | Injected via `GameInit` | `assets/cc-common/cc-slot-module/Core/SlotGameSettings.ts` | **COMPLETED (v3.0)** - User preferences (Turbo state, FTR mode, speed levels, `currentGameState`). |
| [x] | **`SlotSoundPlayerModule`** | `Canvas/Director/SlotSound` | `assets/cc-common/cc-slot-module/Core/SlotSound/SlotSoundPlayerModule.ts` | **COMPLETED (v3.0)** - Audio controller (BGM playback, SFX crossfade, win loops, mobile unlock). |
| [x] | **`GameDirector`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameDirector.ts` | **COMPLETED (v3.0)** - Master scene orchestrator, mode stack manager, and network event router. |

---

## 🎬 Cluster 2: Game Mode Directors, Writers & Mini-Games (14/14 Complete - 100%)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`BaseGameDirector`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts` | **COMPLETED (v3.0)** - Master state machine loop orchestrator. |
| [x] | **`ScriptExecutor`** | Helper Class in Director | `assets/cc-common/cc-slot-module/GameMode/Core/ScriptExecutor.ts` | **COMPLETED (v3.0)** - Asynchronous action queue step processor, Promise chaining, logging. |
| [x] | **`GameModeDirectorModule`** | `Canvas/Director/GameMode` | `assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts` | **COMPLETED (v3.0)** - Director dispatcher managing Normal, Free, and Bonus game modes. |
| [x] | **`GameModeWriterModule`** | Helper Class in GameMode Director | `assets/cc-common/cc-slot-module/GameMode/GameModeWriterModule.ts` | **COMPLETED (v3.0)** - Abstract script generator base class for all mode writers (12/12 methods). |
| [x] | **`NormalGameDirectorModule`** | `Canvas/Director/GameMode/NormalGame` | `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameDirectorModule.ts` | **COMPLETED (v3.0)** - Normal game spin loop director. |
| [x] | **`NormalGameWriterModule`** | Helper Class in Normal Director | `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameWriterModule.ts` | **COMPLETED (v3.0)** - Action script queue definition for normal spins. |
| [x] | **`FreeGameDirectorModule`** | `Canvas/Director/GameMode/FreeGame` | `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameDirectorModule.ts` | **COMPLETED (v3.0)** - Free game spin loop director (spins remaining, multipliers). |
| [x] | **`FreeGameWriterModule`** | Helper Class in Free Director | `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameWriterModule.ts` | **COMPLETED (v3.0)** - Action script queue definition for free spins. |
| [x] | **`BonusGameDirectorModule`** | `Canvas/Director/GameMode/BonusGame` | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameDirectorModule.ts` | **COMPLETED (v3.0)** - Pick-and-click / Mini-game director. |
| [x] | **`BonusGameWriterModule`** | Helper Class in Bonus Director | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameWriterModule.ts` | **COMPLETED (v3.0)** - Script queue definition for bonus rounds. |
| [x] | **`BonusGameTableModule`** | `Canvas/Director/GameMode/BonusGame/Table` | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameTableModule.ts` | **COMPLETED (v3.0)** - Manages the interactive grid of pickable items/chests. |
| [x] | **`BonusGameItemModule`** | Child Item in Bonus Table | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameItemModule.ts` | **COMPLETED (v3.0)** - Individual clickable chest/box Spine animation & prize display. |
| [x] | **`FreeOptionDirectorModule`**| `Canvas/Director/GameMode/FreeOption` | `assets/cc-common/cc-slot-module/GameMode/FreeOption/FreeOptionDirectorModule.ts` | **COMPLETED (v3.0)** - Player choice modal for selecting Free Spin volatility options. |
| [x] | **`FortuneWheelGameDirector`**| `Canvas/Director/GameMode/FortuneWheel` | `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Director/FortuneWheelGameDirector.ts` | **COMPLETED (v3.0)** - Wheel of Fortune mini-game director, spin physics, target segment settling. |

---

## 🎰 Cluster 3: Matrix, Reels & Symbols (Table Engine - 11/11 Complete - 100%)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`SlotTableModule`** | `Canvas/Director/GameMode/BoardG/Table` | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts` | **COMPLETED (v3.0)** - Grid matrix orchestrator, reel instantiation, near-win anticipation. |
| [x] | **`SlotReelModule`** | Dynamically created child reel | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts` | **COMPLETED (v3.0)** - Column scrolling, speed curves, stopping bounce animation. |
| [x] | **`SlotSymbolModule`** | Dynamically created child symbol | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts` | **COMPLETED (v3.0)** - Visual symbol presentation (Spine skeleton, Static sprite, Blur sprite). |
| [x] | **`SlotSymbolManager`** | Child node of SlotTable | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts` | **COMPLETED (v3.0)** - Node pooling (`cc.NodePool`), win animations, spine lifecycle caching. |
| [x] | **`MultipleSymbolManager`** | Alternative Symbol Manager | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/MultipleSymbolManager.ts` | **COMPLETED (v3.0)** - Multi-spine bundle management for games with variable sized symbols. |
| [x] | **`SlotSymbolResourceManager`**| Resource Provider | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager.ts` | **COMPLETED (v3.0)** - Dynamic asset loader for symbols, sprites, and spine skeletons. |
| [x] | **`SlotCustomNodePool`** | Memory optimization pool | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotCustomNodePool.ts` | **COMPLETED (v3.0)** - High-performance pooled node allocation for symbol reuse. |
| [x] | **`TableModuleConfig`** | Configuration in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/TableModuleConfig.ts` | **COMPLETED (v3.0)** - Reel timings, easing curves, stopping delay constants. |
| [x] | **`SlotTableData`** | BaseDataModule in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableData.ts` | **COMPLETED (v3.0)** - Table matrix state conversion (`registeredKeys: ['matrix']`). |
| [x] | **`SlotTableNearWinModule`**| Child component in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableNearWinModule.ts` | **COMPLETED (v3.0)** - Anticipation VFX overlays for 2+ Scatter/Bonus triggers. |
| [x] | **`SlotTableSoundEffectModule`**| Audio bridge in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableSoundEffectModule.ts` | **COMPLETED (v3.0)** - Reel spinning, stopping clicks, scatter anticipation sound routing. |

---

## ⚡ Cluster 4: Paylines, Win Frames & Line Number Drawing (8/8 Complete - 100%)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`SlotTablePaylineModule`** | `Canvas/Director/GameMode/BoardG/Payline` | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotTablePaylineModule.ts` | **COMPLETED (v3.0)** - Main payline controller coordinating blinking symbols and line art. |
| [x] | **`SlotTablePaylineData`** | Data model in Payline | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotTablePaylineData.ts` | **COMPLETED (v3.0)** - Normalizes server payline arrays into visual line indices. |
| [x] | **`PaylineSymbolModule`** | Symbol highlight layer | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/PaylineSymbolModule.ts` | **COMPLETED (v3.0)** - Blinks and plays winning animations for symbol combinations. |
| [x] | **`PaylineWinFrameModule`**| Win frames container | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/WinFrame/scripts/PaylineWinFrameModule.ts` | **COMPLETED (v3.0)** - Instantiates and animates glowing win border boxes over winning symbols. |
| [x] | **`PaylineLineModule`** | Line vector rendering | `assets/cc-common/cc-slot-module/BaseModule/Payline/LineDrawing/scripts/PaylineLineModule.ts` | **COMPLETED (v3.0)** - Renders connected line paths through winning coordinate tracks. |
| [x] | **`PaylineNumberModule`** | Left/Right side number markers | `assets/cc-common/cc-slot-module/BaseModule/Payline/LineNumber/scripts/PaylineNumberModule.ts` | **COMPLETED (v3.0)** - Lights up active payline index numbers along table borders. |
| [x] | **`SlotPaylineSchedule`** | Timer scheduler | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotPaylineSchedule.ts` | **COMPLETED (v3.0)** - Timed cycling schedule for sequential single payline display. |
| [x] | **`PaylineFactory`** | Helper Utility | `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineCommon/PaylineFactory.ts` | **COMPLETED (v3.0)** - Instantiates Line and Frame visual items dynamically. |

---

## 🌊 Cluster 5: Cascade & Avalanche Engine (100% Complete)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`VerticalCascadeModule`** | `Canvas/Director/GameMode/MainGamePrefab/CascadeModule` | `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/VerticalCascadeModule.ts` | **COMPLETED (v3.0)** - Master cascading avalanche controller (disappearing wins, column drops, bounce easing). |
| [x] | **`CascadeModuleData`** | Data model in Cascade | `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/CascadeModuleData.ts` | **COMPLETED (v3.0)** - Ingests matrix & traceWay and calculates drop distances per column. |
| [x] | **`CascadeModuleConfig`** | Configuration in Cascade | `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/CascadeModuleConfig.ts` | **COMPLETED (v3.0)** - Drop speeds, bounce gravity easing, explosion particle delays. |

---

## 🎆 Cluster 6: Cutscenes & Celebratory Overlays

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`CutsceneController`** | `Canvas/Director/Cutscene` | `assets/cc-common/cc-slot-module/CutScene/CutsceneController.ts` | Master cutscene queue controller coordinating fullscreen modal overlays. |
| [x] | **`BaseCutscene`** | Base Class for Cutscenes | `assets/cc-common/cc-slot-module/CutScene/BaseCutscene.ts` | Abstract base cutscene providing enter/exit tweens and skip listeners. |
| [x] | **`IntroGameModule`** | Cutscene child | `assets/cc-common/cc-slot-module/CutScene/IntroGame/IntroGameModule.ts` | Splash intro screen displayed when entering base game. |
| [x] | **`IntroFreeGameModule`**| Cutscene child | `assets/cc-common/cc-slot-module/CutScene/IntroFreeGame/IntroFreeGameModule.ts` | Mode transition cutscene dialogue for Free Spins trigger. |
| [x] | **`WinEffectModule`** | Cutscene child | `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffectModule.ts` | Tiered Big Win, Mega Win, and Super Win count-up celebrations. |
| [x] | **`JackpotWinModule`** | Cutscene child | `assets/cc-common/cc-slot-module/CutScene/JackpotWin/JackpotWinModule.ts` | Unskippable Grand/Major/Minor Jackpot win celebration banner. |
| [x] | **`TotalWinModule`** | Cutscene child | `assets/cc-common/cc-slot-module/CutScene/TotalWin/TotalWinModule.ts` | Summary score dialogue at the conclusion of Free Game rounds. |

---

## 🎛️ Cluster 7: GUI Dashboard, Controls & Betting System

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`UIManagerModule`** | `Canvas/Director/UIManager` | `assets/cc-common/cc-slot-module/Core/UIManagerModule.ts` | Master GUI orchestrator managing bottom control panel and states. |
| [x] | **`SlotButtonModule`** | `Canvas/Director/UIManager/SpinButton` | `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonModule.ts` | Master spin button supporting Normal, Auto, Turbo, and Lightning modes. |
| [x] | **`BetModule`** | `Canvas/Director/UIManager/BetModule` | `assets/cc-common/cc-slot-module/GUI/Bet/BetModule.ts` | Bet selector, bet multiplier stepper, max bet toggle. |
| [x] | **`ExtraBetModule`** | `Canvas/Director/UIManager/ExtraBet` | `assets/cc-common/cc-slot-module/GUI/Bet/ExtraBetModule.ts` | Toggle switch for Ante-Bet / Golden Bet feature modifiers. |
| [x] | **`WalletModule`** | `Canvas/Director/UIManager/WalletModule` | `assets/cc-common/cc-slot-module/GUI/Wallet/WalletModule.ts` | Player cash balance display with rolling MoneyTween count-ups. |
| [x] | **`WinAmountModule`** | `Canvas/Director/UIManager/WinAmount` | `assets/cc-common/cc-slot-module/GUI/WinAmount/WinAmountModule.ts` | Main win display label with rolling count-up animations. |
| [x] | **`JackpotModule`** | `Canvas/Director/Jackpot` | `assets/cc-common/cc-slot-module/GUI/Jackpot/JackpotModule.ts` | Progressive jackpot banner counters (Grand, Major, Minor, Mini). |
| [x] | **`SpinTimesModule`** | `Canvas/Director/UIManager/SpinTimes` | `assets/cc-common/cc-slot-module/GUI/SpinTimes/SpinTimesModule.ts` | Countdown badge displaying remaining Free Spins or Auto Spins. |
| [x] | **`TurboButton`** | `Canvas/Director/UIManager/TurboButton` | `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButton.ts` | Turbo / Quick-spin mode toggle button with sprite state transitions. |
| [x] | **`PaylineInfoModule`** | `Canvas/Director/UIManager/PaylineInfo` | `assets/cc-common/cc-slot-module/GUI/PaylineInfo/PaylineInfoModule.ts` | Floating notification bar showing win amounts per hit payline. |
| [x] | **`TrialModeManager`** | `Canvas/Director/TrialMode` | `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeManager.ts` | Trial play banner, demo credits simulation, Back to Real mode button. |
| [x] | **`IconPromotion`** | `Canvas/Director/UIManager/Promotion` | `assets/cc-common/cc-slot-module/GUI/Promotion/IconPromotion.ts` | Promotional event badges and free round counters. |
| [x] | **`ToastInfoModule`** | `Canvas/Director/Toast` | `assets/cc-common/cc-slot-module/GUI/ToastInfo/ToastInfoModule.ts` | Transient toast notification popups for low balance / error alerts. |

---

## 📜 Cluster 8: Popups, History, Settings & Info Panels

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **`PopupControllerModule`**| `Canvas/Director/Popup` | `assets/cc-common/cc-slot-module/Popup/PopupControllerModule.ts` | Master popup manager with queueing, modal backgrounds, and transitions. |
| [ ] | **`BaseUIPopup`** | Base Class for Popups | `assets/cc-common/cc-slot-module/Popup/BaseUIPopup.ts` | Base modal class providing `show()`, `hide()`, and behavior hooks. |
| [ ] | **`BetHistoryModule`** | `Canvas/Director/Popup/BetHistory` | `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryModule.ts` | Comprehensive spin history viewer with paginated round details. |
| [ ] | **`BetHistoryDetailModule`**| Sub-panel in BetHistory | `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryDetailModule.ts` | Granular round replay showing matrix snapshots, payouts, and bonus steps. |
| [ ] | **`JackpotHistoryModule`**| `Canvas/Director/Popup/JackpotHistory` | `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryModule.ts` | Tabular record of recent jackpot winners and timestamps. |
| [ ] | **`SettingPanel`** | `Canvas/Director/Popup/Setting` | `assets/cc-common/cc-slot-module/Popup/Setting/SettingPanel.ts` | Audio volume sliders, Turbo toggle, battery saver, and vibration. |
| [ ] | **`InfoPanel`** | `Canvas/Director/Popup/Info` | `assets/cc-common/cc-slot-module/Popup/Info/InfoPanel.ts` | Multi-page paytable rulebook with PageViewIndicator navigation. |
| [ ] | **`JackpotWinNoticePopup`**| `Canvas/Director/Popup/JackpotNotice` | `assets/cc-common/cc-slot-module/Popup/NotifyJackpot/JackpotWinNoticePopup.ts` | Global broadcast dialog alerting when another room player hits Jackpot. |
| [ ] | **`DialogMessageModule`** | `Canvas/Director/DialogMessage` | `assets/cc-common/cc-slot-module/DialogMessage/DialogMessageModule.ts` | System alert modal for network disconnects, kicks, and errors. |

---

## 📱 Cluster 9: Base Portrait UI Experience

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **`PortraitBetModule`** | Portrait layout betting HUD | `assets/cc-common/cc-slot-module/BasePortrait/PortraitBet/PortraitBetModule.ts` | Mobile-optimized bottom bet selector for vertical screen layouts. |
| [ ] | **`AutoSpinPanel`** | Auto-spin overlay sheet | `assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinPanel.ts` | Bottom-sheet drawer for selecting 10, 20, 50, 100 auto spin rounds. |
| [ ] | **`BetSelectionPanel`** | Bet adjustment modal | `assets/cc-common/cc-slot-module/BasePortrait/BetSelectionPanel/BetSelectionPanel.ts` | Quick-select chip list for rapid bet level adjustments. |
| [ ] | **`MenuPanel`** | Hamburger menu drawer | `assets/cc-common/cc-slot-module/BasePortrait/MenuPanel/MenuPanel.ts` | Vertical slide-out drawer providing access to History, Sound, and Rules. |
| [ ] | **`PayTablePanel`** | Vertical paytable view | `assets/cc-common/cc-slot-module/BasePortrait/PayTablePanel/PayTablePanel.ts` | Scrollable vertical rulebook and dynamic symbol multiplier calculator. |
| [ ] | **`SymbolPaytableViewer`** | Symbol payout viewer | `assets/cc-common/cc-slot-module/BasePortrait/SymbolPaytable/SymbolPaytableViewer.ts` | Interactive symbol viewer displaying payout amounts based on active bet. |
| [ ] | **`BetHistoryDetailPortrait`**| Portrait history viewer | `assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryDetailPortrait.ts` | Mobile-tailored spin history with expandable round accordion items. |
| [ ] | **`TurboModeSuggestionPopup`**| Smart recommendation modal | `assets/cc-common/cc-slot-module/BasePortrait/TurboModeSuggestionPopup/TurboModeSuggestionPopup.ts` | Recommends Turbo mode activation after consecutive standard spins. |
| [ ] | **`WinAmountTooltipModule`**| Floating win tooltip | `assets/cc-common/cc-slot-module/BasePortrait/WinAmountTooltipModule.ts` | Floating bubble displaying incremental line win breakdowns. |

---

## ⚙️ Cluster 10: Pooling, Compatibility & Utility Services

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **`PoolFactoryModule`** | Service Component | `assets/cc-common/cc-slot-module/PoolFactory/PoolFactoryModule.ts` | Generic object pooling factory for visual nodes and particle VFX. |
| [ ] | **`SlotObjectPool`** | Utility Class | `assets/cc-common/cc-slot-module/PoolFactory/SlotObjectPool.ts` | High-speed pool container managing instantiation, checkout, and recycle. |
| [ ] | **`LoadingScreenModule`**| `Canvas/Director/Loading` | `assets/cc-common/cc-slot-module/Components/LoadingScreenModule.ts` | Asset preloading orchestrator, progress bar updates, and fade-out. |
| [ ] | **`CanvasModuleController`**| Canvas Root | `assets/cc-common/cc-slot-module/Components/Compat/CanvasModuleController.ts` | Dynamic resolution adaptation, safe area calculation, and orientation locks. |
| [ ] | **`AutoScaleBackgroundModule`**| Background container | `assets/cc-common/cc-slot-module/Components/Compat/AutoScaleBackgroundModule.ts` | Auto-fits background sprites/spines to screen aspect ratios without stretching. |
| [ ] | **`WaitingSceneModule`** | Loading overlay | `assets/cc-common/cc-slot-module/Components/WaitingSceneModule.ts` | Spinner overlay displayed during network latency or reconnection. |
| [ ] | **`SoundPlayerModuleImpl`**| Audio implementation | `assets/cc-common/cc-slot-module/Components/SoundPlayerModuleImpl.ts` | Concrete audio implementation mapping sound convert lists to audio clips. |
