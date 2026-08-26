---
id: "transfer-ark:business_mapping:cocos_vs_pixijs_refer_discrepancy_matrix"
title: "Bảng Đối Chiếu Quy Chuẩn Nghiệp Vụ: Cocos Creator (ARK Studio) vs Pixi.js (Game Refer)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotButtonNormal", "WinEffectModule", "TotalWinModule", "AutoSpinPanelv3", "BetHistoryDetailManagerBase"]
tags: ["cocos_vs_pixijs", "refer_game", "qa_matrix", "discrepancy", "specification", "ark_business"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering and QA Team"
---

# 📊 Bảng Đối Chiếu Quy Chuẩn Nghiệp Vụ: Cocos Creator (ARK Studio) vs Pixi.js (Game Refer)

> **Tài liệu gốc**: `Compare Cocos vs Pixijs.xlsx`  
> **Mục đích**: Quy chuẩn hóa 100% các hành vi giao diện (UI), trải nghiệm người chơi (UX), quy tắc chuyển cảnh và xử lý logic giữa engine Cocos Creator của ARK Studio và Game mẫu Refer (Pixi.js) để QA, Dev và GD làm căn cứ nghiệm thu.

---

## 📌 Tóm Tắt Các Nhóm Nghiệp Vụ

| Nhóm Nghiệp Vụ | Số lượng mục | Định hướng giải pháp chính |
| :--- | :---: | :--- |
| **1. Base Game & Action Panel (Nút bấm, Cược, Tương tác)** | 9 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **2. Big Win, Free Game & Mode Transitions** | 16 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **3. Lịch sử cược (LSC) & Lịch sử hũ (LSH)** | 21 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **4. Popups, Menu Setting, Âm thanh & Mạng** | 9 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **5. Matrix, Paylines & Trả thưởng (KTT, Ô Win)** | 8 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **6. Chế độ Chơi Thử (Demo) vs Chơi Thật** | 4 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **7. Splash, Loading & Khung hình hiển thị** | 7 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |
| **8. Các hạng mục khác & Quy chuẩn chung** | 3 mục | Theo chuẩn Ref / Phù hợp SDK Cocos |

---

## 1. Base Game & Action Panel (Nút bấm, Cược, Tương tác)

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **2** | - | - Các nút trên màn hình spin bị disable khi reel đang xoay và không thể bấm được (ngoại trừ nút Turbor và nút Sound trong FG) | - Không có button nào bị disable cả và người chơi có thể thao tác khi reel đang xoay | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d418ykx |
| **3** | - | - Mở Bet Options khi bấm vào Bet size | - Không mở Bet Options khi bấm vào Bet size và không có Bet Option | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d419402 |
| **4** | - | - Auto spin:<br>+ Có pop up Auto Spins<br>+ Mở pop-up Auto spin -> Nhấn chọn lượt auto -> Bấm button start | - Auto spin:<br>+ Không có Auto Spin<br>+ Nhấn giữ spin button để tự quay | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d41af10 |
| **7** | - | - Game có Max Win | - Game không có Max Win | **Theo Ref** | - |
| **31** | Spin button | Có 5 trạng thái:<br>+ Idle<br>+ Active<br>+ Disable<br>+ Có effect F2R<br>+ Lock khi auto spin | Chỉ có 3 trạng thái:<br>+ Idle<br>+ Spin<br>+ Lock khi auto spin | **Theo Ref** | - |
| **55** | Khi bấm tắt, button spin sẽ chuyển từ UI Auto sang UI bình thường ngay lập tức | Khi bấm tắt, nếu chưa end lượt, button spin sẽ vẫn hiển thị UI Auto; sau khi end lượt mới chuyển về UI bình thường | WA | **Cộng trừ tiền qua tool apply ngay, nếu đang trong lượt spin thì apply sau khi end session** | - |
| **56** | Khi bấm tắt, button spin sẽ chuyển từ UI Auto sang UI bình thường ngay lập tức | Cộng trừ tiền qua tool reload mới update số hiển thị ở ví | Check thêm ở 1 số game mới 96xx | **Theo Ref** | - |
| **57** | AP | Khi thiếu tiền, bấm spin sẽ hiển thị pop up thiếu tiền, reel không quay | Khi thiếu tiền, bấm spin reel vẫn quay và hiện pop up thiếu tiền | **AP: chỉ có 1 giá trị liên quan đến tiền cược** | - |
| **** | AP | - Khi idle từ 30 phút trở lên thì xuất hiện pop up idle trong game | - Không xuất hiện pop up idle | **Theo Ref** | - |

---

## 2. Big Win, Free Game & Mode Transitions

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **13** | Big win | - BW vẫn diễn bình thường dù game đang chạy Turbo ON / F2R | - BW bị skip khi chơi game với Turbo On / F2R, thay vào đó là effect tiền rơi trên màn hình | **Theo Ref** | - |
| **14** | Free game | - Không có có button như Setting, Info trong FG | - Có Setting, Info trong FG và người chơi có thể bấm vào nó | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d41ahrn |
| **15** | Auto Spin | - Khi đang Auto mà vào FG thì khi kết thúc FG thì Auto spin vẫn tiếp tục | - Game không có Auto ở Normal khi từ FG ra | **Theo Ref** | **Dev**: Có thể sdk không hỗ trợ chồng chéo giữa số lượt auto và số lượt freegame |
| **34** | Các cột: Time, Honor, Total Bet, Total Win
- Cột Time có format: dd/mm hh:mm:ss | Các cột: Time, Honor, Bet, Jackpot<br>- Cột Time có format: dd/mm hh:mm | Lịch sử cược | **Theo Ref** | - |
| **50** | - | - Các lượt spin ở Free Game:<br>+ Hiển thị title button "Free Game" đi kèm với số của lượt quay đó và số tiền nhận được của lượt FG đó.<br>+ Mỗi lượt quay trong Free game sẽ đc đánh số | + Không có | **Theo Ref** | - |
| **51** | Theo Ref nhưng dùng từ Free Spins thay cho Free Game | + Hiển thị Turn A/B - Round X/Y | Setting menu | **Theo Ref** | - |
| **61** | - Game version không xuất hiện trong AP mà chỉ xuất hiện ở Setting menu | Free Game | Free Game | **Theo Ref** | - |
| **62** | + Symbol | Click không có function | + Payline | **Theo Ref** | - |
| **63** | HIển thị payline cho mỗi đường thắng ở matrix board | Không hiển thị payline cho từng đường đứng, chỉ hiển thị số tiền tổng thắng được của tất cả các line ở matrix board | + Spin button | **Theo Ref** | - |
| **64** | Có 3 trạng thái:
+ Active
+ Disable
+ Có effect F2R | Chỉ có 1 trạng thái spin duy nhất, không có trạng thái disable và trạng thái F2R | + Bet option | **Theo Ref** | - |
| **65** | Hiển thị số tiền cược của user ở lượt đó | Hiển thị các value giống AP normal: Giá xu, Cược, Tổng | + Ô win | **Theo Ref** | - |
| **66** | Ô win hiển thị $0.00 khi spin ko trúng gì ở normal và vào free game
Ô win hiển thị số tiền thắng của lượt nếu có thưởng, cộng dồn ở các lượt tiếp theo | Không có ô win | + Sound  button | **Theo Ref** | - |
| **67** | Hiển thị button sound để bật tắt âm thanh của game | Không có button sound, chỉ có button setting để bật tắt sound trong lượt free game | + Khung trả thưởng | **Theo Ref** | - |
| **68** | KTT hiển thị tip khi không trúng gì, hiển thị số tiền thắng khi có thưởng | Hiên thị trống khi ko trúng gì ở lượt normal vào free game<br>Hiển thị số tiền khi có thưởng, cộng dồn ở các lượt refill tiếp theo | F2R trong game | **Có thể F2R trong game** | - |
| **69** | Không thấy đề cập có tính năng F2R trong game hay không | Follow theo game Ref và SDK<br>Nếu clone game ngang sang màn hình dọc thì sẽ thử làm F2R cho kiểu này | Total win | **Theo ARK** | - |
| **70** | End lượt nếu có tiền thắng, show pop up Total win và diễn anim đếm tiền
End lượt nếu không có tiền thắng, không show pop up total win | End lượt show pop up tổng thắng với số tiền cuối cùng, không diễn anim đếm tiền | Icon web | **Game ở Ark thường sẽ có Icon web trên browser** | - |

---

## 3. Lịch sử cược (LSC) & Lịch sử hũ (LSH)

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **5** | - | - Click vào Ô Win mở LSC | - Click vào Paybar không mở LSC | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d41a0b0 |
| **6** | - | - LSC, LSH là pop up dạng full screen nên không thể click ra bên ngoài để tắt được | - LSC, LSH là dạng pop up không full screen nên có thể bấm bên ngoài và tắt đi | **Theo Ref** | - |
| **12** | LSC | - Có thể copy dc ID của phiên để check LSC redirect | - Không thể copy đc ID của phiên | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d419xxe<br>**Dev**: Thêm copy vào không cần thiết, user report với psid ngắn là đủ |
| **32** | Lịch sử hũ | Khi chưa có records nào:<br>- Không hiển thị button trang trước/sau | (Tương tự với LSC) | **Theo Ref** | - |
| **33** | - | - Vẫn hiển thị buttons trang trước/sau, nhưng disable | (Tương tự với LSC) | **Theo Ref** | - |
| **35** | - | Hiển thị highlight khi rê chuột đến các dòng LCS | Có | **Theo Ref** | **QA/Bug**: Chưa có cheat |
| **36** | - | Không highlight khi rê chuột đến các dòng LCS, chỉ có effect hover khi đưa chuột vào button "Chi tiết" | Nếu lượt đó trúng FreeGame/ Jackpot/ Maxwin sẽ có thêm chấm tròn màu dưới button ">>" | **Theo Ref** | - |
| **37** | - | Các cột: Time, Total Bet, Total Win | Các cột: #, Time, Lines, Bet, Win, Result | **Theo Ref** | **Dev**: Page X/Y |
| **38** | Page X | Page X, prefab sdk | Lịch sử cược chi tiết | **Theo Ref** | - |
| **39** | - | Phiên:<br>- Có button coppy phiên<br>- Hiển thị phiên trên mỗi trang LSC chi tiết | - Không có button coppy phiên<br>- Chỉ hiển thị phiên ở trang Tổng kết, các trang còn lại không hiển thị | **Theo Ref** | - |
| **40** | - | - Chỉ hiển thị màn hình tổng kết ở lượt có trúng free game | - Màn hình tổng kết hiển thị ở cả lượt chỉ trúng normal | **Summary:
- Hiển thị số lượt freespins** | - |
| **41** | - | - Không có | - Màn hình tổng kết hiển thị ở cả lượt chỉ trúng normal | **Summary:
- Hiển thị số lượt freespins** | - |
| **42** | - | Theo Ref - BE trả về sao hiện vậy | Base game/ Free spins:<br>- Hiển thị thời gian theo forrmat: dd/mm - hh:mm:ss | **Theo Ark** | - |
| **43** | - | - Các lượt spin ở Normal:<br>+ Hiển thị title pop-up "Base Game" | - Các lượt spin ở Normal:<br>+ Hiển thị title button "Normal" | **Theo Ref** | - |
| **43** | - | + Hiển thị các ô: Total Bet, Win, Total Win | + Không có | **Theo Ref** | - |
| **44** | - | + Hiển thị Round X/Y, với X là số lần refill/respin trong 1 lượt | + Không có text "Round X/Y". Mỗi lượt refill/respin sẽ hiển thị ở 1 trang khác nhau | **Theo Ref** | - |
| **45** | - | + Có section "Payout"<br>++ Có combine: Chi tiết win combine của từng loại symbol<br>++ No combine: Hiển thị text "There is no winning combination" | - Các lượt spin ở Normal:<br>+ Hiển thị title button "Normal" | **Theo Ref** | - |
| **46** | - | + Không có "Payout"<br>++ Có combine: "Normal : $XX.XX" hoặc "Respin Z : $XX.XX"<br>++ No combine: Không hiển thị số tiền | + Có section "Rewards" để record phần thưởng | **Theo Ref** | - |
| **47** | - | + Ở title: Chỉ có button back, không có button close | + Ở title: Chỉ có button close, không có button back | **Theo Ref** | - |
| **48** | - | + Khi bấm vào back button có thể trở lại LSC | + Khi bấm vào back button không thể trở lại LSC, muốn trở lại LSC thì bấm button Close | **Theo Ref** | - |
| **49** | - | + Ở trang đầu không có button previous page, trang cuối không có button next page | + Ở trang đầu hiển thị button previous page bị disable, trang cuối hiển thị button next page bị disable | **- Các lượt spin ở Freegame:
   + Hiển thị title "Free spins"** | - |

---

## 4. Popups, Menu Setting, Âm thanh & Mạng

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | AP | - Bấm bên ngoài pop up Setting không tắt pop up | - Bấm bên ngoài bất cứ pop up nào cũng tắt pop up | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d418xb5<br>**Link game refer**: https://iframe.staging.enostd.gay/vi/kts9870/?token= |
| **9** | Game Rules/Paytable | - Game Rules và Paytable bố trí riêng biệt | - Tất cả thông tin của game được sắp xếp vào 1 pop up Info, bao gồm cả game Rules và các tính năng của game | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d4199nk |
| **10** | Exit | - Bấm vào nút Exit thì mở ra confirmation pop up với 2 lựa chọn No và Confirm | - Bấm vào nút Exit thì thoát game | **Theo ARK** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d419vpn<br>**Dev**: Nên có popup xác nhận |
| **11** | - | - Nút Exit chỉ hiển thị trong Setting Menu khi link game có param &ru | - Luôn hiển thị trong game, trường hợp link game k có param &ru thì nút Exit không có function | **Theo Ref** | - |
| **20** | Sound setting | Game chỉ có 1 button setting sound cho cả BGM và SFX trong setting menu hoặc trong free game | - Trong setting, có 2 button riêng biệt setting cho BGM và SFX | **Theo Ref - Đặc thù của app** | - |
| **52** | Gồm các button:
- Link có ru: Exit, Sound, Paytable, Rules, History, Close
- Link không có ru: Sound, Paytable, Rules, History, Close | Chỉ có 1 kiểu hiển thị:<br>- Gồm: Check box Nhạc nền, Check box Âm Thanh, button LSH, button LSC | Touch icon | **Theo Ref** | - |
| **53** | - Các buttons enable: Icon Con trỏ đổi thành icon Bàn tay khi rê chuột vào
- Các buttons disable: Icon Con trỏ | Hiện icon Con trỏ với tất cả button | Pop-up "Thông báo không có mạng, đang thử lại" | **Theo Ref** | - |
| **54** | - Khi tắt mạng sẽ hiển thị thông báo "No internet connection, loading again... (%param%)"
- Sau 10 lần thử hiển thị pop-up:
   + Không ru: "Could not connect to the server. /nPlease wait." & không có button
   + Có ru: "Could not connect to the server. \nPlease wait or click confirm \nto exit the game." & có button "Confirm" -> Click vào sẽ direct đến link ru | - Không hiển thị thông báo<br>- Sau 1 lúc hiển thị pop-up "Thông báo /n Bị mất kết nối tới máy chủ /n Đang kết nối lại":<br>+ Không ru: Không có button<br>+ Có ru: Có button "Xác nhận" -> Click vào sẽ direct đến link ru | Tắt Auto spin | **Theo Ref** | - |
| **73** | - CNT | Không có cheat | Không có | **-** | - |

---

## 5. Matrix, Paylines & Trả thưởng (KTT, Ô Win)

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **8** | Matrix | - Bấm vào symbol có thể mở ra Payout | - Bấm vào symbol không có function | **Theo Ref** | **QA/Bug**: https://app.clickup.com/t/9008199668/86d41a08z |
| **27** | Payline | Tiền thắng từng win combine sẽ hiển thị trên payline để dễ phân biệt khi ăn được combine có nhiều loại symbol cùng lúc | Khi trúng combine của nhiều loại symbol, chỉ hiển thị 1 payline duy nhất, với số tiền bằng tổng tiền của tất cả combine | **Theo Ref** | - |
| **28** | KTT | - Idle hoặc no combine: Hiển thị tip<br>- Combine: Hiển thị "Win $XXX.XX" / "Total Win $YYY.YY" | - Idle hoặc no combine: Không có tip, hiển thị ô trống<br>- Khi có combine: Chỉ hiển thị $XXX.XX | **Theo Ref** | - |
| **29** | Ô Win | Có | Không có | **Theo Ref** | - |
| **30** | Currency | Chỉ có $, không cử dụng cent nữa | Vẫn sử dụng cent | **Theo Ref** | - |
| **58** | AP: có 3 value liên quan đến tiền cược: Giá xu, Cược, Tổng | Theo Ref  - GDD check denom/credit (checking done) | Matrix board | **Đối với game ăn all ways, hiển thị text all ways ở matrix board** | - |
| **59** | AP | Hiển thị số cách ăn ở lượt spin hiện tại | Theo Ref - Với các game có số line ăn k cố định | **Theo Ref** | - |
| **60** | AP | Khi lượt spin chưa kết thúc, chỉ có button turbo có function | Khi lượt spin chưa kết thúc, user có thể bấm mở LSH, setting menu, Luật chơi trả thưởng<br>Chỉ có button tăng giảm Giá xu là disable | **Theo Ref** | - |

---

## 6. Chế độ Chơi Thử (Demo) vs Chơi Thật

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **16** | Chơi thử | Button chơi thử nằm ở AP | - Button chơi thử hiển thị trong Rule/Paytable (click vào button dấu hỏi) | **Theo ARK** | **Dev**: Theo GD, về mặt kỹ thuật thì để đâu cũng được. |
| **17** | - | - Khi đang Auto spin mà pop up Chơi Thật được trigger ở chế độ Chơi Thử thì khi lựa chọn tiếp tục chơi thử thì Auto Spin vẫn tiếp tục | - Game trở về idle ở Normal của Chơi Thử khi lựa chọn tiếp tục chơi Thử | **Theo Ref** | - |
| **18** | - | Khi chuyển từ chơi thử sang chơi thật, không có thông báo gì | Khi chuyển từ chơi thử sang chơi thật, có thông báo kết thúc chơi thử | **Theo Ref** | **Dev**: Tốt, nên có thông báo này để người chơi đỡ nhầm mất tiền |
| **19** | - | Không thể về chơi thật khi đang trong free game hoặc chưa end session | Có thể force user quay về chơi thật khi đang chơi thử lượt trúng free game | **Theo Ref - Check lại matrix trở lại xem ntn** | - |

---

## 7. Splash, Loading & Khung hình hiển thị

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **21** | Loading bar | Có hiển thị text "Loading..."  & anim cho text trong khi đang loading tại màn hình Splash | Không có text "Loading..." | **Theo Ark** | - |
| **22** | Splash | - Sau khi loading xong, hiển thị màn hình splash -> User tap vào splash thì mới vào AP<br>- Có anim trên Splash | Sau khi loading xong, game tự động vào AP | **Theo Ref** | - |
| **23** | Splash
Button "Tap to Start" | - Sau khi loading xong thì thanh loading biến mất, text "TAP TO START" hiện ra<br>- text "TAP TO START" có anim scale up và down. | Sau khi loading xong, game tự động vào AP | **Theo Ref** | - |
| **24** | Pre-ingame | Có | Không có | **Theo Ark** | - |
| **25** | Background | Có background, background thay đổi theo resolution | - Không có background (chỉ hiển thị nền đen)<br>- Khi thay đổi resolution trên PC, game không thay đổi theo -> Phải reload/chuyển tab khác rồi quay lại thì game ref mới nhận res mới | **Lắp background full size vào. Fix bug đen màn hình.** | - |
| **71** | Ko có | Theo Ref | Landscape/ Portrat support | **Hiện thông báo khi không support chế độ Landscape/Portrait** | **QA/Bug**: - Không có thông báo gì cả, chỉ mặc định xoay Landscape. 
- Dù xoay màn hình hướng nào thì game vẫn luôn ở chế độ Landscape
- Có button để Expand ra full screen trên Android / trên iOS thì hướng dẫn hình bàn tay vuốt lên để expand full screen |
| **72** | The Ref | https://app.clickup.com/t/9008199668/86d4230c9 | Resume pop up | **-** | **QA/Bug**: Có resume pop up
- Click hoặc space thì đóng pop up |

---

## 8. Các hạng mục khác & Quy chuẩn chung

| #No | Vị trí / Feature | Hành vi ARK Studio (Cocos) | Hành vi Game Refer (Pixi.js) | Quyết định (Final Solution) | Ghi chú & Links |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **#No** | Location | Game behavior | - | **Final solution - Landscape** | **QA/Bug**: QA comment/ Bug ID<br>**GD**: GD comment<br>**Dev**: Dev comment |
| **** | - | ARK studio | Game ref | **-** | - |
| **26** | Jackpot  Notification | Có | CNT | **Check SDK - hoặc cung cấp cheat để QC Test** | **QA/Bug**: Chưa có cheat |

---
