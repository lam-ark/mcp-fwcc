---
id: "cc_slot_module:FreeOptionDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring Free Spins Volatility Options"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring Free Spins Volatility Options

Follow this 4-step checklist when setting up Free Spins Volatility selection:

---

## Step 1: Create Option Nodes
Under `Canvas/Director/GameMode/FreeOption/OptionsContainer`, create buttons for each option.

---

## Step 2: Assign `options` Array in Inspector
On `FreeOptionDirectorModule`, add elements to `options`:
* `optionId`: `"1"` ➔ Drag `Option_1` (e.g. 15 Spins / 2x Multiplier)
* `optionId`: `"2"` ➔ Drag `Option_2` (e.g. 10 Spins / 5x Multiplier)
* `optionId`: `"3"` ➔ Drag `Option_3` (e.g. 5 Spins / 10x Multiplier)

---

## Step 3: Wire Click Events in Editor
Bind `cc.Button` click event to `FreeOptionDirectorModule.optionClick`.

---

## Step 4: Validate Selection & Timeout
1. Trigger Free Option ➔ Verify buttons enable and timer counts down.
2. Click button ➔ Verify buttons lock and backend request sends.
3. Test timeout ➔ Verify auto-select triggers at 0s.
