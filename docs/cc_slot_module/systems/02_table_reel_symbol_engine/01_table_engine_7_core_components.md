---
id: "cc_slot_module:systems:table_engine:7_core_components"
title: "Table Engine: 7 Core Components Cooperation"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "components", "architecture"]
---

# 🎰 Table Engine: 7 Core Components Cooperation

---

## 1. Sơ Đồ Phối Hợp 7 Hợp Phần Cốt Lõi

Cỗ máy Bảng quay trong `cc-slot-module` được tạo thành từ 7 component chuyên trách:

```mermaid
graph TD
    TableConfig[1. TableModuleConfig: Layout & Speed Constants] --> Table[2. SlotTableModule: Master Table]
    
    Table --> ReelsContainer[Reels Group]
    subgraph Reels Assembly
        ReelsContainer --> Reel0[3. SlotReelModule Col 0]
        ReelsContainer --> Reel1[3. SlotReelModule Col 1]
        ReelsContainer --> Reel2[3. SlotReelModule Col 2]
    end

    Table --> SymbolMgr[4. SlotSymbolManager: Sorter & Life Cycle]
    
    subgraph Cache & Pooling
        SymbolMgr --> NodePool[6. SlotCustomNodePool: Node Pool Cache]
        SymbolMgr --> ResMgr[7. SlotSymbolResourceManager: Spine & Sprite Data]
        SymbolMgr --> Symbols[5. SlotSymbolModule: Render Instance]
    end
```

---

## 2. Bảng Phân Công Nhiệm Vụ 7 Hợp Phần

| STT | Hợp phần | File Nguồn | Trách nhiệm Trọng tâm |
| :---: | :--- | :--- | :--- |
| **1** | `TableModuleConfig` | `TableModuleConfig.ts` | Khai báo số cột/dòng (`TABLE_FORMAT`), tính toán tọa độ `SYMBOL_INDEXES`, và lưu trữ cấu hình tốc độ (`MODES.NORMAL`, `MODES.TURBO`). |
| **2** | `SlotTableModule` | `SlotTableModule.ts` | Lớp vỏ điều phối chính, quản lý mảng `reelList`, phát tín hiệu quay/dừng cột và đồng bộ trạng thái bảng. |
| **3** | `SlotReelModule` | `SlotReelModule.ts` | Điều khiển chuyển động cuộn xoay vô tận của từng cột riêng lẻ, tính toán quán tính và hiệu ứng nảy (Bounce Easing) khi dừng. |
| **4** | `SlotSymbolManager` | `SlotSymbolManager.ts` | Cấp phát, thu hồi, sắp xếp thứ tự đè lớp (`sortSymbols`), quản lý biểu tượng dính (Sticky Wilds) và Z-Index layer. |
| **5** | `SlotSymbolModule` | `SlotSymbolModule.ts` | Component hiển thị của 1 ô Symbol (chứa Sprite tĩnh, Spine Animation, Spine Blur, và các hàm đổi hình `changeToSymbol`). |
| **6** | `SlotCustomNodePool`| `SlotCustomNodePool.ts`| Quản lý Pool Node riêng cho từng loại Symbol ID, tái sử dụng node đã có để triệt tiêu việc cấp phát bộ nhớ rác. |
| **7** | `SlotSymbolResourceManager`| `SlotSymbolResourceManager.ts`| Tải và lưu trữ khung xương Spine SkeletonData, SpriteAtlas toàn bộ biểu tượng game. |
