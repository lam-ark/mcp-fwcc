---
id: "cc_slot_module:systems:reactive_data:key_deobfuscation_map_new_keys"
title: "Key De-obfuscation & Bandwidth Optimization with mapNewKeys"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "mapNewKeys", "bandwidth_optimization", "deobfuscation"]
---

# 🔑 Key De-obfuscation & Bandwidth Optimization with mapNewKeys

---

## 1. Tại Sao Cần Nén Key Từ Server?

Trong các game slot trực tuyến trên mạng di động 3G/4G:
- Hàng triệu gói tin WebSocket được truyền tải mỗi ngày.
- Việc rút gọn tên thuộc tính (ví dụ: `currentNormalGameWinAmount` ➔ `cna`, `freeGameMultiplier` ➔ `mulF`) giúp giảm **30% - 50% dung lượng payload JSON**, tăng tốc độ phản hồi và tiết kiệm dung lượng data cho người dùng.

---

## 2. Kỹ Thuật Giải Mã Chuẩn trong `GameDataStore`

Để mã nguồn Client luôn sáng sủa, dễ bảo trì với tên biến camelCase tường minh:

```typescript
@ccclass
export class GameDataStore9666 extends GameDataStore {
    override parseDataPS(data: any): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }

    mapDataPS(data: any): any {
        return this.mapNewKeys(data, {
            "cna": "currentNormalGameWinAmount",
            "cfa": "currentFreeGameWinAmount",
            "pMul": "previousMultiplier",
            "pMulF": "previousMultiplierFreeGame",
            "mulF": "freeGameMultiplier",
            "fgr": "freeGameRemain"
        });
    }
}
```

### Thuật Toán Hoạt Động của `mapNewKeys`:
```typescript
mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any> {
    Object.keys(playSession).forEach(key => {
        if (mapKeys[key]) {
            const newKey = mapKeys[key];
            playSession[newKey] = playSession[key];
            delete playSession[key]; // Xóa key viết tắt cũ
        }
    });
    return playSession;
}
```
Nhờ cơ chế này, toàn bộ các `BaseDataModule` và `Director` phía dưới chỉ cần đăng ký các tên key chuẩn (`freeGameMultiplier`, `currentNormalGameWinAmount`).
