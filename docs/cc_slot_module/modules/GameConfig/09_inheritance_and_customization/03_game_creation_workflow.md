---
id: "cc_slot_module:GameConfig:customization:game_creation_workflow"
title: "Game Creation Workflow for Custom GameConfig"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "customization", "workflow", "game_creation", "checklist"]
---

# 🚀 Game Creation Workflow for Custom GameConfig

Follow this 5-step checklist when setting up `GameConfig` for a new game title:

---

## Step 1: Create GameConfig Subclass
Create `scripts/Core/GameConfig[GameId].ts` (e.g. `GameConfig9666.ts`):
```typescript
@ccclass("GameConfig9666")
export class GameConfig9666 extends GameConfig {
    public GAME_ID = "9666";
    public JP_PREFIX_EVENT = "9666_";
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
    public TOTAL_BET_CREDIT: number = 25;
    public TABLE_FORMAT: number[] = [4, 5, 5, 5, 4];
    public SYMBOL_WIDTH: number = 142;
    public SYMBOL_HEIGHT: number = 150;
}
```

---

## Step 2: Replace Component on `Canvas/Director` Node
1. In Cocos Creator Editor, open `g[GameId]L.fire`.
2. Inspect the `Canvas/Director` node.
3. Remove the template `GameConfig` component and attach your new `GameConfig9666` component.

---

## Step 3: Configure Math Model & Multipliers
* If the game is **Ways-to-Win** (AllWays):
  * Set `PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS`.
  * Set `TOTAL_BET_CREDIT` to the base multiplier (e.g. 20 or 25).
* If the game is **Paylines**:
  * Set `PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.LINES`.
  * Set `LINE_NUMBER` to total paylines (e.g. 20, 25, 50).

---

## Step 4: Define Localization Overrides (`EXTEND_GAME_TEXT`)
Map custom feature titles, banner headlines, and dialog alerts for each language:
```typescript
public EXTEND_GAME_TEXT: any = {
    EN: {
        FREE_GAME_TITLE: "FREE SPINS BATTLE",
        TOTAL_WIN: "TOTAL WIN"
    },
    VN: {
        FREE_GAME_TITLE: "ĐẠI CHIẾN VÒNG QUAY MIỄN PHÍ",
        TOTAL_WIN: "TỔNG THẮNG"
    }
};
```

---

## Step 5: Verify in Cocos Editor & Runtime
1. Check that `SlotTableModule` correctly instantiates the number of columns matching `TABLE_FORMAT.length`.
2. Verify that betting steps calculate correctly: `Total Bet = Bet Step * TOTAL_BET_CREDIT`.
