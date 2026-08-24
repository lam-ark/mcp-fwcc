---
id: "cc_slot_module:FreeGameDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: FreeGameDirector Setup"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: FreeGameDirector Setup

Follow this 4-step checklist:

---

## Step 1: Create `FreeGameDirector[GameId].ts`
Inherit from `FreeGameDirectorModule`. Attach along with `FreeGameWriter[GameId]`.

---

## Step 2: Bind UI Child Modules
Drag `Table`, `Payline`, `SpinTimes` nodes into `moduleList` array in Cocos Inspector.

---

## Step 3: Configure Spin Pacing
Override `delayAutoSpin()` if the game requires Lightning or Turbo Free Spins.

---

## Step 4: Validate Reconnection & Multipliers
Test browser refresh mid-round and verify `freeGameRemain` restores accurately on the HUD badge.
