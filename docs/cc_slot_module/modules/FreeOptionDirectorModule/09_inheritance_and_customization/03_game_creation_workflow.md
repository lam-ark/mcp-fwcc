---
id: "cc_slot_module:FreeOptionDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: FreeOptionDirector Setup"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: FreeOptionDirector Setup

Follow this 4-step checklist:

---

## Step 1: Create `FreeOptionDirector[GameId].ts`
Inherit from `FreeOptionDirectorModule`.

---

## Step 2: Configure Option Cards in Cocos Creator
In the Inspector:
1. Populate `options` array with your option card nodes (`optionNode`) and string IDs (`optionId`).
2. Link `countDownText` to the timer label.
3. Set `countdownTime = 15`.

---

## Step 3: Add Localization Key
Ensure `FREE_OPTION_GAME_REMIND` exists in your game's language JSON dictionary.

---

## Step 4: Validate Auto-Trigger & Double-Click Protection
Test clicking rapidly on cards (verify only 1 network packet is emitted) and letting the timer run down to 0 (verify auto-selection fires).
