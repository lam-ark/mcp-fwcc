---
id: "cc_slot_module:FreeGameWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Customizing Free Spin Action Scripts"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Customizing Free Spin Action Scripts

Follow this 4-step checklist when modifying Free Spin action scripts:

---

## Step 1: Subclass `FreeGameWriterModule`
Create `scripts/GameMode/FreeGameWriterModule[GameId].ts`.

---

## Step 2: Add Custom Script Generators
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_collectMultiplierSparks", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

---

## Step 3: Implement Director Step Handlers
On `FreeGameDirectorModule[GameId]`:
```typescript
async _collectMultiplierSparks(data: any): Promise<void> {
    await this.multiplierVFX.playSparks(data.multiplierHits);
}
```

---

## Step 4: Validate Sequence & Exit
Test full Free Game round from trigger to spin 0 ➔ Verify `TOTAL_WIN` cutscene opens and finishes cleanly.
