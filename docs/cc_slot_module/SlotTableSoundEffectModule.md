# SlotTableSoundEffectModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableSoundEffectModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotTableSoundEffectModule`** extends `SlotBaseModule`

## CC Properties
- `sfxScatterIds`
- `sfxBonusIds`
- `sfxJackpotIds`

## Key Methods
- `onLoadExtend(): void`
- `onReelStartSound(): void`
- `onReelStopSound(): void`
- `playSfxReelStop(): void`
- `playSfxSpecialSymbol(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../../../Core/SlotBaseModule';
import { TableModuleConfig } from './TableModuleConfig';
const { ccclass, property } = _decorator;

@ccclass
export class SlotTableSoundEffectModule extends SlotBaseModule {
    @property
    sfxReelStopId: string = "REEL_STOP";
    @property({type: [cc.String]})
    sfxScatterIds: string[] = ["SCATTER_1", "SCATTER_2", "SCATTER_3", "SCATTER_4", "SCATTER_5"];
    @property({type: [cc.String]})
    sfxBonusIds: string[] = ["BONUS_1", "BONUS_2", "BONUS_3", "BONUS_4", "BONUS_5"];
    @property({type: [cc.String]})
    sfxJackpotIds: string[] = ["JACKPOT_1", "JACKPOT_2", "JACKPOT_3", "JACKPOT_4", "JACKPOT_5"];

    countBonus: number = 0;
    countScatter: number = 0;
    countJackpot: number = 0;

    tableConfig: TableModuleConfig;

    onLoadExtend(): void {
        this.node.on('REEL_START_SOUND', this.onReelStartSound, this);
        this.node.on('REEL_STOP_SOUND', this.onReelStopSound, this);
        this.tableConfig = this.getComponent(TableModuleConfig);
    }

    onReelStartSound(): void {
        this.countBonus = 0;
        this.countScatter = 0;
        this.countJackpot = 0;
    }

    onReelStopSound(data: any): void {
        const { reelIndex, context, matrix } = data;
        const symbols = matrix[reelIndex];

        let hasSpecialBonus = false;
        let hasSpecialScatter = false;
        let hasSpecialJackpot = false;

        symbols.forEach(symbol => {
            switch (symbol) {
                case this.tableConfig.JACKPOT_SYMBOL:
                    this.countJackpot++;
                    hasSpecialJackpot = true;
                    break;
                case this.tableConfig.BONUS_SYMBOL:
                    this.countBonus++;
                    hasSpecialBonus = true;
                    break;
                case this.tableConfig.SCATTER_SYMBOL:
                    this.countScatter++;
                    hasSpecialScatter = true;
                    break;
            }
        });

        const hasSpecialSymbol = hasSpecialBonus || hasSpecialScatter || hasSpecialJackpot;

        const isFastToResult = context.isFastToResult();
        const isTurbo = context.currentMode.isTurbo;
        if (isFastToResult || isTurbo) {
            if (reelIndex === context.reels.length - 1) {
                this.playSfxReelStop();
            }
        } else if (hasSpecialSymbol) {
            this.playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot });
        } else {
            this.playSfxReelStop();
        }

    }

    playSfxReelStop(): void {
        this.soundPlayer.playSfx(this.sfxReelStopId);
    }

    playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot }): void {
        if (hasSpecialJackpot) {
            this.soundPlayer.playSfx(this.sfxJackpotIds[this.countJackpot - 1]);
        } else if (hasSpecialBonus) {
            this.soundPlayer.playSfx(this.sfxBonusIds[this.countBonus - 1]);
        } else if (hasSpecialScatter) {
            this.soundPlayer.playSfx(this.sfxScatterIds[this.countScatter - 1]);
        }
    }
}


```
