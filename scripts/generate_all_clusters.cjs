const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '..', 'docs', 'modules');
if (!fs.existsSync(modulesDir)) fs.mkdirSync(modulesDir, { recursive: true });

const allModules = [
  // 1. GameInit
  {
    name: 'GameInit',
    category: 'cc_slot_module',
    title: 'GameInit Bootstrap Controller',
    sourcePath: 'assets/cc-common/cc-slot-module/Core/GameInit.ts',
    inheritsFrom: 'cc.Component',
    overview: `
# GameInit: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/Core/GameInit.ts\`  
> **Inheritance**: \`GameInit\` ➔ \`cc.Component\`  
> **Online Reference**: [GameInit on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-init.html)

---

## 1. Purpose & Architectural Role
\`GameInit\` is the **Bootstrap Entry Point** for the entire slot game lifecycle:
* Initializes core game singletons and stores: \`GameConfig\`, \`GameDataStore\`, \`eno.Game\` (GameLogic).
* Sets up the Service Locator / IoC Container (\`eno.provide\`) to register dependencies for child components.
* Configures logging, task schedulers, money formatters, and global event managers.
* Manages network initialization and auto-connection (\`connectNetwork\`).

---

## 2. Bootstrap Sequence

\`\`\`mermaid
sequenceDiagram
    participant Engine as Cocos Creator (Scene Load)
    participant Init as GameInit
    participant IoC as eno.provide (Service Container)
    participant Net as GameNetwork

    Engine->>Init: onLoad()
    Init->>Init: initializeConfigAndDataStore()
    Init->>Init: initializeGameLogic()
    Init->>Init: setupEventManager()
    Init->>IoC: provide(GameConfig, GameDataStore, GameEventManager...)
    Init->>Init: setupGameText()
    Engine->>Init: start()
    Init->>Net: connect() ➔ establish Socket / HTTP transport
\`\`\`
`,
    properties: `
# GameInit: Properties & Configuration

## 1. Inspector Properties (\`@property\`)

| Property Name | Data Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **\`isConsoleTest\`** | \`boolean\` | \`false\` | Enables test command execution via developer console. |
| **\`isModuleTest\`** | \`boolean\` | \`false\` | Enables standalone unit testing harness for isolated modules. |

---

## 2. Instantiated Internal Singletons

| Service | Type | Registered IoC Token |
| :--- | :--- | :--- |
| **\`_gameLogic\`** | \`eno.Game\` | \`eno.Game\` |
| **\`_dataStore\`** | \`GameDataStore\` | \`GameDataStore\` |
| **\`_gameConfig\`** | \`GameConfig\` | \`GameConfig\` |
| **\`_eventManager\`** | \`GameEventManager\` | \`GameEventManager\` |
| **\`_moneyFormatter\`** | \`eno.MoneyFormatter\` | \`eno.MoneyFormatter\` |
| **\`_moneyTween\`** | \`eno.MoneyTween\` | \`eno.MoneyTween\` |
`,
    methods: `
# GameInit: Methods & API Reference

---

## 1. \`onLoad(): void\`
* **Purpose**: Sequentially boots the engine, config, stores, and IoC container.

---

## 2. \`setupDependencyInjection(): void\`
* **Purpose**: Registers all instantiated services into the \`eno\` IoC container via \`eno.provide()\`.

---

## 3. \`connect(): void\`
* **Purpose**: Initiates network handshake and WebSocket/HTTP connection.
`,
    gotchas: `
# GameInit: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Accessing \`@inject\` before \`GameInit.onLoad()\` finishes
> [!CAUTION]
> **Symptom**: Injected services resolve to \`null\` in child components.
> 
> **Root Cause**: Child components reading injected services in constructor or during scene deserialization before \`GameInit\` registers them.
> 
> **Fix**: Always access injected dependencies inside or after \`onLoadExtend()\`.
`,
    recipes: `
# GameInit: Recipes & Usage

---

## Recipe 1: Customizing Bootstrap in Game Subclass
\`\`\`typescript
import { GameInit } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class CustomGameInit extends GameInit {
    override onLoad(): void {
        super.onLoad();
        console.log("Game successfully bootstrapped!");
    }
}
\`\`\`
`,
    relations: {
      nodeId: "Class:GameInit",
      category: "cc_slot_module",
      title: "GameInit Bootstrap Entry Point",
      inheritsFrom: "Class:cc.Component",
      manages: ["Class:GameDataStore", "Class:GameConfig", "Class:GameEventManager"],
      usedBy: [{ target: "Class:SlotDirector", relation: "initializes_game_environment" }],
      dependsOn: ["Class:GameConfig", "Class:GameDataStore", "Class:GameEventManager"],
      emitsEvents: ["Event:GAME_INIT", "Event:GAME_ENTER"],
      listensToEvents: [],
      gotchas: ["Gotcha:Early_Access_Before_Provide"]
    }
  },

  // 2. GameConfig
  {
    name: 'GameConfig',
    category: 'cc_slot_module',
    title: 'GameConfig Platform Configuration',
    sourcePath: 'assets/cc-common/cc-slot-module/Core/GameConfig.ts',
    inheritsFrom: 'cc.Component',
    overview: `
# GameConfig: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/Core/GameConfig.ts\`  
> **Inheritance**: \`GameConfig\` ➔ \`cc.Component\`  
> **Online Reference**: [GameConfig on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-config.html)

---

## 1. Purpose & Architectural Role
\`GameConfig\` is the **Master Configuration Specification** declaring:
* Game identity: \`GAME_ID\`, \`JP_PREFIX_EVENT\`.
* Payout calculation model: \`PAY_SYSTEM\` (\`ALLWAYS\` vs \`LINE_PAY\`), \`TOTAL_BET_CREDIT\`, \`LINE_NUMBER\`.
* Localization and Currency Formatting tables (\`CURRENCY_CONFIG\`, \`DEFAULT_LANGUAGE\`, \`EXTEND_GAME_TEXT\`).
* Storage preference keys for BGM and SFX.
`,
    properties: `
# GameConfig: Properties & Configuration Schema

## 1. Configuration Fields

| Field Name | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **\`GAME_ID\`** | \`string\` | \`"9864"\` | Unique game title identifier string. |
| **\`PAY_SYSTEM\`** | \`PAY_SYSTEM_TYPE_ENUM\` | \`ALLWAYS\` | Payout evaluation system (\`ALLWAYS\`, \`LINE\`, \`CLUSTER\`). |
| **\`TOTAL_BET_CREDIT\`** | \`number\` | \`25\` | Base credit cost for AllWays evaluation. |
| **\`LINE_NUMBER\`** | \`number\` | \`25\` | Total payline count for Line-based games. |
| **\`CURRENCY_CONFIG\`** | \`any\` | \`{...}\` | Decimal count, currency symbols, and formatting rules per currency. |
`,
    methods: `
# GameConfig: Methods & API Reference

---

## 1. \`getCurrencyConfig(currency: string): any\`
* **Purpose**: Retrieves currency formatting options for the specified currency code.
`,
    gotchas: `
# GameConfig: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Mismatched \`PAY_SYSTEM\` vs Server Calculation
> [!WARNING]
> **Symptom**: Visual win lines mismatch server payout response.
> 
> **Fix**: Ensure \`GameConfig.PAY_SYSTEM\` matches the server payline engine.
`,
    recipes: `
# GameConfig: Recipes & Usage

---

## Recipe 1: Customizing Currency Formatting
\`\`\`typescript
import { GameConfig } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class GameConfig9666 extends GameConfig {
    public GAME_ID = "9666";
    public TOTAL_BET_CREDIT = 25;
}
\`\`\`
`,
    relations: {
      nodeId: "Class:GameConfig",
      category: "cc_slot_module",
      title: "GameConfig Master Configuration",
      inheritsFrom: "Class:cc.Component",
      manages: [],
      usedBy: [
        { target: "Class:GameInit", relation: "instantiates_config" },
        { target: "Class:SlotTableModule", relation: "reads_table_format" },
        { target: "Class:PaylineInfoModule", relation: "reads_currency_format" }
      ],
      dependsOn: [],
      emitsEvents: [],
      listensToEvents: [],
      gotchas: ["Gotcha:Mismatched_Pay_System"]
    }
  },

  // 3. GameEventManager
  {
    name: 'GameEventManager',
    category: 'cc_slot_module',
    title: 'GameEventManager Async Event Bus',
    sourcePath: 'assets/cc-common/cc-slot-module/Core/GameEventManager.ts',
    inheritsFrom: 'Object',
    overview: `
# GameEventManager: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/Core/GameEventManager.ts\`  
> **Inheritance**: Plain TypeScript Class  
> **Online Reference**: [Event Manager on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/event-manager.html)

---

## 1. Purpose & Architectural Role
\`GameEventManager\` is the **Asynchronous Global Event Bus** enabling decoupled communication across all slot modules:
* Supports async listeners where \`emit(event, ...args)\` returns a \`Promise<void>\` and waits for all subscriber promises via \`Promise.all()\`.
* Provides \`targetOff(context)\` to safely clean up all listener subscriptions bound to a target component on destruction.
`,
    properties: `
# GameEventManager: Properties & Internal State

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **\`events\`** | \`Record<string, EventEntry[]>\` | Dictionary mapping event names to subscriber listener arrays. |
| **\`_logger\`** | \`any\` | Logger instance for tracking event dispatch trees. |
`,
    methods: `
# GameEventManager: Methods & API Reference

---

## 1. \`on(event: string, listener: Function, context?: any): void\`
* **Purpose**: Subscribes a listener function with optional context binding.

---

## 2. \`off(event: string, listener: Function, context?: any): void\`
* **Purpose**: Removes a specific listener subscription.

---

## 3. \`emit(event: string, ...args: any[]): Promise<void>\`
* **Purpose**: Dispatches event to all subscribers and waits for asynchronous completions.

---

## 4. \`targetOff(context: any): void\`
* **Purpose**: Unbinds all listeners registered to the specified context object.
`,
    gotchas: `
# GameEventManager: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Unhandled Rejections in Async Event Listeners
> [!CAUTION]
> **Symptom**: \`emit()\` catches errors and logs warnings, but faulty async logic can hang downstream sequences.
> 
> **Standard Fix**: Wrap async event listener bodies in try/catch blocks.
`,
    recipes: `
# GameEventManager: Recipes & Usage

---

## Recipe 1: Async Event Dispatch & Await
\`\`\`typescript
await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT");
await this.eventManager.emit("COMMIT_RESPIN_WIN_AMOUNT");
\`\`\`
`,
    relations: {
      nodeId: "Class:GameEventManager",
      category: "cc_slot_module",
      title: "GameEventManager Async Event Bus",
      inheritsFrom: "Class:Object",
      manages: [],
      usedBy: [
        { target: "Class:SlotBaseModule", relation: "injected_into_all_modules" },
        { target: "Class:SlotDirector", relation: "dispatches_game_flow_events" }
      ],
      dependsOn: [],
      emitsEvents: [],
      listensToEvents: [],
      gotchas: ["Gotcha:Async_Listener_Unhandled_Rejection"]
    }
  },

  // 4. SlotReelModule
  {
    name: 'SlotReelModule',
    category: 'cc_slot_module',
    title: 'SlotReelModule Single Column Controller',
    sourcePath: 'assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts',
    inheritsFrom: 'cc.Component',
    overview: `
# SlotReelModule: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts\`  
> **Inheritance**: \`SlotReelModule\` ➔ \`cc.Component\`  
> **Online Reference**: [SlotReelModule on Enotion Platform](https://slot-platform.enostd.gay/api-references/base-slot/SlotReelModule.html)

---

## 1. Purpose & Architectural Role
\`SlotReelModule\` controls the **physics and symbol stepping of an individual column**:
* Manages smooth scrolling, symbol replacement recycling through \`SlotSymbolManager\`.
* Executes bounce easing upon stopping and near-win deceleration effects.
`,
    properties: `
# SlotReelModule: Properties & Configuration

## 1. State & Geometry Fields

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **\`colIndex\`** | \`number\` | Column index within the table matrix (0 to N-1). |
| **\`symbols\`** | \`cc.Node[]\` | Array of symbol nodes currently attached to this reel column. |
`,
    methods: `
# SlotReelModule: Methods & API Reference

---

## 1. \`startSpin(): void\`
* **Purpose**: Accelerates column scrolling to target spin speed.

---

## 2. \`stopReel(colSymbols: string[], isNearWin: boolean): Promise<void>\`
* **Purpose**: Decelerates and snaps symbols into target row positions with bounce easing.
`,
    gotchas: `
# SlotReelModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Un-recycled Symbols Overflowing Reel Node
> [!WARNING]
> **Fix**: Always return passing symbols to \`SlotSymbolManager\` during continuous roll cycles.
`,
    recipes: `
# SlotReelModule: Recipes & Usage

---

## Recipe 1: Customizing Reel Stopping Ease
\`\`\`typescript
import { SlotReelModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";

export default class CustomReel extends SlotReelModule {
    // Custom easing overrides
}
\`\`\`
`,
    relations: {
      nodeId: "Class:SlotReelModule",
      category: "cc_slot_module",
      title: "SlotReelModule Column Controller",
      inheritsFrom: "Class:cc.Component",
      manages: ["Class:SlotSymbolModule"],
      usedBy: [{ target: "Class:SlotTableModule", relation: "instantiates_column_reels" }],
      dependsOn: ["Class:SlotSymbolManager"],
      emitsEvents: ["Event:REEL_STOPPED"],
      listensToEvents: [],
      gotchas: ["Gotcha:Reel_Symbol_Recycle_Leak"]
    }
  },

  // 5. SlotSymbolModule
  {
    name: 'SlotSymbolModule',
    category: 'cc_slot_module',
    title: 'SlotSymbolModule Symbol Presentation Node',
    sourcePath: 'assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts',
    inheritsFrom: 'cc.Component',
    overview: `
# SlotSymbolModule: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts\`  
> **Inheritance**: \`SlotSymbolModule\` ➔ \`cc.Component\`  
> **Online Reference**: [SlotSymbolModule on Enotion Platform](https://slot-platform.enostd.gay/api-references/base-slot/SlotSymbolModule.html)

---

## 1. Purpose & Architectural Role
\`SlotSymbolModule\` is attached to each Symbol Node to manage:
* Static Sprite frame presentation vs Dynamic Spine skeleton playback.
* Win animations (looping, flash, particle sparks) and near-win anticipation states.
* State cleanup before returning to \`SlotSymbolManager\` object pool (\`resetBeforeBackToPool\`).
`,
    properties: `
# SlotSymbolModule: Properties & Configuration

## 1. Inspector Properties (\`@property\`)

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **\`sprite\`** | \`cc.Sprite\` | Static icon sprite component. |
| **\`spine\`** | \`sp.Skeleton\` | Animated Spine skeleton component. |
`,
    methods: `
# SlotSymbolModule: Methods & API Reference

---

## 1. \`changeToSymbol(symbolCode: string): void\`
* **Purpose**: Switches visual asset to display target symbol icon/spine.

---

## 2. \`playWinAnimation(): void\`
* **Purpose**: Plays the winning hit animation loop.

---

## 3. \`resetBeforeBackToPool(): void\`
* **Purpose**: Clears Spine tracks and resets node transforms before pool insertion.
`,
    gotchas: `
# SlotSymbolModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Lingering Spine Track Poses in Pool
> [!CAUTION]
> **Fix**: Call \`spine.clearTracks()\` and \`spine.setToSetupPose()\` inside \`resetBeforeBackToPool()\`.
`,
    recipes: `
# SlotSymbolModule: Recipes & Usage

---

## Recipe 1: Customizing Symbol Win Spine
\`\`\`typescript
import { SlotSymbolModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";

export default class CustomSymbol extends SlotSymbolModule {
    override playWinAnimation(): void {
        super.playWinAnimation();
    }
}
\`\`\`
`,
    relations: {
      nodeId: "Class:SlotSymbolModule",
      category: "cc_slot_module",
      title: "SlotSymbolModule Visual Node",
      inheritsFrom: "Class:cc.Component",
      manages: ["Component:cc.Sprite", "Component:sp.Skeleton"],
      usedBy: [
        { target: "Class:SlotSymbolManager", relation: "manages_symbol_instances" },
        { target: "Class:SlotReelModule", relation: "renders_on_reel" }
      ],
      dependsOn: [],
      emitsEvents: [],
      listensToEvents: [],
      gotchas: ["Gotcha:Spine_Pool_Pollution"]
    }
  },

  // 6. WinEffect
  {
    name: 'WinEffect',
    category: 'cc_slot_module',
    title: 'WinEffect Cutscene Celebrations',
    sourcePath: 'assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffect.ts',
    inheritsFrom: 'SlotBaseModule',
    overview: `
# WinEffect: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffect.ts\`  
> **Inheritance**: \`WinEffect\` ➔ \`SlotBaseModule\` ➔ \`cc.Component\`  
> **Online Reference**: [WinEffect on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/cutscene/win-effect.html)

---

## 1. Purpose & Architectural Role
\`WinEffect\` controls the **Full-Screen Win Celebrations**:
* Multi-tier celebrations based on Bet Multipliers: **Big Win (5x-15x)**, **Mega Win (15x-30x)**, **Super Win (30x-50x)**, **Epic / Colossal Win (>50x)**.
* Interactive rolling money counters with particle bursts and player click-to-fast-forward capabilities.
`,
    properties: `
# WinEffect: Properties & Configuration

## 1. Inspector Properties (\`@property\`)

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **\`winAmountLabel\`** | \`cc.Label\` | Counting money label. |
| **\`spineEffect\`** | \`sp.Skeleton\` | Master celebratory Spine skeleton. |
`,
    methods: `
# WinEffect: Methods & API Reference

---

## 1. \`showWinEffect(winAmount: number, totalBet: number, onComplete: Function): void\`
* **Purpose**: Evaluates win ratio and triggers appropriate tier cutscene.
`,
    gotchas: `
# WinEffect: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Freezing Sequence on Quick Click Skip
> [!WARNING]
> **Fix**: Always resolve \`onComplete()\` when fast-forwarding through touch/click.
`,
    recipes: `
# WinEffect: Recipes & Usage

---

## Recipe 1: Customizing Win Tiers in Title
\`\`\`typescript
import { WinEffect } from "../../../cc-common/cc-slot-module/SlotModuleExport";

export default class CustomWinEffect extends WinEffect {
    // Custom tier thresholds
}
\`\`\`
`,
    relations: {
      nodeId: "Class:WinEffect",
      category: "cc_slot_module",
      title: "WinEffect Big/Mega/Super Win Controller",
      inheritsFrom: "Class:SlotBaseModule",
      manages: ["Component:cc.Label", "Component:sp.Skeleton"],
      usedBy: [{ target: "Class:SlotDirector", relation: "triggers_win_celebrations" }],
      dependsOn: ["Class:MoneyFormatter", "Class:MoneyTween"],
      emitsEvents: ["Event:WIN_EFFECT_COMPLETED"],
      listensToEvents: ["Event:SHOW_TOTAL_WIN_EFFECT"],
      gotchas: ["Gotcha:Win_Effect_Skip_Freeze"]
    }
  }
];

// Write all modules
allModules.forEach(mod => {
  const modDir = path.join(modulesDir, mod.name);
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

  fs.writeFileSync(path.join(modDir, '01_overview.md'), mod.overview.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '02_properties.md'), mod.properties.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '03_methods.md'), mod.methods.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '04_gotchas.md'), mod.gotchas.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '05_recipes.md'), mod.recipes.trim() + '\n');
  
  const relObj = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    ...mod.relations,
    files: {
      overview: `modules/${mod.name}/01_overview.md`,
      properties: `modules/${mod.name}/02_properties.md`,
      methods: `modules/${mod.name}/03_methods.md`,
      gotchas: `modules/${mod.name}/04_gotchas.md`,
      recipes: `modules/${mod.name}/05_recipes.md`
    }
  };
  fs.writeFileSync(path.join(modDir, 'relations.json'), JSON.stringify(relObj, null, 2) + '\n');
  console.log(`Generated Atomic Module: ${mod.name}`);
});
