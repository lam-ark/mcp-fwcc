const fs = require('fs');
const path = require('path');

const DOCS_BASE = path.join(__dirname, '..', 'docs', 'game-implement', 'g9666_red_cliff');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Generating Comprehensive Modular Multi-File Chapters for G9666 Red Cliff...');

// =========================================================================
// 01_game_overview/
// =========================================================================
const DIR_01 = path.join(DOCS_BASE, '01_game_overview');
writeFile(path.join(DIR_01, '01_math_specification.md'), `---
id: "game-implement:9666:overview:math_spec"
title: "Red Cliff (g9666) Mathematical Specification & Megaways Model"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "math", "megaways", "rtp", "volatility"]
---

# 📐 Red Cliff (g9666) Mathematical Specification & Megaways Model

---

## 1. Megaways Combinatorial Equation

The active ways to win in Red Cliff 9666 are calculated using the product of symbol heights across all 6 columns:

$$\\text{Total Ways} = \\prod_{c=1}^{6} H[c]$$

Where the height vector $H[c]$ is determined by:
- $H[1] \\in [2, 7]$ (Main Reel 1)
- $H[2] = H_{\\text{main}}[2] + 1 \\quad (H_{\\text{main}}[2] \\in [2, 6] + 1 \\text{ Top Reel symbol})$
- $H[3] = H_{\\text{main}}[3] + 1 \\quad (H_{\\text{main}}[3] \\in [2, 6] + 1 \\text{ Top Reel symbol})$
- $H[4] = H_{\\text{main}}[4] + 1 \\quad (H_{\\text{main}}[4] \\in [2, 6] + 1 \\text{ Top Reel symbol})$
- $H[5] = H_{\\text{main}}[5] + 1 \\quad (H_{\\text{main}}[5] \\in [2, 6] + 1 \\text{ Top Reel symbol})$
- $H[6] \\in [2, 7]$ (Main Reel 6)

---

## 2. Megaways Boundaries

| Metric | Calculation | Ways Count |
| :--- | :--- | :---: |
| **Minimum Ways** | $2 \\times (2+1) \\times (2+1) \\times (2+1) \\times (2+1) \\times 2$ | **324 Ways** |
| **Maximum Ways** | $7 \\times (6+1) \\times (6+1) \\times (6+1) \\times (6+1) \\times 7$ | **117,649 Ways** |
`);

writeFile(path.join(DIR_01, '02_symbol_registry_and_paytable.md'), `---
id: "game-implement:9666:overview:symbols_and_paytable"
title: "Red Cliff (g9666) Symbol Registry & Paytable Tiers"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "symbols", "paytable", "payouts"]
---

# 👑 Red Cliff (g9666) Symbol Registry & Paytable Tiers

---

## 1. Symbol Code Registry & Hierarchy

| Code | Symbol Name | Character / Asset | Category | Base 3-of-a-Kind | Base 4-of-a-Kind | Base 5-of-a-Kind | Base 6-of-a-Kind |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **\`K\` / \`K1\`** | Gold Ingot | Wild Ingot | Wild | - | - | - | - |
| **\`K1-2\`..\`K1-10\`** | Multiplier Wild | Ingot with Multiplier Badge | Special Wild | - | - | - | - |
| **\`S1\`** | Quan Vũ | Guan Yu Green Robe | High Pay | $20\\times$ | $40\\times$ | $100\\times$ | $250\\times$ |
| **\`S2\`** | Lưu Bị | Liu Bei Royal Crest | High Pay | $15\\times$ | $25\\times$ | $50\\times$ | $100\\times$ |
| **\`S3\`** | Trương Phi | Zhang Fei Battle Armor | High Pay | $10\\times$ | $20\\times$ | $30\\times$ | $60\\times$ |
| **\`S4\`** | Triệu Vân | Zhao Yun White Spear | High Pay | $8\\times$ | $15\\times$ | $25\\times$ | $50\\times$ |
| **\`R1\`** | Ace | Red Banner 'A' | Royal Low | $4\\times$ | $8\\times$ | $15\\times$ | $20\\times$ |
| **\`R2\`** | King | Golden Banner 'K' | Royal Low | $3\\times$ | $6\\times$ | $10\\times$ | $15\\times$ |
| **\`R3\`** | Queen | Purple Banner 'Q' | Royal Low | $2\\times$ | $4\\times$ | $6\\times$ | $10\\times$ |
| **\`R4\`** | Jack | Blue Banner 'J' | Royal Low | $1\\times$ | $2\\times$ | $4\\times$ | $6\\times$ |
| **\`R5\`** | Ten | Green Banner '10' | Royal Low | $1\\times$ | $2\\times$ | $3\\times$ | $5\\times$ |
| **\`SC\`** | Chiến Thuyền | Warship Scatter | Scatter | - | - | - | Feature Trigger |
`);

writeFile(path.join(DIR_01, '03_fsm_and_round_lifecycle.md'), `---
id: "game-implement:9666:overview:fsm_lifecycle"
title: "Red Cliff (g9666) Finite State Machine & Round Lifecycle"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "fsm", "lifecycle", "state_machine", "round"]
---

# 🔄 Red Cliff (g9666) Finite State Machine & Round Lifecycle

---

## 1. Master FSM Transition Graph

\`\`\`mermaid
stateDiagram-v2
    [*] --> READY
    READY --> SPINNING: onSpinClick() / onAutoSpin()
    SPINNING --> STOPPING: OnSpinResultReceived
    STOPPING --> WIN_EVALUATION: TABLE_STOP_SPIN
    
    state WIN_EVALUATION {
        [*] --> EvaluatePaylines
        EvaluatePaylines --> HighlightWins: Win Count > 0
        HighlightWins --> CollectMultipliers: Has Multiplier Wilds
        CollectMultipliers --> TriggerDualCascade: CompositeCascade9666.startRespin()
        TriggerDualCascade --> SettleCascade: CompositeCascade9666.stopRespin()
        SettleCascade --> EvaluatePaylines: Loop Next Cascade
        EvaluatePaylines --> CheckFeatureTriggers: Win Count == 0
    }

    WIN_EVALUATION --> FREE_GAME_OPTION: 4+ Scatters Landed
    FREE_GAME_OPTION --> FREE_GAME_LOOP: Mode Selected
    FREE_GAME_LOOP --> SETTLED: Free Spins Exhausted
    WIN_EVALUATION --> SETTLED: Zero Wins & No Feature
    SETTLED --> READY: Round Concluded
\`\`\`
`);

// =========================================================================
// 03_composite_cascade/
// =========================================================================
const DIR_03 = path.join(DOCS_BASE, '03_composite_cascade');
writeFile(path.join(DIR_03, '01_architecture_and_data_flow.md'), `---
id: "game-implement:9666:cascade:architecture"
title: "Red Cliff (g9666) Composite Dual Cascade Architecture"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "dual_cascade", "architecture"]
---

# 🌊 Red Cliff (g9666) Composite Dual Cascade Architecture

- **Class**: [\`CompositeCascade9666\`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts)
- **Base Class**: \`CompositeCascade\` (\`cc-slot-features/CompositeCascade\`)
- **Managed Components**: \`VerticalCascadeModule9666\`, \`HorizontalCascadeModule9666\`, \`CompositeCascadeData9666\`

---

## 1. Dual Coordinate Space Coordination

\`\`\`mermaid
graph TD
    MainGrid[Vertical Grid 6 Columns Reels 1..6] --> CompCascade[CompositeCascade9666 Coordinator]
    TopGrid[Horizontal Sub-Reel 4 Columns Reels 2..5] --> CompCascade
    CompCascade --> ParallelExecution[Promise.all: Vertical Drop + Horizontal Slide]
    ParallelExecution --> SyncBus[Events: UPDATE_JACKPOT_COLLECTION -> UPDATE_MEGAWAY -> STACK_WILD_LANDED]
\`\`\`
`);

writeFile(path.join(DIR_03, '02_vertical_cascade_mechanics.md'), `---
id: "game-implement:9666:cascade:vertical"
title: "Red Cliff (g9666) Vertical Cascade Mechanics"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "VerticalCascadeModule9666", "gravity", "drop"]
---

# ⬇️ Red Cliff (g9666) Vertical Cascade Mechanics

- **Module**: \`VerticalCascadeModule9666\`
- **Physics**: Vertical gravity acceleration: $Y(t) = Y_0 - \\frac{1}{2} g t^2$ with floor bounce settle.

---

## 1. Step Elimination & Drop Refill

1. Winning symbols marked in \`listTraceWayVertical\` play explosion spines and fade out.
2. Upper remaining symbols drop downward into vacant cell indices.
3. New random refill symbols spawn above the top mask and accelerate into place.
`);

writeFile(path.join(DIR_03, '03_horizontal_cascade_mechanics.md'), `---
id: "game-implement:9666:cascade:horizontal"
title: "Red Cliff (g9666) Horizontal Slide Refill Mechanics"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "HorizontalCascadeModule9666", "slide", "sub_reel"]
---

# ⬅️ Red Cliff (g9666) Horizontal Slide Refill Mechanics

- **Module**: \`HorizontalCascadeModule9666\`
- **Kinematics**: Right-to-left horizontal translation: $X_{new} = X_{current} - \\Delta X$.

---

## 1. Top Sub-Reel Shift Logic

1. When a horizontal sub-reel symbol wins, it is recycled.
2. Remaining symbols to the right slide leftward to fill vacancies.
3. New symbols spawn from the rightmost edge and slide into the 4th position.
`);

writeFile(path.join(DIR_03, '04_synchronization_and_events.md'), `---
id: "game-implement:9666:cascade:sync_and_events"
title: "Red Cliff (g9666) Cascade Synchronization & Event Sequencing"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "events", "sync"]
---

# ⚡ Red Cliff (g9666) Cascade Synchronization & Event Sequencing

---

## 1. Method Implementation: \`startRespin\` & \`stopRespin\`

\`\`\`typescript
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
\`\`\`
`);

writeFile(path.join(DIR_03, '05_edge_cases_and_gotchas.md'), `---
id: "game-implement:9666:cascade:gotchas"
title: "Red Cliff (g9666) Cascade Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "troubleshooting", "cascade"]
---

# ⚠️ Red Cliff (g9666) Cascade Edge Cases & Gotchas

---

## 1. Gotcha: Fast-Stop Mid-Drop Desynchronization
- **Symptom**: Symbols frozen between two rows during rapid fast-stop clicks.
- **Root Cause**: Skipping drop tween without setting final target position coordinates.
- **Fix**: In \`stopRespin()\`, force all symbol nodes to snap to \`this.getPosition(r, c)\`.
`);

// =========================================================================
// 04_multiplier_and_stack_wild/
// =========================================================================
const DIR_04 = path.join(DOCS_BASE, '04_multiplier_and_stack_wild');
writeFile(path.join(DIR_04, '01_multiplier_wild_lifecycle.md'), `---
id: "game-implement:9666:wild:multiplier_lifecycle"
title: "Red Cliff (g9666) Multiplier Wild Lifecycle"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "multiplier_wild", "lifecycle"]
---

# 🌟 Red Cliff (g9666) Multiplier Wild Lifecycle

---

## 1. Multiplier Wild State Machine

\`\`\`mermaid
stateDiagram-v2
    [*] --> Landed: Symbol Code 'K1-8'
    Landed --> BadgeRendered: lbMultiplier.string = 'x8'
    BadgeRendered --> WinParticipated: Part of Winning Payway
    WinParticipated --> Collected: Emit COLLECT_WILD_MULTIPLIER
    Collected --> BadgeHidden: hideMultiplierLabel() -> string = ''
    BadgeHidden --> Exploded: Destroyed in Cascade
    
    BadgeRendered --> Unexploded: NOT in Winning Payway
    Unexploded --> NextSpin: Player starts new spin
    NextSpin --> BadgeRendered: hasCollectedMultiplier = false -> 'x8' restored
\`\`\`
`);

writeFile(path.join(DIR_04, '02_badge_display_and_collection.md'), `---
id: "game-implement:9666:wild:badge_and_collection"
title: "Red Cliff (g9666) Multiplier Badge Display & Collection"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectMultiModule9666", "badge", "collection"]
---

# 🎯 Red Cliff (g9666) Multiplier Badge Display & Collection

---

## 1. Badge Hiding & Collection in \`SlotSymbolModule9666.ts\`

\`\`\`typescript
hideMultiplierLabel(): void {
    if (this.lbMultiplier) {
        this.lbMultiplier.string = '';
    }
    this.hasCollectedMultiplier = true;
}
\`\`\`
`);

writeFile(path.join(DIR_04, '03_unexploded_wild_reversion.md'), `---
id: "game-implement:9666:wild:unexploded_reversion"
title: "Red Cliff (g9666) Unexploded Multiplier Wild State Reversion"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSymbolModule9666", "reversion", "spin_reset"]
---

# 🔄 Red Cliff (g9666) Unexploded Multiplier Wild State Reversion

---

## 1. Reversion Requirement & Logic

> **Core Rule**: If a Multiplier Wild is not part of a winning combination, it reverts to its original Multiplier Wild state when the next spin begins.

\`\`\`typescript
reset(): void {
    super.reset();
    this.hasCollectedMultiplier = false;
    if (this.multiplierValue > 1) {
        this.updateMultiplierLabel(this.multiplierValue);
    }
}
\`\`\`
`);

writeFile(path.join(DIR_04, '04_stacked_wild_expansion.md'), `---
id: "game-implement:9666:wild:stacked_wild"
title: "Red Cliff (g9666) Guan Yu Stacked Wild Expansion"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule9666", "guan_yu", "stacked_wild"]
---

# 🗡️ Red Cliff (g9666) Guan Yu Stacked Wild Expansion

- **Module**: \`StackWildModule9666\`
- **Trigger**: When Guan Yu (\`S1\`) fills an entire column, triggers a full-height character Spine cutscene substituting all symbols on that reel.
`);

writeFile(path.join(DIR_04, '05_edge_cases_and_gotchas.md'), `---
id: "game-implement:9666:wild:gotchas"
title: "Red Cliff (g9666) Multiplier & Stack Wild Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "wild", "spine"]
---

# ⚠️ Red Cliff (g9666) Multiplier & Stack Wild Gotchas

---

## 1. Gotcha: Multiplier Badge Orphaned on Pooled Symbol Recycling
- **Symptom**: New regular symbol appears with an old multiplier label attached.
- **Fix**: In \`recycleSymbol()\` / \`initExtend()\`, always reset \`lbMultiplier.string = ''\` and \`hasCollectedMultiplier = false\`.
`);

// =========================================================================
// 05_jackpot_collection/
// =========================================================================
const DIR_05 = path.join(DOCS_BASE, '05_jackpot_collection');
writeFile(path.join(DIR_05, '01_tier_architecture_and_thresholds.md'), `---
id: "game-implement:9666:jackpot:tiers"
title: "Red Cliff (g9666) Jackpot Tier Architecture & Thresholds"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "jackpot_tiers"]
---

# 💎 Red Cliff (g9666) Jackpot Tier Architecture & Thresholds

| Index | Tier | Hero Symbol | Target Tokens | Payout Multiplier |
| :---: | :---: | :---: | :---: | :---: |
| **0** | **Mini** | \`S4\` (Zhao Yun) | 6 | $20\\times$ Total Bet |
| **1** | **Minor** | \`S3\` (Zhang Fei) | 9 | $50\\times$ Total Bet |
| **2** | **Major** | \`S2\` (Liu Bei) | 12 | $200\\times$ Total Bet |
| **3** | **Grand** | \`S1\` (Guan Yu) | 15 | $1000\\times$ Total Bet |
`);

writeFile(path.join(DIR_05, '02_token_meter_ui_and_fly_in.md'), `---
id: "game-implement:9666:jackpot:fly_in"
title: "Red Cliff (g9666) Token Meter UI & Fly-In Animation"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionItem9666", "fly_in", "animation"]
---

# ✨ Red Cliff (g9666) Token Meter UI & Fly-In Animation

- **Particle Path**: Winning symbol world position $\\rightarrow$ Bezier curve trajectory $\\rightarrow$ Target Jackpot HUD meter anchor.
`);

writeFile(path.join(DIR_05, '03_smart_resume_deduction_math.md'), `---
id: "game-implement:9666:jackpot:smart_resume"
title: "Red Cliff (g9666) Smart Resume Deduction Algorithm"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "smart_resume", "math"]
---

# 🧮 Red Cliff (g9666) Smart Resume Deduction Algorithm

---

## 1. The Resume Paradox & Mathematical Formulation

When resuming a game round mid-spin, the server provides \`collectSymbols\` reflecting the **post-round total**.

To show the fly-in animation accurately, the client must display the pre-round token count:

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

writeFile(path.join(DIR_05, '04_edge_cases_and_gotchas.md'), `---
id: "game-implement:9666:jackpot:gotchas"
title: "Red Cliff (g9666) Jackpot Collection Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "jackpot", "resume"]
---

# ⚠️ Red Cliff (g9666) Jackpot Collection Gotchas

---

## 1. Gotcha: Meter Over-Filling on Reconnect
- **Symptom**: Reconnecting mid-spin shows the Jackpot meter full, then adds tokens again causing overflow.
- **Fix**: Always apply the \`currentWinCount\` deduction in \`onJoinGameSuccess\`.
`);

// =========================================================================
// 06_payline_and_spine_sync/
// =========================================================================
const DIR_06 = path.join(DOCS_BASE, '06_payline_and_spine_sync');
writeFile(path.join(DIR_06, '01_realtime_bone_tracking_update.md'), `---
id: "game-implement:9666:spine:bone_tracking"
title: "Red Cliff (g9666) Real-Time Spine Bone Tracking in update(dt)"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineInfoModule9666", "bone_tracking", "spine"]
---

# 🦴 Red Cliff (g9666) Real-Time Spine Bone Tracking in update(dt)

---

## 1. Implementation in \`PaylineInfoModule9666.ts\`

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
`);

writeFile(path.join(DIR_06, '02_hsn_multiplier_combine_spine.md'), `---
id: "game-implement:9666:spine:hsn_combine"
title: "Red Cliff (g9666) HSN Multiplier Combine Spine Animation"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "hsnCombineSpine", "multiplier_combine"]
---

# 💥 Red Cliff (g9666) HSN Multiplier Combine Spine Animation

- **Spine Events**: \`add_money\` triggers MoneyTween count-up; \`add_ktt\` updates consolidated payout text.
`);

writeFile(path.join(DIR_06, '03_money_tween_and_speed_scaling.md'), `---
id: "game-implement:9666:spine:money_tween_speed"
title: "Red Cliff (g9666) MoneyTween & Speed Scaling"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MoneyTween", "SpeedDecorator", "speed"]
---

# ⚡ Red Cliff (g9666) MoneyTween & Speed Scaling

- **Speed Decorator**: Dynamically scales tween durations ($0.25 / \\text{speed}$) based on Turbo mode ($1\\times, 2\\times, 3\\times$).
`);

writeFile(path.join(DIR_06, '04_edge_cases_and_gotchas.md'), `---
id: "game-implement:9666:spine:gotchas"
title: "Red Cliff (g9666) Spine Bone Sync Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "gotchas", "spine", "bone_tracking"]
---

# ⚠️ Red Cliff (g9666) Spine Bone Sync Gotchas

---

## 1. Gotcha: Coordinate Drift on Window Resize
- **Fix**: Bone tracking recalculates using \`convertToWorldSpaceAR\` and \`convertToNodeSpaceAR\` on every frame.
`);

console.log('✓ Successfully generated all modular multi-file chapters for G9666 Red Cliff!');
