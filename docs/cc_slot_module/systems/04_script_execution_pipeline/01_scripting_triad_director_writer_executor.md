---
id: "cc_slot_module:systems:script_pipeline:scripting_triad"
title: "The Scripting Triad: Director, Writer & ScriptExecutor"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "scripting_triad", "director", "writer", "script_executor"]
---

# 🎭 The Scripting Triad: Director, Writer & ScriptExecutor

---

## 1. Phân Tách Trách Nhiệm Rõ Ràng (Separation of Concerns)

Hệ thống kịch bản của Slot Framework được xây dựng trên sự phối hợp hoàn hảo của 3 thành phần:

```mermaid
graph LR
    subgraph 1. The Director (Thực thi Giao diện)
        Dir[GameModeDirectorModule]
        Dir -->|1. Yêu cầu kịch bản runAction| Wrt
        Dir <---|4. Thực thi method bất đồng bộ| Exec
    end

    subgraph 2. The Writer (Quyết định Kịch bản)
        Wrt[GameModeWriterModule]
        Wrt -->|2. Trả về mảng chuỗi lệnh| Exec
    end

    subgraph 3. The Executor (Điều phối Hàng đợi)
        Exec[ScriptExecutor]
        Exec -->|3. Lặp tuần tự từng lệnh| Dir
    end
```

---

## 2. So Sánh Vai Trò của 3 Thành Phần

| Thành phần | File Nguồn | Bản chất & Vai trò | Có Phụ thuộc Scene Cocos? |
| :--- | :--- | :--- | :--- |
| **`GameModeDirectorModule`** | `GameModeDirectorModule.ts` | **Người thi hành**: Nắm giữ tham chiếu Node, Tween, Âm thanh và các hàm diễn hoạt (`_startSpinningTable`, `_showWinPayline`). | `CÓ` (Gắn trên Node) |
| **`GameModeWriterModule`** | `GameModeWriterModule.ts` | **Người lập kế hoạch**: Đọc dữ liệu `playSession`, tính toán logic và sinh ra mảng tên lệnh `string[]`. | `KHÔNG` (Thuần logic TypeScript, dễ viết Unit Test) |
| **`ScriptExecutor`** | `ScriptExecutor.ts` | **Cỗ máy trung gian**: Lần lượt gọi từng hàm trên Director, chờ Promise trước hoàn thành rồi mới gọi hàm sau. | `KHÔNG` (Thuần thuật toán hàng đợi Promise) |
