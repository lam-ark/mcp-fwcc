---
id: "cc_slot_module:systems:table_engine:matrix_geometry_and_buffer_rows"
title: "Matrix Geometry, Coordinates & Buffer Rows"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "geometry", "coordinates", "buffer_rows"]
---

# 📐 Matrix Geometry, Coordinates & Buffer Rows

---

## 1. Hệ Tọa Độ Ma Trận Chuẩn: `[col][row]`

Trong `cc-slot-module`, dữ liệu ma trận từ Server và hiển thị Client luôn tuân thủ quy ước **Cột trước - Dòng sau**:

```typescript
matrix[col][row]
```

```text
       Col 0      Col 1      Col 2      Col 3      Col 4
Row 2: [0][2]     [1][2]     [2][2]     [3][2]     [4][2]   <-- Dòng trên cùng
Row 1: [0][1]     [1][1]     [2][1]     [3][1]     [4][1]   <-- Dòng giữa
Row 0: [0][0]     [1][0]     [2][0]     [3][0]     [4][0]   <-- Dòng đáy
```

---

## 2. Vai Trò của Vùng Đệm Ẩn (Top & Bottom Buffer Rows)

Để các biểu tượng cuộn mượt mà từ trên xuống hoặc từ dưới lên mà người chơi không nhìn thấy biểu tượng đột ngột "xuất hiện từ hư vô" (pop-in):

```text
+-------------------------------------------------------------+
|         TOP BUFFER (topBuffer = 1 hoặc 2 dòng)              | <-- Symbol chuẩn bị cuộn vào khung hình
+=============================================================+
|                      REEL VIEWPORT                          |
|         (Vùng hiển thị thực tế người chơi nhìn thấy)         |
|                                                             |
|           Row 2: [0][2]    [1][2]    [2][2]                 |
|           Row 1: [0][1]    [1][1]    [2][1]                 |
|           Row 0: [0][0]    [1][0]    [2][0]                 |
|                                                             |
+=============================================================+
|        BOTTOM BUFFER (bottomBuffer = 1 dòng)                | <-- Symbol đã cuộn qua đáy, chờ thu hồi
+-------------------------------------------------------------+
```

### Thuật toán Dựng Cột với Buffer trong `TableModuleConfig`:
```typescript
// Tổng số ô Symbol thực tế cần tạo trên 1 cột:
const totalNodesPerReel = visibleRows + topBuffer + bottomBuffer;
```
Khi cột cuộn xuống:
1. Symbol ở `bottomBuffer` chạm ngưỡng đáy sẽ được gỡ ra và đưa về NodePool.
2. Một Symbol mới được lấy từ NodePool, gán ID ngẫu nhiên (hoặc Blur texture), và gắn vào đỉnh của `topBuffer`.
