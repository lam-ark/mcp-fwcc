---
id: "cc_slot_module:systems:table_engine:symbol_pooling_and_gc_optimization"
title: "Symbol Node Pooling & Mobile Garbage Collection Optimization"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "node_pool", "gc_optimization", "memory_management", "performance"]
---

# ⚡ Symbol Node Pooling & Mobile Garbage Collection Optimization

---

## 1. Vấn Đề Cấp Phát Rác Bộ Nhớ (Garbage Collection Spikes)

Trên thiết bị di động (Mobile Web / Webview):
- Mỗi lần quay, hàng chục Symbol mới được tạo ra và hàng chục Symbol cũ bị hủy (`cc.Node.destroy()`).
- Nếu liên tục `new cc.Node()` và `node.destroy()`, bộ gom rác JavaScript (Garbage Collector) sẽ bị kích hoạt định kỳ, gây ra hiện tượng giật khung hình (frame drop / micro-stutter) làm hỏng trải nghiệm mượt mà của ván quay.

---

## 2. Giải Pháp Node Pooling trong `SlotCustomNodePool`

`SlotCustomNodePool` duy trì một từ điển các `cc.NodePool` được đánh chỉ mục theo `symbolId`:

```mermaid
graph TD
    Request[Yêu cầu Symbol: getSymbolFromPool id] --> CheckPool{NodePool[id].size > 0?}
    
    CheckPool -->|Có sẵn trong Pool| Reuse[node = NodePool[id].get ➔ Tái sử dụng]
    CheckPool -->|Pool rỗng| Create[node = cc.instantiate prefab ➔ Tạo mới]
    
    Reuse --> Init[SlotSymbolModule.initSymbol]
    Create --> Init
    Init --> Attach[Gắn vào Reel Node]
    
    Attach --> SpinOver[Kết thúc cuộn / Dừng cột]
    SpinOver --> Return[returnSymbolToPool: NodePool[id].put node]
```

### Lợi ích Đạt được:
1. **Zero Runtime GC**: Sau 1-2 ván quay khởi động, số lượng Node trong Pool bão hòa và không còn bất kỳ lệnh `cc.instantiate()` nào diễn ra trong suốt quá trình chơi.
2. **Duy trì ổn định 60 FPS** ngay cả trên các dòng máy Android phân khúc thấp.
