import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = 'mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs'
os.makedirs(target_dir, exist_ok=True)

# 1. INDEX.md
index_content = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:index"
title: "Quy Chuẩn Đối Chiếu Nghiệp Vụ Toàn Diện: Cocos Creator (ARK Studio) vs Pixi.js (Game Refer)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotButtonNormal", "WinEffectModule", "TotalWinModule", "AutoSpinPanelv3", "BetHistoryDetailManagerBase"]
tags: ["cocos_vs_pixijs", "refer_game", "qa_matrix", "discrepancy", "specification", "ark_business", "index"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 📊 Bảng Đối Chiếu Quy Chuẩn Nghiệp Vụ: Cocos Creator vs Pixi.js

> **Tài liệu gốc**: `Compare Cocos vs Pixijs.xlsx`  
> **Mục tiêu**: Chuẩn hóa 100% các hành vi giao diện (UI), trải nghiệm người chơi (UX), quy tắc chuyển cảnh và xử lý logic giữa framework Cocos Creator của ARK Studio và Game mẫu Refer (Pixi.js). Giúp Developer, QA và Game Designer có cơ sở đối chiếu rõ ràng mà không cần kiểm tra thủ công từng scene.

---

## 📚 Danh Mục Các Nhóm Nghiệp Vụ Chi Tiết

| Section | Tài Liệu Chi Tiết | Số Lượng Mục | Trọng Tâm Quy Chuẩn |
| :---: | :--- | :---: | :--- |
| **01** | [**01. Base Game & Action Panel (Nút Bấm, Cược, Tương Tác)**](./01_base_game_va_action_panel.md) | 9 mục | Nút Spin (3 trạng thái), Nhấn giữ Auto Spin, Không mở Bet Option, Nút không bị disable khi reel quay |
| **02** | [**02. Big Win, Free Game & Chuyển Cảnh**](./02_big_win_free_game_va_chuyen_canh.md) | 16 mục | Skip Big Win khi bật Turbo/F2R (hiệu ứng tiền rơi 1s), Total Win đếm tiền, Ô Win & Payline Free Game |
| **03** | [**03. Lịch Sử Cược (LSC) & Lịch Sử Hũ (LSH)**](./03_lich_su_cuoc_lsc_va_lich_su_hu_lsh.md) | 21 mục | Bố cục cột, phân trang, Round Refill/Respin, format ngày giờ, màn hình tổng kết phiên |
| **04** | [**04. Popups, Menu Setting, Âm Thanh & Mất Mạng**](./04_popups_setting_am_thanh_va_mang.md) | 9 mục | Bấm ngoài tắt popup, Nút Exit có popup xác nhận, Tách riêng BGM/SFX, Xử lý mất kết nối mạng |
| **05** | [**05. Matrix, Paylines & Khung Trả Thưởng (KTT, Ô Win)**](./05_matrix_paylines_va_tra_thuong.md) | 8 mục | Click Symbol không mở Payout, Gom 1 Payline tổng cho nhiều combine, Allways Matrix |
| **06** | [**06. Chế Độ Chơi Thử (Demo) vs Chơi Thật**](./06_choi_thu_demo_va_chuyen_mode.md) | 4 mục | Cảnh báo khi chuyển từ chơi thử sang thật, Giữ/Reset Auto Spin khi chơi thử |
| **07** | [**07. Màn Hình Splash, Loading & Khung Hình Hiển Thị**](./07_splash_loading_va_khung_hinh.md) | 7 mục | Tự động vào Action Panel sau khi load xong (bỏ qua Tap to Start), Khung hình Fullscreen Landscape |
"""

with open(f"{target_dir}/INDEX.md", "w", encoding="utf-8") as f:
    f.write(index_content)

# 2. 01_base_game_va_action_panel.md
sec01 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:01_base_game_action_panel"
title: "Quy Chuẩn Nghiệp Vụ 01: Base Game & Action Panel"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotButtonNormal", "SlotButtonSprite", "AutoSpinPanelv3", "GameModeDirectorModule"]
tags: ["base_game", "action_panel", "spin_button", "auto_spin", "bet_size", "button_states"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 1. 🕹️ Base Game & Action Panel (Nút Bấm, Mức Cược, Tương Tác)

---

## 1.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **2** | **Thao tác khi Reel đang quay** | Các nút trên màn hình spin bị disable khi reel đang xoay và không thể bấm được (ngoại trừ Turbo và Sound trong Free Game). | Không có button nào bị disable cả và người chơi có thể thao tác khi reel đang xoay. | **Theo Ref** | [Bug 86d418ykx](https://app.clickup.com/t/9008199668/86d418ykx)<br>Người chơi có thể mở Menu/LSH/Setting khi reel đang quay. |
| **3** | **Bấm vào Bet Size** | Mở bảng Bet Options khi bấm vào ô Bet size. | Không mở Bet Options khi bấm vào Bet size và không có Bet Option. | **Theo Ref** | [Bug 86d419402](https://app.clickup.com/t/9008199668/86d419402)<br>Chỉ dùng nút cộng/trừ để chỉnh mức cược. |
| **4** | **Cơ chế Auto Spin** | Có popup Auto Spins riêng, mở popup -> chọn số lượt -> bấm Start. | Không có popup Auto Spin; Nhấn giữ nút Spin button để kích hoạt tự quay. | **Theo Ref** | [Bug 86d41af10](https://app.clickup.com/t/9008199668/86d41af10)<br>`SlotButtonNormal.holdToAutoSpin = true`, nhấn giữ 0.7s để bắt đầu Auto Spin. |
| **7** | **Max Win** | Game có tính năng Max Win. | Game không có tính năng Max Win. | **Theo Ref** | Bỏ cơ chế chặn Max Win nếu game Ref không có. |
| **31** | **Trạng thái Spin Button** | Có 5 trạng thái: `Idle`, `Active`, `Disable`, `Effect F2R`, `Lock khi Auto Spin`. | Chỉ có 3 trạng thái: `Idle`, `Spin`, `Lock khi Auto Spin`. | **Theo Ref** | Tối giản trạng thái hiển thị của nút Spin theo Game Ref. |
| **55** | **Tắt Auto Spin** | Khi bấm tắt, nút spin chuyển từ UI Auto sang UI bình thường ngay lập tức. | Khi bấm tắt, nếu chưa kết thúc lượt quay thì nút spin vẫn hiển thị UI Auto; sau khi hết lượt mới chuyển về UI bình thường. | **Theo Ref** | Đảm bảo lượt quay dở dang hoàn tất trọn vẹn trước khi đổi trạng thái UI. |
| **56** | **Cập nhật số dư ví qua Tool** | Khi thao tác qua tool, tiền cập nhật ngay lập tức. | Cộng trừ tiền qua tool phải reload lại mới update số tiền hiển thị trên ví (hoặc kết thúc session mới apply). | **Theo Ref** | Apply tiền sau khi kết thúc phiên quay để tránh nhảy số giữa chừng. |
| **57** | **Xử lý khi thiếu tiền cược** | Khi thiếu tiền, bấm spin sẽ hiện popup thông báo thiếu tiền, reel không quay. | Khi thiếu tiền, bấm spin reel vẫn quay một nhịp ngắn rồi mới hiện popup thiếu tiền. | **Theo Ref** | Giữ hiển thị 1 giá trị tiền cược duy nhất trên Action Panel. |
| **-** | **Popup Idle (Treo máy)** | Khi idle từ 30 phút trở lên thì xuất hiện popup idle cảnh báo trong game. | Không xuất hiện popup idle. | **Theo Ref** | Không hiển thị popup idle làm gián đoạn người chơi. |
"""

with open(f"{target_dir}/01_base_game_va_action_panel.md", "w", encoding="utf-8") as f:
    f.write(sec01)

# 3. 02_big_win_free_game_va_chuyen_canh.md
sec02 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:02_big_win_free_game"
title: "Quy Chuẩn Nghiệp Vụ 02: Big Win, Free Game & Chuyển Cảnh"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "TotalWinModule", "IntroFreeGameModule", "GameModeDirectorModule"]
tags: ["big_win", "free_game", "total_win", "turbo_mode", "cutscene", "transitions"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 2. 🏆 Big Win, Free Game & Chuyển Cảnh

---

## 2.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **13** | **Big Win trong Turbo / F2R Mode** | Big Win vẫn diễn popup Spine đếm tiền 7.5s bình thường dù game đang chạy Turbo ON / F2R. | Big Win **bị bỏ qua (skip popup)** khi chơi Turbo ON / F2R, thay vào đó bắn hiệu ứng hạt tiền rơi nhẹ trong 1 giây (`fastParticle`). | **Theo Ref** | Triển khai hàm `showFastEffectWin()` trong `WinEffectModule9666` theo chuẩn SDK. |
| **14** | **Nút Setting & Info trong Free Game** | Không có các nút như Setting, Info trong giao diện Free Game. | Có đầy đủ nút Setting, Info trong Free Game và người chơi có thể bấm thao tác. | **Theo Ref** | [Bug 86d41ahrn](https://app.clickup.com/t/9008199668/86d41ahrn)<br>Hiển thị các nút chức năng trên HUD Free Game. |
| **15** | **Auto Spin khi trúng Free Game** | Khi đang Auto mà trúng Free Game thì sau khi kết thúc Free Game, Auto Spin vẫn tiếp tục quay tiếp. | Sau khi từ Free Game trở về Base Game, Auto Spin **không tự động quay tiếp** (reset về Normal Idle). | **Theo Ref** | Khi trúng Free Game, kết thúc chuỗi Auto của Normal Game để tránh quay trừ tiền bất ngờ. |
| **50** | **Title nút bấm trong Free Game** | Các lượt spin Free Game hiển thị title button "Free Game" đi kèm số thứ tự lượt quay và số tiền nhận được. | Không hiển thị text dài trên nút spin trong Free Game. | **Theo Ref** | Tối giản UI nút bấm trong Free Game. |
| **51** | **Thuật ngữ Free Spins vs Free Game** | Dùng từ "Free Game". | Dùng từ "Free Spins" (hiển thị Turn A/B - Round X/Y). | **Theo Ref** | Thống nhất hiển thị thuật ngữ "Free Spins" cho toàn bộ UI và Cutscenes. |
| **61** | **Hiển thị Game Version** | Game version không xuất hiện trong Action Panel mà chỉ hiển thị ở Setting Menu. | Game version hiển thị ở Setting Menu. | **Theo Ref** | Đặt phiên bản game gọn gàng trong Menu Cài đặt. |
| **62** | **Click Symbol trong Free Game** | Click vào symbol không có function. | Click vào symbol không có function. | **Theo Ref** | Đồng nhất giữa 2 phiên bản. |
| **63** | **Hiển thị Payline trong Free Game** | Hiển thị payline cho mỗi đường thắng ở matrix board. | Không hiển thị payline cho từng đường đơn lẻ; chỉ hiển thị số tiền tổng thắng được của tất cả các line. | **Theo Ref** | Gom paylines để giao diện Free Game thoáng và chạy nhanh. |
| **64** | **Trạng thái Spin Button trong Free Game** | Có 3 trạng thái: `Active`, `Disable`, `Có effect F2R`. | Chỉ có 1 trạng thái spin duy nhất, không có trạng thái disable và không có F2R. | **Theo Ref** | Tự động chạy toàn bộ lượt Free Spins mà không cần tương tác nút. |
| **65** | **Mức cược hiển thị trong Free Game** | Hiển thị số tiền cược của người chơi ở lượt đó. | Hiển thị đầy đủ các giá trị giống Action Panel Normal: Giá xu, Cược, Tổng. | **Theo Ref** | Đồng bộ layout Action Panel giữa Normal và Free Game. |
| **66** | **Ô Win trong Free Game** | Ô Win hiển thị $0.00 khi spin không trúng gì; hiển thị số tiền thắng và cộng dồn ở các lượt tiếp theo. | Không có ô Win riêng biệt. | **Theo Ref** | Cộng dồn hiển thị tiền thắng trực tiếp trên thanh Paybar. |
| **67** | **Nút Sound trong Free Game** | Hiển thị button sound riêng để bật/tắt âm thanh game. | Không có button sound riêng, chỉ có button setting để bật tắt sound. | **Theo Ref** | Gom điều khiển âm thanh vào Menu Setting. |
| **68** | **Khung Trả Thưởng (KTT) trong Free Game** | KTT hiển thị tip khi không trúng gì, hiển thị số tiền thắng khi có thưởng. | Hiển thị trống khi không trúng gì, hiển thị số tiền khi có thưởng và cộng dồn qua từng lượt cascade/respin. | **Theo Ref** | Xóa text tip tĩnh, chỉ hiển thị số tiền thật khi trúng thưởng. |
| **69** | **Tính năng Fast-To-Result (F2R)** | Không đề cập tính năng F2R. | Cho phép F2R theo chuẩn Ref và SDK. | **Theo ARK** | Hỗ trợ F2R song song với Turbo mode. |
| **70** | **Popup Total Win kết thúc Free Game** | Kết thúc lượt nếu có tiền thắng, hiển thị popup Total Win và chạy animation đếm tiền Spine. Nếu không có tiền thắng, không hiện popup. | Kết thúc lượt chỉ hiện popup tổng thắng với số tiền cuối cùng, không đếm tiền. | **Theo ARK** | **Giữ animation đếm tiền Spine 3 giai đoạn** (`in` $\rightarrow$ `loop` $\rightarrow$ `out`) theo công thức `RECIPE-003` để tăng cảm xúc thắng lớn. |
"""

with open(f"{target_dir}/02_big_win_free_game_va_chuyen_canh.md", "w", encoding="utf-8") as f:
    f.write(sec02)

# 4. 03_lich_su_cuoc_lsc_va_lich_su_hu_lsh.md
sec03 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:03_lich_su_cuoc_lsc_lsh"
title: "Quy Chuẩn Nghiệp Vụ 03: Lịch Sử Cược (LSC) & Lịch Sử Hũ (LSH)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase", "BaseUIPopup"]
tags: ["lsc", "lsh", "bet_history", "jackpot_history", "pagination", "summary_view"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 3. 📜 Lịch Sử Cược (LSC) & Lịch Sử Hũ (LSH)

---

## 3.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **5** | **Click ô Win / Paybar** | Click vào ô Win sẽ mở popup Lịch Sử Cược (LSC). | Click vào Paybar **không mở LSC**. | **Theo Ref** | [Bug 86d41a0b0](https://app.clickup.com/t/9008199668/86d41a0b0)<br>Chỉ mở LSC qua Menu Setting / Nút LSC chuyên dụng. |
| **6** | **Dạng Popup LSC & LSH** | LSC, LSH là popup dạng full screen không thể click ra bên ngoài để tắt. | LSC, LSH là dạng popup có viền (không full screen), bấm ra vùng nền bên ngoài sẽ tự đóng. | **Theo Ref** | Cho phép tap backdrop để đóng nhanh popup LSC/LSH. |
| **12** | **Sao chép mã phiên cược** | Có nút Copy ID phiên để kiểm tra redirect. | Không có nút Copy ID phiên. | **Theo Ref** | [Bug 86d419xxe](https://app.clickup.com/t/9008199668/86d419xxe)<br>Không cần nút copy, chỉ hiển thị mã phiên ngắn là đủ. |
| **32** | **Nút phân trang khi chưa có dữ liệu** | Khi chưa có bản ghi nào: Ẩn hoàn toàn nút Previous / Next. | Tương tự LSC: Vẫn hiển thị nút Previous / Next nhưng ở trạng thái Disable. | **Theo Ref** | Hiển thị nút xám mờ (disable) thay vì ẩn node. |
| **33** | **Trạng thái nút phân trang** | Vẫn hiển thị nút nhưng disable. | Tương tự LSC. | **Theo Ref** | Giữ nguyên vị trí layout nút phân trang. |
| **34** | **Cột dữ liệu Lịch Sử Hũ** | Các cột: `Time` (dd/mm hh:mm:ss), `Honor`, `Total Bet`, `Total Win`. | Các cột: `Time` (dd/mm hh:mm), `Honor`, `Bet`, `Jackpot`. | **Theo Ref** | Format ngày giờ gọn gàng `dd/mm hh:mm` và đặt tên cột `Jackpot`. |
| **35** | **Hover highlight dòng LSC** | Hiển thị highlight sáng dòng khi rê chuột vào các dòng LSC. | Có highlight dòng. | **Theo Ref** | Giữ hiệu ứng hover chuột trên PC. |
| **36** | **Chấm tròn đánh dấu lượt đặc biệt** | Không highlight dòng, chỉ hover nút "Chi tiết". | Nếu lượt cược đó trúng FreeGame / Jackpot / MaxWin thì có thêm **chấm tròn màu** dưới nút ">>". | **Theo Ref** | Bổ sung dot indicator cho các phiên nổ tính năng lớn. |
| **37** | **Cột dữ liệu LSC Tổng quan** | Các cột: `Time`, `Total Bet`, `Total Win`. | Các cột: `#`, `Time`, `Lines`, `Bet`, `Win`, `Result`. | **Theo Ref** | Thêm cột số thứ tự `#` và cột `Lines` theo Game Ref. |
| **38** | **Hiển thị Page X/Y** | Hiển thị text "Page X" theo prefab SDK. | Hiển thị định dạng "Page X/Y" trong LSC chi tiết. | **Theo Ref** | Hiển thị rõ tổng số trang khả dụng (ví dụ: `1/5`). |
| **39** | **Mã phiên trong LSC Chi Tiết** | Có nút copy phiên; hiển thị mã phiên trên tất cả các trang chi tiết. | Không có nút copy; chỉ hiển thị mã phiên ở trang Tổng kết, các trang con không hiển thị lại. | **Theo Ref** | Tối giản hiển thị mã phiên ở các trang spin con. |
| **40** | **Màn hình Tổng kết (Summary)** | Chỉ hiển thị màn hình tổng kết ở lượt có trúng Free Game. | Màn hình tổng kết hiển thị ở **tất cả các lượt** (kể cả chỉ trúng Normal). | **Theo Ref** | Luôn mở trang Summary đầu tiên khi vào xem chi tiết phiên. |
| **41** | **Số lượt Free Spins trên Summary** | Không có thông tin lượt Free Spins. | Hiển thị tổng số lượt Free Spins nhận được trong phiên. | **Theo Ref** | Bổ sung số lượt Free Spins vào bảng tổng kết. |
| **42** | **Format ngày giờ chi tiết** | Hiển thị theo format: `dd/mm - hh:mm:ss`. | Hiển thị theo format BE trả về. | **Theo ARK** | Format chuẩn `dd/mm - hh:mm:ss` cho dễ tra cứu log. |
| **43** | **Tiêu đề lượt quay Normal** | Hiển thị title popup "Base Game". | Hiển thị title button "Normal". | **Theo Ref** | Dùng nhãn "Normal" thay vì "Base Game". |
| **44** | **Hiển thị các ô tổng trong trang con** | Hiển thị các ô: `Total Bet`, `Win`, `Total Win`. | Không hiển thị lại các ô này trong trang chi tiết spin con. | **Theo Ref** | Dành không gian hiển thị Matrix bàn quay rõ ràng hơn. |
| **45** | **Hiển thị Round Cascade/Refill** | Hiển thị text "Round X/Y" (X là số lần cascade trong lượt). | Không có text "Round X/Y". Mỗi lượt refill/respin hiển thị ở một trang riêng biệt. | **Theo Ref** | Mỗi bước cascade là 1 trang độc lập. |
| **46** | **Chi tiết trả thưởng (Payout vs Rewards)** | Có section "Payout" liệt kê chi tiết combine từng symbol. | Có section "Rewards" ghi nhận phần thưởng đạt được. | **Theo Ref** | Hiển thị dạng "Normal : $XX.XX" hoặc "Respin Z : $XX.XX". |
| **47** | **Nút điều hướng Back / Close** | Chỉ có nút Back ở title, không có nút Close. | Chỉ có nút Close ở title, không có nút Back. | **Theo Ref** | Thống nhất dùng nút Close (X) để đóng popup. |
| **48** | **Hành vi khi bấm nút Back** | Bấm Back quay lại màn hình danh sách LSC. | Bấm Close đóng popup LSC chi tiết. | **Theo Ref** | Đóng popup chi tiết trở về màn hình game chính. |
| **49** | **Trạng thái nút Previous/Next ở trang đầu/cuối** | Ở trang đầu ẩn Previous, trang cuối ẩn Next. | Ở trang đầu hiển thị nút Previous bị disable, trang cuối hiển thị Next bị disable. | **Theo Ref** | Giữ cố định vị trí nút điều hướng trang. |
"""

with open(f"{target_dir}/03_lich_su_cuoc_lsc_va_lich_su_hu_lsh.md", "w", encoding="utf-8") as f:
    f.write(sec03)

# 5. 04_popups_setting_am_thanh_va_mang.md
sec04 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:04_popups_setting_sound_network"
title: "Quy Chuẩn Nghiệp Vụ 04: Popups, Menu Setting, Âm Thanh & Mất Mạng"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["BaseUIPopup", "SoundPlayerModule", "NetworkManager"]
tags: ["popups", "setting_menu", "sound", "bgm_sfx", "network_retry", "exit_confirmation"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 4. ⚙️ Popups, Menu Setting, Âm Thanh & Mạng

---

## 4.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | **Bấm ngoài vùng Popup Setting** | Bấm bên ngoài popup Setting không tắt popup. | Bấm bên ngoài bất cứ popup nào cũng **tự động đóng popup**. | **Theo Ref** | [Bug 86d418xb5](https://app.clickup.com/t/9008199668/86d418xb5)<br>Cài đặt backdrop touch-to-close cho tất cả modal popup. |
| **9** | **Bố cục Game Rules & Paytable** | Bố cục Game Rules và Paytable thành 2 popup riêng biệt. | Tất cả thông tin được sắp xếp vào **1 popup Info duy nhất**, gồm cả Rules và tính năng game. | **Theo Ref** | [Bug 86d4199nk](https://app.clickup.com/t/9008199668/86d4199nk)<br>Gom chung vào 1 bảng thông tin cuộn / tab. |
| **10** | **Xác nhận khi bấm nút Thoát (Exit)** | Bấm nút Exit mở ra confirmation popup với 2 lựa chọn `No` và `Confirm`. | Bấm nút Exit thoát ngay lập tức không hỏi lại. | **Theo ARK** | [Bug 86d419vpn](https://app.clickup.com/t/9008199668/86d419vpn)<br>**Giữ popup xác nhận** để tránh người chơi bấm nhầm thoát game mất tiến trình. |
| **11** | **Hiển thị nút Exit theo URL param** | Nút Exit chỉ hiển thị trong Setting Menu khi link game có param `&ru=...`. | Luôn hiển thị nút Exit; nếu không có param `&ru` thì nút không kích hoạt function. | **Theo Ref** | Luôn render nút Exit trên giao diện Setting Menu. |
| **20** | **Cài đặt Âm thanh (BGM & SFX)** | Chỉ có 1 nút gạt âm thanh chung cho cả BGM và SFX. | Có **2 nút riêng biệt**: bật/tắt Nhạc nền (BGM) và bật/tắt Hiệu ứng (SFX). | **Theo Ref** | Tách 2 switch độc lập trong Menu Setting. |
| **52** | **Danh sách nút trong Setting Menu** | Link có `ru`: Exit, Sound, Paytable, Rules, History, Close.<br>Link không `ru`: Sound, Paytable, Rules, History, Close. | Chỉ có 1 kiểu hiển thị đồng nhất: Checkbox Nhạc nền, Checkbox Âm thanh, Nút LSH, Nút LSC. | **Theo Ref** | Đơn giản hóa Menu Setting theo bố cục Ref. |
| **53** | **Con trỏ chuột khi hover nút (PC)** | Nút Enable đổi thành icon Bàn tay; Nút Disable hiển thị icon Con trỏ thường. | Luôn hiển thị icon Con trỏ thường trên tất cả các nút. | **Theo Ref** | Giữ phong cách cursor mặc định của game Ref. |
| **54** | **Xử lý Mất kết nối mạng & Thử lại** | Khi mất mạng hiện: "No internet connection, loading again... (%param%)". Sau 10 lần thử hiện popup lỗi. | Không hiển thị chuỗi đếm thử; sau một khoảng thời gian hiện popup "Bị mất kết nối tới máy chủ - Đang kết nối lại" kèm nút "Xác nhận". | **Theo Ref** | Popup thông báo mất mạng thân thiện, direct về link `ru` nếu có. |
| **73** | **Resume Popup khi vào lại phiên dở** | Có resume popup hỏi người chơi tiếp tục phiên cũ hay không. | Click màn hình hoặc bấm Spacebar để đóng resume popup và tiếp tục game. | **Theo ARK** | Tự động khôi phục dữ liệu phiên dở dang mượt mà. |
"""

with open(f"{target_dir}/04_popups_setting_am_thanh_va_mang.md", "w", encoding="utf-8") as f:
    f.write(sec04)

# 6. 05_matrix_paylines_va_tra_thuong.md
sec05 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:05_matrix_paylines_payout"
title: "Quy Chuẩn Nghiệp Vụ 05: Matrix, Paylines & Trả Thưởng"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTableModule", "SlotTablePaylineModule", "SlotSymbolModule"]
tags: ["matrix", "paylines", "payout", "allways", "symbol_click", "khung_tra_thuong"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 5. 🎰 Matrix, Paylines & Trả Thưởng (KTT, Ô Win)

---

## 5.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **8** | **Click vào Symbol trên bàn quay** | Bấm vào symbol bất kỳ trên ma trận sẽ mở popup Payout của symbol đó. | Bấm vào symbol **không có function** (không mở popup). | **Theo Ref** | [Bug 86d41a08z](https://app.clickup.com/t/9008199668/86d41a08z)<br>Vô hiệu hóa popup payout khi click vào symbol bàn quay. |
| **27** | **Hiển thị Payline khi trúng nhiều combine** | Tiền thắng của từng win combine hiển thị trên từng đường payline riêng biệt để phân biệt. | Khi trúng combine của nhiều loại symbol, **chỉ hiển thị 1 payline duy nhất** với số tiền bằng tổng tiền của tất cả combine. | **Theo Ref** | Gom hiển thị payline tổng để tránh rối mắt trên màn hình. |
| **28** | **Khung Trả Thưởng (KTT) ở Base Game** | Khi Idle hoặc không trúng thưởng: Hiển thị dòng tip hướng dẫn.<br>Khi trúng thưởng: Hiển thị "Win $XXX.XX" / "Total Win $YYY.YY". | Khi Idle hoặc không trúng thưởng: Không hiển thị tip, để ô trống.<br>Khi trúng thưởng: Chỉ hiển thị số tiền "$XXX.XX". | **Theo Ref** | Bỏ hiển thị chữ tip tĩnh, chỉ hiển thị số tiền thực nhận. |
| **29** | **Ô Win trên giao diện chính** | Có hiển thị ô Win riêng biệt trên thanh điều khiển. | Không có ô Win riêng (tiền thắng cập nhật thẳng vào thanh Paybar/Balance). | **Theo Ref** | Đồng bộ layout Action Panel không dùng ô Win rời. |
| **30** | **Đơn vị tiền tệ (Currency Unit)** | Chỉ sử dụng Dollar ($), không dùng Cent. | Vẫn hỗ trợ Cent (2 chữ số thập phân). | **Theo Ref** | Định dạng số tiền chính xác 2 chữ số thập phân (ví dụ `$12.50`). |
| **58** | **Hiển thị giá trị cược trên Action Panel** | Có 3 giá trị liên quan đến cược: Giá xu, Cược, Tổng cược. | Chỉ hiển thị 1 giá trị Cược tổng duy nhất trên Action Panel. | **Theo Ref** | GD đã kiểm tra và phê duyệt denom/credit rút gọn. |
| **59** | **Hiển thị số cách ăn (All Ways / Megaways)** | Hiển thị text All Ways cố định. | Hiển thị số cách ăn động (`Ways`) tương ứng với số biểu tượng của lượt spin hiện tại. | **Theo Ref** | Cập nhật số Ways động qua `UPDATE_MEGAWAY`. |
| **60** | **Khóa nút khi chưa kết thúc lượt quay** | Khi lượt spin chưa kết thúc, chỉ có nút Turbo là bấm được. | Khi lượt spin chưa kết thúc, người chơi có thể bấm mở LSH, Setting Menu, Luật chơi; chỉ có nút tăng giảm mức cược là bị khóa (disable). | **Theo Ref** | Cho phép tương tác Menu tiện ích trong lúc các cuộn đang quay. |
"""

with open(f"{target_dir}/05_matrix_paylines_va_tra_thuong.md", "w", encoding="utf-8") as f:
    f.write(sec05)

# 7. 06_choi_thu_demo_va_chuyen_mode.md
sec06 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:06_choi_thu_demo"
title: "Quy Chuẩn Nghiệp Vụ 06: Chế Độ Chơi Thử (Demo) vs Chơi Thật"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotGameSettings", "UIManagerModule"]
tags: ["demo_mode", "trial_mode", "real_mode", "mode_switch", "auto_spin_demo"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 6. 🎮 Chế Độ Chơi Thử (Demo / Trial) vs Chơi Thật

---

## 6.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **16** | **Vị trí nút Chơi Thử** | Nút Chơi Thử nằm trực tiếp trên Action Panel chính. | Nút Chơi Thử hiển thị trong bảng Rule / Paytable (khi click vào nút `?`). | **Theo ARK** | Về mặt kỹ thuật để trên Action Panel giúp người chơi dễ chuyển đổi nhanh hơn. |
| **17** | **Auto Spin khi mở popup Chơi Thật** | Đang Auto Spin ở Chơi Thử mà popup mời Chơi Thật xuất hiện: nếu chọn "Tiếp tục chơi thử" thì Auto Spin vẫn quay tiếp. | Khi chọn tiếp tục chơi thử, game **dừng Auto Spin** và trở về trạng thái Idle của Chơi Thử. | **Theo Ref** | Dừng Auto Spin để người chơi chủ động bấm quay lại. |
| **18** | **Thông báo khi chuyển sang Chơi Thật** | Khi chuyển từ Chơi Thử sang Chơi Thật: không có thông báo gì, game tự reload vào Chơi Thật. | Có popup thông báo rõ ràng: *"Đã kết thúc chế độ Chơi Thử, chuyển sang Chơi Thật"*. | **Theo Ref** | **Rất tốt**: Cần có popup cảnh báo để người chơi không bị nhầm lẫn tài khoản tiền thật. |
| **19** | **Chuyển sang Chơi Thật khi đang trúng Free Game** | Không cho phép chuyển về Chơi Thật khi đang trong Free Game hoặc chưa kết thúc session quay. | Có thể ép (force) người chơi quay về Chơi Thật ngay cả khi đang chơi thử lượt trúng Free Game. | **Theo Ref** | Hỗ trợ nút thoát/chuyển chế độ bất cứ lúc nào theo yêu cầu người chơi. |
"""

with open(f"{target_dir}/06_choi_thu_demo_va_chuyen_mode.md", "w", encoding="utf-8") as f:
    f.write(sec06)

# 8. 07_splash_loading_va_khung_hinh.md
sec07 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:07_splash_loading_screen"
title: "Quy Chuẩn Nghiệp Vụ 07: Splash, Loading & Khung Hình Hiển Thị"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["UIManagerModule", "GameConfig", "BasePortrait"]
tags: ["splash", "loading_bar", "tap_to_start", "orientation", "landscape", "fullscreen"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 7. 📱 Splash, Loading & Khung Hình Hiển Thị

---

## 7.1 Bảng Đối Chiếu Chi Tiết

| #No | Vị Trí / Tính Năng | Hành Vi ARK Studio (Cocos Creator) | Hành Vi Game Refer (Pixi.js) | Quyết Định (Final Solution) | Ghi Chú Kỹ Thuật & Bug ID |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **21** | **Chữ Loading trên Splash** | Có hiển thị chữ "Loading..." kèm animation hiệu ứng chữ trong lúc thanh loading đang chạy. | Không có chữ "Loading...", chỉ có thanh tiến trình (progress bar). | **Theo ARK** | Giữ chữ Loading để người chơi biết tiến độ tải tài nguyên. |
| **22** | **Tự động vào game sau Loading** | Sau khi loading 100%, hiển thị màn hình Splash và chờ người chơi chạm màn hình mới vào game. | Sau khi loading 100%, game **tự động chuyển thẳng vào Action Panel** mà không bắt người chơi bấm thêm. | **Theo Ref** | Tự động vào game để giảm thiểu thao tác chờ đợi của người chơi. |
| **23** | **Nút "Tap to Start"** | Có nút "TAP TO START" với hiệu ứng scale up/down chờ người chơi bấm. | Bỏ qua nút "Tap to Start", vào thẳng game. | **Theo Ref** | Đồng bộ với mục #22: vào game tự động. |
| **24** | **Màn hình Pre-ingame** | Có màn hình pre-ingame giới thiệu tính năng nổi bật. | Không có màn hình pre-ingame. | **Theo ARK** | Giữ pre-ingame nếu game có tính năng đặc sắc cần giới thiệu. |
| **25** | **Xử lý Background & Đổi Resolution** | Có background thay đổi theo độ phân giải màn hình. Khi đổi resolution trên PC game tự scale mượt mà. | Không có background (nền đen), đổi resolution trên PC game bị đen màn hình phải reload lại. | **Theo ARK** | Lắp background full size, responsive toàn bộ tỷ lệ màn hình và fix triệt để lỗi đen màn hình. |
| **71** | **Icon Game trên Web Browser** | Game ARK hiển thị Favicon / Web App Icon trên trình duyệt. | Không có icon web. | **Theo Ref / ARK** | Giữ Favicon web chuẩn nhận diện thương hiệu. |
| **72** | **Hỗ trợ Chế độ Landscape / Portrait** | Hiện thông báo khi xoay thiết bị không đúng hướng hỗ trợ. | Mặc định khóa xoay ngang (Landscape). Có nút Expand Fullscreen trên Android và gesture vuốt lên trên iOS. | **Theo Ref** | [Bug 86d4230c9](https://app.clickup.com/t/9008199668/86d4230c9)<br>Khóa chuẩn Landscape và hỗ trợ full screen gesture. |
"""

with open(f"{target_dir}/07_splash_loading_va_khung_hinh.md", "w", encoding="utf-8") as f:
    f.write(sec07)

print("All 8 modular Vietnamese documents successfully created!")
