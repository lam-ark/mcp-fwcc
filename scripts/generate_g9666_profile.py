import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = 'mcp/mcp-fwcc/docs/game-implement/g9666_red_cliff'
os.makedirs(target_dir, exist_ok=True)

# 1. INDEX.md
index_content = """---
id: "game-implement:9666:index"
title: "Game Architecture & Implementation Dossier: Red Cliff (g9666)"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "index"
tags: ["game_implement", "9666", "red_cliff", "megaways", "cascade", "subclass_matrix", "index"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 🎮 Game Architecture Dossier: Red Cliff (Game ID: 9666)

> **Game Name**: Red Cliff (Đại Chiến Xích Bích)  
> **Game ID**: `g9666` / `9666`  
> **Theme**: Historical 3-Kingdoms Asian War Slot  
> **Engine Base**: Cocos Creator 2.4.x + ARK `cc-common` (cc-slot-module)  
> **Mechanic Style**: Dynamic Ways (Megaways) + Cascade Refill + Multi-size Symbols (1x1 to 1x4) + Stack Wild Multiplier

---

## 🗂️ 6-Module Architecture Index

| Module | Document | Core Content |
| :---: | :--- | :--- |
| **01** | [**01. Game Overview & Rules**](./01_game_overview_and_rules.md) | Reel layout (6x5 Megaways), Dynamic Ways (up to 32,400), Symbol hierarchy, Bet steps |
| **02** | [**02. Scene Tree & Prefab Hierarchy**](./02_scene_and_prefab_hierarchy.md) | Node tree of `MainGame9666.fire`, Canvas, MainGameBoard, Layers, Z-Index stacking |
| **03** | [**03. Custom Subclasses & Overrides Matrix**](./03_custom_modules_and_overrides.md) | Complete mapping of SDK base classes $\rightarrow$ `cc1-red-cliff` custom subclasses |
| **04** | [**04. Cutscenes, Spine Animations & Bones**](./04_cutscene_and_spine_registry.md) | Cutscene IDs, Spine files, Animation states (`in`/`loop`/`out`), Bone money anchors (`slot_money`) |
| **05** | [**05. Events & Audio Mapping Dictionary**](./05_events_and_audio_mapping.md) | Custom Event bus, Sound keys (`BGM`, `SFX`, `MC_STATE`), SoundPlayer integration |
| **06** | [**06. Cheat Keys, Mock Data & Debug Scenarios**](./06_cheat_and_mockup_guide.md) | Mock payload samples, Fast-trigger Free Game, Big Win test steps, Dev cheat overlay |
"""

with open(f"{target_dir}/INDEX.md", "w", encoding="utf-8") as f:
    f.write(index_content)

# 2. 01_game_overview_and_rules.md
sec01 = """---
id: "game-implement:9666:overview"
title: "Red Cliff (g9666) - Game Overview & Game Rules Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "overview"
tags: ["game_implement", "9666", "overview", "rules", "megaways", "symbols", "paylines"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 1. 📋 Game Overview & Rules Specification

---

## 1.1 Core Specifications
- **Game ID**: `g9666`
- **Reel Dimensions**: 6 Reels (Columns) with variable row heights (2 to 7 rows per reel).
- **Sub-Reel (Top Horizontal Reel)**: 4 columns across Reels 2, 3, 4, 5.
- **Pay System**: **Allways / Megaways** (2,048 up to 32,400 Ways to Win).
- **Core Mechanics**:
  - **Cascade / Refill**: Winning symbols explode and trigger new symbol drop.
  - **Multi-size Symbols**: Symbols span 1x1, 1x2, 1x3, 1x4 height.
  - **Wild Transforming & Stack Wild**: Symbols with silver/gold frames transform into Wild ('K') upon forming winning combinations.
  - **Multiplier Accumulation**: Progressive multiplier increases +1 on every consecutive cascade in Free Spins.

---

## 1.2 Symbol Dictionary & ID Table
| Symbol Name | Symbol ID | Type | Dimensions | Special Feature |
| :--- | :---: | :---: | :---: | :--- |
| **Scatter (Binh Phù)** | `'A'` | Scatter | 1x1 only | 4+ Scatters trigger Free Spins mode (`IntroFreeGame`). |
| **Wild (Cờ Lệnh)** | `'K'` | Wild | 1x1 to 1x4 | Substitutes for all symbols except Scatter. Multiplier on top sub-reel. |
| **Guan Yu (Quan Vũ)** | `'2'` | High Pay | 1x1 to 1x4 | Highest paying character symbol. |
| **Zhang Fei (Trương Phi)** | `'3'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Zhao Yun (Triệu Vân)** | `'4'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Zhuge Liang (Khổng Minh)** | `'5'` | High Pay | 1x1 to 1x4 | High paying character symbol. |
| **Horse (Xích Thố)** | `'6'` | Mid Pay | 1x1 to 1x4 | Mid paying animal symbol. |
| **War Fan (Quạt Ba Tiêu)** | `'7'` | Mid Pay | 1x1 to 1x4 | Mid paying weapon symbol. |
| **Royals (A, K, Q, J, 10)** | `'8'`, `'9'`, `'10'`, `'J'`, `'Q'` | Low Pay | 1x1 to 1x4 | Standard card rank symbols. |
"""

with open(f"{target_dir}/01_game_overview_and_rules.md", "w", encoding="utf-8") as f:
    f.write(sec01)

# 3. 02_scene_and_prefab_hierarchy.md
sec02 = """---
id: "game-implement:9666:scene_hierarchy"
title: "Red Cliff (g9666) - Scene Tree, Canvas & Prefab Hierarchy"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "scene_hierarchy"
tags: ["game_implement", "9666", "scene_tree", "canvas", "prefabs", "z_index", "layering"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 2. 🏛️ Scene Tree & Prefab Hierarchy

---

## 2.1 Main Scene Structure (`MainGame9666.fire`)

```text
Canvas (cc.Canvas: 1920x1080 Landscape)
├── Background (Background Layer, zIndex: 0)
│   ├── BgNormal (Spine / Sprite)
│   └── BgFreeGame (Spine / Sprite)
├── MainGameBoard (Root Director Container, zIndex: 10)
│   ├── NormalGameDirector (NormalGameDirectorModule9666)
│   │   ├── TableRoot
│   │   │   ├── SlotTable (SlotTableModule9666)
│   │   │   │   ├── Reel_0 (SlotReelModule9666)
│   │   │   │   ├── Reel_1 (SlotReelModule9666)
│   │   │   │   ├── Reel_2 (SlotReelModule9666)
│   │   │   │   ├── Reel_3 (SlotReelModule9666)
│   │   │   │   ├── Reel_4 (SlotReelModule9666)
│   │   │   │   └── Reel_5 (SlotReelModule9666)
│   │   │   └── SubReelHorizontal (SlotReelModule9666)
│   │   ├── SlotSymbolManager (SlotSymbolManager9666)
│   │   └── NormalGameWriter (NormalGameWriterModule9666)
│   └── FreeGameDirector (FreeGameDirectorModule9666)
│       └── ...
├── UILayer (HUD & Action Panel, zIndex: 50)
│   ├── ActionPanel
│   │   ├── NormalSpinButton (SlotButtonNormal)
│   │   ├── BetControlPanel (+/- Denom & Total Bet)
│   │   └── WinAmountDisplay (WinAmountModule9666)
│   ├── MegawaysCounter (UPDATE_MEGAWAY listener)
│   └── MultiplierIndicator (SpineMcStateController9666)
├── CutsceneLayer (Modal Popups & Celebrations, zIndex: 100)
│   ├── BigWinPopup (WinEffectModule9666, Spine BigWin)
│   ├── TotalWinPopup (TotalWinModule9666, Spine TotalWin)
│   ├── IntroFreeGame (IntroFreeGameModule9666)
│   └── OutroFreeGame (OutroFreeGameModule9666)
└── PopupLayer (Settings, Rules, History, Dialogs, zIndex: 200)
    ├── SettingPopup (BaseUIPopup)
    ├── BetHistoryPopup (BetHistoryDetailManagerBase)
    └── ToastManager (UIToast)
```
"""

with open(f"{target_dir}/02_scene_and_prefab_hierarchy.md", "w", encoding="utf-8") as f:
    f.write(sec02)

# 4. 03_custom_modules_and_overrides.md
sec03 = """---
id: "game-implement:9666:custom_overrides"
title: "Red Cliff (g9666) - SDK Subclasses & Custom Method Overrides Matrix"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "custom_overrides"
tags: ["game_implement", "9666", "subclasses", "overrides", "director", "table", "wineffect"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 3. 🧩 SDK Subclasses & Custom Method Overrides Matrix

---

## 3.1 Custom Class Mapping Matrix

| SDK Base Class (`cc-common`) | Subclass (`cc1-red-cliff`) | File Path | Key Overridden Methods & Functions |
| :--- | :--- | :--- | :--- |
| `NormalGameDirectorModule` | `NormalGameDirectorModule9666` | `scripts/GameMode/NormalGameDirectorModule9666.ts` | `_showResultEntry()` (Spin button lockout on FreeGame trigger), `_beforeSpinStart()` (Re-enable spin button), `_startRespinningTable()` (Parallel `COLLECT_SCATTER`), `_showTransitionFreeGame()`, `_disableNormalSpinButton()`, `_enableNormalSpinButton()` |
| `FreeGameDirectorModule` | `FreeGameDirectorModule9666` | `scripts/GameMode/FreeGameDirectorModule9666.ts` | `_showTransitionNormalGame()`, `_syncGameMultiplier()` (Free Spins progressive multiplier sync) |
| `SlotTableModule` | `SlotTableModule9666` | `scripts/Table/SlotTableModule9666.ts` | Dynamic Megaways grid layout, multi-height symbol positioning, horizontal sub-reel cascade linkage |
| `SlotReelModule` | `SlotReelModule9666` | `scripts/Table/SlotReelModule9666.ts` | Multi-size blur symbol generation (`BUG-002`), sub-reel blur exclusion (`BUG-004`), symbol scale fitting |
| `WinEffectModule` | `WinEffectModule9666` | `scripts/Cutscene/WinEffectModule9666.ts` | `showFastEffectWin()` (Turbo fast particle 1s), `playSfxFastBigWin()`, Multi-milestone Spine sync (`RECIPE-002`), Bone money synchronization (`slot_money`) |
| `TotalWinModule` | `TotalWinModule9666` | `scripts/Cutscene/TotalWinModule9666.ts` | 3-Phase Spine celebration sequence (`RECIPE-003`), Win level milestone branching (`WIN_LEVEL_ENUM`), sound sync |
| `SlotButtonNormal` | `SlotButtonSprite9666` | `scripts/Gui/SlotButtonSprite9666.ts` | Custom Spin button sprite framing and hold-to-auto spin visual states |
| `WinAmountModule` | `WinAmountModule9666` | `scripts/Gui/WinAmountModule9666.ts` | `FADE_OUT_RESPIN_WIN_AMOUNT`, `COMMIT_RESPIN_WIN_AMOUNT`, payline win amount aggregation |
"""

with open(f"{target_dir}/03_custom_modules_and_overrides.md", "w", encoding="utf-8") as f:
    f.write(sec03)

# 5. 04_cutscene_and_spine_registry.md
sec04 = """---
id: "game-implement:9666:cutscenes"
title: "Red Cliff (g9666) - Cutscenes, Spine Animations & Bone Anchors Registry"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "cutscenes"
tags: ["game_implement", "9666", "cutscenes", "spine", "bones", "animations", "slot_money"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 4. 🎬 Cutscenes, Spine Animations & Bone Anchors Registry

---

## 4.1 Spine Assets & Bone Mapping

| Cutscene Feature | Cutscene Enum / ID | Spine Asset Path | Spine Animation States | Bone Anchor for Labels |
| :--- | :--- | :--- | :--- | :--- |
| **Big Win Celebration** | `CUTSCENE_TYPE_ENUM.BIG_WIN` | `data/spines/BigWin/BigWin` | `in` (Intro transition)<br>`loop` (Looping coin shower)<br>`out` (Outro dismissal) | `slot_money` (Win amount label node follows bone position) |
| **Total Win Celebration** | `CUTSCENE_TYPE_ENUM.TOTAL_WIN` | `data/spines/TotalWin/TotalWin` | `in` $\rightarrow$ `loop` $\rightarrow$ `out` | `slot_money` / `label_money` |
| **Intro Free Game Cutscene** | `CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME` | `data/spines/IntroFG/IntroFG` | `animation` / `appear` | Text Free Spins Count anchor |
| **Outro Free Game Cutscene** | `CUTSCENE_TYPE_ENUM.OUTRO_FREE_GAME` | `data/spines/OutroFG/OutroFG` | `animation` / `disappear` | Summary total win anchor |
| **MC Character Mascot** | Custom | `data/spines/MC/Mascot9666` | `idle`, `TransitionFreespin`, `Cheer`, `Attack` | - |
"""

with open(f"{target_dir}/04_cutscene_and_spine_registry.md", "w", encoding="utf-8") as f:
    f.write(sec04)

# 6. 05_events_and_audio_mapping.md
sec05 = """---
id: "game-implement:9666:events_audio"
title: "Red Cliff (g9666) - Custom Events Dictionary & Sound Player Mapping"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "events_audio"
tags: ["game_implement", "9666", "events", "audio", "bgm", "sfx", "event_bus"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 5. 🔊 Custom Events Dictionary & Sound Player Mapping

---

## 5.1 Custom Event Bus Mapping

| Event Name | Source Module | Listener Modules | Payload / Parameters | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `COLLECT_SCATTER` | `NormalGameDirectorModule9666` | Scatter Collector UI | `{ count, matrixIndexes, formatMatrix }` | Triggers visual fly-in particle from reel Scatters to FG counter. |
| `COLLECT_WILD_MULTIPLIER` | `NormalGameDirectorModule9666` | Top Sub-Reel Multiplier | `SlotSymbolManager` | Gathers wild multipliers from active sub-reel symbols. |
| `RESET_MULTIPLIER` | `NormalGameDirectorModule9666` | Multiplier HUD | `isInstant: boolean` | Resets progressive multiplier indicator back to x1. |
| `APPLY_MULTIPLIER_TO_WIN_AMOUNT` | `NormalGameDirectorModule9666` | WinAmountModule | `isFirstSpin: boolean` | Multiplies cascade step win amount by active multiplier. |
| `COMMIT_RESPIN_WIN_AMOUNT` | `NormalGameDirectorModule9666` | WinAmountModule | `none` | Commits respin win amount to the cumulative session balance. |
| `UPDATE_MEGAWAY` | `SlotTableModule9666` | MegawaysCounter HUD | `waysCount: number` | Dynamically updates ways counter on the HUD header. |
| `PLAY_MC_STATE` | `NormalGameDirectorModule9666` | Mascot Controller | `SpineStateMc9666` enum | Triggers character mascot animations on major events. |

---

## 5.2 Sound Keys & Audio Mapping
- **BGM Keys**:
  - `BGM_NORMAL`: Main base game background music.
  - `BGM_FREEGAME`: Free Spins mode battle music.
  - `BGM_BIGWIN`: Big Win celebration theme.
- **SFX Keys**:
  - `BIGWIN_START`, `BIGWIN_COUNT`, `BIGWIN_END`: Multi-milestone celebration sound effects.
  - `TOTAL_WIN_START`, `TOTAL_WIN_END`: Free Spins total win presentation sounds.
  - `SCATTER_HIT_1` to `SCATTER_HIT_6`: Escalating pitch SFX on landing Scatter symbols.
  - `REEL_STOP_1` to `REEL_STOP_6`: Reel stop thuds.
"""

with open(f"{target_dir}/05_events_and_audio_mapping.md", "w", encoding="utf-8") as f:
    f.write(sec05)

# 7. 06_cheat_and_mockup_guide.md
sec06 = """---
id: "game-implement:9666:cheats"
title: "Red Cliff (g9666) - Cheat Keys, Mock Data & Debug Scenarios Guide"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "cheats"
tags: ["game_implement", "9666", "cheats", "mock_data", "debug", "test_scenarios"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 6. 🧪 Cheat Keys, Mock Data & Debug Scenarios Guide

---

## 6.1 Fast Test Scenarios

### Scenario 1: Trigger Free Spins with 4 Scatters
- **Cheat Command / Key**: Set Matrix with 4 'A' symbols across Reels 1, 2, 4, 5.
- **Expected Outcome**: Scatters highlight $\rightarrow$ `COLLECT_SCATTER` emits $\rightarrow$ `_showTransitionFreeGame()` initiates $\rightarrow$ Spin button locks $\rightarrow$ Intro Free Game plays $\rightarrow$ Free Game starts.

### Scenario 2: Turbo Big Win in Base Game
- **Settings**: Turn Turbo mode **ON**.
- **Action**: Trigger spin with total win >= 20x total bet.
- **Expected Outcome**: Big Win Spine popup is skipped; 1-second falling coin particle plays; win amount updates immediately onto Paybar.

### Scenario 3: Auto Spin + Free Game Mode Transition Lock
- **Settings**: Turn Auto Spin **ON**.
- **Action**: Hit Free Game + Big Win combo spin.
- **Verification**: Tapping the Spin button while Big Win closes or during Intro Free Game transition **must not cancel Auto Spin**.
"""

with open(f"{target_dir}/06_cheat_and_mockup_guide.md", "w", encoding="utf-8") as f:
    f.write(sec06)

print("All 7 Red Cliff (g9666) architecture documents successfully created!")
