---
id: "cc_slot_module:GameInit:customization:game_creation_workflow"
title: "Game Creation Workflow: Scene Bootstrap Setup"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "customization", "workflow", "bootstrap", "checklist"]
---

# 🚀 Game Creation Workflow: Scene Bootstrap Setup

Follow this 5-step checklist when setting up the root bootstrap for a new slot game:

---

## Step 1: Verify `Canvas/Director` Scene Structure
Ensure your main scene (`g[GameId]L.fire`) contains the root `Canvas/Director` node.

---

## Step 2: Attach Core Components to `Canvas/Director`
Mount the canonical triplet on `Canvas/Director`:
1. `GameInit` (or `GameInitCustom`)
2. `GameConfig[GameId]` (subclass of `GameConfig`)
3. `GameDataStore[GameId]` (subclass of `GameDataStore`)

---

## Step 3: Verify Child Subsystem Hierarchy
Mount companion singletons on child nodes:
* `Canvas/Director/SlotSound` ➔ `SlotSoundPlayerModule`
* `Canvas/Director/UIManager` ➔ `UIManagerModule`
* `Canvas/Director/GameMode` ➔ `GameModeDirectorModule`

---

## Step 4: Configure Inspector Flags
In the Cocos Creator Inspector on `Canvas/Director`:
* `isConsoleTest`: Set `false` for production, `true` for local spin testing without server.
* `isModuleTest`: Set `false` (only enabled for automated unit tests).

---

## Step 5: Test Bootstrap Sequence
Launch the game and check console output:
1. Verify 9-step `onLoad()` execution completes without errors.
2. Confirm `"login success"` is logged in console after WebSocket handshake.
