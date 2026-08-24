---
id: "cc_slot_module:systems:script_pipeline:command_synthesis_and_payload_dispatch"
title: "Command Synthesis & Dynamic Payload Dispatch"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "command_synthesis", "payload_dispatch", "writer_module"]
---

# ✍️ Command Synthesis & Dynamic Payload Dispatch

---

## 1. Cơ Chế Sinh Lệnh Dạng Chuỗi (`string[]`)

Trong Writer, kịch bản được chia nhỏ thành các hàm `makeScript[ActionName]()`. Dựa trên trạng thái của ván quay, Writer lắp ghép mảng lệnh:

```typescript
// Trong FreeGameWriterModule.ts
makeScriptShowResultFinal(): Array<string | object> {
    const { freeGameRemain } = this.dataStore.playSession;
    
    if (freeGameRemain > 0) {
        // Còn lượt quay: Cập nhật badge số lượt và tiếp tục
        return this.getFreeGameRemainScript();
    } else {
        // Hết lượt: Hiện tổng kết Total Win và thoát về Base Game
        return this.getFreeGameEndScript();
    }
}
```

---

## 2. Hỗ Trợ Truyền Tham Số Động (`{ command, data }`)

Bên cạnh các lệnh không tham số (`string`), Writer có thể gửi các lệnh kèm dữ liệu động:

```typescript
// Writer trả về object chứa payload
makeScriptShowWinPayline(): Array<string | object> {
    const bigWinData = this.dataStore.getBigWinData();
    
    return [
        {
            command: "_showBigWin",
            data: bigWinData
        },
        "_showWinPayline"
    ];
}
```

Khi `ScriptExecutor` thực thi, nó nhận biết đối tượng `object` và gọi hàm trên Director với tham số `data`:
```typescript
await targetDirector[cmd.command].call(targetDirector, cmd.data);
```
