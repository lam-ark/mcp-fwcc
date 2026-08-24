---
id: "cc_slot_module:systems:game_mode:index"
title: "Game Mode System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "architecture", "index"]
---

# 🎮 Game Mode System Architecture Index

Chào mừng bạn đến với chuyên đề chuyên sâu về **Hệ thống Game Mode (Game Mode Subsystem)** trong `cc-slot-module`.

---

## 🧭 Danh mục Tài liệu Chuyên Đề:

1. **[`01_game_mode_concepts_and_types.md`](./01_game_mode_concepts_and_types.md)**
   * Bản chất Game Mode là Finite State Machine (FSM).
   * Phân loại chi tiết 5 chế độ chơi chuẩn: `NORMAL_GAME`, `FREE_GAME`, `FREE_OPTION`, `BONUS_GAME`, `CASCADE_GAME`.
2. **[`02_game_mode_anatomy_and_composition.md`](./02_game_mode_anatomy_and_composition.md)**
   * Giải phẫu 1 Game Mode hoàn chỉnh: Director + Writer + ScriptExecutor + DataModules + `moduleList`.
   * Nguyên lý Co-location & Dependency Injection trong Mode container.
3. **[`03_inter_module_communication_4_channels.md`](./03_inter_module_communication_4_channels.md)**
   * Phân tích chuyên sâu 4 kênh giao tiếp đa tầng:
     * *Channel 1*: Reactive Data Flow (`GameDataStore` ➔ `BaseDataModule`).
     * *Channel 2*: Command Script Pipeline (`Director` ➔ `Writer` ➔ `ScriptExecutor`).
     * *Channel 3*: Scoped Module Event Bus (`this.moduleEvent`).
     * *Channel 4*: Global Event Bus (`this.eventManager`).
4. **[`04_mode_transitions_and_stack_lifecycle.md`](./04_mode_transitions_and_stack_lifecycle.md)**
   * Luồng chuyển đổi Game Mode (`transitionGameMode`, `enterGameMode`, `exitGameMode`).
   * Vòng đời kích hoạt, đóng băng và dọn dẹp bộ nhớ (Clean Teardown).
