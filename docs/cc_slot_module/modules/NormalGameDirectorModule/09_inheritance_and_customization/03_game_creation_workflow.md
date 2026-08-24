---
id: "cc_slot_module:NormalGameDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Base Game Director Setup"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Base Game Director Setup

Follow this 4-step checklist when setting up the Base Game director:

---

## Step 1: Create Custom Director and Writer Subclasses
Create `scripts/GameMode/NormalGameDirectorModule[GameId].ts` and `NormalGameWriterModule[GameId].ts`.

---

## Step 2: Attach to `Canvas/Director/GameMode/NormalGame`
1. Open scene `g[GameId]L.fire`.
2. Attach the customized director and writer components to node `NormalGame`.
3. Drag child components (`BoardG`, `PaylineModule`) into the `moduleList` array.

---

## Step 3: Wire Writer in `onExtendedLoad()`
```typescript
onExtendedLoad(): void {
    super.onExtendedLoad();
    this.node["director"] = this;
    this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
    this.init();
}
```

---

## Step 4: Validate Authentication and Spins
1. Boot game ➔ Verify `onJoinGameSuccess()` logs and unlocks spin button.
2. Trigger spin ➔ Confirm standard `NormalSpinTrigger` ➔ `StartSpinning` ➔ `StopSpinningTable` sequence runs smoothly.
