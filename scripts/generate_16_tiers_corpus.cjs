const fs = require('fs');
const path = require('path');

const DOCS_BASE = path.join(__dirname, '..', 'docs');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Generating Master 16-Tier Knowledge Corpus...');

// =========================================================================
// TIER 00: CATALOG & MAP
// =========================================================================
const t00 = path.join(DOCS_BASE, '00_catalog');
writeFile(path.join(t00, '00_CORPUS_CATALOG.md'), `---
id: "00_catalog:master_catalog"
title: "Master Knowledge Corpus Catalog & 16-Tier Taxonomy"
category: "00_catalog"
tags: ["00_catalog", "corpus", "taxonomy", "index", "repo_map", "quick_reference"]
---

# 📚 Master Knowledge Corpus Catalog & 16-Tier Taxonomy

> **Total Indexed Documents**: 550+  
> **Total Indexed Chunks**: 4,000+  
> **Architecture Coverage**: Cocos Creator 2.4 / 3.x Slot Framework SDK (\`cc-slot-module\`, \`cc-slot-mechanics\`, \`cc-core-lib\`).

---

## 🗺️ 16-Tier Architecture Taxonomy

1. **\`00_catalog/\`**: Master Catalog, Quick Reference, Cheat Sheets.
2. **\`01_onboarding/\`**: Day-1, Week-1, QA/Dev/PM Paths, Incident P0 Runbook.
3. **\`02_core/\`**: Bootstrap, 7-Layer Architecture Stack, GameMode Trinity.
4. **\`03_templates/\`**: Reference Games (\`g9666 Red Cliff\`, \`g9716 Songkran\`, \`AllInOne\`).
5. **\`04_events/\`**: 3-Tier Event Bus Catalog (Logic Events, UI Events, Scoped Events).
6. **\`05_recipes/\`**: 50+ Production Cookbooks (Add Game, Add Mechanic, Performance).
7. **\`06_advanced/\`**: BaseModule API & Plug-and-Play Mechanic Specifications.
8. **\`07_adr/\`**: Architecture Decision Records (C0 to C9).
9. **\`08_deep_dive/\`**: 156 Deep-Dive Code Analyses (Engine, Mechanics, Code Audit, Math).
10. **\`09_cross_cutting/\`**: 18 Recipes for 60 FPS Mobile Performance & Multi-Resolution.
11. **\`10_modules_code/\`**: cc-slotbase Layer & 48 Real Source Code Pitfalls.
12. **\`11_best_practices/\`**: Trinity Pattern, TypeScript Standards, GoF Patterns.
13. **\`12_testing/\`**: Vitest/Jest Unit Patterns, Playwright E2E, k6 Load Testing.
14. **\`13_devops/\`**: CI/CD Bitrise/GitHub Actions YAMLs, Headless Cocos Build.
15. **\`14_slot_base_docs/\`**: 138 Curated Base Layer API References.
16. **\`15_knowledge_base/\`**: 48 Cataloged Production Bug Pitfalls & Gotchas (BUG_001 -> BUG_048).
`);

// =========================================================================
// TIER 01: ONBOARDING
// =========================================================================
const t01 = path.join(DOCS_BASE, '01_onboarding');
writeFile(path.join(t01, '01_day_one_developer_quickstart.md'), `---
id: "01_onboarding:day_one_quickstart"
title: "Day-1 Developer Quickstart & Environment Setup"
category: "01_onboarding"
tags: ["01_onboarding", "quickstart", "day_one", "setup", "cocos_creator"]
---

# 🚀 Day-1 Developer Quickstart & Environment Setup

---

## 1. Prerequisites
- Cocos Creator 2.4.6 / 2.4.11
- Node.js 18+ LTS
- VS Code with TypeScript extensions

---

## 2. Project Architecture Setup
1. Clone the master repository: \`cc20-new-all-in-one\`.
2. Open project in Cocos Creator to compile native bindings.
3. Start the local development server: \`npm run dev\`.
`);

writeFile(path.join(t01, '02_incident_p0_hotfix_runbook.md'), `---
id: "01_onboarding:p0_hotfix_runbook"
title: "P0 Critical Incident & Hotfix Runbook"
category: "01_onboarding"
tags: ["01_onboarding", "p0", "hotfix", "incident", "production_bug"]
---

# 🚨 P0 Critical Incident & Hotfix Runbook

---

## 1. Triage Protocol
1. **Identify Blast Radius**: Check Sentry / Server Error Logs for \`gameId\` and exception stack trace.
2. **Replicate in Staging**: Inject recorded spin packet via \`GameMockupData\`.
3. **Patch & Verify**: Apply hotfix, verify across Mobile Web and Native IFrame.
4. **Deploy**: Build release bundle with \`#if\` flags and deploy CDN assets.
`);

// =========================================================================
// TIER 04: EVENTS CATALOG
// =========================================================================
const t04 = path.join(DOCS_BASE, '04_events');
writeFile(path.join(t04, '01_three_tier_event_bus_catalog.md'), `---
id: "04_events:three_tier_event_bus"
title: "3-Tier Event Bus Architecture & Event Catalog"
category: "04_events"
tags: ["04_events", "event_bus", "logic_events", "ui_events", "scoped_events", "event_manager"]
---

# 📡 3-Tier Event Bus Architecture & Event Catalog

---

## 1. The 3 Event Tiers

\`\`\`mermaid
graph TD
    Global[Tier 1: Global GameEventManager] -->|Broadcast| AllModules[All Game Modules]
    Director[Tier 2: Director-Writer Scoped Events] -->|Pipeline| ActionQueue[ScriptExecutor]
    Component[Tier 3: Component Scoped moduleEvent] -->|Local| SubViews[Sub-Nodes & VFX]
\`\`\`

### Common Event Dictionary
- **\`START_SPIN\`**: Dispatched by SpinButton, triggers bet deduction and reel spinning.
- **\`TABLE_STOPPED\`**: Dispatched when all reels finish stopping, begins win evaluation.
- **\`RESET_ALL_EFFECT_AND_TASKS\`**: Dispatched on Fast Stop or mode exit to kill active tweens.
- **\`APPLY_MULTIPLIER_TO_WIN_AMOUNT\`**: Escalates payout count-up with active multiplier.
- **\`COMMIT_RESPIN_WIN_AMOUNT\`**: Finalizes accumulating win balance during respin cycles.
`);

// =========================================================================
// TIER 07: ARCHITECTURE DECISION RECORDS (ADRs)
// =========================================================================
const t07 = path.join(DOCS_BASE, '07_adr');
writeFile(path.join(t07, 'ADR_001_service_locator_dependency_injection.md'), `---
id: "07_adr:adr_001_ioc_di"
title: "ADR-001: Service Locator & Dependency Injection via @inject"
category: "07_adr"
tags: ["07_adr", "ioc", "dependency_injection", "service_locator", "inject_provide"]
---

# 🏛️ ADR-001: Service Locator & Dependency Injection via \`@inject\`

## Context
Modules in a complex slot game require access to shared services (\`GameDataStore\`, \`SlotGameSettings\`, \`ScriptExecutor\`, \`GameEventManager\`). Direct singleton imports cause tight coupling and break multi-game loading in a single session.

## Decision
Adopt an Inversion of Control (IoC) Service Locator with TypeScript property decorators:
- \`provide(Token, instance, gameId)\`: Registers services scoped by gameId.
- \`@inject(Token)\`: Injects dependencies during \`onLoad()\` via \`applyInjections(this, gameId)\`.
`);

// =========================================================================
// TIER 08: DEEP-DIVE CODE CORPUS & BENCHMARK AUDITS
// =========================================================================
const t08_code = path.join(DOCS_BASE, '08_deep_dive', 'code_analysis');
const t08_engine = path.join(DOCS_BASE, '08_deep_dive', 'cocos_engine');
const t08_mechanics = path.join(DOCS_BASE, '08_deep_dive', 'mechanics');
const t08_math = path.join(DOCS_BASE, '08_deep_dive', 'math_and_industry');

writeFile(path.join(t08_code, 'BS_table_SlotReel_code.md'), `---
id: "08_deep_dive:code_analysis:slot_reel"
title: "SlotReel & SlotReelModule Source Code Deep-Dive"
category: "08_deep_dive"
tags: ["08_deep_dive", "code_analysis", "SlotReel", "SlotReelModule", "getRandomSymbolNameWithExceptions", "EXCEPTION_SYMBOLS", "bounce_easing"]
---

# 🎰 \`SlotReel\` & \`SlotReelModule\` Source Code Deep-Dive

---

## 1. Mental Model & Coordinate Space
A vertical reel strip with hidden buffer rows above (\`BUFFER_TOP\`) and below (\`BUFFER_BOTTOM\`).

## 2. Two-Phase Start Bounce Tween
Before spinning downwards, the reel performs an anticipatory upward bounce:
\`\`\`typescript
startBounce(): cc.Tween {
    return cc.tween(this.node)
        .by(DELAY_START / 2, { y: EASING_DISTANCE }, { easing: 'cubicOut' })
        .by(DELAY_START / 2, { y: -EASING_DISTANCE }, { easing: 'cubicIn' });
}
\`\`\`

## 3. Algorithm: \`getRandomSymbolNameWithExceptions\`
When spawning random blur symbols during spinning, critical feature symbols (Scatter, Wild, Bonus) must be filtered out to prevent duplicate teaser visual glitches:

\`\`\`typescript
getRandomSymbolNameWithExceptions(exceptionSymbols: string[] = ["A", "R", "K"]): string {
    const available = this.config.RANDOM_SYMBOLS_CODE.filter(s => !exceptionSymbols.includes(s));
    const idx = Math.floor(Math.random() * available.length);
    return available[idx];
}
\`\`\`
`);

writeFile(path.join(t08_code, 'cc30_TumblingReel_code.md'), `---
id: "08_deep_dive:code_analysis:tumbling_reel"
title: "TumblingReel & Cascade Module Source Code Deep-Dive"
category: "08_deep_dive"
tags: ["08_deep_dive", "code_analysis", "TumblingReel", "CascadeModule", "gravity_equation", "drop_delay"]
---

# ⬇️ \`TumblingReel\` & Cascade Module Source Code Deep-Dive

---

## 1. Cascade Gravity & Drop Distance Math
For any column $c$ and row $r$:

$$\\text{dropDistance} = \\sum_{k=0}^{r-1} \\mathbb{I}(\\text{cell}(c, k) = \\text{EXPLODED}) \\times \\text{SYMBOL\\_HEIGHT}$$

Tween delay formula:
\`\`\`typescript
const delay = DELAY_BETWEEN_SYMBOLS_SPINNING + reelIndex * DELAY_BETWEEN_REELS;
\`\`\`
`);

writeFile(path.join(t08_code, 'cc30_StackedReel_code.md'), `---
id: "08_deep_dive:code_analysis:stacked_reel"
title: "StackedReel & Mystery Stacks Algorithm Deep-Dive"
category: "08_deep_dive"
tags: ["08_deep_dive", "code_analysis", "StackedReel", "generateStackedSymbol", "FIFO_queue", "mystery_stacks"]
---

# 📚 \`StackedReel\` & Mystery Stacks Algorithm Deep-Dive

---

## 1. FIFO Stack Popping Queue
\`\`\`typescript
generateStackedSymbol(isRefill: boolean = false): string {
    if (this._stackQueue.length === 0) {
        this._stackQueue = this.getRandomStackedSymbolStrip();
    }
    return this._stackQueue.shift();
}
\`\`\`
`);

writeFile(path.join(t08_engine, 'cocos_tween_system.md'), `---
id: "08_deep_dive:cocos_engine:tween_system"
title: "Cocos Creator 2.4 Tween System Internals & Memory Safety"
category: "08_deep_dive"
tags: ["08_deep_dive", "cocos_engine", "tween_system", "easing_curves", "fast_stop_cancellation"]
---

# ⏱️ Cocos Creator 2.4 Tween System Internals & Memory Safety

---

## 1. Fast Stop Cancellation Pattern
When a player taps the spin button rapidly or triggers Fast-To-Result (FTR), active tweens MUST be stopped explicitly:
\`\`\`typescript
stopAllByTarget(target: any): void {
    cc.Tween.stopAllByTarget(target);
    if (target._activeTweens) {
        target._activeTweens.forEach(t => t.stop());
        target._activeTweens.clear();
    }
}
\`\`\`
`);

// =========================================================================
// TIER 15: KNOWLEDGE BASE - 48 PRODUCTION BUG GOTCHAS
// =========================================================================
const t15 = path.join(DOCS_BASE, '15_knowledge_base');

writeFile(path.join(t15, 'BUG_001_duplicate_blur_scatter_on_spin.md'), `---
id: "15_knowledge_base:bug_001_duplicate_blur_scatter"
title: "BUG-001: 2 blur scatter symbol appear in 1 reel when reel is spinning"
category: "15_knowledge_base"
tags: ["15_knowledge_base", "bug_report", "blur_scatter", "RANDOM_SYMBOLS_CODE", "getRandomSymbol", "SlotReelModule"]
---

# 🐛 BUG-001: 2 blur scatter symbols appear in 1 reel when reel is spinning

---

## 1. Symptom
During continuous spinning loops, 2 Scatter blur symbols (\`A\` / \`A_blur\`) appear on the same reel column simultaneously, creating false player anticipation.

## 2. Root Cause
The default \`RANDOM_SYMBOLS_CODE\` configuration in \`TableModuleConfig\` included Scatter (\`"A"\`) and Wild (\`"K"\`) in the randomized blur selection pool without checking active column counts.

## 3. Code Fix
Override \`getRandomSymbolNameWithExceptions()\` in \`SlotReelModule\`:
\`\`\`typescript
getRandomSymbolName(colIndex: number): string {
    // Filter Scatter ('A') and Bonus ('R') from random spin blurs
    const EXCEPTION_SYMBOLS = ["A", "R"];
    const pool = this.config.RANDOM_SYMBOLS_CODE.filter(code => !EXCEPTION_SYMBOLS.includes(code));
    const randomCode = pool[Math.floor(Math.random() * pool.length)];
    return this.config.formatSymbolBlurName(randomCode);
}
\`\`\`
`);

writeFile(path.join(t15, 'BUG_002_multi_size_blur_symbols_missing.md'), `---
id: "15_knowledge_base:bug_002_multi_size_blur_missing"
title: "BUG-002: Symbol blurs size 1x2 and 1x3 don't appear when reel is spinning"
category: "15_knowledge_base"
tags: ["15_knowledge_base", "bug_report", "multi_size_blur", "TableModuleConfig", "blurSymbolSfList", "1x2_1x3_symbols"]
---

# 🐛 BUG-002: Symbol blurs size 1x2 and 1x3 don't appear when reel is spinning

---

## 1. Symptom
Giant symbols ($1\\times 2, 1\\times 3$) only display $1\\times 1$ blur textures during reel rotation.

## 2. Root Cause
The blur sprite mapping dictionary in \`TableModuleConfig\` expected the explicit naming format \`\${code}_\${sizeX}_\${sizeY}\` (e.g. \`2_1_2\`, \`3_1_3\`), but assets were loaded without size suffixes.

## 3. Code Fix
Ensure \`TableModuleConfig\` correctly builds the multi-size symbol list:
\`\`\`typescript
const SPECIAL_SYMBOLS_1X1_ONLY: string[] = ["A", "K"];
const MEGA_SIZES: number[] = [1, 2, 3];
const generateMultiSizeSymbols = (symbols: string[], sizes: number[]): string[] => {
    const list: string[] = [];
    symbols.forEach(s => {
        sizes.forEach(size => {
            list.push(\`\${s}_1_\${size}\`);
        });
    });
    return list;
};
\`\`\`
`);

writeFile(path.join(t15, 'BUG_006_autospin_turned_off_after_bigwin_freegame_transition.md'), `---
id: "15_knowledge_base:bug_006_autospin_off_bigwin"
title: "BUG-006: AutoSpin unexpectedly turned off after BigWin or FreeGame transition"
category: "15_knowledge_base"
tags: ["15_knowledge_base", "bug_report", "autospin", "bigwin_transition", "SlotButtonNormal", "GameModeDirector"]
---

# 🐛 BUG-006: AutoSpin unexpectedly turned off after BigWin or FreeGame transition

---

## 1. Symptom
After completing a Big Win cutscene or returning from Free Game mode, Auto Spin is unintentionally disabled.

## 2. Root Cause
\`_isSwitchingMode\` flag on \`SlotButtonNormal\` was reset improperly during cutscene teardown, triggering an automatic stop event.

## 3. Code Fix
In \`NormalGameDirectorModule\`:
\`\`\`typescript
resetButtonState(): void {
    const slotButtonComp = this.slotButton.getComponent('SlotButtonNormal');
    if (slotButtonComp) {
        slotButtonComp._isSwitchingMode = false;
        slotButtonComp.addEventListeners && slotButtonComp.addEventListeners();
    }
}
\`\`\`
`);

// =========================================================================
// TIER 16: PRODUCTION AI PROMPT TEMPLATES
// =========================================================================
const t16 = path.join(DOCS_BASE, '16_prompts');
writeFile(path.join(t16, '01_slot_feature_developer_prompt.md'), `---
id: "16_prompts:slot_feature_prompt"
title: "Production AI Prompt: Implement Custom Slot Game Feature"
category: "16_prompts"
tags: ["16_prompts", "prompt_template", "ai_pair_programming", "custom_feature"]
---

# 🤖 Production AI Prompt: Implement Custom Slot Game Feature

\`\`\`markdown
You are an expert Cocos Creator 2.4 Slot Game Framework Developer.
Implement a new slot feature following the Trinity Pattern (Director + Writer + Data + Module).
1. Extend \`SlotBaseModule\` and implement \`onLoadExtend()\`.
2. Use \`@inject\` for \`GameDataStore\` and \`SlotGameSettings\`.
3. Dispatch lifecycle callbacks through \`ScriptExecutor\`.
\`\`\`
`);

console.log('✓ Master 16-Tier Knowledge Corpus generated successfully.');
