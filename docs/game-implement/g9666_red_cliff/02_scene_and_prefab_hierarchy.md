---
id: "game-implement:9666:scene_hierarchy"
title: "Red Cliff (g9666) - Scene Tree, Canvas & Prefab Hierarchy"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "scene_hierarchy"
tags: ["game_implement", "9666", "scene_tree", "canvas", "prefabs", "z_index", "layering", "g9666L"]
created_at: "2026-08-25"
updated_at: "2026-08-26"
author: "ARK Slot Engineering Team"
---

# 2. 🏛️ Scene Tree & Prefab Hierarchy Specification

---

## 2.1 Scene Files Overview

Dự án **Red Cliff (g9666)** bao gồm các scene chính trong thư mục gốc `assets/cc-release-slot/cc1-red-cliff/`:

| Scene File | Vai trò | Ghi chú kỹ thuật |
| :--- | :--- | :--- |
| **`g9666.fire`** | **Loading / Splash Scene** | Chứa màn hình loading tiến trình, splash Spine `9666_splash`, thanh tiến độ `ProgressBar`, `LoadingProgressIcon9666`, `NetworkPrewarm`. |
| **`g9666L.fire`** | **Main Game Scene (Landscape)** | **Scene chính của game**. Độ phân giải Canvas 1920x1080, quản lý toàn bộ luồng GameMode, Director, UIManager, Table, Cutscenes và Popups. |
| **`g9666H.fire`** | **Bet History Scene** | Scene độc lập phục vụ hiển thị lịch sử ván cược chi tiết. |

---

## 2.2 Complete Node Tree: `g9666L.fire` (Main Game Scene)

Dưới đây là cây node hoàn chỉnh được trích xuất trực tiếp từ file cấu hình `g9666L.fire`:

```text
Canvas (cc.Canvas: 1920x1080 Landscape, cc.Widget)
├── Main Camera (cc.Camera)
└── Director (NormalGameDirectorModule9666, FreeGameDirectorModule9666, SlotGameDirector)
    │
    ├── GameMode (GameModeManager, cb185zo59RMN5s6j33Tq055)
    │   ├── BG_MainG (sp.Skeleton: Spine Background Normal / FreeGame, 14144d9o1NJVb5+4FQR5USb)
    │   ├── BoardG (cc.Sprite: Khung viền bàn chơi kim loại)
    │   ├── MainGamePrefab (Normal Mode Table Root - Xem mục 2.3)
    │   ├── FreeGamePrefab (Free Spins Mode Table Root - Xem mục 2.4)
    │   └── FreeOptionPrefab (Free Spins Selection Popup)
    │
    ├── UIManager (UIManagerModule9666, 5f16bF/69ZAjqi06UqO1VD6)
    │   ├── SettingButton (Nút mở Setting Popup)
    │   ├── InfoButton (Nút mở Bảng Luật chơi Paytable)
    │   ├── BackToLobbyButton (Nút quay lại Lobby)
    │   ├── JackpotHistoryButton (Nút xem lịch sử Jackpot)
    │   ├── Sure_win (Hiệu ứng báo trước thắng lớn)
    │   ├── GameMultipler (Khung hiển thị hệ số nhân lũy tiến)
    │   ├── UI_MC (sp.Skeleton: Spine Mascot Tướng quân 9666 - Xem mục 2.5)
    │   ├── 9666_cauthang (cc.Sprite: Cầu thang thành trì decor bên cạnh bàn chơi)
    │   ├── Bet (Cụm điều khiển mức cược: - / + Bet Size, Bet Level, Total Bet)
    │   ├── TrialJackpot (Hiệu ứng Jackpot ở chế độ Chơi thử)
    │   ├── Jackpot (Cụm hiển thị 4 mức Jackpot Grand / Major / Minor / Mini)
    │   ├── Wallet (Cụm hiển thị số dư ví tiền Balance & Win Amount)
    │   ├── FreeSpinButton (Nút quay trong chế độ Free Spins)
    │   ├── NormalSpinButton (Nút quay Base Game, hỗ trợ Hold-to-Auto spin)
    │   ├── NormalSpinTimes (Nhãn hiển thị số lần quay Auto còn lại)
    │   ├── IconPromotion (Icon khuyến mãi)
    │   ├── PromotionSpinTimes (Số lượt spin khuyến mại)
    │   ├── FreeSpinTimes (Số lượt Free Spins còn lại)
    │   ├── TurboButton (Nút bật / tắt chế độ quay nhanh Turbo F2R)
    │   ├── TrialModeTag (Tag nhận diện chế độ Chơi thử)
    │   ├── CollectGameMultipler (Điểm đích nhận hạt bay Multiplier từ Sub-Reel)
    │   ├── NormalPaylineInfo (Label / Panel thông tin đường trúng thưởng)
    │   ├── ScatterCollectPrefab (Cụm 6 cờ Scatter Collector - Xem mục 2.6)
    │   └── TrialModePrefab (UI thông báo Chơi thử)
    │
    ├── CutsceneControl (CutsceneControllerModule, 04e88xxza1E8ZargIWXXtgG)
    │   ├── IntroFreeGame (IntroFreeGameModule9666, Spine IntroFG)
    │   ├── JackpotWin (JackpotWinModule9666, Spine JackpotWin)
    │   ├── TotalWin (TotalWinModule9666, Spine TotalWin)
    │   └── WinEffect (WinEffectModule9666, Spine BigWin / MegaWin / SuperWin)
    │
    ├── PopupControl (PopupControllerModule, b110f2S5mdLhK0yikIA4q6w)
    │   ├── TutorialPopup (Popup hướng dẫn người chơi mới)
    │   ├── SettingPanel (SettingPopup: Tắt/Bật Âm thanh SFX, BGM, Xem lịch sử)
    │   ├── BetHistory (BetHistoryPopup: Bảng lịch sử ván cược)
    │   ├── JackpotHistoryPopup (Popup danh sách người trúng Jackpot)
    │   └── InfoPanel (InfoPopup: Bảng chi tiết luật chơi, hệ số symbol, Megaways)
    │
    ├── Toast (UIToast: Thông báo nổi nhanh trên màn hình)
    ├── DialogMessage (Popup xác nhận thông báo hệ thống / mất kết nối)
    ├── waitingScene (Loading overlay khi đồng bộ mạng, gradient, IconLoad)
    ├── SlotSoundPlayer (SlotSoundPlayer9666: Quản lý phát nhạc nền BGM & hiệu ứng âm thanh SFX)
    └── BlackBg (Letterbox viền đen chống tràn màn hình)
        ├── BlackBgTop (cc.Sprite)
        ├── BlackBgBot (cc.Sprite)
        ├── BlackBgLeft (cc.Sprite)
        └── BlackBgRight (cc.Sprite)
```

---

## 2.3 Chi Tiết Prefab `MainGamePrefab.prefab` (Normal Game Table)

```text
MainGamePrefab (e0a3cl+J6FAc7c/ruO4WrD+, NormalGameTableRoot)
├── SymbolManagerMainTable (SlotSymbolManager9666: Quản lý Object Pool Symbol)
├── MainTable-VerticalTableModule (SlotTableModule9666: Quản lý 6 cột dọc)
│   ├── Table (cc.Mask: Mask che symbol ngoài phạm vi bàn quay)
│   ├── VFX_NearWin (sp.Skeleton: Spine hiệu ứng hồi hộp khi chờ Scatter thứ 4+)
│   └── stack-wild (Slot chứa symbol Wild dồn cột)
├── MainTable-NearWinRefill (SlotTableNearWinRefillModule: Hiệu ứng NearWin khi cascade)
├── TopTable-HorizontalTableModule (HorizontalTableModule9666: Quản lý 4 ô Sub-Reel ngang trên Reels 2..5)
│   └── Table (cc.Mask: Mask cho hàng ngang)
├── SlotTablePaylineModule (PaylineModule9666)
│   └── PaylineSymbolModule (Highlight viền sáng khung symbol trúng thưởng)
│       └── PaylineContainer (Node chứa các hiệu ứng khung viền thắng)
├── CompositeCascade (CompositeCascadeModule9666: Điều phối nổ rơi đồng thời)
│   ├── HorizontalCascadeModule (HorizontalCascadeModule9666: Nổ & trượt symbol hàng ngang)
│   │   └── PaylineContainer
│   └── VerticalCascadeModule (VerticalCascadeModule9666: Nổ & rơi symbol 6 cột dọc)
│       └── PaylineContainer
├── StackWildModule (Quản lý hiệu ứng mở rộng Wild toàn cột 9666_wild_expand)
│   ├── Table (cc.Mask)
│   └── 9666_wild_expand (sp.Skeleton: Spine hiệu ứng Quan Vũ / Triệu Vân cắm cờ Wild)
└── MegawayModule9666 (Tính toán & cập nhật hiển thị số Ways động lên Header)
```

---

## 2.4 Chi Tiết Prefab `FreeGamePrefab.prefab` (Free Spins Mode Table)

```text
FreeGamePrefab (FreeGameDirectorModule9666 Table Root)
├── SymbolManagerMainTable (SlotSymbolManager9666)
├── MainTable-VerticalTableModule (SlotTableModule9666: 6 Cột Megaways Free Game)
│   ├── Table (cc.Mask)
│   ├── VFX_NearWin (sp.Skeleton)
│   └── stack-wild
├── TopTable-HorizontalTableModule (HorizontalTableModule9666)
│   └── Table (cc.Mask)
├── CompositeCascade (HorizontalCascadeModule + VerticalCascadeModule)
├── SlotTablePaylineModule (PaylineSymbolModule)
├── StackWildModule (StackWildModule9666, Spine 9666_wild_expand)
├── JackpotCollectionModule (Cụm thu thập ngọc Jackpot trong Free Game)
│   └── bg (cc.Sprite)
│       └── container (cc.Layout: Chứa các biểu tượng ngọc thu thập được)
└── MegawayModule9666 (Cập nhật số Ways trong Free Game)
```

---

## 2.5 Cấu Trúc Prefab `UI_MC.prefab` (Mascot Tướng Quân Bên Trái)

```text
UI_MC (sp.Skeleton: data/spines/MC/Mascot9666)
├── Script: SpineMcStateController9666
└── Animation Tracks:
    ├── idle: Đứng thở, canh giữ bàn quay
    ├── TransitionFreespin: Rút kiếm chỉ huy trận Xích Bích khi vào Free Spins
    ├── Cheer / Attack: Vung đao chém lửa khi nổ Big Win / Mega Win
    └── MultiplierFlag: Cờ hiển thị hệ số nhân x2, x3, x5, x10 trên tay tướng
```

---

## 2.6 Cấu Trúc Prefab `ScatterCollectPrefab.prefab` (Scatter Flag Collector)

```text
ScatterCollectPrefab (ScatterCollectModule9666)
├── Flags (Node chứa 6 vị trí cắm cờ tương ứng 6 Reel)
│   ├── 9666_ui_connet_1 (Base socket + 9666_flag Spine)
│   ├── 9666_ui_connet_2
│   ├── 9666_ui_connet_3
│   ├── 9666_ui_connet_4
│   ├── 9666_ui_connet_5
│   └── 9666_ui_connet_6
├── ef_collect_scatter_flag (sp.Skeleton: Spine hạt lửa bay từ Scatter trên bàn vào cờ)
└── ef_collect_scatter_freespin (sp.Skeleton: Spine bùng nổ kích hoạt khi đủ 4+ cờ)
```

---

## 2.7 Cấu Trúc Các Cutscenes (`CutsceneControl.prefab`)

| Prefab Cutscene | Cấu trúc Node bên trong | Chức năng kỹ thuật |
| :--- | :--- | :--- |
| **`WinEffect.prefab`** | • `Overlay` (cc.Sprite, cc.Button - chặn click / skip)<br>• `fastParticle` (ParticleSystem - hiệu ứng hạt 1s khi Turbo ON)<br>• `9666_bigwin` (sp.Skeleton: Spine mừng thắng Big/Mega/Super/Epic Win)<br>• `WinInfo > Winamount` (cc.Label nhảy số tiền đồng bộ theo bone `slot_money`)<br>• `WinInfo > CoinsEffect > CoinParticle` | Quản lý chúc mừng Big Win, hỗ trợ bỏ qua Spine khi bật chế độ Turbo / F2R. |
| **`TotalWin.prefab`** | • `Overlay` (cc.Sprite, cc.Button)<br>• `9666_total_win` (sp.Skeleton)<br>• `coinParticle` (ParticleSystem)<br>• `Winamount` (cc.Label tổng tiền thắng Free Game) | Xuất hiện ở cuối chuỗi Free Spins tổng kết tổng tiền thắng. |
| **`IntroFreeGame.prefab`** | • `Overlay` (cc.Sprite, cc.Button)<br>• `spine` (sp.Skeleton: Bảng chào mừng Free Spins, hiển thị số lượt quay nhận được) | Mở màn chuyển cảnh từ Base Game sang Free Game. |
| **`JackpotWin.prefab`** | • `Overlay`<br>• `spine` (sp.Skeleton: Spine nổ hũ Grand / Major / Minor / Mini)<br>• `Winamount` (cc.Label số tiền Jackpot) | Chúc mừng trúng thưởng Jackpot. |

---

## 2.8 Cấu Trúc Prefab `SymbolPrefab9666.prefab`

```text
SymbolPrefab (SlotSymbolModule9666)
├── Sprite (cc.Sprite: Ảnh tĩnh / Fallback texture của symbol)
├── Spine (sp.Skeleton: Skeleton dữ liệu animation của Symbol: Idle, Win, Disappear)
└── multiplierLabel (cc.Label: Nhãn hiển thị hệ số x2, x8, x10 trên Golden Ingot Wild 'K1')
```

---

## 2.9 Phân Lớp Z-Index và Thứ Tự Vẽ (Layering Order)

| Tầng Layer | Z-Index | Danh sách Nodes / Prefabs | Chú thích |
| :--- | :---: | :--- | :--- |
| **Background Layer** | `0` | `BG_MainG`, `BoardG`, `9666_cauthang` | Nằm dưới cùng, chuyển đổi nền linh hoạt |
| **Table Grid Layer** | `10` | `MainTable-VerticalTableModule`, `TopTable-HorizontalTableModule`, `StackWildModule` | Khu vực quay và rơi symbol |
| **Payline & VFX Layer**| `30` | `SlotTablePaylineModule`, `CompositeCascade`, `TransformSymbolModule` | Khung payline highlight, hiệu ứng nổ symbol |
| **HUD & Action Layer** | `50` | `UIManager`, `NormalSpinButton`, `FreeSpinButton`, `Bet`, `Wallet`, `UI_MC`, `ScatterCollectPrefab` | Giao diện điều khiển và linh vật MC |
| **Cutscene Layer** | `100` | `IntroFreeGame`, `WinEffect` (Big Win), `TotalWin`, `JackpotWin` | Modal hiệu ứng trúng thưởng đè lên bàn quay |
| **Popup & Dialog Layer** | `200` | `SettingPanel`, `BetHistory`, `InfoPanel`, `DialogMessage`, `Toast` | Menu hệ thống và lịch sử chơi |
