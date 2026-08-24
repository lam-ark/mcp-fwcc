---
id: "cc_slot_module:GameDirector:recipe:custom_overlay_game_mode"
title: "Recipe: Adding a 4th Custom Mini-Game Mode to GameDirector"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "recipe", "custom_mode", "wheel_mode"]
---

# 🍳 Recipe: Adding a 4th Custom Mini-Game Mode to GameDirector

## 1. Problem Statement
You need to introduce an independent Wheel Feature Game Mode (`GAME_MODE_ENUM.WHEEL_GAME = 8`) that temporarily replaces the Normal Game and restores it upon completion.

---

## 2. Step-by-Step Implementation

### Step 1: Declare New Enum Value
In `SlotEnum.ts`:
```typescript
export enum GAME_MODE_ENUM {
    NORMAL_GAME = 1,
    FREE_GAME = 2,
    BONUS_GAME = 4,
    WHEEL_GAME = 8,
}
```

### Step 2: Create Wheel Scene Node
Create `Canvas/Director/GameMode/WheelGame` with component `WheelGameDirectorModule`.

### Step 3: Register in `GameDirector` Inspector
Add an element to `gameModes` in the Inspector:
* `type`: `8` (WHEEL_GAME)
* `rootNode`: `Canvas/Director/GameMode/WheelGame`

### Step 4: Trigger Transition
When wheel symbols land:
```typescript
this.eventManager.emit(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, GAME_MODE_ENUM.WHEEL_GAME);
```
And on exit:
```typescript
this.eventManager.emit(GameUIEvents.GAME_MODE.EXIT_GAME_MODE);
```
