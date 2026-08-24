---
id: "cc_slot_module:overview:index"
title: "cc-slot-module Core Architecture & Subsystems Master Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "systems", "index", "architecture", "master_guide"]
---

# 📚 `cc-slot-module` Core Architecture & Subsystems Master Guide

Chào mừng bạn đến với tài liệu tổng quan toàn diện về **Kiến trúc & Các Hệ thống Con (Core Subsystems)** của `cc-slot-module` - Framework phát triển Game Slot chuẩn công nghiệp trên Cocos Creator.

---

## 🏛️ 1. Nền Tảng & Triết Lý Thiết Kế (Foundations & Patterns)
* **[`01_module_architecture_and_philosophy.md`](./01_module_architecture_and_philosophy.md)**: Triết lý module hóa, phân tách Data - Presentation - Director, và tiêu chuẩn phát triển Slot hiện đại.
* **[`02_dependency_injection_ioc.md`](./02_dependency_injection_ioc.md)**: Cơ chế IoC (Inversion of Control) và tiêm phụ thuộc `@inject` qua Service Locator.
* **[`03_dual_event_bus_system.md`](./03_dual_event_bus_system.md)**: Hệ thống Dual Event Bus phân tầng giữa Scoped `moduleEvent` và Global `EventManager`.
* **[`04_module_lifecycle_and_registration.md`](./04_module_lifecycle_and_registration.md)**: Vòng đời khởi tạo `onLoad` ➔ `start` ➔ `onDestroy` và quy trình đăng ký module.
* **[`05_module_ecosystem_and_classification.md`](./05_module_ecosystem_and_classification.md)**: Bản đồ sinh thái phân loại 5 nhóm module chính.
* **[`06_module_best_practices_and_gotchas.md`](./06_module_best_practices_and_gotchas.md)**: Quy chuẩn vàng và cạm bẫy thực chiến cần tránh.
* **[`11_win_evaluation_payline_and_celebration_hierarchy.md`](./11_win_evaluation_payline_and_celebration_hierarchy.md)**: Tầng Đánh giá Thắng & Phân cấp Ăn Mừng (Win Ratio, Line Cycling, Cutscenes).
* **[`12_audio_choreography_and_sound_pipeline.md`](./12_audio_choreography_and_sound_pipeline.md)**: Vũ đạo Âm thanh Slot (BGM, Spin Loops, Near-win Tension, Coin Roll).
* **[`13_scene_graph_prefabs_and_packaging_conventions.md`](./13_scene_graph_prefabs_and_packaging_conventions.md)**: Cây Scene Chuẩn & Quy ước Đóng gói Thư mục Dự án.
* **[`14_guide_how_to_create_and_setup_new_module.md`](./14_guide_how_to_create_and_setup_new_module.md)**: **Cẩm nang Toàn diện: Hướng dẫn Tạo và Thiết lập Module Mới từ Đầu** (Script Template, Gắn Scene Node, Tag Editor, Writer Integration & Tips Vàng).

---

## 🔬 2. Chuyên Đề Phân Rã Hệ Thống Con (Subsystem Deep-Dives)

### 🎮 A. [Hệ Thống Game Mode (Game Mode Subsystem)](../systems/01_game_mode_system/00_index.md)
* [`01_game_mode_concepts_and_types.md`](../systems/01_game_mode_system/01_game_mode_concepts_and_types.md): Khái niệm FSM, 5 Mode chuẩn (Normal, Free, Option, Bonus, Cascade).
* [`02_game_mode_anatomy_and_composition.md`](../systems/01_game_mode_system/02_game_mode_anatomy_and_composition.md): Giải phẫu Director + Writer + Data + `moduleList`.
* [`03_inter_module_communication_4_channels.md`](../systems/01_game_mode_system/03_inter_module_communication_4_channels.md): **4 Kênh liên lạc đa tầng** giữa các Module.
* [`04_mode_transitions_and_stack_lifecycle.md`](../systems/01_game_mode_system/04_mode_transitions_and_stack_lifecycle.md): Vòng đời chuyển đổi Mode và dọn dẹp bộ nhớ (Clean Teardown).

---

### 🎰 B. [Cỗ Máy Bảng Quay & Biểu Tượng (Table Engine)](../systems/02_table_reel_symbol_engine/00_index.md)
* [`01_table_engine_7_core_components.md`](../systems/02_table_reel_symbol_engine/01_table_engine_7_core_components.md): 7 Hợp phần phối hợp (Table, Config, Reel, Symbol, Pool, Resource, Sound).
* [`02_matrix_geometry_and_buffer_rows.md`](../systems/02_table_reel_symbol_engine/02_matrix_geometry_and_buffer_rows.md): Hệ tọa độ `[col][row]` và vùng đệm ẩn `topBuffer`/`bottomBuffer`.
* [`03_z_index_priority_layer_sorting.md`](../systems/02_table_reel_symbol_engine/03_z_index_priority_layer_sorting.md): Thuật toán phân lớp hiển thị `sortSymbols()`.
* [`04_mega_symbols_and_irregular_grids.md`](../systems/02_table_reel_symbol_engine/04_mega_symbols_and_irregular_grids.md): Xử lý Symbol khổng lồ và bảng Ways-to-win không đều.
* [`05_symbol_pooling_and_gc_optimization.md`](../systems/02_table_reel_symbol_engine/05_symbol_pooling_and_gc_optimization.md): Node Pool tối ưu hóa Garbage Collection trên thiết bị di động.

---

### 🔄 C. [Hệ Thống Dữ Liệu Phản Ứng (Reactive Data System)](../systems/03_reactive_data_system/00_index.md)
* [`01_server_packet_ingestion_pipeline.md`](../systems/03_reactive_data_system/01_server_packet_ingestion_pipeline.md): Hành trình toàn vẹn từ WebSocket ➔ `GameDataStore` ➔ `BaseDataModule`.
* [`02_key_deobfuscation_map_new_keys.md`](../systems/03_reactive_data_system/02_key_deobfuscation_map_new_keys.md): Khử nén key di động 3G bằng `mapNewKeys()`.
* [`03_state_immutability_and_deep_clone.md`](../systems/03_reactive_data_system/03_state_immutability_and_deep_clone.md): Nguyên lý bất biến trạng thái và Deep Clone cô lập bộ nhớ.
* [`04_reconnection_is_resume_state_hydration.md`](../systems/03_reactive_data_system/04_reconnection_is_resume_state_hydration.md): Khôi phục ma trận, số vòng quay, và lũy kế khi reconnect.

---

### 📜 D. [Cỗ Máy Kịch Bản Lệnh (Script Execution Pipeline)](../systems/04_script_execution_pipeline/00_index.md)
* [`01_scripting_triad_director_writer_executor.md`](../systems/04_script_execution_pipeline/01_scripting_triad_director_writer_executor.md): Tam giác Director ➔ Writer ➔ ScriptExecutor.
* [`02_command_synthesis_and_payload_dispatch.md`](../systems/04_script_execution_pipeline/02_command_synthesis_and_payload_dispatch.md): Kỹ thuật sinh chuỗi lệnh `string[]` và object payload.
* [`03_async_promise_chaining_mechanism.md`](../systems/04_script_execution_pipeline/03_async_promise_chaining_mechanism.md): Cơ chế Promise chaining tuần tự không nghẽn luồng.
* [`04_turbo_mode_and_skip_all_effects.md`](../systems/04_script_execution_pipeline/04_turbo_mode_and_skip_all_effects.md): Chế độ Turbo và dừng nhanh với `skipAllEffects()`.
