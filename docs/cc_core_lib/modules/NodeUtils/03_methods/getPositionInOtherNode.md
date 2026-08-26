---
id: "cc_core_lib:NodeUtils:methods:getPositionInOtherNode"
title: "Cách dùng NodeUtils.getPositionInOtherNode() & Giải thích chi tiết"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "methods", "getPositionInOtherNode", "usage", "guide"]
---

# 📖 `NodeUtils.getPositionInOtherNode()`

> **Mô tả ngắn**: Tính toán và chuyển đổi tọa độ của một Node sang hệ tọa độ của một Node khác (World Space -> Node Space).

---

## 🎯 1. Chức Năng & Nhiệm Vụ (What it does)

- Hữu ích khi di chuyển coin bay từ ô Symbol trên ma trận về vị trí Label tiền trên HUD.
- Tự động xử lý Anchor Point và Scale của các node cha.

---

## 📋 2. Tham Số & Kiểu Trả Về (Signature & Parameters)

```typescript
getPositionInOtherNode(spaceNode: cc.Node, targetNode: cc.Node): cc.Vec3 | null
```

| Tham số | Kiểu dữ liệu | Trạng thái | Giải thích |
| :--- | :--- | :---: | :--- |
| `spaceNode` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho getPositionInOtherNode |
| `targetNode` | `cc.Node` | `Bắt buộc` | Tham số truyền vào cho getPositionInOtherNode |

- **Kiểu trả về**: `cc.Vec3 | null`

---

## 💡 3. Ví Dụ Code Cách Sử Dụng (Practical Usage Example)

```typescript
const { NodeUtils } = globalThis.eno;

// Lấy vị trí của symbolNode trong hệ tọa độ của flyingCoinContainer
const targetPos = NodeUtils.getPositionInOtherNode(flyingCoinContainer, symbolNode);
coinNode.setPosition(targetPos);
```

---

## ⚠️ 4. Lưu Ý Quan Trọng Khi Dùng (Notes & Gotchas)
- Đảm bảo các đối tượng tham chiếu (`cc.Node`, `callback`) hợp lệ trước khi gọi.
- Nếu phương thức tạo ra animation/timer/tween, hãy đảm bảo đã dọn dẹp trong `onDestroy()`.
