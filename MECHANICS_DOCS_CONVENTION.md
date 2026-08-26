# 📜 Cocos Common Slot Mechanics (`cc-slot-mechanics`) Knowledge Base Standard (v3.0)
## Deep-Atomic Folder Hierarchy & Mathematical Algorithm Specification

> **Version**: 3.0 (Advanced Slot Game Mechanics Modular Standard)  
> **Language Standard**: 100% English across all documentation nodes, diagrams, and docstrings.  
> **Target Framework**: Cocos Creator 2.4 + Cocos Common (`cc-common`) Slot Mechanics SDK.  
> **Package Path**: `assets/cc-common/cc-slot-mechanics/`  
> **Target Documentation Root**: `docs/cc_slot_mechanics/`

---

## 🎯 I. Core Architectural Philosophy for Mechanics

Slot Mechanics in `cc-slot-mechanics` represent the specialized mathematical, visual, and physical rules that extend or replace standard 5x3 slot spinning (e.g., Megaways variable symbol heights, Orthogonal BFS Cluster grouping, Gigablox colossal symbol synchronization, Nudge physics, Cascading avalanches, and Metagame collection meters).

To ensure every mathematical formulation, state transition, and Cocos 2.4 engine quirk is indexed with 100% precision for AI assistants and MCP queries, every mechanic cluster is documented under `docs/cc_slot_mechanics/modules/[MechanicModuleName]/` using the **Modular Subdirectory Tree**:

```text
docs/cc_slot_mechanics/modules/[MechanicModuleName]/
├── 01_overview/
│   ├── 01_architecture_and_role.md        # Mathematical model, algorithmic complexity, role
│   ├── 02_scene_and_prefabs.md            # Canonical node anchor, prefabs & companion modules
│   └── 03_lifecycle_flowchart.md          # State transition & sequence diagrams
│
├── 02_game_flow/
│   ├── 01_spin_phase_breakdown.md         # Behavior across 5 spin phases + feature respins
│   └── 02_timing_execution_matrix.md      # Exact millisecond timing, tweens, failure impacts
│
├── 03_director_writer_integration/
│   ├── 01_pipeline_orchestration.md       # 3-tier Writer-Director-Module command dispatching
│   └── 02_subsystem_impacts.md            # Inter-subsystem impacts (Table, UI HUD, Sound, Data)
│
├── 04_properties_and_state/
│   ├── 01_inspector_properties.md         # @property schema with default values & sync impacts
│   ├── 02_injected_services.md            # @inject dependencies and tokens
│   └── 03_runtime_state_variables.md      # Internal runtime state mutation points & guards
│
├── 05_methods/                            # 🚀 ATOMIC ONE FILE PER METHOD
│   ├── 00_methods_index.md                # Master methods summary
│   ├── [methodName_1].md                  # Deep-dive with 100% complete source code
│   └── ...
│
├── 06_events/
│   ├── 01_scoped_module_events.md         # Scoped moduleEvent listeners & dispatches
│   └── 02_global_event_bus.md             # Global eventManager topics
│
├── 07_gotchas/                            # ⚠️ ATOMIC ONE FILE PER ENGINE GOTCHA
│   ├── 00_gotchas_index.md                # Summary index of pitfalls
│   ├── [gotcha_slug].md                   # Symptom, Root Cause (Cocos 2.4 bug), Fix
│   └── ...
│
├── 08_recipes/                            # 💡 PRODUCTION SUBCLASSING RECIPES
│   ├── 00_recipes_index.md                # Practical cookbook index
│   ├── [recipe_slug].md                   # Production code (e.g. Red Cliff, Golden Lotus)
│   └── ...
│
├── 09_inheritance_and_customization/      # 🏗️ GAME CREATION WORKFLOW & SUBCLASSING
│   ├── 01_subclassing_guide.md            # Invariant guardrails & super call rules
│   ├── 02_override_points_matrix.md       # Hook method catalog
│   ├── 03_game_creation_workflow.md       # 5-step integration checklist for new games
│   └── 04_production_game_case_study.md   # Full real-world game implementation analysis
│
└── relations.json                         # Bidirectional Knowledge Graph manifest
```

---

## 🔬 II. The SDK Quintet Pattern in `cc-slot-mechanics`

Every advanced slot mechanic in the codebase is implemented as an interconnected **SDK Quintet**:

1. 🎮 **Controller Module (`[Name]Module.ts`)**: Visual & animation orchestrator inheriting from `SlotBaseModule` or `cc.Component`.
2. 💾 **Data Model (`[Name]Data.ts`)**: Reactive state parser inheriting from `BaseDataModule`, decoding server payloads via `mapNewKeys()` or custom parsing.
3. ⚙️ **Configuration (`[Name]Config.ts`)**: Pure configuration constants, easing curves, timing matrices, and formula weights.
4. 🎬 **VFX / Companion Items (`[Name]Item.ts` / `[Name]VFX.ts`)**: Pooled visual entities, particle bursts, and Spine skeletons.
5. 🧪 **Export & Scene Harness (`[Name]Export.ts` / `[Name]SceneTest.ts`)**: Package barrel export and standalone debug test harnesses.

---

## 🏷️ III. Standardized Frontmatter & Tagging Convention

Every markdown file MUST start with YAML frontmatter containing `id`, `title`, `category: "cc_slot_mechanics"`, and `tags`:

```yaml
---
id: "cc_slot_mechanics:MegawayModule:methods:calculateTotalWays"
title: "MegawayModule.calculateTotalWays Method & Combinatorial Formula"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "calculateTotalWays", "megaways_math", "117649_ways"]
---
```

### Tag Rules:
- Tag 1: Primary PascalCase Class Name (e.g. `MegawayModule`, `ClusterModule`)
- Tag 2: Lowercase / snake_case name (e.g. `megaway_module`, `cluster_module`)
- Tag 3: Domain: `cc_slot_mechanics`
- Tag 4: Subdirectory/Facet: `overview`, `game_flow`, `methods`, `gotchas`, `recipes`, `inheritance`
- Tag 5: Entity Name: exact method name or gotcha slug
- Tags 6-8: Domain mathematical/algorithmic keywords (e.g. `bfs_search`, `colossal_split`, `gravity_drop`, `respin_lock`)

---

## 📑 IV. Heading Hierarchy & Search Chunking

1. Exactly **one `#` H1** at the top of the file for the main title.
2. All sections MUST start with **`##` Level-2 Headings** (`split(/\n(?=##\s+)/)`) to enable atomic MiniSearch chunking.
3. **Zero Truncation**: All TypeScript code blocks must contain 100% full, untruncated code with no `...` placeholders.
