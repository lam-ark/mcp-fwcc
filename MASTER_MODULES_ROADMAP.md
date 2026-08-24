# 🗺️ Master Modules Roadmap & Implementation Checklist (v3.0)

> **Roadmap Objective**: Comprehensive, production-grade documentation across all Cocos Common (`cc-common`) Slot Framework SDK modules.  
> **Standard**: **Convention v3.0 Deep-Atomic Subfolder Hierarchy (One file per method, per gotcha, per recipe, and per phase breakdown)**.  
> **Verification**: MiniSearch relevance validation + GraphEngine semantic link resolution.

---

## 🏛️ Cluster 1: Core Foundation & Bootstrap

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **`GameInit`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameInit.ts` | **COMPLETED (v3.0)** - Bootstrap entry point, IoC container registration, network auto-connect. |
| [x] | **`GameConfig`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameConfig.ts` | **COMPLETED (v3.0)** - Master config (`PAY_SYSTEM`, `TABLE_FORMAT`, `CURRENCY_CONFIG`). |
| [x] | **`SlotBaseModule`** | Base Class for All Modules | `assets/cc-common/cc-slot-module/Core/SlotBaseModule.ts` | **COMPLETED (v3.0)** - Universal base class (`@inject`, `applyInjections`, dual event bus). |
| [x] | **`GameDataStore`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/GameDataStore.ts` | **COMPLETED (v3.0)** - Central reactive store (`playSession`, `wallet`, `bet`, `winAmount`). |
| [ ] | **`GameEventManager`** | Injected via `GameInit` | `assets/cc-common/cc-slot-module/Core/GameEventManager.ts` | Asynchronous global event bus (`emit` awaits `Promise.all()`). |
| [ ] | **`SlotGameSettings`** | Injected via `GameInit` | `assets/cc-common/cc-slot-module/Core/SlotGameSettings.ts` | User preferences (Turbo state, sound volumes, locale). |
| [ ] | **`SlotSoundPlayerModule`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/Core/SlotSound/SlotSoundPlayerModule.ts` | Audio controller (BGM playback, SFX pitch, win loops). |

---

## 🎬 Cluster 2: Game Mode Directors & Writers

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **`BaseGameDirector`** | `Canvas/Director` | `assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts` | Master state machine loop orchestrator. |
| [ ] | **`ScriptExecutor`** | Helper Class in Director | `assets/cc-common/cc-slot-module/GameMode/Core/ScriptExecutor.ts` | Asynchronous action queue step processor. |
| [ ] | **`GameModeDirectorModule`** | `Canvas/Director/GameMode` | `assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts` | Director dispatcher managing Normal, Free, and Bonus game modes. |
| [ ] | **`NormalGameDirectorModule`** | `Canvas/Director/GameMode/NormalGame` | `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameDirectorModule.ts` | Normal game spin loop director. |
| [ ] | **`NormalGameWriterModule`** | Helper Class in Normal Director | `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameWriterModule.ts` | Action script queue definition for normal spins. |
| [ ] | **`FreeGameDirectorModule`** | `Canvas/Director/GameMode/FreeGame` | `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameDirectorModule.ts` | Free game spin loop director (spins remaining, multipliers). |
| [ ] | **`FreeGameWriterModule`** | Helper Class in Free Director | `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameWriterModule.ts` | Action script queue definition for free spins. |
| [ ] | **`BonusGameDirectorModule`** | `Canvas/Director/GameMode/BonusGame` | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameDirectorModule.ts` | Pick-and-click / Mini-game director. |
| [ ] | **`BonusGameWriterModule`** | Helper Class in Bonus Director | `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameWriterModule.ts` | Script queue definition for bonus rounds. |

---

## 🎰 Cluster 3: Matrix, Reels & Symbols (Table Engine)

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :---: | :--- | :--- | :--- | :--- |
| [ ] | **`SlotTableModule`** | `Canvas/Director/GameMode/BoardG/Table` | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableModule.ts` | Grid matrix orchestrator, reel instantiation, near-win anticipation. |
| [ ] | **`SlotReelModule`** | Dynamically created child reel | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotReel/SlotReelModule.ts` | Column scrolling, speed curves, stopping bounce animation. |
| [ ] | **`SlotSymbolModule`** | Dynamically created child symbol | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts` | Visual symbol presentation (Spine skeleton, Static sprite, Blur sprite). |
| [ ] | **`SlotSymbolManager`** | Child node of SlotTable | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts` | Node pooling (`cc.NodePool`), win animations, spine lifecycle caching. |
| [ ] | **`TableModuleConfig`** | Configuration in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/TableModuleConfig.ts` | Reel timings, easing curves, stopping delay constants. |
| [ ] | **`SlotTableData`** | BaseDataModule in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableData.ts` | Table matrix state conversion (`registeredKeys: ['matrix']`). |
| [ ] | **`SlotTableNearWinModule`**| Child component in Table | `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableNearWinModule.ts` | Anticipation VFX overlays for 2+ Scatter/Bonus triggers. |

---

## 🎛️ Cluster 4: GUI Dashboard, Controls & Betting System

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | **`UIManagerModule`** | `Canvas/Director/UIManager` | `assets/cc-common/cc-slot-module/Core/UIManagerModule.ts` | HUD orchestrator managing bottom control panel. |
| [ ] | **`BetModule`** | `Canvas/Director/UIManager/BetModule` | `assets/cc-common/cc-slot-module/GUI/Bet/BetModule.ts` | Bet selector, bet multiplier stepper, max bet toggle. |
| [ ] | **`WalletModule`** | `Canvas/Director/UIManager/WalletModule` | `assets/cc-common/cc-slot-module/GUI/Wallet/WalletModule.ts` | Real/Trial balance display, rolling money tweeners. |
| [ ] | **`PaylineInfoModule`** | `Canvas/Director/UIManager/PaylineInfo` | `assets/cc-common/cc-slot-module/GUI/WinAmount/PaylineInfoModule.ts` | Win number display, bitmap font animation, counting sound. |
| [ ] | **`SlotButtonNormal`** | `Canvas/Director/UIManager/SlotButtonNormal` | `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonNormal.ts` | Spin / Fast Stop / AutoPlay trigger button. |
| [ ] | **`TurboButton`** | `Canvas/Director/UIManager/TurboButton` | `assets/cc-common/cc-slot-module/GUI/TurboButton/TurboButton.ts` | Fast-forward spin mode toggle. |

---

## 🎆 Cluster 5: Celebrations, VFX & Cutscenes

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | **`CutsceneController`** | `Canvas/Director/CutsceneControl` | `assets/cc-common/cc-slot-module/CutScene/CutsceneController.ts` | Modal queue dispatcher for celebration overlays. |
| [ ] | **`WinEffectModule`** | `Canvas/Director/CutsceneControl/WinEffect` | `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffect.ts` | Big Win, Mega Win, Super Win coin showers & Spine FX. |
| [ ] | **`IntroFreeGameModule`** | Modal overlay | `assets/cc-common/cc-slot-module/CutScene/FreeGame/IntroFreeGameModule.ts` | Feature trigger banner awarded free spin dialog. |
| [ ] | **`TotalWinModule`** | Modal overlay | `assets/cc-common/cc-slot-module/CutScene/WinEffect/TotalWinModule.ts` | Summary celebration displaying total payout. |

---

## 📜 Cluster 6: Popups, Settings & History

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | **`PopupControllerModule`**| `Canvas/Director/PopupControl` | `assets/cc-common/cc-slot-module/GUI/Popup/PopupControllerModule.ts` | Modal popup lifecycle manager. |
| [ ] | **`SettingPanel`** | `Canvas/Director/PopupControl/SettingPanel` | `assets/cc-common/cc-slot-module/GUI/Popup/SettingPanel/SettingPanel.ts` | Sound toggles, speed sliders, language selector. |
| [ ] | **`InfoPanel`** | `Canvas/Director/PopupControl/InfoPanel` | `assets/cc-common/cc-slot-module/GUI/Popup/InfoPanel/InfoPanel.ts` | Paytable rules, symbol payouts, feature guides. |
| [ ] | **`BetHistoryModule`** | `Canvas/Director/PopupControl/BetHistory` | `assets/cc-common/cc-slot-module/GUI/Popup/BetHistory/BetHistoryModule.ts` | Player round history and spin replay records. |

---

## ⚡ Cluster 7: Advanced Game Mechanics

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | **`CascadeTableModule`** | `Canvas/Director/GameMode/BoardG/Table` | `assets/cc-common/cc-slot-module/BaseModule/Table/Cascade/CascadeTableModule.ts` | Avalanche symbol destruction and gravity drop. |
| [ ] | **`MegawayTableModule`** | `Canvas/Director/GameMode/BoardG/Table` | `assets/cc-common/cc-slot-module/BaseModule/Table/Megaway/MegawayTableModule.ts` | Variable symbol heights per reel column (2 to 7). |
| [ ] | **`StickySymbolModule`** | Overlay on Table | `assets/cc-common/cc-slot-module/BaseModule/Table/StickySymbol/StickySymbolModule.ts` | Locked wild/multiplier symbols persisting across spins. |

---

## 📡 Cluster 8: Networking & Core Platform Libraries

| Status | Module Name | Canonical Scene Node Path | Source Path | Key Responsibilities |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | **`GameNetwork`** | Injected Singleton | `assets/cc-common/cc-network/game-network.js` | WebSocket transport, message serialization, reconnect. |
| [ ] | **`WaitingSceneModule`** | `Canvas/Director/waitingScene` | `assets/cc-common/cc-slot-module/Core/WaitingSceneModule.ts` | Socket connection loading screen & spinner. |
