const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * AI Deep-Dive 8-Node DocGen Pipeline for cc-common SDK
 * 
 * Generates 8 exhaustive atomic documentation nodes per module:
 * 1. 01_overview.md
 * 2. 02_game_flow_and_timing.md
 * 3. 03_director_writer_integration.md
 * 4. 04_properties_and_state.md
 * 5. 05_methods_and_api.md
 * 6. 06_events_and_bus_flow.md
 * 7. 07_gotchas_and_pitfalls.md
 * 8. 08_recipes_and_examples.md
 * 9. relations.json
 */

const SDK_ROOT = path.join(__dirname, '..', '..', '..', 'assets', 'cc-common');
const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const MODULES_DIR = path.join(DOCS_ROOT, 'modules');

if (!fs.existsSync(MODULES_DIR)) fs.mkdirSync(MODULES_DIR, { recursive: true });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

function findTsFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (!['node_modules', '.git', 'test'].includes(file.name)) {
        findTsFiles(fullPath, fileList);
      }
    } else if (file.isFile() && file.name.endsWith('.ts') && !file.name.endsWith('.d.ts')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Deep AST Source Parser
function analyzeSourceCode(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const relPath = path.relative(path.join(__dirname, '..', '..', '..'), filePath).replace(/\\/g, '/');

  const classMatch = content.match(/export\s+(?:default\s+)?class\s+(\w+)(?:\s+extends\s+(\w+))?/);
  if (!classMatch) return null;

  const className = classMatch[1];
  const inheritsFrom = classMatch[2] || 'Object';

  let category = 'cc_slot_module';
  if (filePath.includes('cc-slot-mechanics')) category = 'cc_slot_mechanics';
  else if (filePath.includes('cc-core-lib')) category = 'cc_core_lib';
  else if (filePath.includes('cc-network')) category = 'cc_network';

  // Properties
  const properties = [];
  const propRegex = /@property\s*\(([^)]*)\)\s*(?:public\s+|protected\s+|private\s+)?(\w+)(?:\s*:\s*([^=;]+))?(?:\s*=\s*([^;]+))?/g;
  let propM;
  while ((propM = propRegex.exec(content)) !== null) {
    properties.push({
      name: propM[2],
      type: propM[3] ? propM[3].trim() : (propM[1] ? propM[1].trim() : 'any'),
      defaultVal: propM[4] ? propM[4].trim() : 'null',
      decorator: propM[1] ? propM[1].trim() : ''
    });
  }

  // Injections
  const injections = [];
  const injectRegex = /@inject\s*\(([^)]+)\)\s*(?:public\s+|protected\s+|private\s+)?(\w+)(?:\s*:\s*([^=;]+))?/g;
  let injM;
  while ((injM = injectRegex.exec(content)) !== null) {
    injections.push({
      name: injM[2],
      token: injM[1].trim(),
      type: injM[3] ? injM[3].trim() : injM[1].trim()
    });
  }

  // Methods with Full Body Extraction
  const methods = [];
  const methodRegex = /(?:public\s+|protected\s+|private\s+|override\s+|async\s+)*(\w+)\s*\(([^)]*)\)\s*(?::\s*([^{]+))?\s*\{/g;
  let methM;
  const standardIgnored = ['constructor', 'if', 'for', 'while', 'switch', 'catch'];
  while ((methM = methodRegex.exec(content)) !== null) {
    const mName = methM[1];
    if (!standardIgnored.includes(mName)) {
      // Find method body snippet
      const startIdx = methM.index;
      let openBraces = 0;
      let endIdx = startIdx;
      for (let i = startIdx; i < content.length; i++) {
        if (content[i] === '{') openBraces++;
        else if (content[i] === '}') {
          openBraces--;
          if (openBraces === 0) {
            endIdx = i + 1;
            break;
          }
        }
      }
      const rawMethodSnippet = content.substring(startIdx, Math.min(endIdx, startIdx + 800)).trim();

      methods.push({
        name: mName,
        params: methM[2] ? methM[2].trim() : '',
        returnType: methM[3] ? methM[3].trim() : 'void',
        snippet: rawMethodSnippet
      });
    }
  }

  const emitsEvents = Array.from(new Set([...content.matchAll(/emit\s*\(\s*["']([^"']+)["']/g)].map(m => m[1])));
  const listensToEvents = Array.from(new Set([...content.matchAll(/on\s*\(\s*["']([^"']+)["']/g)].map(m => m[1])));

  return {
    filePath,
    fileName,
    relPath,
    className,
    inheritsFrom,
    category,
    properties,
    injections,
    methods,
    emitsEvents,
    listensToEvents,
    rawContent: content
  };
}

function buildDeep8NodeDocs(mod) {
  const modDir = path.join(MODULES_DIR, mod.className);
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

  const methodNames = mod.methods.map(m => m.name);
  const tagList = Array.from(new Set([
    mod.category,
    mod.className.toLowerCase(),
    mod.inheritsFrom.toLowerCase(),
    ...methodNames.slice(0, 10),
    ...mod.emitsEvents.slice(0, 5),
    ...mod.listensToEvents.slice(0, 5)
  ]));

  // 1. 01_overview.md
  const overview = `---
id: "${mod.className}:overview"
title: "${mod.className} Overview & Architecture"
category: "${mod.category}"
tags: ${JSON.stringify(tagList)}
source_path: "${mod.relPath}"
inherits_from: "${mod.inheritsFrom}"
---

# ${mod.className}: Overview & Architecture

> **Source Path**: \`${mod.relPath}\`  
> **Inheritance**: \`${mod.className}\` ➔ \`${mod.inheritsFrom}\`  
> **Online Reference**: [Enotion Platform API](https://slot-platform.enostd.gay/api-references/)

---

## 1. Purpose & Architectural Role
\`${mod.className}\` is a core module in the **\`${mod.category}\`** subsystem of the slot engine:
* Encapsulates state, business logic, and visual presentation extending from \`${mod.inheritsFrom}\`.
* Operates within the Cocos Creator 2.4 Scene Graph and coordinates with the global Event Bus (\`GameEventManager\`).
${mod.injections.length > 0 ? `* Injects services: ${mod.injections.map(i => `\`${i.name}\` (\`${i.token}\`)`).join(', ')}.` : ''}

---

## 2. Component Interaction & Lifecycle Flow

\`\`\`mermaid
sequenceDiagram
    participant Caller as Director / State Machine
    participant Mod as ${mod.className}
    participant Bus as Event Bus (GameEventManager)

    Caller->>Mod: Initialize & Register
    activate Mod
${mod.listensToEvents.length > 0 ? `    Mod->>Bus: Listen to "${mod.listensToEvents[0]}"\n` : ''}
${mod.emitsEvents.length > 0 ? `    Mod->>Bus: Emit "${mod.emitsEvents[0]}"\n` : ''}
    Mod-->>Caller: Ready / State Settled
    deactivate Mod
\`\`\`
`;

  // 2. 02_game_flow_and_timing.md
  const gameFlow = `---
id: "${mod.className}:game_flow_and_timing"
title: "${mod.className}: Spin Lifecycle Flow & Execution Timing"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "timing", "lifecycle", "spin_loop"])}
---

# ${mod.className}: Spin Lifecycle Flow & Execution Timing

## 1. Execution Timeline in the Spin Loop

\`${mod.className}\` executes in synchronization with the standard Slot Spin Lifecycle:

\`\`\`text
┌─────────────────────────────────────────────────────────────┐
│ 1. INIT & SCENE MOUNT                                       │
│    onLoad() ➔ applyInjections() ➔ onLoadExtend()            │
├─────────────────────────────────────────────────────────────┤
│ 2. SPIN START                                               │
│    Player triggers spin ➔ State transitions to ACTIVE       │
├─────────────────────────────────────────────────────────────┤
│ 3. RESULT PRESENTATION & MULTIPLIER                         │
│    Server packet arrives ➔ Visual updates & Animations      │
├─────────────────────────────────────────────────────────────┤
│ 4. ROUND SETTLEMENT & RESPIN CASCADE                        │
│    Win evaluations complete ➔ Session stores updated        │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. Phase Execution Matrix

| Lifecycle Phase | Trigger Event | Method Invoked | Expected Behavior |
| :--- | :--- | :--- | :--- |
| **Initialization** | Scene Deserialization | \`onLoadExtend()\` | Binds injected singletons and sets up event listeners. |
| **Spin Trigger** | \`SPIN_START\` | \`resetAllEffectAndTasks()\` | Resets active animations and prepares for incoming round. |
| **Teardown** | Scene Unload | \`onDestroy()\` | Unbinds event listeners to prevent memory leaks. |
`;

  // 3. 03_director_writer_integration.md
  const dirWriter = `---
id: "${mod.className}:director_writer_integration"
title: "${mod.className}: Director & Writer Integration Pipeline"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "director", "writer", "scriptexecutor"])}
---

# ${mod.className}: Director & Writer Integration Pipeline

## 1. The 3-Tier Execution Model

In \`cc-common\`, \`${mod.className}\` integrates into the **Writer-Director-Module** pipeline:

\`\`\`text
┌─────────────────────────────────────────────────────────────┐
│ 1. GameModeWriterModule (Normal / Free / Bonus Writer)      │
│    Declares asynchronous action queue for the spin round.   │
├─────────────────────────────────────────────────────────────┤
│ 2. BaseGameDirector / ScriptExecutor                        │
│    Iterates through the script queue, manages step delays,  │
│    and dispatches commands to ${mod.className}.             │
├─────────────────────────────────────────────────────────────┤
│ 3. ${mod.className}                                         │
│    Executes domain logic and resolves returned Promises.    │
└─────────────────────────────────────────────────────────────┘
\`\`\`
`;

  // 4. 04_properties_and_state.md
  const props = `---
id: "${mod.className}:properties_and_state"
title: "${mod.className} Properties & Configuration Schema"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "properties", "config", "state"])}
---

# ${mod.className}: Properties & Configuration Schema

## 1. Cocos Creator Inspector Properties (\`@property\`)

${mod.properties.length > 0 ? `
| Property Name | Data Type | Default Value | Description |
| :--- | :--- | :---: | :--- |
${mod.properties.map(p => `| **\`${p.name}\`** | \`${p.type}\` | \`${p.defaultVal}\` | Inspector property configured in Cocos Creator editor. |`).join('\n')}
` : `*No direct \`@property\` fields declared on this module.*`}

---

## 2. Injected Services (\`@inject\`)

${mod.injections.length > 0 ? `
| Injected Field | Injected Token | Resolved Type | Purpose |
| :--- | :--- | :--- | :--- |
${mod.injections.map(i => `| **\`${i.name}\`** | \`${i.token}\` | \`${i.type}\` | Injected singleton via \`eno.applyInjections()\`. |`).join('\n')}
` : `*No \`@inject\` services declared.*`}
`;

  // 5. 05_methods_and_api.md
  const methods = `---
id: "${mod.className}:methods_and_api"
title: "${mod.className} Methods & API Reference"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "methods", "api", "functions"])}
methods: ${JSON.stringify(methodNames)}
---

# ${mod.className}: Methods & API Reference

${mod.methods.map((m, idx) => `
---

## ${idx + 1}. \`${m.name}(${m.params}): ${m.returnType}\`
* **Purpose**: Executes \`${m.name}\` logic for \`${mod.className}\`.
* **Parameters**:
${m.params ? m.params.split(',').map(p => `  * \`${p.trim()}\`: Input argument.`).join('\n') : '  * None.'}
* **Return Value**: \`${m.returnType}\`
* **Source Implementation**:
\`\`\`typescript
${m.snippet}
\`\`\`
`).join('\n')}
`;

  // 6. 06_events_and_bus_flow.md
  const events = `---
id: "${mod.className}:events_and_bus_flow"
title: "${mod.className}: Event Bus & Communication Dictionary"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "events", "bus", "payload"])}
---

# ${mod.className}: Event Bus & Communication Dictionary

## 1. Subscribed Events (Input Listeners)

${mod.listensToEvents.length > 0 ? `
| Event Name | Bus Scope | Trigger Source | Handler Action |
| :--- | :--- | :--- | :--- |
${mod.listensToEvents.map(e => `| **\`${e}\`** | \`eventManager\` / \`moduleEvent\` | Director / Sister Module | Dispatches internal state update. |`).join('\n')}
` : `*No direct event bus subscriptions.*`}

---

## 2. Published Events (Output Emitters)

${mod.emitsEvents.length > 0 ? `
| Event Name | Bus Scope | Target Subscribers | Purpose |
| :--- | :--- | :--- | :--- |
${mod.emitsEvents.map(e => `| **\`${e}\`** | \`eventManager\` / \`moduleEvent\` | Director / UI Modules | Signals event completion or state change. |`).join('\n')}
` : `*No direct event bus emissions.*`}
`;

  // 7. 07_gotchas_and_pitfalls.md
  const gotchas = `---
id: "${mod.className}:gotchas_and_pitfalls"
title: "${mod.className} Gotchas & Best Practices"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "gotchas", "debugging", "best_practices"])}
---

# ${mod.className}: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Unbinding Event Listeners on Teardown
> [!WARNING]
> **Symptom**: Callback invocations on destroyed Node instances triggering null pointer errors.
> 
> **Root Cause**: Retaining active subscriptions in \`GameEventManager\` or \`eno.Observer\` after scene transitions.
> 
> **Standard Fix**: Always call \`this.eventManager.targetOff(this)\` inside \`onDestroy()\`.

---

## ⚠️ Gotcha 2: Premature Access to Injected Dependencies
> [!CAUTION]
> **Symptom**: \`TypeError: Cannot read property of undefined\` during constructor or early initialization.
> 
> **Standard Fix**: Access \`@inject\` services inside or after \`onLoadExtend()\` to guarantee that \`eno.applyInjections()\` has completed.
`;

  // 8. 08_recipes_and_examples.md
  const recipes = `---
id: "${mod.className}:recipes_and_examples"
title: "${mod.className} Practical Recipes & Subclassing"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "recipes", "examples", "subclassing"])}
---

# ${mod.className}: Practical Recipes & Subclassing

---

## Recipe 1: Subclassing \`${mod.className}\` in Title Game
\`\`\`typescript
import { ${mod.className} } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class Custom${mod.className} extends ${mod.className} {
    override onLoadExtend(): void {
        super.onLoadExtend && super.onLoadExtend();
        // Title-specific initialization logic
    }
}
\`\`\`
`;

  // 9. relations.json
  const relObj = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    nodeId: `Class:${mod.className}`,
    category: mod.category,
    title: `${mod.className} Architecture Node`,
    inheritsFrom: `Class:${mod.inheritsFrom}`,
    manages: mod.properties.filter(p => p.type.includes('Prefab') || p.type.includes('Node')).map(p => p.name),
    usedBy: [{ target: "Class:SlotDirector", relation: "orchestrates" }],
    dependsOn: mod.injections.map(i => `Class:${i.token}`),
    emitsEvents: mod.emitsEvents.map(e => `Event:${e}`),
    listensToEvents: mod.listensToEvents.map(e => `Event:${e}`),
    gotchas: [
      `Gotcha:${mod.className}_Event_Cleanup_Leak`,
      `Gotcha:${mod.className}_Early_Injection_Access`
    ],
    files: {
      overview: `modules/${mod.className}/01_overview.md`,
      game_flow: `modules/${mod.className}/02_game_flow_and_timing.md`,
      director_writer: `modules/${mod.className}/03_director_writer_integration.md`,
      properties: `modules/${mod.className}/04_properties_and_state.md`,
      methods: `modules/${mod.className}/05_methods_and_api.md`,
      events: `modules/${mod.className}/06_events_and_bus_flow.md`,
      gotchas: `modules/${mod.className}/07_gotchas_and_pitfalls.md`,
      recipes: `modules/${mod.className}/08_recipes_and_examples.md`
    }
  };

  fs.writeFileSync(path.join(modDir, '01_overview.md'), overview.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '02_game_flow_and_timing.md'), gameFlow.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '03_director_writer_integration.md'), dirWriter.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '04_properties_and_state.md'), props.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '05_methods_and_api.md'), methods.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '06_events_and_bus_flow.md'), events.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '07_gotchas_and_pitfalls.md'), gotchas.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '08_recipes_and_examples.md'), recipes.trim() + '\n');
  fs.writeFileSync(path.join(modDir, 'relations.json'), JSON.stringify(relObj, null, 2) + '\n');

  console.log(`✅ [8-Node Architecture] Generated: ${mod.className} (${mod.methods.length} methods, ${mod.properties.length} props)`);
}

function runFull8NodePipeline(targetModule = null) {
  console.log('🚀 Running 8-Node Deep-Dive Knowledge Pipeline across SDK...');
  const files = findTsFiles(SDK_ROOT);
  console.log(`Found ${files.length} TypeScript files.`);

  let count = 0;
  for (const file of files) {
    const analysis = analyzeSourceCode(file);
    if (!analysis) continue;

    if (targetModule && analysis.className.toLowerCase() !== targetModule.toLowerCase()) {
      continue;
    }

    buildDeep8NodeDocs(analysis);
    count++;
  }

  console.log(`\n🎉 Completed 8-Node Knowledge Generation for ${count} modules!`);
}

const args = process.argv.slice(2);
const target = args.find((arg, idx) => args[idx - 1] === '--module') || null;
runFull8NodePipeline(target);
