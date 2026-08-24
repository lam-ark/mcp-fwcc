---
id: "cc_slot_module:overview:scene_graph_prefabs_and_packaging_conventions"
title: "Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "scene_graph", "prefabs", "packaging_conventions", "cocos_creator", "game_structure", "cocos_inspection"]
---

# 🏗️ Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions

---

## 1. Cây Scene Chuẩn của Game Slot (Production Cocos Creator 2.4 Scene Graph)

Mọi dự án game slot kế thừa từ `cc-slot-module` đều tuân thủ cấu trúc cây Scene chuẩn đã được trích xuất trực tiếp từ Cocos Creator Editor (`g9000L.fire` / `g9666L.fire`):

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

## 2. Phân Tầng Trách Nhiệm Chi Tiết (Architectural Layers Breakdown)

### A. Tầng Điều Phối Cốt Lõi (Core Director & Bootstrap Layer)
* **`Canvas` Node**:
  - Gắn component `CanvasModuleController`, `cc.Canvas`, `cc.Widget`. Đảm bảo độ phân giải thiết kế cố định $1280 \times 720$ (hoặc $1920 \times 1080$) với cơ chế Fit Height / Fit Width linh hoạt.
* **`Director` Node**:
  - Gắn bộ tứ khởi tạo: `GameInit`, `GameConfig`, `GameDataStore`, `GameDirector`.
  - Khởi động IoC Service Locator, kết nối socket `GameLogic`, và lưu trữ dữ liệu tập trung (Single Source of Truth).

### B. Tầng Chế Độ Chơi (GameMode Container Layer)
* **`GameMode` Node**:
  - Gắn `OnAddGameMode`. Chịu trách nhiệm nạp/bật/tắt các Game Mode con (`MainGamePrefab`, `FreeGamePrefab`, `BonusGamePrefab`, `FreeOptionPrefab`).
  - Mỗi Prefab con đều triển khai **Scripting Triad**:
    - `DirectorModule` (`NormalGameDirectorModule`, `FreeGameDirectorModule`...): State machine điều phối lượt quay.
    - `WriterModule` (`NormalGameWriterModule`, `FreeGameWriterModule`...): Khởi tạo mảng lệnh hành động `makeSpinScript()`.
    - `OnAddSlotModule` / `SlotModuleEditorTag`: Tự động đăng ký các module con (`SlotTableModule`, `SlotTablePaylineModule`) vào luồng `setupModule(moduleEvent, gameMode)`.

### C. Tầng Bảng Quay & Trả Thưởng (Board & Payline Layer)
* **`SlotTableModule`**:
  - Quản lý `Table` (`cc.Mask`), `SymbolPool` (`SlotSymbolManager`), và hiệu ứng `VFX_NearWin` (`sp.Skeleton`).
* **`SlotTablePaylineModule`**:
  - Điều phối 4 lớp biểu diễn thắng: `PaylineSymbolModule` (Spine/Sprite biểu tượng trúng thưởng), `PaylineWinFrameModule` (Khung sáng), `PaylineLineModule` (Đường nối line), `PaylineNumberModule` (Số thứ tự line).

### D. Tầng Giao Diện & Cutscene (UI, Cutscenes & Popups Layer)
* **`UIManager`**:
  - Chứa toàn bộ nút bấm tương tác (`NormalSpinButton`, `TurboButton`, `BetModule`), hiển thị số dư ví (`WalletModule`), tiền thắng (`WinAmountModule`), và thông tin line (`PaylineInfoModule`).
* **`CutsceneControl`**:
  - Quản lý các màn hình cắt cảnh toàn màn hình: `IntroFreeGameModule`, `JackpotWinModule`, `TotalWinModule`, `WinEffectModule` (Big/Mega/Super Win).
* **`PopupControl`**:
  - Quản lý các popup tương tác phụ: `SettingPanel`, `BetHistoryModule`, `JackpotHistoryModule`, `InfoPanel` (Paytable hướng dẫn), `TutorialPopupModule`.

---

## 3. Quy Ước Đóng Gói Thư Mục Dự Án (Production Packaging Directory Layout)

Khi xây dựng một Game Slot mới kế thừa từ Framework, cấu trúc thư mục dự án tuân thủ phân cấp:

```text
assets/
├── cc-common/                          # SDK Core Framework dùng chung
│   ├── cc-share-v1/                    # Thư viện mạng, Socket, Utility
│   └── cc-slot-module/                 # Bộ Module Slot chuẩn (75 modules)
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
└── cc-release-slot/                    # Thư mục chứa các Game Slot cụ thể
    └── [game-id-or-name]/              # Ví dụ: g9000L (Classic 5x3), g9666L (Red Cliff)
        ├── scenes/                     # Scene .fire chính của game (g9000L.fire)
        ├── prefabs/                    # Mode Prefabs (MainGamePrefab, FreeGamePrefab, Popups)
        ├── textures/                   # Atlas biểu tượng, background, khung bảng quay
        ├── spines/                     # Skeletons Spine biểu tượng & cutscenes
        ├── sounds/                     # BGM, click, spin, win audio clips
        └── scripts/                    # Các module override đặc thù của game
            ├── [GameName]Config.ts     # Cấu hình trả thưởng và tham số riêng
            ├── [GameName]Director.ts   # Director kế thừa NormalGameDirectorModule
            └── [GameName]Writer.ts     # Writer custom kịch bản riêng
```

---

## 4. Nguyên Tắc Kế Thừa Prefab Override (Prefab Override Principles)

> [!IMPORTANT]
> 1. **Zero-Code Modification on `cc-common`**: Tuyệt đối không chỉnh sửa trực tiếp mã nguồn trong `cc-common/cc-slot-module`. Mọi tùy biến phải được viết trong thư mục game con `cc-release-slot/[game-id]/` thông qua kế thừa (Subclassing) hoặc cấu hình (`Config`).
> 2. **Prefab Nesting Stability**: Khi override `MainGamePrefab` trong game con, giữ nguyên cấu trúc phân cấp node và component tag (`SlotModuleEditorTag`, `OnAddSlotModule`) để đảm bảo pipeline điều phối tự động hoạt động chính xác 100%.
