---
id: "cc_slot_module:FreeGameDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Free Spins Feature Setup"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Free Spins Feature Setup

Follow this 4-step checklist when constructing the Free Game feature mode:

---

## Step 1: Create Director and Writer Subclasses
Create `scripts/GameMode/FreeGameDirectorModule[GameId].ts` and `FreeGameWriterModule[GameId].ts`.

---

## Step 2: Configure Scene Node `Canvas/Director/GameMode/FreeGame`
1. Attach `FreeGameDirectorModule[GameId]` and `FreeGameWriterModule[GameId]`.
2. Set `gameMode` property to `GAME_MODE_ENUM.FREE_GAME` (`2`).
3. Drag `BoardFree`, `PaylineModule`, `MultiplierModule` into the `moduleList` Inspector array.

---

## Step 3: Wire Retrigger & Scatter Listeners
In `onLoadExtend()`:
```typescript
onLoadExtend(): void {
    super.onLoadExtend();
    this.eventManager.on('ADD_FREE_SPIN_TIMES', this.onAddFreeSpinTimes, this);
}
```

---

## Step 4: Validate Automated Spin Loop & Total Win
1. Trigger Free Spins ➔ Verify counter displays initial count.
2. Confirm each round decrements the count automatically.
3. On round 0 ➔ Verify `TOTAL_WIN` cutscene displays total earnings and exits back to Normal Game.
