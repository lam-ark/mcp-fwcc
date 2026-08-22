# 📜 Documentation & Knowledge Graph Convention (`CONVENTION.md`)

This document defines the **mandatory conventions and standards** for writing documentation and constructing the **Knowledge Graph Engine** for the **Cocos Common (`cc-common`) Slot Framework SDK** and **Cocos Creator 2.4**.

---

## 🎯 I. Core Architectural Principles

1. **Language Standard**:
   * **All documentation must be written in 100% English** using clear, concise technical terminology to ensure maximum precision during AI retrieval and semantic embedding.
2. **Atomic Modularity**:
   * Do not cram entire modules into monolithic documents.
   * Every major Class or Feature is encapsulated in a dedicated folder containing focused, single-responsibility markdown nodes (`01_overview.md`, `02_properties.md`, `03_methods.md`, `04_gotchas.md`, `05_recipes.md`, `relations.json`).
3. **Frontmatter-First Indexing**:
   * Every markdown file **must** include a structured YAML frontmatter block at the top with `id`, `title`, `category`, `tags`, and `methods` for indexing and boosted scoring in MiniSearch.
4. **Actionable TypeScript Context**:
   * All code examples must be written in strict TypeScript with full type definitions, meaningful comments, and real-world slot game context.
5. **Real-World Gotchas & Workarounds**:
   * Every module must explicitly highlight hidden pitfalls (e.g. Spine track pollution, BitmapFont missing glyphs, Garbage Collection spikes, memory leaks).
6. **Bidirectional Knowledge Graph**:
   * Every module folder must contain a `relations.json` file specifying exact entity relationships (`INHERITS_FROM`, `MANAGES`, `ORCHESTRATES`, `EMITS_EVENT`, `LISTENS_TO`, `USES_MECHANIC`, `SUBJECT_TO_GOTCHA`).

---

## 🔍 II. Search Engine Optimization (MiniSearch & Full-Text Retrieval)

To ensure MiniSearch achieves high retrieval accuracy when developers or AI agents search with fuzzy keywords:

### 1. Granular H2 Section Chunking (`##`)
* MiniSearch partitions each document into discrete searchable chunks based on `##` headings.
* **Rule**: Headings must be descriptive and specific.
  * ✅ **CORRECT**: `## 2. getSymbol(owner?: string, code?: string): cc.Node`
  * ❌ **INCORRECT**: `## Methods`
  * ✅ **CORRECT**: `## Gotcha 1: BitmapFont Missing Glyphs Blanking Win Box`
  * ❌ **INCORRECT**: `## Bugs`

### 2. YAML Frontmatter Scoring Weights
MiniSearch search options are configured with weighted field boosting:
* `tags`: **3.5x boost** (Domain synonyms, error codes, mechanics, keywords).
* `methods`: **3.0x boost** (API method names).
* `section`: **2.0x boost** (H2 chunk titles).
* `topic`: **1.5x boost** (Main document title).

```yaml
---
id: "SlotSymbolManager:methods"
title: "SlotSymbolManager Methods & API Reference"
category: "cc_slot_module"
tags: ["pool", "getSymbol", "removeSymbol", "sticky_wild", "recycle", "instantiate", "cleanStickySymbols"]
methods: ["getSymbol", "removeSymbol", "removeAllSymbols", "cleanStickySymbols", "getSymbolByIndex"]
source_path: "assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts"
---
```

---

## 🕸️ III. Knowledge Graph Optimization (Graph Engine)

The Graph Engine loads all `relations.json` definitions across module directories to construct a live semantic graph.

### 1. Standardized Node Identifier Prefixes
All graph nodes must use unambiguous entity prefixes:
* **Class Node**: `Class:SlotSymbolManager`, `Class:SlotDirector`, `Class:PaylineInfoModule`
* **Event Node**: `Event:SHOW_PAYLINE_WIN_AMOUNT`, `Event:SPIN_START`, `Event:APPLY_MULTIPLIER_TO_WIN_AMOUNT`
* **Mechanic Node**: `Mechanic:AllWays`, `Mechanic:Cascade`, `Mechanic:StickyWild`, `Mechanic:Megaways`
* **Gotcha Node**: `Gotcha:BitmapFont_Missing_Glyphs`, `Gotcha:Spine_Pool_Pollution`

### 2. Standard Relationship Types (Edges)

| Relationship | Meaning | Example |
| :--- | :--- | :--- |
| **`INHERITS_FROM`** | OOP class inheritance hierarchy | `SlotSymbolManager` ➔ `SlotBaseModule` |
| **`MANAGES`** | Sub-component containment & pooling | `SlotSymbolManager` ➔ `SlotSymbolModule`, `cc.NodePool` |
| **`ORCHESTRATES`** | Lifecycle execution & state driving | `SlotDirector` ➔ `SlotTableModule`, `PaylineInfoModule` |
| **`DEPENDS_ON`** | Data configuration or runtime store dependency | `SlotSymbolManager` ➔ `GameConfig.SYMBOL_CONFIG` |
| **`EMITS_EVENT`** | Publishes event to Event Bus | `SlotDirector` ➔ `Event:SHOW_PAYLINE_WIN_AMOUNT` |
| **`LISTENS_TO`** | Subscribes to event from Event Bus | `PaylineInfoModule` ➔ `Event:SHOW_PAYLINE_WIN_AMOUNT` |
| **`USES_MECHANIC`** | Implements a slot game mechanic | `SlotTableModule` ➔ `Mechanic:Cascade` |
| **`SUBJECT_TO`** | Vulnerable to a specific engine gotcha | `PaylineInfoModule` ➔ `Gotcha:BitmapFont_Missing_Glyphs` |

---

## 📂 IV. Standard Module Directory Structure

```text
docs/modules/[ModuleName]/
├── 01_overview.md       # Architectural role, purpose, and lifecycle sequence diagram
├── 02_properties.md     # Cocos @property table, decorators, and runtime state fields
├── 03_methods.md        # Comprehensive API signatures, parameters, returns, and algorithms
├── 04_gotchas.md        # Engine pitfalls, memory leaks, performance traps, and fixes
├── 05_recipes.md        # Step-by-step subclassing guides and game implementation examples
└── relations.json       # Formal graph edge declarations for the Graph Engine
```

---

## 📄 V. Standard `relations.json` Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "nodeId": "Class:SlotSymbolManager",
  "category": "cc_slot_module",
  "title": "Slot Symbol Manager & Pool System",
  "inheritsFrom": "Class:SlotBaseModule",
  "manages": [
    "Class:SlotSymbolModule",
    "Engine:cc.NodePool"
  ],
  "usedBy": [
    { "target": "Class:SlotTableModule", "relation": "provides_recycled_symbols" },
    { "target": "Mechanic:CompositeCascade", "relation": "handles_symbol_removal_and_drop" },
    { "target": "Mechanic:StickySymbol", "relation": "respects_sticky_flag_in_removeSymbol" }
  ],
  "dependsOn": [
    "Class:GameConfig",
    "Enum:SymbolIndexType",
    "Enum:SymbolOwnerType"
  ],
  "emitsEvents": [
    "Event:RESET_ALL_SYMBOLS"
  ],
  "listensToEvents": [
    "Event:SPIN_START",
    "Event:RESET_ON_SPIN"
  ],
  "gotchas": [
    "Gotcha:Spine_Pool_Pollution",
    "Gotcha:Memory_Leak_UsingSymbols_Array"
  ],
  "files": {
    "overview": "modules/SlotSymbolManager/01_overview.md",
    "properties": "modules/SlotSymbolManager/02_properties.md",
    "methods": "modules/SlotSymbolManager/03_methods.md",
    "gotchas": "modules/SlotSymbolManager/04_gotchas.md",
    "recipes": "modules/SlotSymbolManager/05_recipes.md"
  }
}
```

---

## 🔤 VI. Naming Conventions

1. **Classes & Types**: `PascalCase` (`SlotSymbolManager`, `PaylineInfoModule`, `BaseGameDirector`).
2. **Methods & Properties**: `camelCase` (`getSymbolByIndex`, `resetBeforeBackToPool`).
3. **Event Bus Topics**: `UPPER_SNAKE_CASE` (`SHOW_PAYLINE_WIN_AMOUNT`, `APPLY_MULTIPLIER_TO_WIN_AMOUNT`).
4. **File Names**: Two-digit prefix + `snake_case` (`01_overview.md`, `02_properties.md`).
5. **Markdown Links**: GitHub style link syntax `[Link Text](file:///absolute/path/to/file)`.
