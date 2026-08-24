---
id: "cc_slot_module:systems:script_pipeline:async_promise_chaining_mechanism"
title: "Async Promise Chaining Mechanism in ScriptExecutor"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "async", "promise_chaining", "script_executor"]
---

# 🔗 Async Promise Chaining Mechanism in ScriptExecutor

---

## 1. Bản Chất Hoạt Động của Cỗ Máy `ScriptExecutor`

`ScriptExecutor` biến đổi danh sách lệnh thành chuỗi `async / await` tuần tự mà không gây nghẽn (non-blocking) luồng chính của Cocos Creator:

```mermaid
graph TD
    Queue[Mảng lệnh: Cmd_1, Cmd_2, Cmd_3] --> Pop1[1. Lấy Cmd_1: director._beforeSpinStart]
    Pop1 --> Exec1[2. Chạy director._beforeSpinStart ➔ Trả về Promise]
    Exec1 --> Wait1{Promise 1 đã Resolve?}
    
    Wait1 -->|Chưa: Đang chạy Tween/Delay| Wait1
    Wait1 -->|Đã Resolve| Pop2[3. Lấy Cmd_2: director._startSpinningTable]
    
    Pop2 --> Exec2[4. Chạy director._startSpinningTable ➔ Trả về Promise]
    Exec2 --> Wait2{Promise 2 đã Resolve?}
    
    Wait2 -->|Đã Resolve| Pop3[5. Lấy Cmd_3: director._stopSpinningTable]
    Pop3 --> Complete[Toàn bộ Action hoàn tất!]
```

---

## 2. Mã Nguồn Cốt Lõi (Core Implementation)

```typescript
export class ScriptExecutor {
    async executeCommands(commands: Array<string | any>, target: any): Promise<void> {
        for (const item of commands) {
            let funcName = "";
            let args = null;

            if (typeof item === "string") {
                funcName = item;
            } else if (typeof item === "object" && item.command) {
                funcName = item.command;
                args = item.data;
            }

            if (target && typeof target[funcName] === "function") {
                // Đảm bảo method luôn được await dù trả về Promise hay void
                await target[funcName](args);
            }
        }
    }
}
```
Nhờ cơ chế này, mọi hành vi diễn hoạt đồ họa phức tạp nhất (chờ cột dừng 1.5s, chờ đếm tiền 4s, chờ popup đóng) đều được xâu chuỗi gọn gàng, chuẩn xác từng mili-giây.
