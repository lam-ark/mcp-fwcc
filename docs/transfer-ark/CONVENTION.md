---
id: "transfer-ark:convention"
title: "ARK Transfer Knowledge & Game Porting Documentation Convention"
category: "convention"
tags: ["ark", "transfer", "convention", "knowledge_base", "porting", "template", "sdk_mapping", "english"]
---

# 📘 ARK Transfer Knowledge & Documentation Convention

## 🎯 1. Purpose & Architectural Context

The **`transfer-ark/`** directory is the centralized knowledge repository documenting all **porting decisions, bug fixes, customized features, and business logic bridges** created when adapting the **external Vendor SDK (`cc-common`, `cc-slot-module`)** to **ARK's Production Game Standards & Business Specifications**.

> [!IMPORTANT]
> **Golden Rule**: Whenever you resolve a bug or implement a feature stemming from differences between the Vendor SDK and ARK's business rules, you **MUST** author a documentation entry adhering to this convention. This ensures future game projects can immediately reuse solutions without redundant research or regression risks.

---

## 📁 2. Standard Directory Layout (`transfer-ark/`)

```text
docs/transfer-ark/
├── CONVENTION.md                         # This master convention guide
├── 01_bugs_and_gotchas/                  # Issues arising from SDK vs Business discrepancies
│   ├── BUG_001_duplicate_blur_scatter_on_spin.md
│   └── BUG_002_stack_wild_node_pool_leak.md
│
├── 02_feature_recipes/                   # Step-by-step custom feature implementation guides
│   ├── RECIPE_001_custom_stack_wild_expansion.md
│   └── RECIPE_002_ark_wallet_and_denom_binding.md
│
├── 03_business_mappings/                 # Discrepancies between Vendor SDK & ARK backend contracts
│   ├── MAP_001_server_packet_contract_differences.md
│   └── MAP_002_bet_multiplier_calculation.md
│
└── 04_game_transfer_logs/                # End-to-end porting logs per game title
    └── GAME_9666_red_cliff_transfer_log.md
```

---

## 🏷️ 3. YAML Frontmatter Specification (For MiniSearch & MCP Indexing)

Every markdown document in `transfer-ark/` **MUST start with standardized YAML Frontmatter** to enable full-text indexing, metadata filtering, and semantic discovery across MCP tools:

```yaml
---
id: "transfer-ark:bugs:descriptive_snake_case_id"
title: "Clear, Action-Oriented Title in English"
category: "bugfix"                        # [bugfix | feature | business_mapping | game_log]
game_ids: ["g9666", "all"]                # Target game identifier(s) (e.g., g9666, g9716, or all)
sdk_modules: ["SlotReelModule", "TableModuleConfig", "SlotSymbolModule"]
tags: ["scatter", "blur_symbol", "random_symbols", "spin_phase", "exception_symbols", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---
```

---

## 📑 4. Standard 7-Section Document Template

All entries in `transfer-ark/` must strictly follow this 7-section structure:

```markdown
# [DOC-ID]: [Clear & Descriptive Title]

---

## 1. 📌 Problem / Feature Overview
- **Issue / Requirement**: Clear description of the visual glitch, gameplay flaw, or custom business requirement.
- **Occurrence Scope**: Affected game modes (e.g., Normal Game, Free Spins, Turbo Spin, Reconnection).

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**: How the original base framework handles this flow.
- **ARK Business Requirement**: The exact player experience, mathematical rule, or server contract required by ARK. Why the base SDK behavior fails to meet production criteria.

---

## 3. 🔍 Root Cause Analysis
- Detailed inspection identifying exact classes, method invocations, and config properties in `cc-common`:
  - Offending methods (`spawnReelSymbol`, `getRandomSymbol`, `sortSymbols`...).
  - Misconfigured properties (`RANDOM_SYMBOLS_CODE`, `EXCEPTION_SYMBOLS`...).

---

## 4. 🛠️ Implementation & Override Solution
- **Core Principle**: Zero direct modifications inside `cc-common/cc-slot-module`.
- **Implementation Strategy**: Subclassing and overriding in `assets/cc-release-slot/<game_id>/`.
- **Annotated Source Code**:
  ```typescript
  // Complete, copy-paste ready TypeScript implementation
  ```

---

## 5. ⚠️ Gotchas & Edge Cases
- Edge-case behaviors to watch out for:
  - Behavior under Turbo / Fast-Stop modes.
  - Reconnection state hydration (`isResume: true`).
  - Empty array fallback guards.
  - TypeScript compiler typing nuances.

---

## 6. ♻️ Reusability Guide for Future Game Titles
- Concrete step-by-step checklist to apply this solution to new game developments (e.g., `g9777`, `g9888`):
  1. Inherit from base class `SlotReelModule`.
  2. Implement the override method.
  3. Wire the subclass onto Prefab reel nodes.

---

## 7. 🔗 References & Codebase Links
- Base Framework File: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`
- Subclass Implementation: `assets/cc-release-slot/<game_id>/scripts/Table/SlotReelModule<GameId>.ts`
- Game Config: `assets/cc-release-slot/<game_id>/scripts/Table/TableModuleConfig<GameId>.ts`
```

---

## 💡 5. Production Reference Example

````markdown
---
id: "transfer-ark:bugs:duplicate_blur_scatter_on_spin"
title: "Fix 2 Blur Scatter Symbols Appearing on 1 Reel During Spin"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotReelModule", "TableModuleConfig", "SlotSymbolModule"]
tags: ["scatter", "blur", "random_symbols", "reel_spin", "exception_symbols", "ark_business"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-001: 2 Blur Scatter Symbols Appearing on 1 Reel During Spin

---

## 1. 📌 Problem Overview
During the reel spinning phase, multiple motion-blurred Scatter symbols (`"A"`) appear concurrently on the same column. This creates misleading visual anticipation for players, giving a false impression that a Free Spins bonus is guaranteed before the official server outcome is resolved.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK**: The `RANDOM_SYMBOLS_CODE` configuration includes Scatter (`"A"`). The random selector `getRandomSymbol()` operates independently on each spin step without tracking active visible symbols on the column strip.
- **ARK Business Standard**: Scatters are permitted during reel spin to generate suspense, but **at most 1 Scatter symbol may appear per reel column** at any point during the spin sequence.

---

## 3. 🔍 Root Cause Analysis
In `SlotReelModule.ts` (`spawnReelSymbol`):
```typescript
} else {
    isBlurSymbol = true;
    ({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
}
```
`getRandomSymbol()` pulls from `this.RANDOM_SYMBOLS_CODE[this.reelIndex]` without verifying whether `this.listSymbols` already contains an active Scatter node.

---

## 4. 🛠️ Implementation & Override Solution
Override `getRandomSymbol()` in the game-specific reel controller (`SlotReelModule9666.ts`):

```typescript
    protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
        let randomSymbols: string[] = (this.RANDOM_SYMBOLS_CODE as any)?.[this.reelIndex] || [];
        const scatterSymbol = (this.config && this.config.SCATTER_SYMBOL) ? this.config.SCATTER_SYMBOL : "A";

        // Check if there is already an active scatter symbol visible/moving on this reel
        const hasScatter = this.listSymbols.some((sym) => {
            if (!sym || !sym.isValid || !sym.active) return false;
            const comp = SlotSymbolModule.getModuleComponent(sym);
            return comp && comp.symbolCode === scatterSymbol;
        });

        // Filter out Scatter if one is already active on this reel strip
        if (hasScatter) {
            const filtered = randomSymbols.filter((code: string) => {
                const { symbolCode } = this.mapSymbolData(code);
                return symbolCode !== scatterSymbol;
            });
            if (filtered.length > 0) {
                randomSymbols = filtered;
            }
        }

        const totalSymbols = randomSymbols.length;
        const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
        const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
        return { symbolCode, symbolSize };
    }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **TypeScript Type Inference**: `RANDOM_SYMBOLS_CODE` in `SlotReelModule` is typed as `string[]`. Explicit casting `(this.RANDOM_SYMBOLS_CODE as any)?.[this.reelIndex]` prevents the compiler error `Property 'filter' does not exist on type 'string'`.
2. **Empty Array Safety Guard**: Always check `if (filtered.length > 0)` before assigning to prevent passing an empty array to `Math.random()`.
3. **Composite Symbol Decoding**: Use `this.mapSymbolData(code).symbolCode` to safely handle both plain codes (`"A"`) and size-encoded strings (`"A_1_1"`).

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Create `SlotReelModule<GameId>.ts` inheriting from `SlotReelModule`.
2. Copy the `getRandomSymbol()` override method.
3. Attach `SlotReelModule<GameId>` to each column Reel node in the `Table` prefab.
````

---

## 🚀 6. Documentation Indexing & Automated Discovery

1. Save all new markdown files under the appropriate `transfer-ark/` subdirectory.
2. The local MCP server `mcp-fwcc` automatically indexes new and modified files in real-time.
3. When querying via `fwcc_search_docs` or asking AI assistants about past porting solutions, transfer knowledge entries will rank at the top of search results.
