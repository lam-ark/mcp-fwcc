---
id: "cc_slot_module:FreeGameWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: FreeGameWriter Setup"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: FreeGameWriter Setup

Follow this 4-step checklist:

---

## Step 1: Create Game-Specific Writer
Create `FreeGameWriter[GameId].ts` extending `FreeGameWriterModule`.

---

## Step 2: Attach to Free Game Director
Mount `FreeGameWriter[GameId]` to `Canvas/Director/GameMode/FreeGameDirector`.

---

## Step 3: Configure Retriggers & Multipliers
Override `makeScriptShowResultFinal()` or `makeScriptFreeSpinTrigger()` to insert custom feature steps.

---

## Step 4: Validate Script Flow
Run an automated test spin sequence and verify all commands execute in sequential order through `ScriptExecutor`.
