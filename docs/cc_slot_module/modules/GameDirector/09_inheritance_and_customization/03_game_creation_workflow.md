---
id: "cc_slot_module:GameDirector:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring the Master GameDirector"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring the Master GameDirector

Follow this 4-step checklist when setting up the master `GameDirector`:

---

## Step 1: Attach `GameDirector` to `Canvas/Director`
Open `g[GameId]L.fire` and attach `GameDirector` to the `Canvas/Director` node.

---

## Step 2: Configure `gameModes` Array in Inspector
Add elements for:
1. `NORMAL_GAME` ➔ Drag `Canvas/Director/GameMode/NormalGame`.
2. `FREE_GAME` ➔ Drag `Canvas/Director/GameMode/FreeGame`.
3. `BONUS_GAME` ➔ Drag `Canvas/Director/GameMode/BonusGame`.

---

## Step 3: Verify Game Mode Nodes Implement `BaseGameMode`
Ensure all mode container nodes have scripts extending `BaseGameMode` or `GameModeDirectorModule`.

---

## Step 4: Validate Mode Stack Switching
1. Boot game ➔ Verify Normal Game activates.
2. Trigger Free Game ➔ Verify Normal Game node deactivates and Free Game enters.
3. Finish Free Game ➔ Verify Normal Game node reactivates and calls `onBackToGameMode()`.
