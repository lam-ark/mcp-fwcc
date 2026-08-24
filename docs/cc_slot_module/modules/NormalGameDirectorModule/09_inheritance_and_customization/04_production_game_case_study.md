---
id: "cc_slot_module:NormalGameDirectorModule:customization:production_game_case_study"
title: "Production Case Study: NormalGameDirectorModule9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code", "megaways"]
---

# 📖 Production Case Study: NormalGameDirectorModule9666 (Red Cliff Slot)

## 1. Context & Custom Requirements

In **Red Cliff (`g9666L`)**, the Base Game includes advanced slot features:
* **Scatter Symbol Collection**: When scatter symbols hit, they must be gathered into a collection meter (`COLLECT_SCATTER`) simultaneously with the cascade drop.
* **Wild Multiplier Aggregation**: Sticky and stacked wilds contribute to progressive round multipliers (`COLLECT_WILD_MULTIPLIER`).
* **Megaways Reset**: Before each new spin, the top reel megaway format must reset (`RESET_MEGAWAY`).

---

## 2. Full Production Implementation

```typescript
const { _decorator } = cc;
import { NormalGameDirectorModule, SlotSymbolManager } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
import { SpineStateMc9666 } from '../Gui/SpineMcStateController9666';
import { COMMIT_RESPIN_WIN_AMOUNT, FADE_OUT_RESPIN_WIN_AMOUNT } from '../Gui/WinAmountModule9666';
const { ccclass } = _decorator;

@ccclass
export class NormalGameDirectorModule9666 extends NormalGameDirectorModule {
    protected slotSymbolManager: SlotSymbolManager = null;

    enter(): void {
        super.enter();
        if (!this.dataStore.playSession.isResume) {
            this.eventManager.emit('RESET_MULTIPLIER', false);
        }
    }

    onLoadExtend(): void {
        super.onLoadExtend();
        this.slotSymbolManager = this.getSlotSymbolManager();
    }

    _collectWildMultiplier(): Promise<void> {
        return this.eventManager.emit("COLLECT_WILD_MULTIPLIER", this.slotSymbolManager);
    }

    _collectScatter(): Promise<void> {
        const scatterCollectData = this.getScatterCollectData();
        return this.eventManager.emit('COLLECT_SCATTER', scatterCollectData);
    }

    // Runs concurrently with TABLE_START_RESPIN so scatter collects as symbols vanish
    override async _startRespinningTable(data: any): Promise<void> {
        await Promise.all([
            this.moduleEvent.emit("TABLE_START_RESPIN", data),
            this._collectScatter(),
        ]);
    }

    override async _startSpinningTable(): Promise<void> {
        await this.moduleEvent.emit("RESET_MEGAWAY");
        return super._startSpinningTable();
    }

    override async _showTransitionFreeGame(): Promise<void> {
        this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
        this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);
        return super._showTransitionFreeGame();
    }
}
```

---

## 3. Key Architectural Takeaways

1. **Concurrent Step Execution**: `Promise.all([ this.moduleEvent.emit("TABLE_START_RESPIN"), this._collectScatter() ])` synchronizes visual collection with reel symbol clearing.
2. **Event Manager Decoupling**: Visual controllers like `SpineStateMc9666` and `WinAmountModule9666` communicate through event bus topics (`PLAY_MC_STATE`, `FADE_OUT_RESPIN_WIN_AMOUNT`), keeping the director clean and maintainable.
