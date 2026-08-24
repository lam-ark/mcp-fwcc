---
id: "cc_slot_module:overview:win_evaluation_payline_and_celebration_hierarchy"
title: "Win Evaluation, Payline Presentation & Celebration Hierarchy"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "win_evaluation", "paylines", "win_level", "big_win", "cutscenes", "celebration_hierarchy"]
---

# 🏆 Win Evaluation, Payline Presentation & Celebration Hierarchy

---

## 1. Phân Cấp Tính Thưởng (Win Level Calculation)

Hệ thống tính thưởng trong `cc-slot-module` phân loại chiến thắng thành các cấp bậc dựa trên **Tỷ lệ Tiền thắng / Tổng cược (Multiplier Ratio)**:

$$\text{Win Ratio} = \frac{\text{Win Amount}}{\text{Total Bet}}$$

```mermaid
graph LR
    Ratio[Win Ratio = Win / TotalBet] --> Thresholds{Kiểm tra ngưỡng WIN_LEVEL_CONFIG.THRESHOLDS}
    
    Thresholds -->|Ratio < 5x| L1[Level 1: Thắng nhỏ / Normal Win]
    Thresholds -->|5x <= Ratio < 15x| L2[Level 2: Thắng vừa / Medium Win]
    Thresholds -->|15x <= Ratio < 30x| L3[Level 3: Big Win / Thắng lớn]
    Thresholds -->|Ratio >= 30x| L4[Level 4: Mega Win / Super Win]
```

### Bảng Cấu hình Tiêu chuẩn (`WIN_LEVEL_CONFIG`):
| Cấp bậc (Win Level) | Ngưỡng Nhân Cược | Thời gian Số lăn (`COUNT_MONEY_TIME`) | Thời gian Chiếu Line (`WIN_LINE_TIME`) | Hiển thị Dialog (Cutscene) |
| :--- | :--- | :--- | :--- | :--- |
| **Level 1 (Small Win)** | $< 5\times$ | 0.5s | 1.0s | Không (Chỉ chớp line) |
| **Level 2 (Medium Win)**| $5\times - 15\times$ | 2.0s | 2.0s | Không (Số lăn nhanh) |
| **Level 3 (Big Win)** | $15\times - 30\times$ | 4.0s | 4.0s | Bật Popup `BIG_WIN` |
| **Level 4 (Mega / Super)** | $> 30\times$ | 6.0s - 10.0s | 6.0s - 8.0s | Bật Popup `MEGA_WIN` / `SUPER_WIN` |

---

## 2. Quy Trình Trình Diễn Thắng (Win Presentation Pipeline)

Khi kết thúc vòng quay có thưởng, quy trình biểu diễn được chia làm 3 giai đoạn phối hợp:

```mermaid
sequenceDiagram
    autonumber
    participant Dir as GameModeDirectorModule
    participant Pay as SlotTablePaylineModule
    participant WinUI as WinAmountModule
    participant Cut as CutsceneModule

    Note over Dir,Pay: Giai đoạn 1: Kẻ Line & Chớp Biểu tượng
    Dir->>Pay: BLINK_ALL_PAYLINES (Chớp đồng loạt toàn bộ line thắng)
    Dir->>WinUI: UPDATE_WIN_AMOUNT (Bắt đầu hiệu ứng số tiền lăn)
    
    Note over Dir,Cut: Giai đoạn 2: Bật Dialog Chúc mừng (nếu Big Win)
    opt isBigWin() == true
        Dir->>Cut: PLAY_CUTSCENE (BigWin / MegaWin / Jackpot)
        Cut-->>Dir: Người chơi bấm Skip hoặc xem hết cutscene
    end
    
    Note over Dir,Pay: Giai đoạn 3: Chiếu Tuần tự Từng Line
    Dir->>Pay: SHOW_ALL_PAYLINES (Chiếu từng line lẻ cho người chơi soi kết quả)
```

### Chi tiết 3 Giai đoạn:
1. **Chớp Tổng Hợp (`BLINK_ALL_PAYLINES`)**:
   - Tất cả các Symbol tham gia vào bất kỳ line thắng nào sẽ cùng phát hoạt họa Win / Bung Spine đồng thời.
   - Giúp người chơi nắm bắt ngay quy mô thắng của toàn bảng.
2. **Ăn Mừng Đỉnh Điểm (`Cutscene & Rolling Money`)**:
   - `WinAmountModule` bắt đầu đếm số từ 0 lên tiền thắng với âm thanh tiền xu rơi (`Coin Roll SFX`).
   - Nếu là Big Win / Jackpot: Bật Dialog toàn màn hình với hiệu ứng hạt vàng (Coin Fountains) và hoạt họa nhân vật chính.
3. **Chiếu Tuần Tự (`SHOW_ALL_PAYLINES`)**:
   - Sau khi kết thúc đếm tiền, hệ thống chuyển sang chế độ nhàn rỗi (Idle Payline Cycling): lần lượt sáng từng đường line và làm mờ các ô còn lại để người chơi quan sát chi tiết paytable từng dòng.
