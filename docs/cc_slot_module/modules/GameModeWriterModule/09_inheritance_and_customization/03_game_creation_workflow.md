---
id: "cc_slot_module:GameModeWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Authoring Declarative Action Pipelines"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Authoring Declarative Action Pipelines

Follow this 3-step checklist when authoring declarative action pipelines:

---

## Step 1: Subclass `GameModeWriterModule`
Create `scripts/GameMode/CustomModeWriterModule.ts`.

---

## Step 2: Override or Add `makeScript` Methods
Assemble command objects in the desired chronological execution order:
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_customFeatureEffect", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

---

## Step 3: Implement Command Handlers on Companion Director
On companion director, declare `async _customFeatureEffect(data)` returning a Promise.
