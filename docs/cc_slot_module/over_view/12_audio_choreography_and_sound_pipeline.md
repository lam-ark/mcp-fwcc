---
id: "cc_slot_module:overview:audio_choreography_and_sound_pipeline"
title: "Audio Choreography & Sound Subsystem Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "audio_pipeline", "sound_player", "sound_choreography", "bgm", "sfx", "near_win_sound"]
---

# 🎵 Audio Choreography & Sound Subsystem Pipeline

---

## 1. Vũ Đạo Âm Thanh Đa Tầng (Multi-Tier Audio Choreography)

Trong thiết kế game slot chuẩn casino, âm thanh chiếm 50% trải nghiệm tạo cảm xúc hồi hộp (anticipation) và thỏa mãn (reward). `cc-slot-module` quản lý âm thanh qua 3 kênh chính:

```mermaid
graph TD
    SoundSubsystem[Slot Audio Engine]
    
    subgraph 1. BGM Channel (Music)
        SoundSubsystem --> BGM[SlotSoundPlayerModule: Play Mode BGM]
        BGM --> NormalBGM[Normal Game BGM]
        BGM --> FreeBGM[Free Game High-Tension BGM]
        BGM --> BonusBGM[Bonus Game Mini-Game BGM]
    end

    subgraph 2. Table Motion SFX
        SoundSubsystem --> TableSound[SlotTableSoundEffectModule]
        TableSound --> SpinLoop[Reel Spinning Loop SFX]
        TableSound --> ReelStop[Reel Stop Thud SFX]
        TableSound --> NearWin[Near-Win Heartbeat / High Tension SFX]
        TableSound --> ScatterLand[Scatter / Bonus Bell Stinger]
    end

    subgraph 3. Reward & Celebration SFX
        SoundSubsystem --> WinSound[Win Celebration Audio]
        WinSound --> CoinRoll[Coin Count-Up Escalating Roll]
        WinSound --> WinLevelSting[Big Win / Mega Win Fanfares]
        WinSound --> EndWinChime[End Count Summary Chime]
    end
```

---

## 2. Dòng Chảy Âm Thanh Theo Chu Kỳ Ván Quay (Audio Lifecycle Flow)

| Pha Quay | Tín hiệu Kích hoạt | Hành vi Âm thanh |
| :--- | :--- | :--- |
| **1. Bấm Spin** | `_startSpinningTable` | Phát SFX nút bấm (`SPIN_CLICK`), hạ nhẹ volume BGM và phát `SPIN_LOOP` vô tận. |
| **2. Cột Dừng Thường** | `onReelStop` | Dừng `SPIN_LOOP` của cột đó, phát tiếng va đập (`REEL_STOP`). |
| **3. Cột Dừng Scatter (Anticipation)** | `onReelPreStop` | Phát tiếng chuông `SCATTER_LAND` cao độ. Nếu đã có 2 Scatter, bật nhạc nền dồn dập (`NEAR_WIN_LOOP`) cho các cột còn lại. |
| **4. Đếm Tiền Thắng** | `_showWinPayline` | Phát tiếng tiền xu tuôn trào (`COIN_ROLL_LOOP`). Tần số âm thanh tăng dần khi số tiền nhảy lên mốc Big Win. |
| **5. Kết Thúc Thắng** | `_resetOnSpin` | Phát tiếng chuông chốt tiền (`END_WIN_CHIME`), nâng âm lượng BGM trở lại bình thường. |

---

## 3. Quản lý Mute & Focus trên Web Mobile

Hệ thống âm thanh trong Slot Framework tự động xử lý:
1. **Audio Context Unlock**: Tự động mở khóa Web Audio API ngay trong lần chạm đầu tiên của người chơi trên trình duyệt di động (iOS Safari / Android Chrome).
2. **Page Visibility Interception**: Tự động tạm dừng âm thanh khi người chơi chuyển tab (`document.hidden`) và tiếp tục khi quay lại mà không bị giật tiếng.
3. **Master Volume & Mute Cache**: Lưu trạng thái tắt/mở âm thanh vào Local Storage (`cc.sys.localStorage`) đồng bộ qua các phiên chơi.
