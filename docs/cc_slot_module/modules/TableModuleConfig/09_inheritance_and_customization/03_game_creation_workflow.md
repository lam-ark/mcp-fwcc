---
id: "cc_slot_module:TableModuleConfig:customization:game_creation_workflow"
title: "Game Creation Workflow: TableModuleConfig Setup"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: TableModuleConfig Setup

Follow this 4-step checklist:

---

## Step 1: Create `TableModuleConfig[GameId].ts`
Inherit from `TableModuleConfig` and configure `TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT`.

---

## Step 2: Mount to Scene Table Node
Attach `TableModuleConfig[GameId]` to `Canvas/Director/GameMode/BoardG/Table`.

---

## Step 3: Populate Special Symbol Constants
Assign `SCATTER_SYMBOL`, `WILD_SYMBOL`, `BONUS_SYMBOL` matching paytable IDs.

---

## Step 4: Validate Speed Profiles & Indexes
Verify `SYMBOL_INDEXES` output against expected matrix coordinate numbers.
