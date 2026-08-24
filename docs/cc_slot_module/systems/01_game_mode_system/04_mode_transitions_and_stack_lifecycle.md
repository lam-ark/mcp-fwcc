---
id: "cc_slot_module:systems:game_mode:mode_transitions_and_stack_lifecycle"
title: "Game Mode Transitions, Stack Management & Lifecycle"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "transitions", "lifecycle", "stack_management", "teardown"]
---

# 🔄 Game Mode Transitions, Stack Management & Lifecycle

---

## 1. Vòng Đời Chuyển Đổi Game Mode (Mode Transition Lifecycle)

Việc chuyển đổi giữa các Game Mode trong `cc-slot-module` tuân theo một quy trình 4 giai đoạn nghiêm ngặt:

```mermaid
sequenceDiagram
    autonumber
    participant Normal as NormalGameDirectorModule
    participant GM as GameDirector (Stack Manager)
    participant Free as FreeGameDirectorModule
    participant UI as Cutscene / Transition VFX

    Note over Normal: 1. Trigger Phát hiện Thắng Feature
    Normal->>UI: _showTransitionFreeGame()
    Normal->>GM: emit(SWITCH_GAME_MODE, GAME_MODE_ENUM.FREE_GAME)
    
    Note over Normal,Free: 2. Exit Mode Cũ & Enter Mode Mới
    Normal->>Normal: exitGameMode() (Đóng băng tương tác, tắt BGM)
    GM->>Free: enterGameMode(FREE_GAME)
    
    Note over Free: 3. Khởi tạo Trạng thái Chế độ Mới
    Free->>Free: enter() (Bật Free BGM, syncSpinTimes, syncNormalTable)
    Free->>Free: onBeforeSpinStart() (Khởi chạy vòng quay đầu)
    
    Note over Free,Normal: 4. Kết Thúc & Trở về Base Game
    Free->>UI: _showUnskippedCutscene(TOTAL_WIN)
    Free->>Free: _gameExit() (CLEAR_PAYLINES, SYNC_TABLE)
    Free->>GM: emit(EXIT_GAME_MODE)
    GM->>Normal: enterGameMode(NORMAL_GAME)
```

---

## 2. Các Điểm Móc Vòng Đời (Lifecycle Hooks)

Mọi `GameModeDirectorModule` đều hỗ trợ các phương thức vòng đời có thể override:

1. **`init(): void`**: Khởi tạo ban đầu khi Node được mount. Tạo `moduleEvent` và gắn vào `moduleList`.
2. **`enter(): void`**: Được gọi khi Mode chính thức nhận quyền điều khiển màn hình. Nơi khởi tạo BGM, cập nhật HUD và dựng bảng quay ban đầu.
3. **`onPreResumeGameMode()` / `onResumeGameMode()`**: Được gọi khi người chơi kết nối lại (reconnect) giữa chừng tính năng.
4. **`exitGameMode(): Promise<void>`**: Được gọi khi Mode sắp bị ẩn đi. Nơi dừng các hoạt họa đang chạy dở.
5. **`resetAllEffectAndTasks(): void`**: Được gọi khi xảy ra lỗi mạng hoặc người chơi bị force-reset về trạng thái Idle.
6. **`onDestroy(): void`**: Giải phóng toàn bộ Event Bus cục bộ (`moduleEvent.destroy()`), dừng các tween đang chạy và gọi `super.onDestroy()`.
