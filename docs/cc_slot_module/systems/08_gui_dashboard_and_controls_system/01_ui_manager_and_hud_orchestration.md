---
id: "cc_slot_module:systems:gui_dashboard:ui_manager_and_hud_orchestration"
title: "UIManagerModule & Contextual HUD Orchestration"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "ui_manager", "hud_orchestration", "mode_switching"]
---

# 🎛️ UIManagerModule & Contextual HUD Orchestration

---

## 1. Master Controller Role

`UIManagerModule` acts as the single point of coordination for the entire dashboard UI mounted under `Canvas/Director/UIManager`. It listens to mode change events (`GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI`) and observer changes on `UIManagerData.isTrialModeActive` to switch element visibility.

```mermaid
graph TD
    Director[GameModeDirector] -->|UPDATE_GAME_MODE_UI| UIM[UIManagerModule]
    
    UIM -->|hideAllUI()| Reset[Deactivate all HUD panels]
    Reset --> ModeBranch{Game Mode}
    
    ModeBranch -->|NORMAL_GAME| ShowNormal[Show: NormalSpinBtn, Bet, Wallet, Turbo, BuyFeature, NormalPayline]
    ModeBranch -->|FREE_GAME 1..4| ShowFree[Show: FreeSpinBtn, FreeSpinTimes, FreePayline, Hide BuyFeature]
    ModeBranch -->|BONUS_GAME| ShowBonus[Show: Bonus HUD layout]
```

---

## 2. Layout Matrix Across Game Modes

| HUD Component | Normal Game | Free Game | Bonus Game | Trial Mode Switch |
| :--- | :---: | :---: | :---: | :--- |
| `normalSpinButton` | **Active** | Inactive | Inactive | Unchanged |
| `freeSpinButton` | Inactive | **Active** | Inactive | Unchanged |
| `normalSpinTimes` | **Active** | Inactive | Inactive | Unchanged |
| `freeSpinTimes` | Inactive | **Active** | Inactive | Unchanged |
| `bet` / `extraBet` | **Active** | **Active** (Locked) | Inactive | Unchanged |
| `wallet` | **Active** | **Active** | **Active** | Switches to Trial Currency |
| `winAmount` | **Active** | **Active** | **Active** | Unchanged |
| `turbo` | **Active** | **Active** | Inactive | Unchanged |
| `buyFeatureButton`| **Active** | Inactive | Inactive | Disabled if Trial |
| `jackpot` | **Active** | **Active** | Inactive | Deactivated |
| `trialJackpot` | Inactive | Inactive | Inactive | **Active** |
| `paylineInfoNormal`| Opacity 255 | Opacity 0 | Opacity 0 | Unchanged |
| `paylineInfoFree` | Opacity 0 | Opacity 255 | Opacity 0 | Unchanged |

---

## 3. Popup & Cutscene Input Guard (`checkDisplayPopup`)

To prevent accidental key triggers (e.g. Spacebar) while a dialog or cutscene is active:
```typescript
checkDisplayPopup(): boolean {
    const isDisplay = this.popupControl.isDisplayPopup() 
                   || this.cutsceneControl.isDisplayCutscene() 
                   || !this.isSpinVisible();
    this.uiManagerData.setDisplayPopup(isDisplay);
    return isDisplay;
}
```
If `checkDisplayPopup()` returns `true`, `SlotButtonModule` discards spacebar keyup events immediately.
