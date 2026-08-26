# 🚀 Master Blueprint & Deep-Dive Expansion Plan: `mcp-fwcc` Knowledge Server

## 🎯 1. Executive Summary & Objective

The goal of this blueprint is to upgrade **`mcp-fwcc`** (local MCP server on port 8925) to achieve full parity and structural depth with the benchmark **`mcp-fw-cc`** corpus (546 markdown documents, 3,879 indexed chunks, 16 distinct tiers).

Through an exhaustive audit of `mcp-fw-cc`'s corpus catalog (`00_CORPUS_CATALOG.md`), this plan establishes the full taxonomy of **16 core documentation tiers**, **38 module-level source code analyses**, **51 engine & pipeline deep-dives**, **28 mechanic breakdowns**, and **48 cataloged real-world engine pitfalls & gotchas**.

---

## 🗺️ 2. Corpus Taxonomy & Target Structure (The 16 Tiers)

```text
mcp-fwcc/
├── docs/
│   ├── 00_catalog/                     # Master Catalog, Quick Reference, Repo Map, Index
│   ├── 01_onboarding/                  # Day-1, Week-1, Week-2, QA/Dev/PM Paths, Incident P0
│   ├── 02_core/                        # Bootstrap, 7-Layer Stack, Singletons/DI, GameMode Trinity
│   ├── 03_templates/                   # Reference Games (g9716 Songkran, g9666 Red Cliff, AllInOne)
│   ├── 04_events/                      # 3-Tier Events Catalog (Logic, UI, Scoped Module, Network)
│   ├── 05_recipes/                     # 50+ Production Cookbooks (Add Game/Mechanic, B2R, Debug)
│   ├── 06_advanced/                    # BaseModule API, Plug-and-Play Mechanic Specifications
│   ├── 07_adr/                         # C0-C9 Architecture Decision Records (IoC, UMD/eno, 3-Tier Events)
│   ├── 08_deep_dive/                   # [THE CORE] 156 Deep-Dive Code Analyses (cc20/cc30 + Engine)
│   │   ├── code_analysis/              # 38 Source-mapped module code analyses (SlotReel, Tumbling, etc.)
│   │   ├── cocos_engine/               # 51 Cocos Creator 2.4/3.x engine internals (Tween, Spine, Audio)
│   │   ├── mechanics/                  # 28 Plug-and-play mechanic deep-dives (Cascade, Megaway, Gigablox)
│   │   └── math_and_industry/          # RTP, Volatility, Hit Frequency math models, Certification
│   ├── 09_cross_cutting/               # Performance (18 recipes), Multi-Resolution, L10n, Analytics
│   ├── 10_modules_code/                # 53 cc-slotbase & cc-slot-module class implementations & pitfalls
│   ├── 11_best_practices/              # Trinity Pattern, TypeScript standards, GoF & FwCC patterns
│   ├── 12_testing/                     # Vitest/Jest Unit Patterns, Playwright E2E, k6 Load, Contracts
│   ├── 13_devops/                      # CI/CD Bitrise/GH Actions YAMLs, Headless Cocos Build, Sentry
│   ├── 14_slot_base_docs/              # 138 Curated base layer API references (Enotion, BaseSlot, Modules)
│   ├── 15_knowledge_base/              # 30+ Q&A FAQs, 12+ Known Bugs & Workarounds, Deprecations
│   └── 16_prompts/                     # 27 Production AI prompt templates for slot development
│
├── src/                                # MCP Server Engine Source Code (TypeScript)
│   ├── config/                         # Constants & Configuration
│   ├── core/                           # Tool Registry & JSON-RPC 2.0 Dispatcher
│   ├── engines/                        # Code-aware MiniSearch & Sliding-Window Chunker
│   ├── tools/                          # 14+ MCP Tools (search, windowed read, class api, gotchas)
│   └── index.ts                        # HTTP JSON-RPC & SSE Handlers
│
└── PLAN_ENHANCE_FWCC_KNOWLEDGE.md      # This Master Plan
```

---

## 🔬 3. Deep-Dive Code Corpus Specifications (`08_deep_dive/` & `10_modules_code/`)

### Tier 8A: 38 Module Source Code Analyses (`08_deep_dive/code_analysis/`)
Every document in this tier must map directly to source lines, documenting algorithms, internal state, and gotchas:

1. **`cc30_SlotReelModule_code.md` / `BS_table_SlotReel_code.md`**:
   - **Mental Model**: Vertical reel strip with top/bottom buffers.
   - **Two-phase Start Tween**: `DELAY_START / 2` bounce up by `EASING_DISTANCE`, settle to original Y.
   - **Animation Loop**: Deceleration formula `time = speed + speed * stop / slowdownFactor`.
   - **Spawning Logic (`spawnReelSymbol`)**: `ReelSpinState.SHOWING_RESULT` consumption vs `isBlur = true` random spawn.
   - **Helper Algorithm (`getRandomSymbolNameWithExceptions`)**: Filtering `EXCEPTION_SYMBOLS` (`["A", "R", "K"]` Scatter, Wild, Bonus).
   - **Position Normalization (`resetReel`, `hideFakeSymbols`)**: Buffer concealment on stop.

2. **`cc30_HorizontalReel_code.md`**:
   - Horizontal sliding translation on X axis.
   - Multi-height symbol vertical centering (`offsetY = (size.y / 2 - 0.5) * SYMBOL_HEIGHT`).
   - Blur symbol handling and substitution quirks.

3. **`cc30_TumblingReel_code.md` & `CascadeModule_Architecture.md`**:
   - Cascade destruction loop, symbol elimination particle spawning.
   - Gravity falling equations: `(totalSymbol * SYMBOL_HEIGHT) + BUFFER_BOTTOM_Y`.
   - Refill delays: `DELAY_BETWEEN_SYMBOLS_SPINNING + reelIndex * DELAY_BETWEEN_REELS`.

4. **`cc30_StackedReel_code.md` & `Gigablox_code.md`**:
   - Core stacking algorithm: `generateStackedSymbol(isRefill)`.
   - FIFO stack popping queue: `getRandomStackedSymbol()`.
   - Gigablox multi-cell anchor reel locking and row-height buffer calculations.

5. **`cc30_SlotCellTable_code.md` & `NudgeReel_code.md`**:
   - Independent cell grid indexing vs vertical reel strips.
   - Nudge step evaluation, near-miss teaser slowdowns.

6. **`cc30_PaylineSymbolModule_code.md` & `WinEval_Comparison.md`**:
   - 4-layer win representation: symbol spine, highlight box, vector line, index marker.
   - AllWays combinatoric multiplier vs fixed payline zigzag mapping vs Cluster BFS.

---

### Tier 8B: 51 Cocos Creator Engine Internals (`08_deep_dive/cocos_engine/`)
1. **`cocos_tween_system.md`**: Easing curves, tween chaining, cancellation safely on fast-spin (`Tween.stopAllByTarget`).
2. **`cocos_spine_integration.md`**: SkeletonData caching, attachment swapping, Spine event listeners (`setAnimationListener`), memory leak avoidance.
3. **`cocos_audio_system_deep_dive.md`**: Web Audio context unlocking, channel volume ducking, BGM looping, SFX rollup pitch shifts.
4. **`cocos_render_pipeline.md`**: Batching, Draw Call minimization, dynamic atlas merging, Mask stencil performance.
5. **`cocos_asset_pipeline_deep_dive.md`**: Texture compression (ASTC/ETC2/PNGquant), lazy-loading bundles, prefab prewarming.

---

### Tier 8C: 28 Plug-and-Play Mechanics (`08_deep_dive/mechanics/`)
Detailed trinity specifications (Module + Config + Data) for:
* `D1_Cascade_Family`: Vertical, Horizontal, Composite, Cluster, CascadeWildGeneration.
* `D2_Megaway_Family`: Dynamic way calculations (2 to 7 symbols), progressive symbol reveals.
* `D3_StackedReel_StickySymbol`: Locked wild multipliers persisting across spins.
* `D4_Cluster_Pays`: Breadth-First Search (BFS) adjacent block evaluation.
* `D5_Multiplier_Mechanics`: Global progressive multipliers vs position-based reel multipliers.
* `D6_BuyFeature_CollectionItem`: Buy Free Spins flow and order-based symbol collection.
* `D7_Nudge_and_Infinity`: Expanding reel matrices and dynamic boundary updates.
* `D8_MegaReel_Gigablox`: NxN composite blocks and payline coordinate projection.
* `D9_InstantCash_and_Wheel`: Value symbol cash collector and Fortune Wheel prize selection.

---

### Tier 10: cc-slotbase Layer & 48 Real Source Pitfalls (`10_modules_code/`)
Catalogue the ~48 real production bugs identified in legacy and modern engine code:
* **Assignment vs Comparison**: `if (state = ReelSpinState.STOPPED)` causing instant halts.
* **Century Doubling Bug**: `getFullYear() + 1900` in Bet History record timestamps.
* **Super Method Inversion**: Calling `super.show()` inside `hide()` leading to stuck dialogs.
* **Duplicate Blur Scatters**: Unfiltered `RANDOM_SYMBOLS_CODE` during continuous spin loops.
* **Node Pool Memory Leaks**: Retaining active spine listener references after returning symbols to pool.
* **Non-Deterministic FAKE Substitutions**: Buffer symbol generator collisions.

---

## ⚙️ 4. Search Engine & Chunking Engine Upgrades (`src/engines/`)

To match the 95%+ Top-1 retrieval rate of `mcp-fw-cc`:

### 1. Code-Aware Multi-Identifier Tokenizer
Enhance `src/engines/docs_search_engine.ts` with custom tokenization for programming constructs:
* Splits `camelCase`, `PascalCase`, `snake_case`, and `SCREAMING_SNAKE_CASE`.
* Preserves exact symbol queries (e.g., `getRandomSymbolNameWithExceptions` ➔ matches both full identifier and individual words).

### 2. Multi-Field Weighted Scoring
```typescript
{
  fields: ['codeSymbols', 'heading', 'title', 'tags', 'snippet', 'content'],
  boost: {
    codeSymbols: 5.0,  // Exact method/property/class match
    heading: 4.0,      // Markdown H1-H3 sections
    title: 3.5,        // Document title
    tags: 2.5,         // Topic tags
    snippet: 1.5,      // Summary
    content: 1.0       // Body text
  },
  fuzzy: 0.2
}
```

### 3. Contextual Sliding-Window Chunking
Upgrade chunk retrieval to return surrounding code blocks:
```typescript
public readChunk(relPath: string, chunkIndex: number, window: number = 1): {
  centerChunk: any;
  contextChunks: any[];
  combinedMarkdown: string;
}
```

---

## 🧰 5. Standardized Hybrid MCP Tool Suite (`src/tools/`)

Tích hợp bộ tool lai (**Hybrid Suite**) kết hợp hoàn hảo giữa **truy vấn Code-audit chi tiết** (`mcp-fw-cc`) và **truy vấn Giải pháp nhanh / Gotchas / Recipes** (`mcp-fwcc-knowledge`):

```typescript
// Danh sách 14 Tools chuẩn hóa cho mcp-fwcc:

// 1. 🔍 Search & Navigation Tools (Tốc độ & Độ chính xác cao)
- fwcc_search_docs          // Hybrid BM25 text + Code symbol search (multi-field boosted scoring)
- fwcc_search_exact         // Tìm kiếm chính xác tuyệt đối tên Class, Method, Event, Property
- fwcc_search_topic         // Lọc nhanh danh sách docs theo Taxonomy Tier (01_onboarding -> 16_prompts)
- fwcc_list_topics          // Liệt kê danh mục topics, modules theo category và tags

// 2. 📖 Reading & Contextual Retrieval Tools (Tiết kiệm token context cho Agent)
- fwcc_get_doc              // Đọc toàn bộ file Markdown theo relPath
- fwcc_read_chunk           // Đọc chunk trung tâm kèm sliding window (1-2 chunk ngữ cảnh liền kề)
- fwcc_read_batch           // Đọc đồng thời nhiều chunk/sections liên quan trong 1 lượt gọi JSON-RPC

// 3. ⚡ Specialized Fast-Lookup Tools (Dành riêng cho AI Pair-Programming & Debugging)
- fwcc_get_gotchas          // Tra cứu nhanh danh mục bẫy code, bug patterns theo Module hoặc Category
- fwcc_get_class_api        // Trích xuất trực tiếp chữ ký class, methods, properties (không cần đọc cả file dài)
- fwcc_get_events_map       // Tra cứu toàn bộ bản đồ 3-Tier Event Bus (Logic, UI, Scoped Module)
- fwcc_get_related_topics   // Tìm các tài liệu liên quan dựa trên semantic graph & shared tags
- fwcc_get_backlinks        // Tìm các file, recipe hoặc gotchas đang tham chiếu đến class/method này
- fwcc_get_graph_neighbors  // Truy vấn đồ thị phụ thuộc kiến trúc (Class kế thừa, Component quan hệ)
- fwcc_export_report        // Xuất báo cáo tổng hợp chuẩn Markdown cho một workflow hoặc module
```

---

## 🛠️ 6. Implementation Phases & Milestones

| Phase | Focus Area | Deliverables | Target Docs |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **Core & Deep-Dive Code Corpus** | Ingest 38 module code breakdowns + 28 mechanic deep-dives (`08_deep_dive/`, `10_modules_code/`). | ~75 Docs |
| **Phase 2** | **Cocos Engine & Architecture Tiers** | Ingest 51 Cocos engine guides + 10 ADRs + 6 Event catalogs (`07_adr/`, `04_events/`). | ~70 Docs |
| **Phase 3** | **Cookbook Recipes & Testing** | Ingest 50+ Recipes + 13 Testing fixtures (Vitest, Playwright, k6) (`05_recipes/`, `12_testing/`). | ~65 Docs |
| **Phase 4** | **Slot-Base API References & KB** | Ingest 138 Slot-Base API docs + 15 Knowledge Base Q&As + Bug Database (`14_slot_base_docs/`, `15_knowledge_base/`). | ~150 Docs |
| **Phase 5** | **Search Engine & Tool Suite Upgrade** | Triển khai bộ 14 Hybrid Tools, Code Tokenizer, sliding-window chunking và chạy benchmark validation. | Code + 14 Tools |

---

## ✅ 7. Benchmark Validation Matrix

Run automated test queries to verify search precision and retrieval accuracy:

| Benchmark Query | Expected Top Hit | Validation Criterion |
| :--- | :--- | :--- |
| `2 blur scatter symbol appear in 1 reel when reel is spinning` | `BUG_001_duplicate_blur_scatter_on_spin.md` / `BS_table_SlotReel_code.md` | Top-1: Trả về nguyên nhân `RANDOM_SYMBOLS_CODE` và code override `getRandomSymbol` có filter Scatter. |
| `Symbol blurs size 1x2 and 1x3 don't appear when reel is spinning` | `BUG_002_multi_size_blur_symbols_missing.md` / `TableModuleConfig` | Top-1: Chỉ ra format `${code}_${sizeX}_${sizeY}` trong `RANDOM_SYMBOLS_CODE` và kiểm tra `blurSymbolSfList`. |
| `mapSymbolData RANDOM_SYMBOLS_CODE` | `SlotSymbolModule/mapSymbolData.md` & `BUG_001` | Top-1: Trả về cú pháp `split('_')` và cách trích xuất `symbolSize`. |
| `Insufficient Buffer Rows Causes Mega Symbol Visual Popping` | `02_missing_buffer_rows_mega_symbols_pop.md` | Top-1: Trả về quy tắc `BUFFER_TOP >= 3`, `BUFFER_BOT >= 3` cho Mega Symbol. |
| `getRandomSymbolNameWithExceptions EXCEPTION_SYMBOLS` | `BS_table_SlotReel_code.md` (chunk 10 & 16) | Exact method implementation returned. |
| `generateStackedSymbol isRefill FIFO pop` | `cc30_StackedReel_code.md` (chunk 28 & 30) | Exact stacking algorithm returned. |
| `TumblingReel spinAction tween delay` | `cc30_TumblingReel_code.md` | Exact cascade delay formulas returned. |
| `SlotBaseModule DI applyInjections gameId` | `A0_BaseModule_API.md` / `02_dependency_injection_ioc.md` | Complete `@inject` resolution workflow returned. |
