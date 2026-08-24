# 📜 Cocos Common (`cc-common`) Modular Knowledge Base Standard (v3.0)
## Deep-Atomic Folder Hierarchy & Per-Method Specification

> **Version**: 3.0 (Modular Folder Architecture with Atomic Per-Method & Per-Gotcha Deep-Dive)  
> **Language Standard**: 100% English across all documentation nodes and code docstrings.  
> **Target Framework**: Cocos Creator 2.4 + Cocos Common (`cc-common`) Slot Framework SDK.  
> **Reference Template Scenes**: `assets/cc-common/cc-slot-module/g9000L.fire`, `g9000H.fire`, `g9000P.fire`.

---

## 🎯 I. Core Architectural Philosophy (Folder & Atomic Decomposition)

To achieve maximum indexing granularity, precise search relevance, and comprehensive graph navigation, every module/class under `docs/modules/[ModuleName]/` is structured as a **Modular Subdirectory Tree**. Every single API method, gotcha, and recipe has its own dedicated markdown file:

```text
docs/modules/[ModuleName]/
├── 01_overview/
│   ├── 01_architecture_and_role.md        # Architectural role & coordinate systems
│   ├── 02_scene_and_prefabs.md            # Canonical scene path, prefabs & companions
│   └── 03_lifecycle_flowchart.md          # Mermaid sequence & state transition diagrams
│
├── 02_game_flow/
│   ├── 01_spin_phase_breakdown.md         # Exact behavior across the 5 spin loop phases
│   └── 02_timing_execution_matrix.md      # Method-by-method timing, invoker & failure impact
│
├── 03_director_writer_integration/
│   ├── 01_pipeline_orchestration.md       # 3-tier Director-Writer-Module execution pipeline
│   └── 02_subsystem_impacts.md            # Direct impacts on Table, UI, Audio, Network
│
├── 04_properties_and_state/
│   ├── 01_inspector_properties.md         # @property schema: when set, where read, impact
│   ├── 02_injected_services.md            # @inject tokens: when provided, purpose
│   └── 03_runtime_state_variables.md      # Internal state: mutation moment, guards
│
├── 05_methods/                            # 🚀 ATOMIC PER-METHOD DOCUMENTATION
│   ├── 00_methods_index.md                # Master summary index of all declared methods
│   ├── [methodName_1].md                  # Deep-dive: triggers, logic, impacts & full code
│   ├── [methodName_2].md
│   └── ...
│
├── 06_events/
│   ├── 01_scoped_module_events.md         # moduleEvent listeners & emitters dictionary
│   └── 02_global_event_bus.md             # eventManager global cross-mode topics
│
├── 07_gotchas/                            # ⚠️ ATOMIC PER-GOTCHA ENGINE DEFECTS
│   ├── 00_gotchas_index.md                # Summary list of common pitfalls
│   ├── [gotcha_slug_1].md                 # Symptom, Root Cause, Cocos 2.4 bug, Code Fix
│   └── ...
│
├── 08_recipes/                            # 💡 PRODUCTION-READY SUBCLASSING RECIPES
│   ├── 00_recipes_index.md                # Index of practical cookbook recipes
│   ├── [recipe_slug_1].md                 # Live production code snippet (e.g. Red Cliff Slot)
│   └── ...
│
├── 09_inheritance_and_customization/      # 🏗️ HOW TO EXTEND & CUSTOMIZE FOR NEW GAMES
│   ├── 01_subclassing_guide.md            # Step-by-step inheritance rules (onLoadExtend, super calls)
│   ├── 02_override_points_matrix.md       # Matrix of all hook methods & safe extension points
│   ├── 03_game_creation_workflow.md       # 5-step checklist when building a new slot game
│   └── 04_production_game_case_study.md   # Complete real-world case study (e.g. Red Cliff g9666L)
│
└── relations.json                         # Complete Knowledge Graph semantic edge manifest
```

---

## 🌳 II. Canonical Template Scene Hierarchy (`g9000L.fire` / `g9666L.fire`)

All modules have designated canonical anchors in the standard template scene hierarchy inspected live via `cocos24-mcp-server`:

```text
Canvas (cc.Canvas, CanvasModuleController, cc.Widget)
├── Main Camera (cc.Camera)
└── Canvas/Director
    ├── [Components mounted on Canvas/Director]:
    │   ├── GameInit.ts            ➔ (Bootstrap, IoC Container registration, Network auth)
    │   ├── GameConfig.ts          ➔ (TABLE_FORMAT, PAY_SYSTEM, CURRENCY_CONFIG, 25+ parameters)
    │   ├── GameDataStore.ts       ➔ (playSession, wallet, winAmountPS, BaseDataModules)
    │   └── GameDirector.ts        ➔ (Master scene orchestrator, mode stack manager, network router)
    │
    ├── Canvas/Director/GameMode   ➔ OnAddGameMode.ts
    │   ├── BG_MainG               ➔ (Main game background sprite)
    │   ├── BoardG                 ➔ (Matrix container & reel borders)
    │   ├── MainGamePrefab         ➔ (Normal game mode: BaseGameMode, NormalGameDirectorModule, NormalGameWriterModule)
    │   │   ├── SlotTableModule    ➔ (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
    │   │   │   ├── SymbolPool     ➔ (SlotSymbolManager - Main reel symbol pool)
    │   │   │   ├── Table          ➔ (cc.Mask - Mask bounding column reels Reel_0..Reel_N)
    │   │   │   └── VFX_NearWin    ➔ (sp.Skeleton - Anticipation VFX skeleton)
    │   │   ├── SlotTablePaylineModule ➔ (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
    │   │   │   ├── PaylineSymbolModule ➔ (Symbol win animations & dimming)
    │   │   │   └── SymbolPool     ➔ (SlotSymbolManager - Dedicated win symbol pool)
    │   │   ├── TransformSymbolModule ➔ (TransformSymbolModule, TransformSymbolConfig, TransformSymbolData)
    │   │   └── SymbolManger       ➔ (SlotSymbolManager - Feature symbol manager)
    │   ├── FreeGamePrefab         ➔ (Free spins mode: FreeGameDirectorModule, FreeGameWriterModule)
    │   ├── BonusGamePrefab        ➔ (Bonus mini-game mode: BonusGameDirectorModule, BonusGameWriterModule)
    │   │   ├── BonusTable         ➔ (BonusGameTableModule, BonusTableData, BonusTableConfig)
    │   │   └── CountDown          ➔ (cc.Label - Auto-pick fallback timer)
    │   └── FreeOptionPrefab       ➔ (Volatility modal: FreeOptionDirectorModule, options layout)
    │
    ├── Canvas/Director/UIManager  ➔ UIManagerModule.ts
    │   ├── BG_BottomUI            ➔ (Bottom control bar background)
    │   ├── Bet                    ➔ (BetModule, TotalBetLabel, DenomLabel, BetIncrease, BetDecrease)
    │   ├── Wallet                 ➔ (WalletModule, RealWallet, TrialWallet)
    │   ├── NormalPaylineInfo      ➔ (PaylineInfoModule - Win amount label & bitmap font formatter)
    │   ├── NormalSpinButton       ➔ (SlotButtonNormal - Spin / FastStop / AutoSpin button)
    │   ├── TurboButton            ➔ (TurboButtonSwitcher - Fast play / Turbo mode toggle switcher)
    │   ├── WinAmountPrefab        ➔ (WinAmountModule - Rolling win count-up label)
    │   └── Jackpot                ➔ (JackpotModule, Grand JackpotLabel)
    │
    ├── Canvas/Director/CutsceneControl ➔ CutsceneController.ts
    │   ├── WinEffect              ➔ (WinEffectModule - Big Win, Mega Win, Super Win celebration overlays)
    │   ├── IntroFreeGame          ➔ (IntroFreeGameModule - Free spin introductory modal)
    │   └── JackpotWin             ➔ (JackpotWinModule - Grand/Major jackpot banner celebration)
    │
    ├── Canvas/Director/PopupControl    ➔ PopupControllerModule.ts
    │   ├── SettingPanel           ➔ (SettingPanel - Audio toggles, language preferences)
    │   ├── InfoPanel              ➔ (InfoPanel - Paytable rules & symbol payouts)
    │   └── BetHistory             ➔ (BetHistoryModule - Player bet history and round replay)
    │
    ├── Canvas/Director/SlotSoundPlayer ➔ (SlotSoundPlayerModule, SoundConvertList - SFX & BGM controller)
    ├── Canvas/Director/Toast           ➔ (ToastInfoModule - In-game notification banners)
    ├── Canvas/Director/DialogMessage   ➔ (DialogMessageModule - Network reconnect & error modals)
    └── Canvas/Director/waitingScene    ➔ (WaitingSceneModule - Connection loader spinner)
```

---

## 🔬 III. Live Cocos MCP Scene Inspection & Prefab Discovery (`cocos24-mcp-server`)

> [!IMPORTANT]
> **MANDATORY LIVE SCENE & PREFAB INSPECTION**:
> Before documenting any module, call `cocos24-mcp-server` lazy tools or parse template `.fire` / `.prefab` scenes:
> 1. **`find_nodes` & `inspect_node`**: Query active node coordinates, scale, anchors, active flags, and attached component properties.
> 2. **Prefab Asset Discovery**: Inspect all `@property({ type: cc.Prefab })` fields and record absolute project asset paths.
> 3. **Companion Quad/Triplet Identification**:
>    * 🎮 **Visual Controller**: e.g. `SlotTableModule.ts`.
>    * 💾 **Data Model (`BaseDataModule`)**: e.g. `SlotTableData.ts`.
>    * ⚙️ **Configuration**: e.g. `TableModuleConfig.ts`.
>    * 🎬 **Writer Script Generator**: e.g. `NormalGameWriterModule.ts`.
>    * 🔊 **Audio & VFX Companions**: e.g. `SlotTableSoundEffectModule.ts`.

---

## 📋 IV. Atomic Node & Method File Specifications

### 📁 Folder 1: `01_overview/`
* **`01_architecture_and_role.md`**: Core purpose, system boundaries, inheritance chain, coordinate math.
* **`02_scene_and_prefabs.md`**: Canonical scene node path, referenced prefab asset table (`Name`, `Asset Path`, `Purpose`), companion subsystem list.
* **`03_lifecycle_flowchart.md`**: Mermaid sequence diagrams showing startup, execution, and teardown lifecycles.

### 📁 Folder 2: `02_game_flow/`
* **`01_spin_phase_breakdown.md`**: Detailed behavior across the 5 spin loop phases (Bootstrap ➔ Spin Start Roll ➔ Server Presentation ➔ Fast Stop ➔ Settlement).
* **`02_timing_execution_matrix.md`**: Comprehensive table (`Phase`, `Invoking Entity`, `Method Called`, `State Mutation`, `Failure Impact`).

### 📁 Folder 3: `03_director_writer_integration/`
* **`01_pipeline_orchestration.md`**: 3-tier Writer-Director-Module execution pipeline and command transformation logic.
* **`02_subsystem_impacts.md`**: Direct impact breakdown on sibling subsystems (Table, GUI HUD, Sound, Popups, Network).

### 📁 Folder 4: `04_properties_and_state/`
* **`01_inspector_properties.md`**: `@property` table with columns: `Name`, `Type`, `Default`, `When Set`, `Where Read`, `Impact If Desynced`.
* **`02_injected_services.md`**: `@inject` table with columns: `Token`, `Type`, `When Provided`, `Purpose in Module`.
* **`03_runtime_state_variables.md`**: Internal variables with columns: `Field Name`, `Type`, `Default`, `Mutation Moment`, `Purpose & Guard Role`.

### 📁 Folder 5: `05_methods/` (🚀 ONE FILE PER METHOD)
* **`00_methods_index.md`**: Master index table of all public and protected methods.
* **`[methodName].md`**: Dedicated atomic documentation file containing:
  * **Header & Signature**: `public/protected methodName(param1: Type, ...): ReturnType`
  * **When Is It Called & Trigger Source**: Exact lifecycle moment or caller (e.g. "Invoked by `ScriptExecutor` during step 3 of `makeScriptNormalSpinTrigger` when server socket sends spin packet").
  * **Detailed Algorithmic Logic**: Step-by-step numbered breakdown of internal branches, tween sequences, event dispatches, and promise resolutions.
  * **Caller & Callee Graph**: Which functions call this method, and which downstream functions this method calls.
  * **Parameters & Return Value Specification**: Deep type definitions.
  * **Un-truncated Full TypeScript Source Code**: Exact, complete source code excerpt extracted directly from the SDK codebase.
  * ⚠️ **STRICT BAN ON GENERIC BOILERPLATE**: Every description must explain real engine mechanics, coordinate math, event names, and timer durations.

### 📁 Folder 6: `06_events/`
* **`01_scoped_module_events.md`**: Events emitted or listened to on `this.moduleEvent`.
* **`02_global_event_bus.md`**: Events emitted or listened to on `this.eventManager`.

### 📁 Folder 7: `07_gotchas/` (⚠️ ONE FILE PER GOTCHA)
* **`00_gotchas_index.md`**: Index table of all known engine gotchas for this module.
* **`[gotcha_slug].md`**: Detailed analysis including:
  * **Symptom & Visual Defect**: What the player/developer observes.
  * **Root Cause & Cocos 2.4 Engine Quirk**: Exact technical defect.
  * **Reproduction Steps**: How to trigger the bug.
  * **Standard Code Solution & Fix**: Annotated TypeScript code comparison.

### 📁 Folder 8: `08_recipes/` (💡 ONE FILE PER RECIPE)
* **`00_recipes_index.md`**: Index table of available subclassing recipes.
* **`[recipe_slug].md`**: Full production implementation recipe (e.g. Red Cliff Slot `g9666L`).

### 📄 Manifest: `relations.json`
* Knowledge graph manifest declaring `inheritsFrom`, `manages`, `usedBy`, `dependsOn`, `emitsEvents`, `listensToEvents`, `gotchas`, and map of all subfolder files.

---

## 🏷️ V. Standardized Frontmatter & Tagging Convention (`tags` Specification)

Every markdown document in the Knowledge Base MUST include a YAML Frontmatter block at line 1. The `tags` array is the **single highest-weighted ranking signal** in the MCP Search Engine (MiniSearch `boost: 3.5x` vs `topic: 1.5x` vs `content: 1.0x`).

### 1. Mandatory Frontmatter Schema

```yaml
---
id: "[ModuleName]:[subfolder_or_category]:[slug]"
title: "[Human-Readable Comprehensive Title]"
category: "cc_slot_module" # or "cc_core_lib", "cc_network", "cc_slot_features", "cc_slot_mechanics"
tags: ["Token1", "token2", "token3", "token4", "token5", ...]
---
```

---

### 2. The 5-Token Mandatory Tag Structure

Every `tags` array must contain **between 5 to 8 specific keyword tokens** following this deterministic pattern:

```text
tags: [
  "ModuleName",          # 1. Primary Class Name in PascalCase (e.g. "GameConfig", "SlotBaseModule")
  "module_name_lower",   # 2. Module Name in snake_case / lowercase (e.g. "gameconfig", "slot_base_module")
  "Category/Domain",     # 3. Framework Domain (e.g. "cc_slot_module", "cc_common")
  "Folder/Facet",        # 4. Content Facet (e.g. "overview", "game_flow", "method", "events", "gotchas", "recipes")
  "SpecificEntity",      # 5. Method name, gotcha slug, or exact topic (e.g. "onLoadExtend", "parseDataPS", "spin_phase")
  "SemanticKeyword_1",   # 6. Domain concept (e.g. "lifecycle", "ioc", "memory_leak", "fast_play", "pubsub")
  "SemanticKeyword_2"    # 7. Additional search synonym or mechanics term
]
```

---

### 3. Canonical Tag Examples by Document Type

| Document Category | Target File Path | Correct Standard `tags` Format |
| :--- | :--- | :--- |
| **Overview & Architecture** | `01_overview/01_architecture_and_role.md` | `tags: ["GameInit", "gameinit", "cc_slot_module", "overview", "architecture", "bootstrap", "ioc"]` |
| **Game Flow & Spin Phases** | `02_game_flow/01_spin_phase_breakdown.md` | `tags: ["GameConfig", "gameconfig", "cc_slot_module", "game_flow", "spin_phases", "bet", "win_level"]` |
| **Properties & State** | `04_properties_and_state/02_injected_services.md` | `tags: ["SlotBaseModule", "slot_base_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]` |
| **Atomic Method** | `05_methods/onLoadExtend.md` | `tags: ["SlotBaseModule", "slot_base_module", "method", "onLoadExtend", "lifecycle", "template_method"]` |
| **Atomic Method** | `05_methods/parseDataPS.md` | `tags: ["GameDataStore", "gamedatastore", "method", "parseDataPS", "data_layer", "play_session"]` |
| **Scoped / Global Events** | `06_events/01_scoped_module_events.md` | `tags: ["SlotTableModule", "slot_table_module", "events", "scoped_events", "moduleEvent", "GameModuleEvent"]` |
| **Engine Gotcha** | `07_gotchas/02_overriding_onload.md` | `tags: ["SlotBaseModule", "slot_base_module", "gotchas", "overriding_onload", "engine_defect", "null_pointer"]` |
| **Subclassing Recipe** | `08_recipes/01_custom_director_red_cliff.md` | `tags: ["FreeGameDirectorModule", "free_game_director", "recipes", "production_code", "red_cliff", "g9666L"]` |

---

### 4. 🚫 Tagging Anti-Patterns to Avoid

* ❌ **Anti-Pattern 1: Omitting the Module Name from Tags**  
  * *Bad*: `tags: ["game_flow", "phases", "config", "bet"]`  
  * *Why it fails*: A search for `"GameConfig spin"` or a filter query `tag:GameConfig` will miss this file because the primary class name is absent from the 3.5x boosted tag index.  
  * *Good*: `tags: ["GameConfig", "gameconfig", "cc_slot_module", "game_flow", "phases", "bet", "win_level"]`

* ❌ **Anti-Pattern 2: Overly Generic Single-Word Tags**  
  * *Bad*: `tags: ["code", "typescript", "class", "file"]`  
  * *Why it fails*: Pollutes search indices and creates meaningless fuzzy matches.

* ❌ **Anti-Pattern 3: Casing Inconsistency without Lowercase Synonyms**  
  * *Bad*: `tags: ["SLOTBASEMODULE"]`  
  * *Good*: `tags: ["SlotBaseModule", "slot_base_module", "slotbasemodule"]`

* ❌ **Anti-Pattern 4: Empty or Missing Tags**  
  * *Bad*: `tags: []` or omitting the `tags:` field entirely. Documents without tags lose up to 70% of search relevance ranking.

---

## 📑 VI. Heading Hierarchy & Search Chunking Standard

The MCP Search Engine (`minisearch`) splits documents into atomic searchable chunks by splitting on level-2 headings: `split(/\n(?=##\s+)/)`.

### 1. Heading Structure Rules
1. **Single Level-1 Heading (`#`)**: Exactly one H1 per document at the top for the document's main title.
2. **Mandatory Level-2 Headings (`##`) for Sections**: Every distinct technical section MUST start with `## Number. Section Name` (e.g. `## 1. Method Signature`, `## 2. Trigger Source`).
3. **Never Skip Headings**: Do not jump straight from `#` to `###`. If content is placed under `###` without a parent `##`, the entire document is indexed as a single oversized chunk, degrading search relevance and overloading AI token windows.

---

## 🆔 VII. Document ID Namespacing Schema

To ensure seamless integration with the Graph Engine and avoid collision across packages, every `id` in YAML frontmatter must follow this 4-part namespace pattern:

```text
id: "[PackageDomain]:[ModuleName]:[SectionFacet]:[AtomicSlug]"
```

### Namespace Examples:
* **Method**: `cc_slot_module:SlotBaseModule:method:onLoadExtend`
* **Gotcha**: `cc_slot_module:SlotBaseModule:gotcha:overriding_onload`
* **Game Flow**: `cc_slot_module:GameConfig:game_flow:spin_phase_breakdown`
* **Recipe**: `cc_slot_module:FreeGameDirectorModule:recipe:custom_director_red_cliff`
* **Overview**: `cc_slot_module:SlotBaseModule:overview:architecture_and_philosophy`

---

## 🕸️ VIII. Knowledge Graph Manifest Schema (`relations.json`)

Every module directory under `docs/modules/[ModuleName]/` MUST contain a `relations.json` manifest. The Graph Engine uses this file to build semantic edges across classes, events, dependencies, and gotchas:

```json
{
  "id": "SlotBaseModule",
  "title": "SlotBaseModule Universal Component Base",
  "category": "cc_slot_module",
  "inheritsFrom": "cc.Component",
  "manages": [],
  "usedBy": [
    { "target": "SlotTableModule", "relation": "inherits_base_module" },
    { "target": "SlotSymbolManager", "relation": "inherits_base_module" },
    { "target": "PaylineInfoModule", "relation": "inherits_base_module" },
    { "target": "BaseGameDirector", "relation": "inherits_base_module" }
  ],
  "dependsOn": [
    "GameEventManager",
    "GameModuleEvent",
    "SlotSoundPlayerModule"
  ],
  "emitsEvents": [
    "RESET_ALL_EFFECT_AND_TASKS"
  ],
  "listensToEvents": [
    "RESET_ALL_EFFECT_AND_TASKS"
  ],
  "gotchas": [
    "Gotcha:Direct_onLoad_Override_Drops_Injections",
    "Gotcha:Multi_Mode_Registration_Conflict",
    "Gotcha:Missing_TargetOff_Event_Leak"
  ]
}
```

---

## 🏗️ XI. Game Creation & Customization Standard (`09_inheritance_and_customization/`)

When developers build a **new slot game title** (e.g. `g9666L`, `g9000H`, `g9888P`), they must know exactly **how to inherit, override, and wire custom behaviors** without breaking SDK invariants.

Every module's `09_inheritance_and_customization/` folder must contain the following 4 documents:

### 1. `01_subclassing_guide.md`
* **Declaration Syntax**: Proper `@ccclass("MyCustomModule9666")` decorator and `export default class` structure.
* **Invariant Guardrails**:
  * 🛑 **NEVER override `onLoad()` directly**; implement `onLoadExtend()` instead.
  * 🛑 **NEVER omit `super.registerEvents()`** when overriding event listeners.
  * 🛑 **ALWAYS override `resetAllEffectAndTasks()`** to cancel custom Spine animations / active tweens during Fast-To-Result (FTR).
  * 🛑 **ALWAYS invoke `targetOff(this)` in `onDestroy()`**.

### 2. `02_override_points_matrix.md`
A complete table cataloging all hook methods and extension points:
| Extension Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `onLoadExtend()` | Empty virtual hook | `YES (Recommended)` | None (Virtual) | Resolve node components, instantiate local models. |
| `registerEvents()` | Binds base events | `YES` | `MANDATORY` | Subscribe to game-specific custom events. |
| `resetAllEffectAndTasks()` | Clears base tweens | `YES` | `MANDATORY` | Abort custom character Spine tweens and timers. |
| `onDestroy()` | Calls `targetOff` | `YES` | `MANDATORY` | Release custom singleton listeners and unbind observers. |

### 3. `03_game_creation_workflow.md`
A 5-step concrete checklist for integrating this customized module into a new slot game:
1. **Scene Placement**: Where to mount or replace the component in the new game's scene/prefab.
2. **Inspector Properties**: What custom Sprites, Spine Skeletons, AudioClips, and Fonts must be wired in the Cocos Editor.
3. **Data Mapping**: Custom server payload adaptation via `mapNewKeys()` or `parseDataPS()`.
4. **Event Wiring**: Scoped `moduleEvent` vs Global `eventManager` event topic mapping.
5. **QA Verification**: Testing with Console Test mode, Turbo mode, and FTR Fast Stop.

### 4. `04_production_game_case_study.md`
A complete, un-truncated, real-world subclass implementation from a shipped slot title (e.g. Red Cliff `g9666L`), explaining why specific methods were overridden and how they interact with game-specific mechanics.

---

## ✅ XII. Automated Verification & Quality Checklist

Before committing documentation to the MCP Knowledge Base, verify compliance against this checklist:

- [ ] **Frontmatter Present**: File starts on line 1 with `---` frontmatter block.
- [ ] **Valid ID Format**: Matches `[Package]:[Module]:[Facet]:[Slug]`.
- [ ] **Tags Array**: Contains 5 to 8 tokens including PascalCase and lowercase module names.
- [ ] **H2 Chunking**: All sub-sections are formatted with `##` headings.
- [ ] **Zero Truncation**: All TypeScript code blocks are complete without `...` placeholders.
- [ ] **Customization Guide**: `09_inheritance_and_customization/` present with all 4 standard guides.
- [ ] **relations.json**: Updated with all outbound and inbound relationships.
- [ ] **MCP Index Test**: Run `npm test` in `mcp/mcp-fwcc` to verify MiniSearch indexing and GraphEngine edge resolution without errors.



