---
id: "cc_slot_module:systems:reactive_data:server_packet_ingestion_pipeline"
title: "Server Packet Ingestion & Reactive Propagation Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "ingestion", "game_data_store", "base_data_module"]
---

# 🚀 Server Packet Ingestion & Reactive Propagation Pipeline

---

## 1. Dòng Chảy Dữ Liệu Từ Server Đến Giao Diện

```mermaid
sequenceDiagram
    autonumber
    participant Server as WebSocket Server
    participant Logic as GameLogic (Network Layer)
    participant Store as GameDataStore (SSOT)
    participant BDM as BaseDataModule Subclasses
    participant UI as Presentation Components

    Server->>Logic: 1. Gói tin JSON kết quả ván quay
    Logic->>Store: 2. parseDataPS(data)
    Note over Store: 3. mapDataPS() (Giải mã key nén)
    Note over Store: 4. convertData() (Nạp vào _dataMap)
    
    Store->>BDM: 5. updateDataModules() (Phát dữ liệu Deep-Clone)
    BDM->>BDM: 6. onDataUpdate(key, value)
    BDM->>UI: 7. Kích hoạt vẽ lại giao diện tương ứng
```

---

## 2. Bản Đồ Phân Phối Khóa Dữ Liệu (Data Key Distribution Map)

Mỗi `BaseDataModule` chỉ đăng ký lắng nghe những thuộc tính mà nó cần quản lý:

| Module Data | `registeredKeys` | Thành phần Giao diện Tiêu thụ |
| :--- | :--- | :--- |
| **`SlotTableData`** | `["matrix"]` | `SlotTableModule` (Dựng ma trận biểu tượng) |
| **`SlotTablePaylineData`**| `["payLines", "winAmount"]` | `SlotTablePaylineModule` (Kẻ đường line thắng) |
| **`FreeGameData`** | `["freeGameRemain", "freeGame", "winAmountPS"]` | `FreeGameDirectorModule`, `SpinTimes` HUD |
| **`CascadeModuleData`** | `["cascadeSteps", "cascadeWin"]` | `CascadeModuleDirector` (Hiệu ứng sụp nổ) |
| **`JackpotData`** | `["jackpot"]` | `JackpotModule` (Thanh ticker nhảy số) |
