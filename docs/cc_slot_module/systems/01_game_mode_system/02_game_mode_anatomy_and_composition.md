---
id: "cc_slot_module:systems:game_mode:anatomy_and_composition"
title: "Game Mode Anatomy & Component Composition"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "anatomy", "composition", "director", "writer", "base_data_module"]
---

# 🧬 Game Mode Anatomy & Component Composition

---

## 1. Cấu trúc Cây Node Phân cấp của 1 Game Mode

Trong Cocos Creator Editor, mỗi Game Mode được tổ chức thành một Prefab/Node độc lập:

```text
Canvas/Director/GameMode/NormalGameDirector
│
├── NormalGameDirectorModule (Component Điều phối / Scene Owner)
├── NormalGameWriterModule (Component Lập trình Chuỗi lệnh)
├── ScriptExecutor (Component Chạy hàng đợi lệnh)
│
└── moduleList (Mảng các Node UI con được tiêm Scoped moduleEvent)
    ├── Table (Chứa SlotTableModule, SlotReelModule, SlotSymbolManager)
    ├── TableData (Chứa SlotTableData - BaseDataModule)
    ├── Payline (Chứa SlotTablePaylineModule)
    ├── PaylineData (Chứa SlotTablePaylineData - BaseDataModule)
    ├── WinAmount (Chứa WinAmountModule)
    └── SlotButton (Chứa SlotButtonModule)
```

```mermaid
graph TD
    subgraph Game Mode Instance (e.g. NormalGameDirector)
        Director[GameModeDirectorModule: Brain & Actions]
        Writer[GameModeWriterModule: Script Generator]
        Executor[ScriptExecutor: Command Queue Runner]
        
        Director <-->|Queries Data & Dispatches| Writer
        Director -->|Feeds Command Queue| Executor
        Executor -->|Calls Async Methods| Director
        
        Director -.->|Creates & Injects| Bus["Scoped moduleEvent (GameModuleEvent)"]
    end

    subgraph Attached Sub-Modules (moduleList)
        Bus --> TableUI[SlotTableModule: Visual Reels]
        Bus --> PayUI[SlotTablePaylineModule: Visual Lines]
        Bus --> WinUI[WinAmountModule: Rolling Counter]
        Bus --> ButtonUI[SlotButtonModule: Spin Controls]
    end

    subgraph Reactive Data Layer (Sibling / Child Nodes)
        GDS[GameDataStore] -->|updateDataModules| TableData[SlotTableData: BaseDataModule]
        GDS -->|updateDataModules| PayData[SlotTablePaylineData: BaseDataModule]
        
        TableData --> TableUI
        PayData --> PayUI
    end
```

---

## 2. 3 Tầng Trách Nhiệm trong một Game Mode

### Tầng 1: Bộ Ba Điều Phối (The Orchestration Triad)
* **`GameModeDirectorModule`**: Nắm quyền kiểm soát Scene, cung cấp các hàm thực thi diễn hoạt (`_startSpinningTable`, `_stopSpinningTable`, `_showWinPayline`, `_gameExit`...) và tạo Bus sự kiện nội bộ `moduleEvent`.
* **`GameModeWriterModule`**: Thuần túy kiểm tra dữ liệu `dataStore.playSession` để sản xuất ra mảng danh sách tên hàm cần chạy (`string[]`). Không chứa code đồ họa hay Node.
* **`ScriptExecutor`**: Cỗ máy trung gian nhận mảng lệnh từ Writer và thực thi lần lượt từng method trên Director theo cơ chế Async Promise chaining.

### Tầng 2: Tầng Dữ Liệu Phản Ứng (Reactive Data Observers)
* **`BaseDataModule` Subclasses**: Các Component dữ liệu (`SlotTableData`, `SlotTablePaylineData`, `CascadeModuleData`) được gắn cùng Node hoặc làm con của Component hiển thị.
* Đăng ký nhận dữ liệu từ `GameDataStore` qua mảng `registeredKeys`. Khi có dữ liệu mới, hàm `onDataUpdate(key, value)` được gọi tự động với giá trị đã được Deep Clone.

### Tầng 3: Tầng Biểu Diễn Trực Quan (Presentation Layer)
* Các Component hiển thị (`SlotTableModule`, `SlotTablePaylineModule`, `SpinTimes`, `SlotButton`...) không bao giờ giao tiếp trực tiếp với Server.
* Chúng nhận lệnh từ `moduleEvent` của Director hoặc đọc trạng thái đã xử lý từ `BaseDataModule` gắn cùng Node.

---

## 3. Quy Tắc Co-Location và Dependency Injection

1. **Co-location Rule**: Mỗi `BaseDataModule` luôn được đặt trên cùng một Node với `SlotBaseModule` tương ứng (ví dụ: Node `Table` chứa cả `SlotTableModule` và `SlotTableData`).
2. **IoC Resolution**: Khi `BaseDataModule.onLoad()` thực thi, nó tự động tìm Component cha/anh em `this.baseMode = this.getComponent(SlotBaseModule)` và nhận tiêm `@inject(GameDataStore)` từ Service Locator.
