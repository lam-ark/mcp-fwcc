---
id: "cc_slot_module:systems:reactive_data:state_immutability_and_deep_clone"
title: "State Immutability & Deep-Clone Memory Isolation"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "deep_clone", "state_immutability", "memory_isolation"]
---

# 🛡️ State Immutability & Deep-Clone Memory Isolation

---

## 1. Mối Nguy Hại của Shared Mutable Reference trong Game Slot

Hãy xét kịch bản sau:
1. Server trả về ma trận `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`.
2. `SlotTableData` nhận `matrix` và chuyển cho `SlotTableModule`.
3. `SlotTableModule` trong quá trình chạy hiệu ứng nổ biểu tượng (cascade) đã gán `matrix[0][1] = 0`.
4. Khi `SlotTablePaylineModule` đọc lại `matrix` để vẽ đường line thắng, nó thấy ô `[0][1]` mang giá trị `0` (bị mất dữ liệu gốc).

---

## 2. Giải Pháp Bất Biến Deep-Clone trong `GameDataStore.updateDataModules()`

Để đảm bảo mọi Component tiêu thụ dữ liệu hoàn toàn độc lập và an toàn:

```typescript
_dataModules.forEach((module) => {
    for (const key of module.registeredKeys) {
        if (this._dataMap.has(key)) {
            let value = this._dataMap.get(key);
            
            // TẠO BẢN SAO BỘ NHỚ HOÀN TOÀN ĐỘC LẬP
            if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
                value = JSON.parse(JSON.stringify(value));
            }
            
            module.onDataUpdate(key, value);
        } else {
            module.clearDataWithKey(key);
        }
    }
});
```

### Lợi ích:
* Mọi thao tác sắp xếp, cắt mảng hay biến đổi của 1 UI Module **không bao giờ** làm sai lệch dữ liệu gốc trong `GameDataStore.playSession`.
* Dữ liệu trong `GameDataStore` luôn là nguồn sự thật duy nhất (**Single Source of Truth**).
