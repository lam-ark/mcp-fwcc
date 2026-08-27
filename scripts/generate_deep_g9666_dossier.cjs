const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs', 'game-implement', 'g9666_red_cliff');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Generating Comprehensive 10-Chapter Deep Documentation for G9666 Red Cliff...');

// 00. Executive Summary & Spec
writeFile(path.join(DOCS_DIR, '00_EXECUTIVE_SUMMARY_AND_SPEC.md'), `---
id: "game-implement:9666:spec:executive_summary"
title: "Red Cliff (g9666) Executive Summary & Math Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "specification", "math", "symbols", "megaways"]
---

# 📜 Red Cliff (g9666) Executive Summary & Math Specification

- **Game Code**: \`g9666\` / \`cc1-red-cliff\`
- **Commercial Title**: Red Cliff - Đại Chiến Xích Bích
- **Engine Framework**: Cocos Creator 2.4 + ARK Slot Module System (\`eno\`)
- **Max Megaways**: Up to **117,649 Ways** ($7 \\times 7 \\times 7 \\times 7 \\times 7 \\times 7$)
- **Grid Layout**: 6 Main Vertical Columns + 1 Top Horizontal Sub-Reel (4 columns spanning Reels 2..5)

---

## 1. Symbol Code Registry & Paytable Tiers

| Symbol Code | Asset Name / Character | Category | Base Payout (3 / 4 / 5 / 6 of a kind) | Special Mechanics |
| :---: | :--- | :---: | :---: | :--- |
| **\`K\` / \`K1\`** | Gold Ingot (Nguyên Bảo) | Wild | Substitutes all regular symbols except Scatter | Appears on Reels 2, 3, 4, 5 and Top Sub-Reel |
| **\`K1-2\`, \`K1-8\`** | Multiplier Ingot Wild | Multiplier Wild | Substitutes + Multiplies win by $\\times 2, \\times 8, \\times 10$ | Badge collected to banner; unexploded reverts on next spin |
| **\`S1\`** | Quan Vũ (Guan Yu) | High Pay (Top) | $20\\times / 40\\times / 100\\times / 250\\times$ | Triggers full-height Stacked Wild transformation |
| **\`S2\`** | Lưu Bị (Liu Bei) | High Pay | $15\\times / 25\\times / 50\\times / 100\\times$ | Jackpot Minor token collection symbol |
| **\`S3\`** | Trương Phi (Zhang Fei) | High Pay | $10\\times / 20\\times / 30\\times / 60\\times$ | Jackpot Major token collection symbol |
| **\`S4\`** | Triệu Vân (Zhao Yun) | High Pay | $8\\times / 15\\times / 25\\times / 50\\times$ | Jackpot Grand token collection symbol |
| **\`R1\` - \`R5\`** | A, K, Q, J, 10 | Royals (Low) | $2\\times - 20\\times$ | Eligible for Silver $\\rightarrow$ Gold frame morphing |
| **\`SC\`** | Chiến Thuyền (Warship) | Scatter | Free Game Feature Trigger ($4+\\text{ SC} \\rightarrow 10\\text{ FS}$) | Collects to HUD meter; triggers Free Game Option modal |

---

## 2. Megaways Combinatorial Math Model

$$\\text{Total Ways} = \\prod_{c=1}^{6} \\text{Height}[c]$$

Where:
- Reel 1 & Reel 6: $\\text{Height} \\in [2, 7]$
- Reel 2, 3, 4, 5: $\\text{Height} = \\text{VerticalHeight}[c] + 1 \\quad (\\text{if top horizontal reel symbol active})$
- Minimum Ways: $2 \\times 3 \\times 3 \\times 3 \\times 3 \\times 2 = 324 \\text{ Ways}$ (or $2^6 = 64 \\text{ Ways}$)
- Maximum Ways: $7 \\times 7 \\times 7 \\times 7 \\times 7 \\times 7 = 117,649 \\text{ Ways}$
`);

// 01. Architecture & Core Flow
writeFile(path.join(DOCS_DIR, '01_ARCHITECTURE_AND_CORE_FLOW.md'), `---
id: "game-implement:9666:architecture:core_flow"
title: "Red Cliff (g9666) Lifecycle Architecture & Master Flow"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "architecture", "lifecycle", "state_machine"]
---

# 🔄 Red Cliff (g9666) Lifecycle Architecture & Master Flow

---

## 1. Master Finite State Machine (FSM)

\`\`\`mermaid
stateDiagram-v2
    [*] --> READY: Initial Scene Load
    READY --> SPINNING: onSpinClick / AutoSpin
    SPINNING --> STOPPING: Network Response Received
    STOPPING --> WIN_EVALUATION: All Reels Settled (TABLE_STOP_SPIN)
    
    state WIN_EVALUATION {
        [*] --> CheckWins
        CheckWins --> HighlightPaylines: Winning Ways Found
        CheckWins --> CheckFreeGameTrigger: Zero Wins
        HighlightPaylines --> CollectWildMultipliers: Has Multiplier Wilds
        CollectWildMultipliers --> DualCascadeDrop: CompositeCascade9666
        DualCascadeDrop --> ReIndexMatrix: Update Format & Megaways
        ReIndexMatrix --> CheckWins: Loop Next Cascade Step
    }

    WIN_EVALUATION --> SETTLED: Cascade Loop Complete & Zero Wins
    SETTLED --> FREE_GAME_OPTION: 4+ Scatters Landed
    FREE_GAME_OPTION --> FREE_GAME_LOOP: Option Selected
    FREE_GAME_LOOP --> READY: Free Spins Complete
    SETTLED --> READY: Normal Round Complete
\`\`\`

---

## 2. Spin Start Sequence & State Reset Pipeline

When a new spin initiates, the following sequential commands execute:
1. **\`onBeforeSpinStart\`** $\\rightarrow$ Locks bet buttons, cancels pending win animations.
2. **\`_resetTable\`** $\\rightarrow$ Emits:
   - \`BEFORE_RESET_TABLE\`
   - \`CLEAR_PAYLINES\`
   - \`SYNC_TABLE\`
   - \`RESET_MULTIPLIER\` (resets multiplier banner to baseline $\\times 1$ in Base Game or active sticky in Free Game)
   - \`RESET_SCATTER_COUNT\`
3. **Symbol Reversion**: Multiplier Wilds that did not explode in previous cascades reset \`hasCollectedMultiplier = false\` and re-show their multiplier badge.
`);

// 03. Composite Cascade Subsystem
writeFile(path.join(DOCS_DIR, '03_COMPOSITE_CASCADE_SUBSYSTEM.md'), `---
id: "game-implement:9666:mechanics:composite_cascade"
title: "Red Cliff (g9666) Composite Dual Cascade Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "VerticalCascadeModule9666", "HorizontalCascadeModule9666", "cascade", "respin"]
---

# 🌊 Red Cliff (g9666) Composite Dual Cascade Subsystem

---

## 1. Dual Cascade Architecture

Red Cliff utilizes a synchronized dual cascade system orchestrated by [\`CompositeCascade9666\`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts):
- **Vertical Cascade**: Gravity-based symbol drops across main Reels 1..6.
- **Horizontal Cascade**: Right-to-left slide refills across the Top Sub-Reel (Reels 2..5).

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant Director as GameDirector
    participant Comp as CompositeCascade9666
    participant Vert as VerticalCascadeModule9666
    participant Horz as HorizontalCascadeModule9666
    participant Bus as ModuleEvent Bus

    Director->>Comp: startRespin()
    Comp->>Comp: Format verticalMatrix & horizonMatrix
    par Parallel Cascade Refill
        Comp->>Vert: startRespin(verticalMatrix, listTraceWayVertical)
        Comp->>Horz: startRespin(horizonMatrix, listTraceWayHorizontal)
    end
    Vert-->>Comp: Vertical Drop Complete
    Horz-->>Comp: Horizontal Slide Complete
    Comp->>Bus: emit('UPDATE_JACKPOT_COLLECTION')
    Comp->>Director: Resolve startRespin() Promise

    Director->>Comp: stopRespin()
    Comp->>Comp: Calculate formatMatrix Total Ways
    Comp->>Bus: emit('UPDATE_MEGAWAY', totalWays)
    Comp->>Comp: super.stopRespin()
    Comp->>Bus: emit('STACK_WILD_LANDED')
\`\`\`

---

## 2. Complete Source Implementation: \`CompositeCascade9666.ts\`

\`\`\`typescript
import { CompositeCascade } from "../../../../cc-common/cc-slot-features/CompositeCascade/CompositeCascadeExport";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CompositeCascade9666 extends CompositeCascade {

	async startRespin(): Promise<void> {
		const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();
		const p1 = this.verticalCascadeModule.startRespin(verticalMatrix, listTraceWayVertical);
		const p2 = this.horizontalCascadeModule.startRespin(horizonMatrix, listTraceWayHorizontal);
		await Promise.all([p1, p2]);
		await this.moduleEvent.emit('UPDATE_JACKPOT_COLLECTION');
	}

	async stopRespin(): Promise<void> {
		const formatMatrix = this._compositeCascadeData.getFormatMatrix();
		const totalWays = formatMatrix.reduce((total, column) => total * column.length, 1);
		await this.moduleEvent.emit('UPDATE_MEGAWAY', totalWays);
		await super.stopRespin();
		await this.moduleEvent.emit('STACK_WILD_LANDED');
	}
}
\`\`\`
`);

// 04. Multiplier Wild & Stack Wild Subsystem
writeFile(path.join(DOCS_DIR, '04_MULTIPLIER_WILD_AND_STACK_WILD.md'), `---
id: "game-implement:9666:mechanics:multiplier_wild_and_stack_wild"
title: "Red Cliff (g9666) Multiplier Wilds & Stack Wild Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "StackWildModule9666", "multiplier_wild", "stack_wild"]
---

# ⚔️ Red Cliff (g9666) Multiplier Wilds & Stack Wild Subsystem

---

## 1. Multiplier Wild Lifecycle & State Reversion

In Red Cliff 9666, Multiplier Wilds have symbol codes formatted as \`K1-<multiplier>\` (e.g. \`K1-2\`, \`K1-8\`, \`K1-10\`).

\`\`\`mermaid
stateDiagram-v2
    [*] --> SymbolSpawning: Reel Stop / Cascade Refill
    SymbolSpawning --> ShowBadge: parseMultiplier('K1-8') -> 'x8' badge visible
    ShowBadge --> WinEvaluation: Part of Winning Combination?
    
    WinEvaluation --> CollectedToBanner: YES (Participates in Win)
    CollectedToBanner --> HideBadge: hideMultiplierLabel() -> string = ''
    HideBadge --> ExplodeAndRemove: Explodes in Cascade
    
    WinEvaluation --> RetainedUnexploded: NO (Does NOT participate in Win)
    RetainedUnexploded --> NewSpinStart: Player spins again
    NewSpinStart --> ShowBadge: Reverts to original Multiplier Wild state ('x8' re-shown)
\`\`\`

---

## 2. Key Methods in \`SlotSymbolModule9666.ts\`

\`\`\`typescript
hideMultiplierLabel(): void {
    if (this.lbMultiplier) {
        this.lbMultiplier.string = '';
    }
    this.hasCollectedMultiplier = true;
}

updateMultiplierLabel(multiplier: number): void {
    if (this.lbMultiplier && multiplier > 1) {
        this.lbMultiplier.string = \`x\${multiplier}\`;
        this.lbMultiplier.node.active = true;
    }
}
\`\`\`
`);

// 05. Jackpot Collection Subsystem
writeFile(path.join(DOCS_DIR, '05_JACKPOT_COLLECTION_SUBSYSTEM.md'), `---
id: "game-implement:9666:mechanics:jackpot_collection"
title: "Red Cliff (g9666) Jackpot Collection & Smart Resume Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "JackpotCollectionItem9666", "jackpot", "resume"]
---

# 💎 Red Cliff (g9666) Jackpot Collection & Smart Resume Subsystem

---

## 1. 4-Tier Collection Meter Schema

| Tier Index | Jackpot Tier | Associated Symbol | Target Tokens Required | Triggered Feature |
| :---: | :---: | :---: | :---: | :--- |
| **0** | **Mini** | \`S4\` (Zhao Yun) | 6 Tokens | Mini Jackpot Payout ($20\\times \\text{Bet}$) |
| **1** | **Minor** | \`S3\` (Zhang Fei) | 9 Tokens | Minor Jackpot Payout ($50\\times \\text{Bet}$) |
| **2** | **Major** | \`S2\` (Liu Bei) | 12 Tokens | Major Jackpot Payout ($200\\times \\text{Bet}$) |
| **3** | **Grand** | \`S1\` (Guan Yu) | 15 Tokens | Grand Jackpot Payout ($1000\\times \\text{Bet}$) |

---

## 2. Smart Resume Deduction Algorithm on \`onJoinGameSuccess\`

When a player reconnects mid-round, \`collectSymbols\` from server represents the **end-of-round total**. To prevent the meter from jumping ahead before the win animation plays, \`JackpotCollectionModule9666\` computes:

$$C_{\\text{before}} = \\max(0, C_{\\text{collected}} - W_{\\text{current}})$$

\`\`\`typescript
const adjustedList = rawList.map((item: string) => {
    const parts = item.split(':');
    const symbolCode = parts[0];
    const collected = parseInt(parts[1], 10) || 0;
    const required = parseInt(parts[2], 10) || 0;
    const currentWinCount = paylineCounts[symbolCode] || 0;
    const beforeCollect = Math.max(0, collected - currentWinCount);
    return \`\${symbolCode}:\${beforeCollect}:\${required}\`;
});
this.initItems(adjustedList);
\`\`\`
`);

// 06. Payline & Spine Bone Sync
writeFile(path.join(DOCS_DIR, '06_PAYLINE_AND_SPINE_BONE_SYNC.md'), `---
id: "game-implement:9666:mechanics:payline_and_spine_bone_sync"
title: "Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineInfoModule9666", "Spine", "bone_tracking", "hsn", "money"]
---

# 🎭 Red Cliff (g9666) Payline & Spine Bone Tracking Subsystem

---

## 1. Dynamic Bone Synchronization in \`update(dt)\`

[\`PaylineInfoModule9666\`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts) binds Cocos UI Labels to animated Spine skeleton bones in real time:

\`\`\`typescript
update(_dt: number): void {
    if (this._isMultiLabelFollowingBone) {
        this.syncNodeToBone(this.multiLabel?.node, 'hsn');
    }
    if (this._isExtraAmountWinFollowingBone) {
        this.syncNodeToBone(this.extraAmountWin?.node, 'money');
    }
}
\`\`\`

---

## 2. Spine Event Listener Integration

\`\`\`typescript
this.hsnCombineSpine.setEventListener((_trackEntry: any, event: any) => {
    if (event?.data?.name === 'add_money') {
        this.onHsnAddMoneyEvent(); // Triggers MoneyTween count-up to consolidated win
    } else if (event?.data?.name === 'add_ktt') {
        this.onShowResultEntry();  // Consolidates total payout label
    }
});
\`\`\`
`);

// 07. Game Directors & Writers
writeFile(path.join(DOCS_DIR, '07_GAME_DIRECTORS_AND_WRITERS.md'), `---
id: "game-implement:9666:architecture:directors_and_writers"
title: "Red Cliff (g9666) Game Directors & Writers Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "NormalGameDirectorModule9666", "FreeGameDirectorModule9666", "writers", "pipeline"]
---

# 🎬 Red Cliff (g9666) Game Directors & Writers Pipeline

---

## 1. Normal Game Writer Command Script Sequence

\`\`\`typescript
makeScriptNormalSpinTrigger(): Object[] {
    const listScript = [];
    listScript.push({ command: "_beforeSpinStart" });
    listScript.push({ command: "_syncPlaySessionData" });
    listScript.push({ command: "_pauseWallet" });
    listScript.push({ command: "_resetOnSpin" });
    listScript.push({ command: "_clearWinAmount" });
    listScript.push({ command: "_resetTable" });
    listScript.push({ command: "onStartSpinningTable" });
    listScript.push({ command: "_startSpinningTable" });
    return listScript;
}
\`\`\`
`);

// 08. Trial Mode & UI Framework
writeFile(path.join(DOCS_DIR, '08_TRIAL_MODE_AND_UI_FRAMEWORK.md'), `---
id: "game-implement:9666:gui:trial_mode_and_ui"
title: "Red Cliff (g9666) Trial Mode & UI Framework"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeToggleButton9666", "TrialModeLoopController9666", "gui", "trial_mode"]
---

# 🎮 Red Cliff (g9666) Trial Mode & UI Framework

---

## 1. Trial Mode Architecture

- **\`TrialModeToggleButton9666\`**: Manages UI state toggle between Real Money Mode and Trial (Demo) Mode.
- **\`TrialModeLoopController9666\`**: Orchestrates mock data looping, wallet balance simulation ($50,000,000 trial credits), and feature exhibition.
`);

// 09. Audio, Cutscenes & Events Map
writeFile(path.join(DOCS_DIR, '09_AUDIO_CUTSCENE_AND_EVENTS_MAP.md'), `---
id: "game-implement:9666:assets:audio_cutscenes_and_events"
title: "Red Cliff (g9666) Audio, Cutscenes & Master Event Bus Map"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "audio", "cutscenes", "events", "spine", "sound"]
---

# 🎵 Red Cliff (g9666) Audio, Cutscenes & Master Event Bus Map

---

## 1. Master Event Bus Mapping Table

| Event Identifier | Emitter Module | Primary Listener | Payload & Purpose |
| :--- | :--- | :--- | :--- |
| **\`UPDATE_MEGAWAY\`** | \`CompositeCascade9666\` | \`MegawayModule9666\` | \`totalWays: number\` - Updates HUD ways counter |
| **\`UPDATE_JACKPOT_COLLECTION\`** | \`CompositeCascade9666\` | \`JackpotCollectionModule9666\` | Triggers token fly-in animations to meters |
| **\`COLLECT_WILD_MULTIPLIER\`** | \`SlotSymbolManager9666\` | \`CollectMultiModule9666\` | Multiplier Wild collected to consolidated multiplier |
| **\`STACK_WILD_LANDED\`** | \`CompositeCascade9666\` | \`StackWildModule9666\` | Plays full-screen Guan Yu stack character cutscene |
| **\`APPLY_MULTIPLIER_TO_WIN_AMOUNT\`** | \`MultiplierModule9666\` | \`PaylineInfoModule9666\` | Triggers multiplier spine animation and count-up |
`);

// 10. Integration Recipes & Debug Guide
writeFile(path.join(DOCS_DIR, '10_INTEGRATION_RECIPES_AND_DEBUG_GUIDE.md'), `---
id: "game-implement:9666:recipes:integration_and_debug"
title: "Red Cliff (g9666) Integration Recipes & Debugging Guide"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "recipes", "debug", "cheats", "mock", "troubleshooting"]
---

# 🛠️ Red Cliff (g9666) Integration Recipes & Debugging Guide

---

## 💡 Recipe: Multiplier Wild State Reversion on Spin Start

To ensure unexploded Multiplier Wilds revert cleanly when a new spin begins:

\`\`\`typescript
onStartSpin(): void {
    if (this.isMultiplierWild(this.symbolCode) && !this.hasExploded) {
        this.hasCollectedMultiplier = false;
        this.updateMultiplierLabel(this.multiplierValue);
    }
}
\`\`\`
`);

// Index File
writeFile(path.join(DOCS_DIR, 'INDEX.md'), `---
id: "game-implement:9666:index"
title: "Red Cliff (g9666) Knowledge Dossier Master Index"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "g9666", "red_cliff", "index", "dossier"]
---

# 📚 Red Cliff (g9666) Complete Knowledge Dossier

1. [00_EXECUTIVE_SUMMARY_AND_SPEC.md](./00_EXECUTIVE_SUMMARY_AND_SPEC.md) - Math specification, symbols, and paytables.
2. [01_ARCHITECTURE_AND_CORE_FLOW.md](./01_ARCHITECTURE_AND_CORE_FLOW.md) - Master FSM state machine and lifecycle flow.
3. [02_scene_and_prefab_hierarchy.md](./02_scene_and_prefab_hierarchy.md) - 100% exact node trees and prefabs.
4. [03_COMPOSITE_CASCADE_SUBSYSTEM.md](./03_COMPOSITE_CASCADE_SUBSYSTEM.md) - Dual cascade mathematics & sequencing.
5. [04_MULTIPLIER_WILD_AND_STACK_WILD.md](./04_MULTIPLIER_WILD_AND_STACK_WILD.md) - Multiplier Wilds and Stack Wilds.
6. [05_JACKPOT_COLLECTION_SUBSYSTEM.md](./05_JACKPOT_COLLECTION_SUBSYSTEM.md) - 4-Tier token collection & smart resume.
7. [06_PAYLINE_AND_SPINE_BONE_SYNC.md](./06_PAYLINE_AND_SPINE_BONE_SYNC.md) - Real-time Spine bone tracking ('hsn', 'money').
8. [07_GAME_DIRECTORS_AND_WRITERS.md](./07_GAME_DIRECTORS_AND_WRITERS.md) - Normal & Free game script command pipelines.
9. [08_TRIAL_MODE_AND_UI_FRAMEWORK.md](./08_TRIAL_MODE_AND_UI_FRAMEWORK.md) - Trial loop and UI framework.
10. [09_AUDIO_CUTSCENE_AND_EVENTS_MAP.md](./09_AUDIO_CUTSCENE_AND_EVENTS_MAP.md) - Audio clips and Master Event Bus.
11. [10_INTEGRATION_RECIPES_AND_DEBUG_GUIDE.md](./10_INTEGRATION_RECIPES_AND_DEBUG_GUIDE.md) - Recipes and troubleshooting.
12. [modules/](./modules/) - 113 Per-Class Folders with Variables Dictionary and Line-by-Line Method Walkthroughs.
`);

console.log('✓ Successfully generated all 10 specialized architecture chapters and index for G9666!');
