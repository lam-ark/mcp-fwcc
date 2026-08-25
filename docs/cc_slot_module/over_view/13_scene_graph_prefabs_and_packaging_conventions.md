---
id: "cc_slot_module:overview:scene_graph_prefabs_and_packaging_conventions"
title: "Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "scene_graph", "prefabs", "packaging_conventions", "cocos_creator", "game_structure", "cocos_inspection"]
---

# 🏗️ Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions

---

## 1. Production Slot Game Scene Graph (Cocos Creator 2.4)

All slot game titles inheriting from `cc-slot-module` adhere to the canonical scene graph structure extracted from production Cocos Creator scene files (`g9000L.fire` / `g9666L.fire`):

```text
Canvas [cc.Canvas, CanvasModuleController, cc.Widget]
├── Main Camera [cc.Camera]
└── Director [GameConfig, GameDataStore, GameInit, GameDirector]
    ├── GameMode [OnAddGameMode]
    │   ├── BG_MainG [cc.Sprite]
    │   ├── BoardG [cc.Sprite]
    │   ├── MainGamePrefab [BaseGameMode, NormalGameDirectorModule, NormalGameWriterModule, GameLogicEventHandler, OnAddSlotModule]
    │   │   ├── SlotTableModule [SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule, SlotModuleEditorTag]
    │   │   │   ├── SymbolPool [SlotSymbolManager]
    │   │   │   ├── Table [cc.Mask]
    │   │   │   └── VFX_NearWin [sp.Skeleton]
    │   │   ├── SlotTablePaylineModule [SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData, SlotModuleEditorTag]
    │   │   │   ├── PaylineSymbolModule [PaylineSymbolModule]
    │   │   │   │   └── PaylineContainer
    │   │   │   ├── SymbolPool [SlotSymbolManager]
    │   │   │   ├── PaylineWinFrameModule [PaylineWinFrameModule]
    │   │   │   └── PaylineLineModule [PaylineLineModule]
    │   │   ├── TransformSymbolModule [TransformSymbolModule, TransformSymbolConfig, TransformSymbolData]
    │   │   └── SymbolManger [SlotSymbolManager]
    │   │
    │   ├── FreeGamePrefab [BaseGameMode, FreeGameDirectorModule, FreeGameWriterModule, GameLogicEventHandler, OnAddSlotModule]
    │   │   ├── SlotTableModule [SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule, SlotModuleEditorTag]
    │   │   │   ├── SymbolPool [SlotSymbolManager]
    │   │   │   └── Table [cc.Mask]
    │   │   ├── SlotTablePaylineModule [SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData, SlotModuleEditorTag]
    │   │   │   ├── PaylineSymbolModule [PaylineSymbolModule]
    │   │   │   ├── SymbolPool [SlotSymbolManager]
    │   │   │   └── PaylineWinFrameModule [PaylineWinFrameModule]
    │   │   ├── TransformSymbolModule [TransformSymbolModule, TransformSymbolConfig, TransformSymbolData, SlotModuleEditorTag]
    │   │   └── SymbolManger [SlotSymbolManager]
    │   │
    │   ├── BonusGamePrefab [BaseGameMode, BonusGameDirectorModule, BonusGameWriterModule, GameLogicEventHandler, OnAddSlotModule]
    │   │   ├── BonusTable [BonusGameTableModule, BonusTableData, BonusTableConfig]
    │   │   └── CountDown [cc.Label]
    │   │
    │   └── FreeOptionPrefab [BaseGameMode, FreeOptionDirectorModule, GameLogicEventHandler, OnAddSlotModule]
    │       ├── Gradient [cc.Sprite, cc.BlockInputEvents]
    │       ├── options [cc.Layout]
    │       └── CountDownText [cc.Label]
    │
    ├── UIManager [UIManagerModule]
    │   ├── BG_BottomUI [cc.Sprite]
    │   ├── BackToLobbyButton [BackToLobbyModule]
    │   ├── SettingButton [SettingButton, cc.Button]
    │   ├── InfoButton [InfoButton, cc.Button]
    │   ├── Bet [BetModule] (TotalBetLabel, DenomLabel, TotalLineLabel, BetIncrease, BetDecrease)
    │   ├── ExtraBet [ExtraBetModule] (ExtraBetLabel, ExtraBetIncrease, ExtraBetDecrease)
    │   ├── Jackpot [JackpotModule] (Grand JackpotLabel)
    │   ├── TrialJackpot [TrialJackpotModule]
    │   ├── JackpotHistoryButton [JackpotHistoryButton, cc.Button]
    │   ├── NormalPaylineInfo [PaylineInfoModule] (layout: lbLeft, sprSymbol, lbRight)
    │   ├── FreePaylineInfo [PaylineInfoModule] (layout: lbLeft, sprSymbol, lbRight)
    │   ├── FreeSpinButton [SlotButtonFree, cc.Button]
    │   ├── FreeSpinTimes [SpinTimesModule]
    │   ├── NormalSpinButton [SlotButtonNormal, cc.Button] (SpinButtonSprite, SpinButtonSpine)
    │   ├── NormalSpinTimes [SpinTimesModule]
    │   ├── IconPromotion [IconPromotion, cc.Sprite]
    │   ├── PromotionSpinTimes [SlotPromotionSpinTimes]
    │   ├── TurboButton [TurboButton] (Display: ButtonOff, ButtonOn)
    │   ├── WinAmountPrefab [WinAmountModule] (WinAmountLabel)
    │   ├── Wallet [WalletModule] (RealWallet, TrialWallet)
    │   ├── TrialModeTag [TrialModeTag, cc.Sprite]
    │   └── TrialModePrefab [TrialModeManager] (Panel, Options, ButtonBack)
    │
    ├── CutsceneControl [CutsceneController]
    │   ├── IntroFreeGame [IntroFreeGameModule]
    │   ├── JackpotWin [JackpotWinModule] (coinParticle, Winamount, title)
    │   ├── TotalWin [TotalWinModule] (coinParticle, Winamount, title)
    │   └── WinEffect [WinEffectModule] (fastParticle, CoinsEffect, Winamount, title)
    │
    ├── PopupControl [PopupControllerModule]
    │   ├── TutorialPopup [TutorialPopupModule]
    │   ├── SettingPanel [SettingPanel] (Music, SFX, ForceGltBtn, Version)
    │   ├── BetHistory [BetHistoryModule] (RecordView, DetailView, GameModeView)
    │   ├── JackpotHistoryPopup [JackpotHistoryModule] (RecordView, PageIndex)
    │   └── InfoPanel [InfoPanel] (PageView, indicator, TrialButton)
    │
    ├── Toast [ToastInfoModule, cc.Sprite]
    ├── DialogMessage [DialogMessageModule]
    ├── waitingScene [WaitingSceneModule]
    ├── SlotSoundPlayer [SlotSoundPlayerModule, SoundConvertList]
    └── BlackBg
```

---

## 2. Architectural Layer Breakdown

### A. Core Director & Bootstrap Layer
* **`Canvas` Node**:
  - Hosts `CanvasModuleController`, `cc.Canvas`, and `cc.Widget`. Enforces fixed design resolution (1280×720 or 1920×1080) with dynamic Fit Height / Fit Width responsive scaling.
* **`Director` Node**:
  - Hosts the bootstrap quartet: `GameInit`, `GameConfig`, `GameDataStore`, `GameDirector`.
  - Initializes IoC Service Locator containers, establishes `GameLogic` socket handlers, and maintains centralized state (Single Source of Truth).

### B. GameMode Container Layer
* **`GameMode` Node**:
  - Hosts `OnAddGameMode`. Controls mounting, activation, and deactivation of mode prefabs (`MainGamePrefab`, `FreeGamePrefab`, `BonusGamePrefab`, `FreeOptionPrefab`).
  - Each mode prefab embeds the **Scripting Triad**:
    - `DirectorModule` (`NormalGameDirectorModule`, `FreeGameDirectorModule`, etc.): State machine orchestrator for spin rounds.
    - `WriterModule` (`NormalGameWriterModule`, `FreeGameWriterModule`, etc.): Synthesizes action command queues (`makeSpinScript()`).
    - `OnAddSlotModule` / `SlotModuleEditorTag`: Automatically registers child modules (`SlotTableModule`, `SlotTablePaylineModule`) into the `setupModule(moduleEvent, gameMode)` lifecycle.

### C. Board & Payline Layer
* **`SlotTableModule`**:
  - Manages `Table` (`cc.Mask`), `SymbolPool` (`SlotSymbolManager`), and `VFX_NearWin` (`sp.Skeleton`) overlays.
* **`SlotTablePaylineModule`**:
  - Coordinates 4 presentation layers: `PaylineSymbolModule` (Spine/Sprite win animations), `PaylineWinFrameModule` (Win boxes), `PaylineLineModule` (Line vectors), and `PaylineNumberModule` (Line ID badges).

### D. GUI, Cutscenes & Popups Layer
* **`UIManager`**:
  - Consolidates interactive controls (`NormalSpinButton`, `TurboButton`, `BetModule`), player balance (`WalletModule`), win rollup labels (`WinAmountModule`), and active payline summary (`PaylineInfoModule`).
* **`CutsceneControl`**:
  - Coordinates fullscreen celebration modals: `IntroFreeGameModule`, `JackpotWinModule`, `TotalWinModule`, and `WinEffectModule` (Big/Mega/Super Win).
* **`PopupControl`**:
  - Coordinates secondary modal dialogs: `SettingPanel`, `BetHistoryModule`, `JackpotHistoryModule`, `InfoPanel` (Paytable rules), and `TutorialPopupModule`.

---

## 3. Production Packaging Directory Layout

When building a new slot title inheriting from the framework, projects adhere to this clean separation:

```text
assets/
├── cc-common/                          # Shared SDK Core Framework
│   ├── cc-share-v1/                    # Networking, Sockets, General Utilities
│   └── cc-slot-module/                 # Canonical Slot Module Suite
│       ├── Core/                       # GameInit, GameConfig, GameDataStore, SlotBaseModule
│       ├── GameMode/                   # BaseGameDirector, ScriptExecutor, WriterModule
│       ├── BaseModule/
│       │   ├── Table/                  # SlotTableModule, SlotReelModule, SlotSymbolModule
│       │   ├── Payline/                # SlotTablePaylineModule, WinFrame, LineDrawing, LineNumber
│       │   ├── CascadeModule/          # VerticalCascadeModule
│       │   ├── Cutscene/               # WinEffectModule, TotalWinModule, JackpotWinModule
│       │   └── FreeOption/             # FreeOptionDirectorModule
│       └── ...
│
└── cc-release-slot/                    # Game-Specific Production Directories
    └── [game-id-or-name]/              # e.g., g9000L (Classic 5x3), g9666L (Red Cliff)
        ├── scenes/                     # Primary .fire scene file (g9000L.fire)
        ├── prefabs/                    # Mode Prefabs (MainGamePrefab, FreeGamePrefab, Popups)
        ├── textures/                   # Symbol atlases, background art, table frames
        ├── spines/                     # Spine SkeletonData for symbols & cutscenes
        ├── sounds/                     # BGM, button clicks, spin loops, win audio clips
        └── scripts/                    # Theme-specific overridden modules
            ├── [GameName]Config.ts     # Payout matrices and custom parameters
            ├── [GameName]Director.ts   # Director subclassing NormalGameDirectorModule
            └── [GameName]Writer.ts     # Writer customizing script command sequences
```

---

## 4. Prefab Override Principles

> [!IMPORTANT]
> 1. **Zero-Code Modification on `cc-common`**: Never modify source files inside `cc-common/cc-slot-module` directly. All game-specific logic must reside in `cc-release-slot/[game-id]/` through inheritance (subclassing) or configuration (`Config`).
> 2. **Prefab Nesting Stability**: When overriding `MainGamePrefab` for a new game, preserve the exact node hierarchy and component tags (`SlotModuleEditorTag`, `OnAddSlotModule`) to guarantee seamless automated registration and lifecycle orchestration.
