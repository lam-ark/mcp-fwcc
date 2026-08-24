---
id: "cc_slot_module:systems:reactive_data:index"
title: "Reactive Data System & Reconnection Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "data_store", "reconnection", "index"]
---

# 🔄 Reactive Data System & Reconnection Architecture Index

Chào mừng bạn đến với chuyên đề chuyên sâu về **Hệ thống Dữ liệu Phản ứng & Khôi phục Phiên chơi (Reactive Data & Reconnection Architecture)** trong `cc-slot-module`.

---

## 🧭 Danh mục Tài liệu Chuyên Đề:

1. **[`01_server_packet_ingestion_pipeline.md`](./01_server_packet_ingestion_pipeline.md)**
   * Hành trình toàn vẹn từ WebSocket ➔ `GameLogic` ➔ `GameDataStore.parseDataPS()` ➔ `updateDataModules()`.
2. **[`02_key_deobfuscation_map_new_keys.md`](./02_key_deobfuscation_map_new_keys.md)**
   * Kỹ thuật khử nén key băng thông di động 3G bằng `mapNewKeys()` (`cna`, `pMul`, `mulF`).
3. **[`03_state_immutability_and_deep_clone.md`](./03_state_immutability_and_deep_clone.md)**
   * Nguyên lý bất biến trạng thái: Tại sao bắt buộc dùng `JSON.parse(JSON.stringify(val))` khi broadcast dữ liệu sang các Module UI.
4. **[`04_reconnection_is_resume_state_hydration.md`](./04_reconnection_is_resume_state_hydration.md)**
   * Cơ chế khôi phục trạng thái khi người chơi refresh trình duyệt hoặc rớt mạng (`isResume`, `freeGameRemain`, `winAmountPS`, `SYNC_TABLE`).
