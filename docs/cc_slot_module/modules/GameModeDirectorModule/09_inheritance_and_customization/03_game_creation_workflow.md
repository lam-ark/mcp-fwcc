---
id: "cc_slot_module:GameModeDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Setting Up Game Mode Containers"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Setting Up Game Mode Containers

Follow this 5-step checklist when setting up a game mode in a new slot title:

---

## Step 1: Create Game Mode Node in Scene
Under `Canvas/Director/GameMode`:
1. Create node `[ModeName]` (e.g. `NormalGame` or `FreeGame`).
2. Attach `[ModeName]DirectorModule` and `[ModeName]WriterModule`.

---

## Step 2: Configure Inspector Properties
1. Set `gameMode` property to target enum (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`).
2. Drag child/sibling nodes into `moduleList` (`BoardG`, `PaylineModule`, `WinEffectModule`).

---

## Step 3: Wire Director and Writer on Node
In the mode director's `onExtendedLoad()`:
```typescript
onExtendedLoad(): void {
    super.onExtendedLoad();
    this.node["director"] = this;
    this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
    this.init();
}
```

---

## Step 4: Map Action Commands on Writer
Define all declarative steps required for normal spins or free spins on the companion writer.

---

## Step 5: Test Game Mode Transitions
1. Test regular mode entry and exit transitions.
2. Test reloading the page in the middle of a Free Game ➔ Verify `transitionToGameModeWhenResume()` bypasses cutscenes and loads the active session instantly.
