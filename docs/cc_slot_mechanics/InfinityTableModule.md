# InfinityTableModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`InfinityTableModule`** extends `SlotTableModule`

## Key Methods
- `registerEvents(): void`
- `syncTable(): void`
- `startSpin(): void`
- `startRespin(): void`
- `stopRespin(): Promise<void>`
- `createExtendedReel(): void`
- `spinExtendedReel(): void`
- `resetExtendedReels(): void`
- `fastStop(): void`
- `onExtendedReelStop(): void`
- `extendTableFormat(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { IReelComponent, SlotTableModule, TableModuleEvents, TableSpinState } from '../../../cc-slot-module/SlotModuleExport';
import { InfinityReelModule } from './InfinityReelModule';
import { InfinityTableConfig } from './InfinityTableConfig';
const { ccclass } = _decorator;

enum InfinityTableSpinState {
	READY,
    CAN_F2R,
    STOP_RESPIN,
}
@ccclass
export class InfinityTableModule extends SlotTableModule {
    protected currentReelExtended: number = 0;
    protected tweenExtendedTable: any = null;
    protected respinState: InfinityTableSpinState = InfinityTableSpinState.READY;

    protected extendedReels: (cc.Component & IReelComponent)[] = [];

    protected registerEvents(): void {
        super.registerEvents();
        if (this.moduleEvent) {
            this.moduleEvent.on("TABLE_START_RESPIN", this.startRespin, this);
		    this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespin, this);
        }
    }

    //TODO: need to override method syncTable for state resume
    syncTable(matrix?: string[][], gameMode?: number): void {
        super.syncTable(matrix, gameMode);

        this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
        //TODO: need to check the resume matrix to add more reels
        const mx = this._slotTableData.dataStore.playSession.matrix;
        if (!mx) {
            return;
        }
        
        const totalRows = this.config.TABLE_FORMAT[0];
        const totalExtendedReels = Math.floor(mx.length / totalRows) - this.TOTAL_COLS;
        
        if (totalExtendedReels > 0) {
            const tablePosition = this.table.position.clone();
            this.table.setPosition(new cc.Vec2(tablePosition.x - this.SYMBOL_WIDTH * totalExtendedReels, tablePosition.y));
            
            for (let i = 0; i < totalExtendedReels; i++) {
                this.currentReelExtended++;
                this.createExtendedReel();

                const reelComponent = this.extendedReels[this.extendedReels.length - 1];
                reelComponent.node.active = true;

                const reelData = [...mx[this.TOTAL_COLS + i]];
                reelComponent.resumeReel(reelData);
            }
        }
	}

    startSpin(): void {
        //TODO: need to override startSpin with action reset table position
        if (this.currentReelExtended > 0) {
            if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
                //reset extends reel
                this.resetExtendedReels();
    
                this.tweenExtendedTable && this.tweenExtendedTable.stop();
                this.tweenExtendedTable = tween(this.table)
                                        .to(0.2, { position: new cc.Vec2(0, 0) })
                                        .call(() => {
                                            //super.startSpin();
                                        })
                                        .start();
            }
            
        } 
        super.startSpin();
	}

    public startRespin(matrix: string[][]): void {
        this.currentReelExtended++;
        this.tweenExtendedTable && this.tweenExtendedTable.stop();

        this.respinState = InfinityTableSpinState.READY;

        let pos = this.table.position.clone();
        this.createExtendedReel();
        this.tweenExtendedTable = tween(this.table)
                                    .to(0.2, { position: new cc.Vec2(pos.x - this.SYMBOL_WIDTH, pos.y) })
                                    .call(() => {
                                        this.spinExtendedReel();
                                    })
                                    .start();
    }

    public stopRespin(matrix: string[][]): Promise<void> {
        this._matrix = matrix || this._slotTableData.getMatrix();
        const index: number = this._matrix.length - 1;
        const reelData = [...this._matrix[index]];
        
        const lastReelIndex = this.extendedReels.length - 1;
		(this.extendedReels[lastReelIndex] as InfinityReelModule).showExtendedResult(reelData, this.onExtendedReelStop.bind(this), this.onReelPreStop.bind(this));
        this.respinState = InfinityTableSpinState.CAN_F2R;

        this.scheduleOnce(() => {
            this.respinState = InfinityTableSpinState.STOP_RESPIN;
            this._tableStopCB && this._tableStopCB();
            this._tableStopCB = null;
        }, (this.config as InfinityTableConfig).EXTENDE_REEL_DELAY_STOP);

        return new Promise((resolve) => {
			this._tableStopCB = resolve;
		});
    }

    protected createExtendedReel(): void {
        const col = this.TOTAL_COLS - 1 + this.currentReelExtended;
		const reelNode = this.createReelNode(col);
		
        const reelComponent = reelNode.getComponent(InfinityReelModule);
		reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager });
        reelComponent.updateMode(this.currentMode);
		this.extendedReels.push(reelComponent);
        
        reelNode.active = false;

        this.extendTableFormat();
    }

    protected spinExtendedReel(): void {
		const index: number = this.extendedReels.length - 1;
        (this.extendedReels[index] as InfinityReelModule).runExtendedReelSpin();	
    }

    protected resetExtendedReels(): void {
        const config = this._slotTableData.getComponent(InfinityTableConfig);
        let hasChanged = false;
        while (this.extendedReels.length) {
            const extendedReel = this.extendedReels.pop();
            extendedReel.node.removeFromParent();
            extendedReel.node = null;

            // Reset config format
			config.TABLE_FORMAT.pop();
			config.RANDOM_SYMBOLS_CODE.pop();
			config.SYMBOL_INDEXES.pop();
            hasChanged = true;
        }

        if (hasChanged) {
            this.moduleEvent.emit('TABLE_FORMAT_CHANGED', {
                tableFormat: config.TABLE_FORMAT,
                symbolIndexes: config.SYMBOL_INDEXES,
            });
        }

        this.extendedReels = [];
        this.currentReelExtended = 0;
    }

    fastStop(): void {
        if (this.respinState === InfinityTableSpinState.CAN_F2R && this.currentReelExtended > 0) {
            this.extendedReels.forEach((reelComponent) => {
                reelComponent.fastStop();
            });
        }
		super.fastStop();
	}

	protected onExtendedReelStop(reelIndex: number): void {
		this.onReelStopExtend(reelIndex);
		if (this.moduleEvent) {
			this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.extendedReels[this.currentReelExtended - 1].getResultSymbols());
		}
		this.reelCount++;
        this.onChangeState(TableSpinState.STOPPED);
	}

    protected extendTableFormat(): void {
        const config = this._slotTableData.getComponent(InfinityTableConfig);
		const lastEl = config.TABLE_FORMAT[config.TABLE_FORMAT.length - 1];
		config.TABLE_FORMAT.push(lastEl);

		const latestRandomSymbolCode = config.RANDOM_SYMBOLS_CODE[config.RANDOM_SYMBOLS_CODE.length - 1];
		config.RANDOM_SYMBOLS_CODE.push(latestRandomSymbolCode.map(symbol => symbol));

		const latestSymbolIndexes = config.SYMBOL_INDEXES[config.SYMBOL_INDEXES.length - 1];
		config.SYMBOL_INDEXES.push(latestSymbolIndexes.map(index => index + lastEl));

        this.moduleEvent.emit('TABLE_FORMAT_CHANGED', {
            tableFormat: config.TABLE_FORMAT,
            symbolIndexes: config.SYMBOL_INDEXES,
        });
    }
}
```
