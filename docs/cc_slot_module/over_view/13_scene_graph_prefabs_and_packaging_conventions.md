---
id: "cc_slot_module:overview:scene_graph_prefabs_and_packaging_conventions"
title: "Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "scene_graph", "prefabs", "packaging_conventions", "cocos_creator", "game_structure"]
---

# 🏗️ Scene Graph Hierarchy, Prefabs Structure & Packaging Conventions

---

## 1. Cây Scene Chuẩn của Game Slot (Standard Slot Scene Tree)

Mọi dự án game slot kế thừa từ `cc-slot-module` đều tuân thủ cấu trúc cây Scene chuẩn trong Cocos Creator Editor:

```text
Canvas (Cocos Canvas Node)
│
├── Background (Spine / Sprite hình nền thay đổi theo Game Mode)
│
├── Director (Tầng điều phối cốt lõi)
│   ├── GameDirector (Bộ điều phối gốc của Game)
│   ├── GameDataStore (Nguồn dữ liệu duy nhất SSOT)
│   ├── GameLogic (Xử lý mạng WebSocket & API logic)
│   └── SoundPlayer (Quản lý BGM và kênh Audio)
│
├── GameMode (Container chứa các chế độ chơi)
│   ├── NormalGameDirector (NormalGameDirectorModule + Writer + Executor)
│   ├── FreeGameDirector (FreeGameDirectorModule + Writer + Executor)
│   ├── FreeOptionDirector (FreeOptionDirectorModule)
│   └── BonusGameDirector (BonusGameDirectorModule)
│
├── BoardG (Vùng hiển thị Bảng quay & Hiệu ứng)
│   ├── Table (SlotTableModule, SlotTableConfig, Reels, Symbols)
│   ├── TableData (SlotTableData - BaseDataModule)
│   ├── Payline (SlotTablePaylineModule)
│   ├── PaylineData (SlotTablePaylineData - BaseDataModule)
│   ├── NearWinEffect (Hiệu ứng khung sáng Near-Win trên cột)
│   └── CascadeEffect (Hiệu ứng nổ biểu tượng nếu có cascade)
│
└── GUI (Tầng giao diện người dùng - Top Layer)
    ├── Header (Nút Menu, Nút Cài đặt, Thông tin phiên bản)
    ├── Footer (Bảng đặt cược, Nút Quay Spin, Nút Auto, Nút Turbo)
    ├── WinAmount (Khung hiển thị tiền thắng + Số lăn)
    ├── Jackpot (Thanh hiển thị giá trị Jackpot nhảy số)
    └── Cutscenes (Tầng Popup đè lên trên cùng)
        ├── BigWinPopup (Spine chúc mừng Big/Mega/Super Win)
        ├── FreeGameIntroPopup (Dialog giới thiệu số lượt Free Spins)
        ├── FreeGameTotalWinPopup (Dialog tổng kết kết quả Free Spins)
        └── ErrorDialog (Dialog thông báo lỗi mạng / session)
```

---

## 2. Quy Ước Đóng Gói Thư Mục Dự Án (Project Packaging Directory Layout)

Khi tạo một Game mới kế thừa từ Slot Framework:

```text
assets/cc-release-slot/[game-name-or-id]/
├── atlases/ (SpriteAtlases biểu tượng, UI, khung bảng)
├── audios/ (Toàn bộ SFX, BGM định dạng MP3/OGG)
├── fonts/ (Bitmap fonts số lăn tiền, ký tự điểm thưởng)
├── prefabs/ (Các Prefab Symbol, Cutscene, Dialog tái sử dụng)
├── spines/ (Khung xương Spine JSON/skel của Symbol & Animation)
└── scripts/ (Mã nguồn TypeScript kế thừa từ cc-slot-module)
    ├── Core/
    │   ├── GameDataStore[GameId].ts (Override mapDataPS)
    │   └── GameConfig[GameId].ts (Cấu hình Win Levels, Paytable)
    ├── GameMode/
    │   ├── NormalGameDirector[GameId].ts
    │   ├── FreeGameDirector[GameId].ts
    │   └── FreeOptionDirector[GameId].ts
    └── Table/
        ├── TableModuleConfig[GameId].ts (Tọa độ ma trận, tốc độ)
        └── SlotSymbol[GameId].ts (Hoạt họa Symbol đặc thù)
```

---

## 3. Nguyên Tắc Kế Thừa Bất Biến (Invariant Architectural Principles)

1. **Không sửa đổi trực tiếp mã nguồn trong `cc-common`**: Mọi tính năng mới hoặc tùy biến hiển thị phải được thực hiện bằng cách tạo class con trong thư mục `assets/cc-release-slot/[game-name]/` và kế thừa từ các Base Module của `cc-common`.
2. **Co-location Data & Presentation**: Component dữ liệu (`BaseDataModule`) luôn được gắn cùng một Node hoặc làm con trực tiếp của Component hiển thị (`SlotBaseModule`) để đảm bảo quá trình tự động resolve trong `onLoad()` luôn thành công.
3. **Clean Teardown**: Mọi Component đều phải giải phóng tài nguyên, hủy đăng ký sự kiện và dừng các Tween trong `onDestroy()`.
