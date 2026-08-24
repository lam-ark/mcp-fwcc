---
id: "cc_slot_module:FreeGameDirectorModule:customization:production_game_case_study"
title: "Production Case Study: FreeGameDirectorModule9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: FreeGameDirectorModule9666 (Red Cliff Slot)

## 1. Context & Production Implementation

In **Red Cliff (`g9666L`)**, Free Spins feature re-triggerable extra spins when scatter symbols land:

```typescript
const { _decorator } = cc;
import { FreeGameDirectorModule, SlotSymbolManager, SpinTimesModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class FreeGameDirectorModule9666 extends FreeGameDirectorModule {
    protected slotSymbolManager: SlotSymbolManager = null;

    enter(): void {
        super.enter();
        if (!this.dataStore.playSession.isResume) {
            this.eventManager.emit('RESET_MULTIPLIER', true);
            this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
        }
    }

    onLoadExtend(): void {
        super.onLoadExtend();
        this.slotSymbolManager = this.getSlotSymbolManager();
        this.eventManager.on('ADD_FREE_SPIN_TIMES', this.onAddFreeSpinTimes, this);
    }

    // Handles dynamically added spins from scatter collection
    private onAddFreeSpinTimes(count: number): void {
        const spinTimesModule = this.spinTimes?.getComponent(SpinTimesModule);
        const currentShown = spinTimesModule ? (parseInt(spinTimesModule.spinTimesLabel.string, 10) || 0) : this.dataStore.freeSpinTimes;
        const newTotal = currentShown + count;
        this.dataStore.freeSpinTimes = newTotal;
        this._updateSpinTimes(newTotal);
    }

    override async _gameExit(): Promise<void> {
        await super._gameExit();
        this.eventManager.emit('RESET_MULTIPLIER', false);
    }
}
```

---

## 2. Key Architectural Takeaway
By combining `this.eventManager.on('ADD_FREE_SPIN_TIMES')` with `this._updateSpinTimes(newTotal)`, the director seamlessly adapts the UI counter in real-time when bonus scatters hit during free spins.
