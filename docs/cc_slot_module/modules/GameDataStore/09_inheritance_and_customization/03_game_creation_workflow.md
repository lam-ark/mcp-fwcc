---
id: "cc_slot_module:GameDataStore:customization:game_creation_workflow"
title: "Game Creation Workflow for Custom GameDataStore"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "workflow", "game_creation", "checklist"]
---

# 🚀 Game Creation Workflow for Custom GameDataStore

Follow this 5-step checklist when integrating a customized `GameDataStore` into a new slot game:

---

## Step 1: Create the Subclass File
Create your subclass in `scripts/Core/GameDataStore[GameId].ts` (e.g. `GameDataStore9666.ts`):
```typescript
@ccclass("GameDataStore9666")
export class GameDataStore9666 extends GameDataStore {
    parseDataPS(data: any): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }
}
```

---

## Step 2: Mount to Scene Graph on `Canvas/Director`
1. Open your game scene (e.g. `g9666L.fire`).
2. Select the `Canvas/Director` node in the Cocos Creator hierarchy.
3. Remove or replace the default `GameDataStore` component with your `GameDataStore9666` component.

---

## Step 3: Define Backend Shorthand Key Mapping
Identify abbreviated keys in backend JSON responses and map them:
```typescript
mapDataPS(data: any): any {
    return this.mapNewKeys(data, {
        "pMul": "previousMultiplier",
        "pMulF": "previousMultiplierFreeGame",
        "mulF": "freeGameMultiplier",
        "cna": "currentNormalGameWinAmount",
        "cfa": "currentFreeGameWinAmount"
    });
}
```

---

## Step 4: Verify Child `BaseDataModule` Auto-Discovery
Ensure all specialized data modules (e.g. `TableDataModule`, `MultiplierDataModule`) are mounted on child nodes under `Canvas/Director`. `GameDataStore.onLoad()` will automatically discover and register them.

---

## Step 5: Test with Mock Packets
1. Launch game in Console Test mode (`isConsoleTest: true`).
2. Trigger spin test packets and inspect console for `%c data-update`.
3. Verify that remapped properties appear accurately in `this.playSession`.
