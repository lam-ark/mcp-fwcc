---
id: "transfer-ark:feature:total_win_celebration:04_implementation_code"
title: "Total Win Celebration - Complete Implementation Code"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule9666", "TotalWinModule"]
tags: ["source_code", "typescript", "implementation", "TotalWinModule9666"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 4. 💻 Complete Source Code Implementation

**Production File**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/TotalWinModule9666.ts`

```typescript
const { _decorator } = cc;
import { TotalWinModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass, property } = _decorator;

enum TotalWinState {
    IDLE = 0,
    COUNTING = 1,
    COUNTING_COMPLETED = 2,
    CLOSING = 3
}

@ccclass
export class TotalWinModule9666 extends TotalWinModule {
    @property(sp.Skeleton)
    totalWinSkeleton: sp.Skeleton = null;

    @property
    animDuration: number = 7.0;

    private _popupState: TotalWinState = TotalWinState.IDLE;
    private _isMoneySlotMoving: boolean = false;
    private _canClickToClose: boolean = false;
    private _targetWinAmount: number = 0;

    private _tweenCounting: cc.Tween = null;
    private _tweenDebounce: cc.Tween = null;
    private _tweenAutoClose: cc.Tween = null;

    onLoadExtend(): void {
        super.onLoadExtend();
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        if (this.totalWinSkeleton && this.totalWinSkeleton.skeletonData) {
            this.totalWinSkeleton.setMix('in', 'loop', 0.2);
            this.totalWinSkeleton.setMix('loop', 'out', 0.2);
            this.totalWinSkeleton.setMix('in', 'out', 0.2);
        }
    }

    enter(): void {
        this.node.stopAllActions();
        this.cleanupTweens();

        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = this.moneyFormatter
                ? this.moneyFormatter.formatMoney(0)
                : "0";
        }

        this._popupState = TotalWinState.COUNTING;
        this._canClickToClose = false;
        this.animDuration = 7.0;
        this._targetWinAmount = this.getTotalWinAmount();

        this.playSoundStart();
        this.playSkeletonAnim();
        this.startCountingMoney();
    }

    private playSkeletonAnim(): void {
        if (!this.totalWinSkeleton || !this.totalWinSkeleton.skeletonData) {
            return;
        }
        this.totalWinSkeleton.node.active = true;
        this.totalWinSkeleton.clearTracks();
        this.totalWinSkeleton.setToSetupPose();
        this.totalWinSkeleton.setAnimation(0, 'in', false);

        this._isMoneySlotMoving = true;
        this.syncMoneyToSlot();

        this.totalWinSkeleton.setCompleteListener((trackEntry: any) => {
            if (trackEntry && trackEntry.animation && trackEntry.animation.name === 'in') {
                this.totalWinSkeleton.setCompleteListener(() => { });
                this._isMoneySlotMoving = false;
                this.syncMoneyToSlot();
                this.totalWinSkeleton.setAnimation(0, 'loop', true);
            }
        });
    }

    private startCountingMoney(): void {
        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.moneyFormatter
                ? this.moneyFormatter.formatMoney(0)
                : "0";
        }

        if (this.moneyTween && this._lbWinAmount) {
            this._tweenCounting = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this._targetWinAmount, {
                onComplete: () => {
                    this._tweenCounting = null;
                    this.finishCounting();
                }
            });
        } else {
            (this.node as any)._moneyProgress = 0;
            this._tweenCounting = cc.tween(this.node)
                .to(this.animDuration, { _moneyProgress: 1 } as any, {
                    progress: (_start: any, _end: any, _current: any, ratio: number) => {
                        const currentVal = Number((this._targetWinAmount * ratio).toFixed(2));
                        if (this._lbWinAmount) {
                            this._lbWinAmount.string = this.moneyFormatter
                                ? this.moneyFormatter.formatMoney(currentVal)
                                : String(currentVal);
                        }
                        return ratio;
                    }
                })
                .call(() => {
                    this.finishCounting();
                })
                .start();
        }
    }

    skip(): void {
        this.onClick();
    }

    public onClick(): void {
        if (this._popupState === TotalWinState.COUNTING) {
            this.playSoundSkip();
            this.skipCounting();
        } else if (this._popupState === TotalWinState.COUNTING_COMPLETED) {
            if (this._canClickToClose) {
                this.closePopup();
            }
        } else if (this._popupState === TotalWinState.CLOSING) {
            this.exit();
        }
    }

    private skipCounting(): void {
        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }
        this.finishCounting();
    }

    private finishCounting(): void {
        if (this._popupState === TotalWinState.COUNTING_COMPLETED || this._popupState === TotalWinState.CLOSING) {
            return;
        }
        this._popupState = TotalWinState.COUNTING_COMPLETED;

        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.moneyFormatter
                ? this.moneyFormatter.formatMoney(this._targetWinAmount)
                : String(this._targetWinAmount);
        }

        if (this.totalWinSkeleton && this.totalWinSkeleton.skeletonData) {
            this._isMoneySlotMoving = false;
            this.syncMoneyToSlot();
            const currentTrack = this.totalWinSkeleton.getCurrent(0);
            if (!currentTrack || currentTrack.animation.name !== 'loop') {
                this.totalWinSkeleton.setAnimation(0, 'loop', true);
            }
        }

        this.playSoundCountingEnd();
        this.playSoundEnd();

        // 1. Debounce 1.0s to prevent accidental tap-through
        this._canClickToClose = false;
        if (this._tweenDebounce) this._tweenDebounce.stop();
        this._tweenDebounce = cc.tween(this.node)
            .delay(1.0)
            .call(() => {
                this._canClickToClose = true;
            })
            .start();

        // 2. Auto-close after 3.0s if untouched
        if (this._tweenAutoClose) this._tweenAutoClose.stop();
        this._tweenAutoClose = cc.tween(this.node)
            .delay(3.0)
            .call(() => {
                this.closePopup();
            })
            .start();
    }

    private closePopup(): void {
        if (this._popupState === TotalWinState.CLOSING) {
            return;
        }
        this._popupState = TotalWinState.CLOSING;

        this.cleanupTweens();

        if (this.totalWinSkeleton && this.totalWinSkeleton.skeletonData) {
            this._isMoneySlotMoving = true;
            this.totalWinSkeleton.setAnimation(0, 'out', false);
            this.totalWinSkeleton.setCompleteListener((trackEntry: any) => {
                if (trackEntry && trackEntry.animation && trackEntry.animation.name === 'out') {
                    this.totalWinSkeleton.setCompleteListener(() => { });
                    this.exit();
                }
            });
        } else {
            this.exit();
        }
    }

    playSoundStart(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playMusic('BGM_TOTAL_WIN', true);
        }
    }

    resumeMainBGM(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playMainBGM();
        }
    }

    update(_dt: number): void {
        if (this._isMoneySlotMoving) {
            this.syncMoneyToSlot();
        }
    }

    syncMoneyToSlot(): void {
        if (!this.totalWinSkeleton || !this.totalWinSkeleton.skeletonData || !this.winAmount || !this.winAmount.parent) {
            return;
        }
        this.totalWinSkeleton.updateWorldTransform();
        const bone = this.totalWinSkeleton.findBone('slot_money');
        if (!bone) {
            return;
        }
        const worldPos = this.totalWinSkeleton.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
        this.winAmount.setPosition(this.winAmount.parent.convertToNodeSpaceAR(worldPos));
    }

    private cleanupTweens(): void {
        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }
        if (this._tweenDebounce) {
            this._tweenDebounce.stop();
            this._tweenDebounce = null;
        }
        if (this._tweenAutoClose) {
            this._tweenAutoClose.stop();
            this._tweenAutoClose = null;
        }
    }

    exit(): void {
        this.cleanupTweens();
        if (this.totalWinSkeleton) {
            this._isMoneySlotMoving = false;
            this.totalWinSkeleton.setCompleteListener(() => { });
            this.totalWinSkeleton.clearTracks();
            this.totalWinSkeleton.node.active = false;
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = "";
        }
        this._popupState = TotalWinState.IDLE;
        this.resumeMainBGM();
        super.exit();
    }

    onDestroy(): void {
        this.cleanupTweens();
        this.node.stopAllActions();
        if (this.node) {
            this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
        }
        super.onDestroy && super.onDestroy();
    }
}
```
