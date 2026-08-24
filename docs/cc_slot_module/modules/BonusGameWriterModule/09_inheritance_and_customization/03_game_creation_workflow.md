---
id: "cc_slot_module:BonusGameWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Customizing Bonus Script Pipelines"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Customizing Bonus Script Pipelines

Follow this 4-step checklist when creating custom bonus scripts:

---

## Step 1: Subclass `BonusGameWriterModule`
Create `scripts/GameMode/BonusGameWriterModule[GameId].ts`.

---

## Step 2: Override `makeScriptShowResultEntry`
```typescript
makeScriptShowResultEntry(): any[] {
    let listScript = super.makeScriptShowResultEntry();
    listScript.push({ command: "_playCoinFountainEffect" });
    return listScript;
}
```

---

## Step 3: Implement Director Handlers
On `BonusGameDirectorModule[GameId]`:
```typescript
async _playCoinFountainEffect(): Promise<void> {
    await this.vfxManager.playCoinBurst();
}
```

---

## Step 4: Validate Sequence
Test picking all available items ➔ Verify all custom VFX steps execute before total win summaries appear.
