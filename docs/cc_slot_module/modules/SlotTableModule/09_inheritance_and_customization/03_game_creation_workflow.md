---
id: "cc_slot_module:SlotTableModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring Slot Table & Reels"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring Slot Table & Reels

Follow this 4-step checklist when configuring the Slot Table:

---

## Step 1: Create Reel Prefab
Create a Prefab containing `SlotReelModule`, a `cc.Mask` component, and symbol slot anchor nodes.

---

## Step 2: Mount `SlotTableModule` & Peer Components
Attach `SlotTableModule`, `TableModuleConfig`, `SlotTableData`, and `SlotSymbolManager` to `Canvas/Director/GameMode/BoardG/Table`.

---

## Step 3: Configure Table Geometry in `TableModuleConfig`
Define `TABLE_FORMAT` (e.g. `[3, 3, 3, 3, 3]`), `SYMBOL_WIDTH`, `SYMBOL_HEIGHT`, and easing curves.

---

## Step 4: Validate Matrix Spinning & Stopping
1. Trigger Spin ➔ Verify reels scroll at configured speeds.
2. Stop Spin ➔ Verify columns decelerate sequentially and Promise resolves on final reel stop.
3. Test Fast-Stop ➔ Verify screen tap snaps reels to final positions immediately.
