---
id: "transfer-ark:feature:multi_milestone_big_win:05_implementation_code"
title: "Multi-Milestone Big Win - Complete Implementation Code"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule9666", "WinEffectModule"]
tags: ["source_code", "typescript", "implementation", "WinEffectModule9666"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 5. 💻 Complete Source Code Implementation

**Production File**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/WinEffectModule9666.ts`

```typescript
const { _decorator } = cc;
import { WinEffectModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass, property } = _decorator;

export interface IMilestone {
    level: number;
    ratio: number;
    targetAmount: number;
    duration: number;
}

export enum WinPopupState {
    IDLE = 0,
    COUNTING = 1,
    COUNTING_COMPLETED = 2,
    CLOSING = 3
}

@ccclass
export class WinEffectModule9666 extends WinEffectModule {
    @property(sp.Skeleton)
    bigWinSkeleton: sp.Skeleton = null;

    // Milestone ratios: Level 1 (Big >=10x), Level 2 (Mega >=20x), Level 3 (Super Mega >=30x)
    @property([cc.Float])
    milestoneRatios: number[] = [10, 20, 30];

    @property([cc.Float])
    milestoneDurations: number[] = [2.5, 2.5, 2.5];

    private _popupState: WinPopupState = WinPopupState.IDLE;
    private _milestones: IMilestone[] = [];
    private _currentMilestoneIdx: number = -1;
    private _totalWinAmount: number = 0;
    private _currentDisplayAmount: number = 0;
    private _canClickToClose: boolean = false;
    private _isMoneySlotMoving: boolean = false;
    private _lastClickTime: number = 0;

    private _tweenCounting: cc.Tween = null;
    private _tweenDebounce: cc.Tween = null;
    private _tweenAutoClose: cc.Tween = null;

    onLoadExtend(): void {
        super.onLoadExtend();
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        this.initSkeletonMix();
    }

    enter(): void {
        this.node.stopAllActions();
        this.cleanupTweens();

        const isTurboActive = this.gameSettings && this.gameSettings.isTurboActive;
        const isFastToResult = this.gameSettings && this.gameSettings.isFastToResult;

        if (isTurboActive || isFastToResult) {
            this.showFastEffectWin();
            return;
        }

        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = "0";
        }

        this.showEffectWin();
    }

    showFastEffectWin(): void {
        if (this.bigWinSkeleton) {
            this._isMoneySlotMoving = false;
            this.bigWinSkeleton.setCompleteListener(() => { });
            this.bigWinSkeleton.clearTracks();
            this.bigWinSkeleton.node.active = false;
        }
        if (this.overlayNode) {
            this.overlayNode.active = false;
        }
        if (this.winInfo) {
            this.winInfo.active = false;
        }
        super.showFastEffectWin();
    }

    playSfxFastBigWin(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSfx('BIGWIN_END');
        }
    }

    showEffectWin(): void {
        this._isShowNormalEffect = true;
        if (this.winInfo) {
            this.winInfo.active = true;
        }
        if (this.overlayNode) {
            this.overlayNode.active = true;
        }

        this.playSoundStart();
        this.initValue();
        this.startParticle();
        this.startUpdateWinAmount();
    }

    initValue(): void {
        super.initValue();
        this._popupState = WinPopupState.IDLE;
        const totalBet = Number(this.content?.totalBet || 1);
        this.setupMilestones(totalBet);
    }

    private setupMilestones(totalBet: number): void {
        this._milestones = [];
        this._currentMilestoneIdx = -1;
        this._currentDisplayAmount = 0;
        this._canClickToClose = false;
        this._lastClickTime = 0;
        this._totalWinAmount = Number(this.content?.winAmount || 0);

        if (this._lbWinAmount) {
            this._lbWinAmount.string = "0";
        }

        const ratios = (this.gameSettings && this.gameSettings.bigWinConfig && this.gameSettings.bigWinConfig.length > 0)
            ? this.gameSettings.bigWinConfig
            : this.milestoneRatios;

        for (let i = 0; i < ratios.length; i++) {
            const milestoneTarget = totalBet * ratios[i];
            if (this._totalWinAmount >= milestoneTarget) {
                this._milestones.push({
                    level: i,
                    ratio: ratios[i],
                    targetAmount: milestoneTarget,
                    duration: this.milestoneDurations[i] || 2.5
                });
            }
        }

        if (this._milestones.length === 0 || 
            this._milestones[this._milestones.length - 1].targetAmount < this._totalWinAmount) {
            const finalLevel = this._milestones.length > 0 
                ? this._milestones[this._milestones.length - 1].level 
                : 0;
            this._milestones.push({
                level: finalLevel,
                ratio: this._totalWinAmount / totalBet,
                targetAmount: this._totalWinAmount,
                duration: 2.0
            });
        }
    }

    startUpdateWinAmount(): void {
        this.playSoundCounting();
        this._popupState = WinPopupState.COUNTING;
        this.moveToNextMilestone();
    }

    private moveToNextMilestone(): void {
        this._currentMilestoneIdx++;

        if (this._currentMilestoneIdx >= this._milestones.length) {
            this.finishCounting();
            return;
        }

        const milestone = this._milestones[this._currentMilestoneIdx];
        const startVal = this._currentDisplayAmount;
        const endVal = milestone.targetAmount;
        const duration = milestone.duration;

        if (this._currentTitle !== milestone.level || this._currentMilestoneIdx === 0) {
            this._currentTitle = milestone.level;
            this.changeTitle(milestone.level);
        }

        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }

        (this.node as any)._bigWinProgress = 0;
        this._tweenCounting = cc.tween(this.node)
            .to(duration, { _bigWinProgress: 1 } as any, {
                progress: (start: any, end: any, current: any, ratio: number) => {
                    const currentVal = Math.floor(startVal + (endVal - startVal) * ratio);
                    this._currentDisplayAmount = currentVal;
                    this.currentValue = currentVal;
                    if (this._lbWinAmount) {
                        this._lbWinAmount.string = this.moneyFormatter ? this.moneyFormatter.formatMoney(currentVal) : String(currentVal);
                    }
                    return ratio;
                }
            })
            .call(() => {
                this._currentDisplayAmount = endVal;
                this.currentValue = endVal;
                if (this._lbWinAmount) {
                    this._lbWinAmount.string = this.moneyFormatter ? this.moneyFormatter.formatMoney(endVal) : String(endVal);
                }
                this.moveToNextMilestone();
            })
            .start();
    }

    skip(): void {
        this.onClick();
    }

    public onClick(event?: cc.Event.EventTouch): void {
        if (event) {
            event.stopPropagation();
        }
        const now = Date.now();
        if (now - this._lastClickTime < 300) {
            return;
        }
        this._lastClickTime = now;

        if (this._popupState === WinPopupState.COUNTING) {
            this.playSoundSkip();
            this.skipMilestone();
        } else if (this._popupState === WinPopupState.COUNTING_COMPLETED) {
            if (this._canClickToClose) {
                this.closePopup();
            }
        }
    }

    private skipMilestone(): void {
        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }

        const currentMilestone = this._milestones[this._currentMilestoneIdx];
        if (currentMilestone) {
            this._currentDisplayAmount = currentMilestone.targetAmount;
            this.currentValue = this._currentDisplayAmount;
            if (this._lbWinAmount) {
                this._lbWinAmount.string = this.moneyFormatter ? this.moneyFormatter.formatMoney(this._currentDisplayAmount) : String(this._currentDisplayAmount);
            }
            if (this._currentTitle !== currentMilestone.level) {
                this._currentTitle = currentMilestone.level;
                this.changeTitle(currentMilestone.level);
            }
        }

        if (this._currentMilestoneIdx + 1 < this._milestones.length) {
            this.moveToNextMilestone();
        } else {
            this.finishCounting();
        }
    }

    private finishCounting(): void {
        if (this._popupState === WinPopupState.COUNTING_COMPLETED || this._popupState === WinPopupState.CLOSING) {
            return;
        }
        this._popupState = WinPopupState.COUNTING_COMPLETED;
        this._isUpdating = false;
        this._currentDisplayAmount = this._totalWinAmount;
        this.currentValue = this._totalWinAmount;

        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.moneyFormatter ? this.moneyFormatter.formatMoney(this._totalWinAmount) : String(this._totalWinAmount);
        }

        if (this.bigWinSkeleton && this.bigWinSkeleton.skeletonData) {
            const finalLevel = this._currentTitle + 1;
            const loopAnim = `win_${finalLevel}_loop`;
            const currentTrack = this.bigWinSkeleton.getCurrent(0);
            if (!currentTrack || currentTrack.animation.name !== loopAnim) {
                this._isMoneySlotMoving = false;
                this.syncMoneyToSlot();
                this.bigWinSkeleton.setAnimation(0, loopAnim, true);
            }
        }

        this.playSoundCountingEnd();
        this.playSoundEnd();
        this.stopParticle();

        // 1. Debounce 1.0s: Lock click in the first second to prevent accidental dismissal
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
        if (this._popupState === WinPopupState.CLOSING) return;
        this._popupState = WinPopupState.CLOSING;

        this.cleanupTweens();
        this.exit();
    }

    private initSkeletonMix(): void {
        if (!this.bigWinSkeleton || !this.bigWinSkeleton.skeletonData) return;
        this.bigWinSkeleton.setMix('win_1_in', 'win_1_loop', 0.2);
        this.bigWinSkeleton.setMix('win_2_in', 'win_2_loop', 0.2);
        this.bigWinSkeleton.setMix('win_3_in', 'win_3_loop', 0.2);
    }

    playSoundStart(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playMusic('BGM_BIGWIN', true);
        }
    }

    playSoundEnd(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSfx('BIGWIN_END');
        }
    }

    resumeMainBGM(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playMainBGM();
        }
    }

    changeTitle(index: number): void {
        super.changeTitle(index);
        this.playLevelAnim(index);
    }

    playLevelAnim(levelIndex: number): void {
        if (!this.bigWinSkeleton || !this.bigWinSkeleton.skeletonData) {
            return;
        }
        const level = levelIndex + 1;
        const inAnim = `win_${level}_in`;
        const loopAnim = `win_${level}_loop`;

        if (this.soundPlayer) {
            this.soundPlayer.playSfx(`BIGWIN_LEVEL${level}`);
        }

        this.bigWinSkeleton.node.active = true;
        this.bigWinSkeleton.clearTracks();
        this.bigWinSkeleton.setToSetupPose();

        this.bigWinSkeleton.setAnimation(0, inAnim, false);
        this._isMoneySlotMoving = true;
        this.syncMoneyToSlot();

        this.bigWinSkeleton.setCompleteListener((trackEntry: any) => {
            if (trackEntry && trackEntry.animation && trackEntry.animation.name === inAnim) {
                this.bigWinSkeleton.setCompleteListener(() => { });
                this._isMoneySlotMoving = false;
                this.syncMoneyToSlot();
                this.bigWinSkeleton.setAnimation(0, loopAnim, true);
            }
        });
    }

    update(_dt: number): void {
        if (this._isMoneySlotMoving) {
            this.syncMoneyToSlot();
        }
    }

    syncMoneyToSlot(): void {
        if (!this.bigWinSkeleton || !this.bigWinSkeleton.skeletonData || !this.winAmount || !this.winAmount.parent) {
            return;
        }
        this.bigWinSkeleton.updateWorldTransform();
        const bone = this.bigWinSkeleton.findBone('slot_money');
        if (!bone) {
            return;
        }
        const worldPos = this.bigWinSkeleton.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
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
        if (this.bigWinSkeleton) {
            this._isMoneySlotMoving = false;
            this.bigWinSkeleton.setCompleteListener(() => { });
            this.bigWinSkeleton.clearTracks();
            this.bigWinSkeleton.node.active = false;
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.node.active = true;
            this._lbWinAmount.string = "";
        }
        this._popupState = WinPopupState.IDLE;
        if (this._isShowNormalEffect) {
            this.resumeMainBGM();
        }
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
