---
id: "cc_slot_module:BonusGameDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Pick-and-Click Bonus Mode Setup"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Pick-and-Click Bonus Mode Setup

Follow this 4-step checklist when constructing the Bonus Game feature:

---

## Step 1: Create Director & Writer Subclasses
Create `scripts/GameMode/BonusGameDirectorModule[GameId].ts` and `BonusGameWriterModule[GameId].ts`.

---

## Step 2: Configure Scene Node `Canvas/Director/GameMode/BonusGame`
1. Attach `BonusGameDirectorModule[GameId]` and `BonusGameWriterModule[GameId]`.
2. Assign `labelCountDown` to the UI countdown label node.
3. Set `defaultCountDown` (e.g. `15` seconds).
4. Set `gameMode` property to `GAME_MODE_ENUM.BONUS_GAME` (`4`).

---

## Step 3: Wire Chest / Item Click Events
Ensure each interactive chest node emits `CLICK_ITEM` up to the director:
```typescript
this.node.emit("CLICK_ITEM", { itemId: this.chestIndex, isAutoTrigger: false });
```

---

## Step 4: Validate Manual Pick, Timeout & Result
1. Test manual clicking ➔ Verify click blocks UI immediately and reveals prize.
2. Test letting timer expire ➔ Verify `AUTO_PLAY_BONUS_GAME` fires automatically.
3. Test final pick ➔ Verify `_openAllItems` reveals unpicked chests and launches `TOTAL_WIN`.
