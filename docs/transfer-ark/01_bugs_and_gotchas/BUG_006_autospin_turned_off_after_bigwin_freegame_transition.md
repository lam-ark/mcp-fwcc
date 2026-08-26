---
id: "transfer-ark:bugfix:autospin_turned_off_after_bigwin_freegame_transition"
title: "Fix Auto Spin Unexpectedly Disabled After Big Win + Free Game Transition"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["NormalGameDirectorModule", "SlotButtonNormal", "GameModeDirectorModule", "IntroFreeGameModule"]
tags: ["auto_spin", "big_win", "free_game", "transition", "spin_button", "interactable", "isSwitchingMode"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# BUG-006: Fix Auto Spin Unexpectedly Disabled After Big Win + Free Game Transition

---

## 1. 📌 Problem Overview
- **Symptom**: While playing in Auto Spin mode, when a spin triggers both a **Big Win** and **Free Game**, the player was able to click the Auto Spin button right after the Big Win animation finished (during the transition into Free Game). Clicking the button caused Auto Spin to be turned off, disrupting the player's auto-play session upon returning to base game.
- **Secondary Gotcha**: When returning from Free Spins to Normal Game, if the spin button's interaction state is not cleanly restored in `_beforeSpinStart()`, the user would be unable to click the button to cancel Auto Spin during subsequent spins.

---

## 2. 🔍 Root Cause Analysis
1. In `cc-common`, `UIManagerData.isSwitchingMode` only flips to `true` when `SWITCH_GAME_MODE` executes inside `enterGameMode(FREE_GAME)`.
2. During the interim window between Big Win dismissal (`WinEffectModule.exit()`) and the Free Game cutscene transition (`_showTransitionFreeGame`), `isSwitchingMode` is still `false`.
3. The Normal Spin button remained fully interactive (`cc.Button.interactable = true`), allowing player taps to emit `NORMAL_SPIN_CLICKED` which cancelled Auto Spin.
4. Directly modifying internal event listeners or `SlotButtonNormal._isSwitchingMode` can desynchronize the button lifecycle. Only `cc.Button.interactable` should be toggled, and it must be re-enabled upon starting new spins.

---

## 3. 🛠️ Implementation & Override Solution

Adhering to the **Zero-Code Modification on `cc-common`** principle, lock `cc.Button.interactable` during mode transitions in `NormalGameDirectorModule9666.ts`:

```typescript
@ccclass
export class NormalGameDirectorModule9666 extends NormalGameDirectorModule {

    enter(): void {
        super.enter();
        if (!this.dataStore.playSession.isResume) {
            this.eventManager.emit('RESET_MULTIPLIER', false);
        }
        this._enableNormalSpinButton();
    }

    override async _beforeSpinStart(): Promise<void> {
        this._enableNormalSpinButton();
        return super._beforeSpinStart();
    }

    override _showResultEntry(): Promise<void> {
        const nextGameMode = this.dataStore.getNextGameMode();
        if (nextGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
            this._disableNormalSpinButton();
        }
        return super._showResultEntry();
    }

    override async _showTransitionFreeGame(): Promise<void> {
        this._disableNormalSpinButton();
        this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
        this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);
        return super._showTransitionFreeGame();
    }

    override async _showTransitionFreeGameOption(): Promise<void> {
        this._disableNormalSpinButton();
        this.eventManager.emit('ON_HIDE_PAYLINE_INFO', true);
        this.eventManager.emit('PLAY_MC_STATE', SpineStateMc9666.TransitionFreespin);
        return super._showTransitionFreeGameOption();
    }

    protected _disableNormalSpinButton(): void {
        if (this.slotButton) {
            const buttons = this.slotButton.getComponentsInChildren(cc.Button);
            buttons.forEach((btn: cc.Button) => {
                btn.interactable = false;
            });
        }
    }

    protected _enableNormalSpinButton(): void {
        if (this.slotButton) {
            const buttons = this.slotButton.getComponentsInChildren(cc.Button);
            buttons.forEach((btn: cc.Button) => {
                btn.interactable = true;
            });
            const slotButtonComp: any = this.slotButton.getComponent('SlotButtonNormal');
            if (slotButtonComp) {
                slotButtonComp._isSwitchingMode = false;
            }
        }
    }
}
```

---

## 4. ⚠️ Gotchas & Edge Cases
1. **Clean Re-Enabling in `_beforeSpinStart()`**:
   - In addition to `enter()`, `_enableNormalSpinButton()` **must** be called inside `_beforeSpinStart()`. This guarantees that every new normal/auto spin starts with an interactive button, allowing the player to tap to cancel Auto Spin at will.
2. **Avoid Corrupting Event Listeners**:
   - Do NOT manually call `removeEventListeners()` or `addEventListeners()` on `SlotButtonNormal` component, as this desyncs the engine's internal touch dispatching. Use `btn.interactable = false` on `cc.Button` to natively suppress touch dispatch.

---

## 5. 🔗 Codebase References
- `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`
- `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonNormal.ts`
- `assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts`
