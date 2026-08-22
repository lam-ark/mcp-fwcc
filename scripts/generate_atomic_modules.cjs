const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '..', 'docs', 'modules');
if (!fs.existsSync(modulesDir)) fs.mkdirSync(modulesDir, { recursive: true });

const modulesData = [
  // 1. SlotTableModule
  {
    name: 'SlotTableModule',
    category: 'cc_slot_module',
    title: 'SlotTableModule Matrix & Reel Orchestrator',
    sourcePath: 'assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts',
    inheritsFrom: 'SlotBaseModule',
    enoDocUrl: 'https://slot-platform.enostd.gay/api-references/base-slot/SlotCellTable.html',
    overview: `
# SlotTableModule: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts\`  
> **Inheritance**: \`SlotTableModule\` ➔ \`SlotBaseModule\` ➔ \`cc.Component\`  
> **Online Reference**: [SlotTableModule on Enotion Platform](https://slot-platform.enostd.gay/api-references/base-slot/SlotCellTable.html)

---

## 1. Purpose & Architectural Role
\`SlotTableModule\` is the **central orchestrator for the slot reel matrix**:
* Manages column instantiation and coordinate placement of \`SlotReelModule\` instances based on \`TableModuleConfig.TABLE_FORMAT\`.
* Controls spin physics: starting roll sequences, stagger delays between columns, near-win anticipation delays, and bounce stop easing.
* Coordinates with \`SlotSymbolManager\` to populate, update, and clear matrix symbols across Normal, Free, and Cascade modes.

---

## 2. Table Spin Execution Flow

\`\`\`mermaid
sequenceDiagram
    participant Dir as SlotDirector
    participant Table as SlotTableModule
    participant Reel as SlotReelModule (Col 0..N)
    participant Mgr as SlotSymbolManager

    Dir->>Table: startSpin()
    Table->>Reel: startSpin() (Staggered by column delay)
    Dir->>Table: stopTable(matrix, callback)
    loop For Each Column
        Table->>Reel: stopReel(colMatrix, isNearWin)
        Reel->>Mgr: getSymbol() / Recycles old symbols
        Reel-->>Table: Column Stopped
    end
    Table-->>Dir: tableStopCallback() (TABLE_STOPPED)
\`\`\`
`,
    properties: `
# SlotTableModule: Properties & Configuration

## 1. Cocos Creator Inspector Properties (\`@property\`)

| Property Name | Data Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **\`table\`** | \`cc.Node\` | \`null\` | Container node housing all reel columns. |
| **\`reelPrefab\`** | \`cc.Prefab\` | \`null\` | Prefab instantiated to create individual column reels (\`SlotReelModule\`). |
| **\`symbolManager\`** | \`SlotSymbolManager\` | \`null\` | Reference to the symbol pooling manager for the table. |

---

## 2. Internal State Variables

| State Variable | Data Type | Purpose |
| :--- | :--- | :--- |
| **\`TOTAL_COLS\`** | \`number\` | Total columns derived from \`config.TABLE_FORMAT.length\` (e.g. 5 columns). |
| **\`SYMBOL_WIDTH\`** | \`number\` | Width per column in pixels for layout calculations. |
| **\`state\`** | \`TableSpinState\` | Current spin state (\`READY\`, \`SPINNING\`, \`STOPPING\`, \`STOPPED\`). |
| **\`reels\`** | \`SlotReelModule[]\` | Array of instantiated column reel components. |
`,
    methods: `
# SlotTableModule: Methods & API Reference

---

## 1. \`onLoadExtend(): void\`
* **Purpose**: Fetches \`TableModuleConfig\`, \`SlotTableData\`, and configures \`symbolManager.setGameConfig(this.gameConfig)\`.

---

## 2. \`startSpin(): void\`
* **Purpose**: Triggers column roll animations with staggered column delays.

---

## 3. \`stopTable(matrix: string[][], callback: Function): void\`
* **Purpose**: Passes stopping matrix data to reels and handles near-win anticipation delays.

---

## 4. \`getTableMatrix(): string[][]\`
* **Purpose**: Returns the active 2D symbol matrix string array.
`,
    gotchas: `
# SlotTableModule: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Out-of-bounds Index in \`TABLE_FORMAT\`
> [!WARNING]
> **Symptom**: Symbols float off-grid or crash during column instantiation.
> 
> **Root Cause**: Mismatch between \`GameConfig.TABLE_FORMAT\` (e.g. \`[3,3,3,3,3]\`) and server matrix column length.
> 
> **Fix**: Ensure \`TableModuleConfig\` matches the server's matrix dimensions.
`,
    recipes: `
# SlotTableModule: Recipes & Real-World Usage

---

## Recipe 1: Customizing Stop Bounce Curve in Red Cliff Slot
\`\`\`typescript
import { SlotTableModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class SlotTableModule9666 extends SlotTableModule {
    override stopTable(matrix: string[][], callback: Function): void {
        // Custom near-win sound trigger before base stop
        super.stopTable(matrix, callback);
    }
}
\`\`\`
`,
    relations: {
      nodeId: "Class:SlotTableModule",
      category: "cc_slot_module",
      title: "SlotTableModule Matrix Manager",
      inheritsFrom: "Class:SlotBaseModule",
      manages: ["Class:SlotReelModule", "Class:SlotSymbolManager"],
      usedBy: [
        { target: "Class:SlotDirector", relation: "orchestrates_spin_and_stop" },
        { target: "Mechanic:CompositeCascade", relation: "modifies_table_matrix" }
      ],
      dependsOn: ["Class:TableModuleConfig", "Class:SlotTableData", "Class:GameConfig"],
      emitsEvents: ["Event:TABLE_STOPPED", "Event:TABLE_START_SPIN"],
      listensToEvents: ["Event:SPIN_START", "Event:FAST_STOP_TABLE"],
      gotchas: ["Gotcha:Matrix_Dimension_Mismatch", "Gotcha:Reel_Stop_Callback_Timeout"]
    }
  },

  // 2. BaseGameDirector
  {
    name: 'BaseGameDirector',
    category: 'cc_slot_module',
    title: 'BaseGameDirector State Machine Orchestrator',
    sourcePath: 'assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts',
    inheritsFrom: 'SlotBaseModule',
    enoDocUrl: 'https://slot-platform.enostd.gay/api-references/slot-module/game-mode/',
    overview: `
# BaseGameDirector: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts\`  
> **Inheritance**: \`BaseGameDirector\` ➔ \`SlotBaseModule\` ➔ \`cc.Component\`  
> **Online Reference**: [Game Mode & Directors on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-mode/)

---

## 1. Purpose & Architectural Role
\`BaseGameDirector\` is the **state machine orchestrator** driving game mode execution sequences:
* Manages the lifecycle of game rounds via \`ScriptExecutor\`: executing sequential or parallel async script tasks (\`runAction\`, \`executeNextScript\`).
* Handles step transitions: Spin Start ➔ Matrix Receive ➔ Table Stop ➔ Near-Win Presentation ➔ Payline Blink ➔ Multiplier Calculation ➔ Win Dialog ➔ Mode Switch (Free Spins / Bonus).
* Supports instant game speed modification (\`setGameSpeed\` for Turbo / Fast Play).

---

## 2. Director Script Execution Flow

\`\`\`mermaid
sequenceDiagram
    participant Svc as GameService / Net
    participant Dir as BaseGameDirector / NormalGameDirector
    participant Exec as ScriptExecutor
    participant Table as SlotTableModule
    participant Pay as PaylineInfoModule

    Dir->>Exec: executeNextScript("START_SPIN")
    Exec->>Table: rollTable()
    Svc-->>Dir: On Spin Result (Matrix, Paylines)
    Dir->>Exec: executeNextScript("STOP_TABLE")
    Exec->>Table: stopTable()
    Table-->>Exec: TABLE_STOPPED
    Dir->>Exec: executeNextScript("SHOW_PAYLINES")
    Exec->>Pay: showPaylineInfo()
    Dir->>Exec: executeNextScript("NEXT_ROUND")
\`\`\`
`,
    properties: `
# BaseGameDirector: Properties & Injected Services

## 1. Injected Services (\`@inject\`)

| Service Name | Type | Description |
| :--- | :--- | :--- |
| **\`dataStore\`** | \`GameDataStore\` | Central repository for session state, bet values, and round results. |
| **\`gameSettings\`** | \`SlotGameSettings\` | User settings (Turbo speed, Sound on/off, Auto-spin parameters). |
| **\`logger\`** | \`eno.Logger\` | Structured logger for director action traces. |

---

## 2. Runtime Internal Properties

| Property Name | Type | Purpose |
| :--- | :--- | :--- |
| **\`executor\`** | \`ScriptExecutor\` | The asynchronous command executor executing action queues. |
| **\`forceToExitMode\`** | \`boolean\` | Flag signaling early abort when switching game modes or reconnecting. |
`,
    methods: `
# BaseGameDirector: Methods & API Reference

---

## 1. \`runAction(actionName: string, data?: any): Promise<void>\`
* **Purpose**: Dispatches an action command asynchronously through the \`ScriptExecutor\`.

---

## 2. \`executeNextScript(script: any): void\`
* **Purpose**: Advances to the next scripted task in the mode execution pipeline.

---

## 3. \`onResetAllScripts(): void\`
* **Purpose**: Clears all pending director tasks upon reset or game mode transition.

---

## 4. \`setGameSpeed(mode: GAME_SPEED_ENUM): void\`
* **Purpose**: Adjusts action delays and tween time scales dynamically for Turbo mode.
`,
    gotchas: `
# BaseGameDirector: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Unresolved Promises Freezing Director State Machine
> [!CAUTION]
> **Symptom**: Game freezes indefinitely after table stops or after win celebration.
> 
> **Root Cause**: A child module (such as PaylineInfo or Spine Cutscene) failed to resolve its animation callback promise.
> 
> **Standard Fix**: Always provide safety timeout fallbacks in custom director action promises.
`,
    recipes: `
# BaseGameDirector: Recipes & Real-World Usage

---

## Recipe 1: Implementing a Respin Cascade Sequence in Normal Game
\`\`\`typescript
import { BaseGameDirector } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class NormalGameDirectorModule9666 extends BaseGameDirector {
    async _showStartRespinEffect(): Promise<void> {
        if (this.dataStore.playSession.payLines) {
            this._blinkAllPaylines();
            await this.delayAction(2);
            await this.eventManager.emit("APPLY_MULTIPLIER_TO_WIN_AMOUNT");
            await this.eventManager.emit("COMMIT_RESPIN_WIN_AMOUNT");
            await this._clearPaylines();
        }
    }
}
\`\`\`
`,
    relations: {
      nodeId: "Class:BaseGameDirector",
      category: "cc_slot_module",
      title: "BaseGameDirector State Engine",
      inheritsFrom: "Class:SlotBaseModule",
      manages: ["Class:ScriptExecutor"],
      usedBy: [
        { target: "Class:NormalGameDirectorModule", relation: "subclasses_director" },
        { target: "Class:FreeGameDirectorModule", relation: "subclasses_director" },
        { target: "Class:BonusGameDirectorModule", relation: "subclasses_director" }
      ],
      dependsOn: ["Class:GameDataStore", "Class:SlotGameSettings", "Class:ScriptExecutor"],
      emitsEvents: ["Event:CHANGE_GAME_MODE", "Event:SHOW_PAYLINE_WIN_AMOUNT", "Event:COMMIT_RESPIN_WIN_AMOUNT"],
      listensToEvents: ["Event:SPIN_START", "Event:FORCE_EXIT_GAME_MODE"],
      gotchas: ["Gotcha:Unresolved_Director_Action_Promise", "Gotcha:Game_Speed_Scale_Desync"]
    }
  },

  // 3. GameDataStore
  {
    name: 'GameDataStore',
    category: 'cc_slot_module',
    title: 'GameDataStore Reactive State Repository',
    sourcePath: 'assets/cc-common/cc-slot-module/Core/GameDataStore.ts',
    inheritsFrom: 'Object',
    enoDocUrl: 'https://slot-platform.enostd.gay/api-references/slot-module/game-data-store.html',
    overview: `
# GameDataStore: Overview & Architecture

> **Source Path**: \`assets/cc-common/cc-slot-module/Core/GameDataStore.ts\`  
> **Inheritance**: Plain TypeScript Class registered in IoC Container  
> **Online Reference**: [GameDataStore on Enotion Platform](https://slot-platform.enostd.gay/api-references/slot-module/game-data-store.html)

---

## 1. Purpose & Architectural Role
\`GameDataStore\` is the **Single Source of Truth** for player session and game state:
* Stores active matrix responses, paylines, bet configurations, wallet balances, and win amounts.
* Manages session resumption data (\`isResume\`, \`dataResume\`) upon player reconnection or page refresh.
* Injected into all modules via \`@inject(GameDataStore)\`.
`,
    properties: `
# GameDataStore: Properties & Session Fields

## 1. Session & Play Data Fields

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **\`playSession\`** | \`any\` | Holds current spin round response (matrix, paylines, winAmountPS, respinGameTotal). |
| **\`currentGameMode\`** | \`GAME_MODE_ENUM\` | Current active mode (\`NORMAL_GAME\`, \`FREE_GAME\`, \`BONUS_GAME\`). |
| **\`isAutoSpin\`** | \`boolean\` | Flag indicating whether Auto-Spin mode is actively running. |
| **\`betIndex\`** | \`number\` | Currently selected bet level index. |
`,
    methods: `
# GameDataStore: Methods & API Reference

---

## 1. \`getWinAmountPS(): number\`
* **Purpose**: Returns the total win amount of the current play session round.

---

## 2. \`setPlaySession(data: any): void\`
* **Purpose**: Updates the reactive session store with fresh server spin packet data.
`,
    gotchas: `
# GameDataStore: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Direct State Mutation Bypassing Store Setters
> [!WARNING]
> **Symptom**: UI fails to update when bet or win amounts change.
> 
> **Root Cause**: Mutating nested fields directly without triggering observer notifications.
`,
    recipes: `
# GameDataStore: Recipes & Usage

---

## Recipe 1: Accessing DataStore in Custom Component
\`\`\`typescript
import { GameDataStore } from "../../../cc-common/cc-slot-module/Core/GameDataStore";

const { inject } = eno;

export default class CustomUI extends cc.Component {
    @inject(GameDataStore) dataStore: GameDataStore;

    onLoad() {
        eno.applyInjections(this);
        console.log("Total Win:", this.dataStore.getWinAmountPS());
    }
}
\`\`\`
`,
    relations: {
      nodeId: "Class:GameDataStore",
      category: "cc_slot_module",
      title: "GameDataStore State Repository",
      inheritsFrom: "Class:Object",
      manages: [],
      usedBy: [
        { target: "Class:SlotDirector", relation: "reads_writes_session_data" },
        { target: "Class:PaylineInfoModule", relation: "reads_win_amounts" },
        { target: "Class:SlotTableModule", relation: "reads_matrix_data" }
      ],
      dependsOn: ["Class:SlotGameSettings", "Class:GameConfig"],
      emitsEvents: [],
      listensToEvents: ["Event:JOIN_GAME_SUCCESS", "Event:SPIN_RESPONSE"],
      gotchas: ["Gotcha:Direct_Mutation_Without_Observer"]
    }
  }
];

// Write modules
modulesData.forEach(mod => {
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
