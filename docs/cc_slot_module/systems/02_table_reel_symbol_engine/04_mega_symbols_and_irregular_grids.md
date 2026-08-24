---
id: "cc_slot_module:systems:table_engine:mega_symbols_and_irregular_grids"
title: "Mega Symbols, Multi-Cell Spanning & Irregular Grids"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "mega_symbols", "irregular_grid", "ways_to_win"]
---

# 🗿 Mega Symbols, Multi-Cell Spanning & Irregular Grids

---

## 1. Xử lý Biểu tượng Khổng lồ (Mega Symbols: 2x2, 3x3, 1x3)

Trong các trò chơi có tính năng Colossal Symbols (biểu tượng kích thước lớn chiếm nhiều ô):

1. **Neo Cột Gốc (Anchor Column Binding)**:
   - Node của Mega Symbol được gắn vào cột góc trái dưới cùng của vùng bao phủ.
2. **Kích Thước Vùng Đệm (Buffer Row Expansion)**:
   - `TableModuleConfig` phải tăng `topBuffer` tương ứng với chiều cao của Mega Symbol (ví dụ: Symbol cao 3 ô thì `topBuffer >= 3`) để đỉnh của biểu tượng không bị biến mất đột ngột khi cuộn vào.
3. **Chiếu Tọa Độ Trả Thưởng (Multi-Cell Payline Projection)**:
   - Khi `SlotTablePaylineModule` duyệt tính thưởng, nó tự động ánh xạ ô đơn thành hình chữ nhật kích thước đầy đủ để kiểm tra đường line nối tiếp.

---

## 2. Bảng Không Đối Xứng (Irregular / Ways-to-Win Grids)

Với các game có số dòng trên mỗi cột khác nhau (ví dụ bảng dạng Kim cương `3-4-5-4-3` hoặc `2-3-4-5-6`):

```typescript
// Cấu hình TABLE_FORMAT dạng mảng cột động
export const IRREGULAR_TABLE_FORMAT = [3, 4, 5, 4, 3];
```

`TableModuleConfig` tự động tính toán `SYMBOL_INDEXES` riêng cho từng cột, căn giữa tâm các cột theo chiều dọc (`Y-offset`) để tạo nên bố cục hình học đối xứng hoàn hảo.
