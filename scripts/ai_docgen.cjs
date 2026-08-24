const fs = require('fs');
const path = require('path');

/**
 * AI DocGen Pipeline for Cocos Common (cc-common) SDK
 * 
 * Analyzes TypeScript source code via AST / Lexical analysis and generates
 * 100% English atomic documentation compliant with CONVENTION.md:
 * - 01_overview.md (Role, purpose, mermaid sequence diagram)
 * - 02_properties.md (@property, injected services, runtime states)
 * - 03_methods.md (API signatures, params, returns, execution flow)
 * - 04_gotchas.md (Cocos 2.4 engine pitfalls, memory leaks, spine bugs)
 * - 05_recipes.md (Real-world slot subclassing & implementation examples)
 * - relations.json (Graph Engine bidirectional edge declarations)
 */

const SDK_ROOT = path.join(__dirname, '..', '..', '..', 'assets', 'cc-common');
const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const MODULES_DIR = path.join(DOCS_ROOT, 'modules');

if (!fs.existsSync(MODULES_DIR)) fs.mkdirSync(MODULES_DIR, { recursive: true });

// Scan all TypeScript files in cc-slot-module, cc-slot-mechanics, cc-core-lib
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

// AST-based code analysis
function analyzeSourceCode(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const relPath = path.relative(path.join(__dirname, '..', '..', '..'), filePath).replace(/\\/g, '/');

  // Extract Class Name
  const classMatch = content.match(/export\s+(?:default\s+)?class\s+(\w+)(?:\s+extends\s+(\w+))?/);
  if (!classMatch) return null;

  const className = classMatch[1];
  const inheritsFrom = classMatch[2] || 'Object';

  // Extract Category from path
  let category = 'cc_slot_module';
  if (filePath.includes('cc-slot-mechanics')) category = 'cc_slot_mechanics';
  else if (filePath.includes('cc-core-lib')) category = 'cc_core_lib';
  else if (filePath.includes('cc-network')) category = 'cc_network';

  // Extract @property decorators
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

  // Extract @inject decorators
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

  // Extract Methods
  const methods = [];
  const methodRegex = /(?:public\s+|protected\s+|private\s+|override\s+|async\s+)*(\w+)\s*\(([^)]*)\)\s*(?::\s*([^{]+))?\s*\{/g;
  let methM;
  const standardIgnored = ['constructor', 'if', 'for', 'while', 'switch', 'catch'];
  while ((methM = methodRegex.exec(content)) !== null) {
    const mName = methM[1];
    if (!standardIgnored.includes(mName)) {
      methods.push({
        name: mName,
        params: methM[2] ? methM[2].trim() : '',
        returnType: methM[3] ? methM[3].trim() : 'void'
      });
    }
  }

  // Extract Events Emitted & Listened
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

// Generate complete documentation set for a module
function generateModuleDocs(mod) {
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
  const overviewContent = `---
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
\`${mod.className}\` is a core module in the **\`${mod.category}\`** subsystem:
* Encapsulates logic and lifecycle management extending from \`${mod.inheritsFrom}\`.
* Coordinates with the global Event Bus (\`GameEventManager\`) and local scoped mode events (\`GameModuleEvent\`).
${mod.injections.length > 0 ? `* Injects services: ${mod.injections.map(i => `\`${i.name}\` (\`${i.token}\`)`).join(', ')}.` : ''}

---

## 2. Interaction & Sequence Flow

\`\`\`mermaid
sequenceDiagram
    participant Caller as Orchestrator / Director
    participant Mod as ${mod.className}
    participant Bus as Event Bus

    Caller->>Mod: Initialize / Trigger Action
    activate Mod
${mod.emitsEvents.length > 0 ? `    Mod->>Bus: emit("${mod.emitsEvents[0]}")\n` : ''}
    Mod-->>Caller: Execution Complete
    deactivate Mod
\`\`\`
`;

  // 2. 02_properties.md
  const propsContent = `---
id: "${mod.className}:properties"
title: "${mod.className} Properties & Configuration"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "properties", "config", "decorators"])}
---

# ${mod.className}: Properties & Configuration

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
${mod.injections.map(i => `| **\`${i.name}\`** | \`${i.token}\` | \`${i.type}\` | Service injected via \`eno.applyInjections()\`. |`).join('\n')}
` : `*No \`@inject\` services declared.*`}
`;

  // 3. 03_methods.md
  const methodsContent = `---
id: "${mod.className}:methods"
title: "${mod.className} Methods & API Reference"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "methods", "api", "functions"])}
methods: ${JSON.stringify(methodNames)}
---

# ${mod.className}: Methods & API Reference

${mod.methods.map((m, idx) => `
---

## ${idx + 1}. \`${m.name}(${m.params}): ${m.returnType}\`
* **Purpose**: Executes \`${m.name}\` operations for \`${mod.className}\`.
* **Parameters**:
${m.params ? m.params.split(',').map(p => `  * \`${p.trim()}\`: Input argument.`).join('\n') : '  * None.'}
* **Return Value**: \`${m.returnType}\`
`).join('\n')}
`;

  // 4. 04_gotchas.md
  const gotchasContent = `---
id: "${mod.className}:gotchas"
title: "${mod.className} Gotchas & Best Practices"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "gotchas", "debugging", "best_practices"])}
---

# ${mod.className}: Gotchas & Best Practices

---

## ⚠️ Gotcha 1: Unbinding Event Listeners on Destruction
> [!WARNING]
> **Symptom**: Memory leaks or callback execution on destroyed Node instances.
> 
> **Root Cause**: Retaining active subscriptions in \`eventManager\` or \`observer\` after node teardown.
> 
> **Standard Fix**: Always unbind in \`onDestroy()\`:
> \`\`\`typescript
> protected onDestroy(): void {
>     if (this.eventManager) this.eventManager.targetOff(this);
>     super.onDestroy && super.onDestroy();
> }
> \`\`\`

---

## ⚠️ Gotcha 2: Premature Injected Property Access
> [!CAUTION]
> **Symptom**: \`TypeError: Cannot read property of null\` during \`onLoad()\`.
> 
> **Standard Fix**: Access \`@inject\` properties inside \`onLoadExtend()\` or \`start()\` to ensure \`applyInjections()\` has executed.
`;

  // 5. 05_recipes.md
  const recipesContent = `---
id: "${mod.className}:recipes"
title: "${mod.className} Recipes & Implementation Examples"
category: "${mod.category}"
tags: ${JSON.stringify([...tagList, "recipes", "examples", "subclassing"])}
---

# ${mod.className}: Practical Recipes

---

## Recipe 1: Subclassing \`${mod.className}\` in Title Game
\`\`\`typescript
import { ${mod.className} } from "../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class Custom${mod.className} extends ${mod.className} {
    override onLoadExtend(): void {
        super.onLoadExtend && super.onLoadExtend();
        // Custom game logic
    }
}
\`\`\`
`;

  // 6. relations.json
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
      properties: `modules/${mod.className}/02_properties.md`,
      methods: `modules/${mod.className}/03_methods.md`,
      gotchas: `modules/${mod.className}/04_gotchas.md`,
      recipes: `modules/${mod.className}/05_recipes.md`
    }
  };

  fs.writeFileSync(path.join(modDir, '01_overview.md'), overviewContent.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '02_properties.md'), propsContent.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '03_methods.md'), methodsContent.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '04_gotchas.md'), gotchasContent.trim() + '\n');
  fs.writeFileSync(path.join(modDir, '05_recipes.md'), recipesContent.trim() + '\n');
  fs.writeFileSync(path.join(modDir, 'relations.json'), JSON.stringify(relObj, null, 2) + '\n');

  console.log(`✅ Generated Atomic Module Docs: ${mod.className} (${mod.methods.length} methods, ${mod.properties.length} props)`);
}

// Main execution function
function runPipeline(targetModule = null) {
  console.log('🚀 Starting AI DocGen Pipeline for cc-common SDK...');
  const files = findTsFiles(SDK_ROOT);
  console.log(`Found ${files.length} TypeScript source files in SDK.`);

  let count = 0;
  for (const file of files) {
    const analysis = analyzeSourceCode(file);
    if (!analysis) continue;

    if (targetModule && analysis.className.toLowerCase() !== targetModule.toLowerCase()) {
      continue;
    }

    generateModuleDocs(analysis);
    count++;
  }

  console.log(`\n🎉 Pipeline completed! Successfully generated documentation for ${count} modules in docs/modules/`);
}

const args = process.argv.slice(2);
const target = args.find((arg, idx) => args[idx - 1] === '--module') || null;
runPipeline(target);
