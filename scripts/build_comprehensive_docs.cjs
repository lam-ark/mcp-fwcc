const fs = require('fs');
const path = require('path');

const docsRoot = path.join(__dirname, '..', 'docs');

const guides = [
  {
    dir: '00_architecture_and_lifecycle',
    file: '01_slot_platform_overview.md',
    title: 'Slot Platform Framework Architecture & Lifecycle',
    content: `# Slot Platform Framework Architecture & Lifecycle

> **Reference**: [https://slot-platform.enostd.gay/](https://slot-platform.enostd.gay/) & \`assets/cc-common/\`

## 1. Core Architecture Overview
The Enotion Slot Framework (\`cc-common\`) is a decoupled, event-driven, modular architecture designed for Cocos Creator 2.4.

### The Four Core Pillars:
1. **Director Pattern (\`SlotDirector\`, \`BaseGameDirector\`, \`NormalGameDirector\`, \`FreeGameDirector\`)**:
   - Orchestrates the state machine of the game: Idle ➔ Spin Start ➔ Table Rolling ➔ Reel Stop / Near-Win ➔ Payline Presentation ➔ Win Animation ➔ Respin / Cascade / Free Spin Transition.
2. **Table & Reel System (\`SlotTableModule\`, \`SlotReelModule\`, \`SlotCellTable\`, \`SlotSymbolManager\`)**:
   - Manages columns, symbol pooling, spin physics, stop sequences, and Spine symbol rendering.
3. **Payline & Win Computation (\`PaylineInfoModule\`, \`SlotUtils.convertPayLineAllWays\`, \`PaylineFactory\`)**:
   - Converts server matrix responses into visual payline overlays, win levels, cascading removals, and multi-currency formatting.
4. **Data Store & Context (\`GameDataStore\`, \`GameConfig\`, \`SlotGameSettings\`, \`eno.inject\`)**:
   - Global reactive state store accessed via dependency injection (\`@inject\`), ensuring decoupling between UI and Game Logic.

---

## 2. Dependency Injection System (\`eno.inject\` & \`eno.provide\`)
Instead of tight coupling or singleton anti-patterns, the framework uses an IoC container:
\`\`\`typescript
import { SlotGameSettings } from 'cc-slot-module/Core/SlotGameSettings';
import { GameDataStore } from 'cc-slot-module/Core/GameDataStore';

const { inject, MoneyTween, MoneyFormatter } = eno;

@ccclass
export default class MyCustomSlotModule extends cc.Component {
    @inject(SlotGameSettings) gameSettings: SlotGameSettings;
    @inject(GameDataStore) dataStore: GameDataStore;
    @inject(MoneyTween) moneyTween: eno.MoneyTween;
    @inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

    onLoad() {
        eno.applyInjections(this);
    }
}
\`\`\`

---

## 3. The Spin Lifecycle & Event Bus Sequence

\`\`\`mermaid
sequenceDiagram
    participant User as Player / SpinButton
    participant Dir as SlotDirector
    participant Net as Network / GameService
    participant Table as SlotTableModule
    participant Symbol as SlotSymbolManager
    participant Pay as PaylineInfoModule
    participant UI as UIManager

    User->>Dir: SPIN_START
    Dir->>Net: Send Spin Request
    Dir->>Table: ROLL_TABLE
    Net-->>Dir: Spin Response (Matrix, Paylines, WinAmount)
    Dir->>Table: STOP_TABLE (Reel Stops 0..N)
    Table->>Symbol: Trigger Near-Win / Stop FX
    Table-->>Dir: TABLE_STOPPED
    Dir->>Pay: SHOW_PAYLINE_WIN_AMOUNT
    Pay->>Pay: APPLY_MULTIPLIER_TO_WIN_AMOUNT
    Pay-->>Dir: SHOW_RESULT_ENTRY
    Dir->>UI: SHOW_TOTAL_WIN_EFFECT
    Dir->>User: Enable Spin Button / Next Cycle
\`\`\`
`
  },
  {
    dir: '01_mechanics_deep_dive',
    file: '01_allways_megaways_cascade.md',
    title: 'Slot Mechanics Deep Dive: AllWays, Megaways & Cascades',
    content: `# Slot Mechanics Deep Dive: AllWays, Megaways & Cascades

> **Reference**: [https://slot-platform.enostd.gay/api-references/base-slot/](https://slot-platform.enostd.gay/api-references/base-slot/)

## 1. AllWays Payline System (\`eno.SlotUtils.convertPayLineAllWays\`)
In AllWays slots (243 Ways, 1024 Ways, 3600 Ways, 4096 Ways):
- Payline wins do not follow static zig-zag lines.
- Wins are calculated whenever matching symbols appear on consecutive columns starting from Column 0 (left-to-right).
- **Calculation Formula**:
  $$\\text{Total Ways} = \\prod_{i=0}^{N-1} (\\text{Count of Symbol on Column } i)$$
  $$\\text{Win Amount} = \\text{Total Ways} \\times \\text{Symbol Payout Rate} \\times \\text{Bet Unit}$$

---

## 2. Cascade & Tumbling Mechanics (\`CompositeCascade\`, \`HorizontalCascade\`)
- **Step 1: Win Identification**: Find winning symbols across the matrix.
- **Step 2: Blink & Payline Showcase**: Highlight winning cells with Spine/Particle effects.
- **Step 3: Symbol Removal (\`RemovedSymbol\`)**: Fade out / destroy winning symbol instances and return them to the object pool.
- **Step 4: Gravity Drop / Fill (\`CascadeWildGeneration\`, \`TumblingReel\`)**: Existing symbols fall down to fill holes; new symbols drop from above the top row.
- **Step 5: Respin Evaluation**: Re-evaluate matrix with updated Multiplier ($x2 \\rightarrow x4 \\rightarrow x6 \\rightarrow x10$).

---

## 3. Megaways & Expanding Reels (\`Megaway\`, \`MegaReel\`)
- Dynamic row heights per column (e.g. 2 to 7 rows per reel).
- Total active ways updated reactively per spin and displayed via \`MegawayModule\`.
`
  },
  {
    dir: '02_gui_and_cutscenes',
    file: '01_gui_controls_and_cutscenes.md',
    title: 'GUI Controls, Cutscenes & Win Presentation',
    content: `# GUI Controls, Cutscenes & Win Presentation

> **Reference**: [https://slot-platform.enostd.gay/api-references/slot-module/gui/](https://slot-platform.enostd.gay/api-references/slot-module/gui/)

## 1. Core GUI Components
- **\`SpinButton\`**: Multi-state button (Normal, Fast Spin / Turbo, Auto Spin, Stop, Disabled).
- **\`Bet\` & \`BetSelectionPanel\`**: Manages bet size, bet level, credit denomination, and maximum bet shortcut.
- **\`Wallet\` / \`WalletLabel\`**: Formats real money vs trial balance with smooth numeric tweening.
- **\`PaylineInfo\` / \`PaylineInfoModule\`**: Center bottom win presentation bar with Level 1/2/3 win impact.

---

## 2. Win Effect Levels & Cutscenes (\`WinEffect\`, \`JackpotWin\`)
The framework classifies wins based on $W / B$ (Win Amount / Total Bet ratio):
- **Big Win**: $W / B \\ge 15x$
- **Mega Win**: $W / B \\ge 30x$
- **Super Win / Epic Win**: $W / B \\ge 50x$
- **Jackpot**: Mini, Minor, Major, Grand / Colossal triggers.
`
  },
  {
    dir: '03_cocos24_gotchas',
    file: '01_cocos24_best_practices_and_gotchas.md',
    title: 'Cocos Creator 2.4 Critical Rules & Gotchas',
    content: `# Cocos Creator 2.4 Critical Rules & Gotchas

## 1. BitmapFont Character Atlas Restrictions ⚠️
- **Gotcha**: A \`cc.Label\` using a custom \`cc.BitmapFont\` (such as \`9666_font_payline.fnt\`) **CANNOT** render characters missing from its \`.fnt\` definition.
- **Consequence**: If you set \`label.string = "Total win $200"\` on a font containing only digits and \`$\`, Cocos 2.4 will fail glyph lookup and render **BLANK (0px width)**.
- **Rule**: Always format win labels with pure numbers and currency symbols (via \`eno.MoneyFormatter\`), or ensure the \`.fnt\` atlas includes full uppercase and lowercase glyphs.

---

## 2. Component Reflection in Cocos 2.4
- **Gotcha**: \`comp.constructor.name\` in Cocos Creator production builds returns minified or empty strings (e.g. \`""\` or \`"t"\`).
- **Rule**: Always use \`cc.js.getClassName(comp)\` to retrieve registered TypeScript class names (e.g. \`'PaylineInfoModule9666'\`, \`'GameDirector'\`).

---

## 3. Spine 3.8 Animation Events & Completed Callbacks
- **Gotcha**: Spine event listeners (\`setEventListener\`) may drop frames during rapid state switches.
- **Rule**: Always provide a fallback execution in \`setCompleteListener\` to ensure asynchronous spin promises resolve.
`
  },
  {
    dir: '04_recipes_and_faq',
    file: '01_step_by_step_recipes.md',
    title: 'Step-by-Step Recipes & Troubleshooting',
    content: `# Step-by-Step Recipes & Troubleshooting

## Recipe 1: How to Add a New Symbol
1. Define symbol ID character in \`GameConfig.ts\` (e.g. \`'S1'\`, \`'W'\`, \`'A'\`).
2. Add SpriteFrame / Spine Skeleton mapping in \`SymbolSpriteMapping9666\` or \`SlotSymbolResourceManager\`.
3. Set payout multiplier table in \`PaylineConfig.ts\` (3x, 4x, 5x payouts).
4. Register in \`SlotSymbolManager\` pool.

---

## Recipe 2: How to Connect Multiplier to Win Presentation
\`\`\`typescript
@ftrSkip('playApplyMultiplierWinFtr')
private playApplyMultiplierWin(totalWinSoFar: number, onComplete: () => void): void {
    this.lbRight.string = this.moneyFormatter.formatMoney(totalWinSoFar);
    this.moneyTween.runNumber(this.lbRight.node, 0.3, totalWinSoFar, { onComplete });
}
\`\`\`
`
  }
];

for (const g of guides) {
  const dirPath = path.join(docsRoot, g.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, g.file), g.content);
}

console.log(`Generated ${guides.length} master architectural and recipe guides!`);
