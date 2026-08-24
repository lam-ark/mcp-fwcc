---
id: "cc_slot_module:systems:script_pipeline:index"
title: "Script Execution Pipeline Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "script_executor", "writer_module", "index"]
---

# 📜 Script Execution Pipeline Architecture Index

Chào mừng bạn đến với chuyên đề chuyên sâu về **Cỗ máy Điều phối Kịch bản Lệnh & Thực thi Bất đồng bộ (Script Execution & Command Pipeline)** trong `cc-slot-module`.

---

## 🧭 Danh mục Tài liệu Chuyên Đề:

1. **[`01_scripting_triad_director_writer_executor.md`](./01_scripting_triad_director_writer_executor.md)**
   * Tam giác điều phối: `Director` (Scene Owner) ➔ `Writer` (Script Planner) ➔ `ScriptExecutor` (Queue Runner).
2. **[`02_command_synthesis_and_payload_dispatch.md`](./02_command_synthesis_and_payload_dispatch.md)**
   * Kỹ thuật Writer sinh mảng lệnh `string[]` và object lệnh kèm tham số `{ command, data }`.
3. **[`03_async_promise_chaining_mechanism.md`](./03_async_promise_chaining_mechanism.md)**
   * Cơ chế thực thi bất đồng bộ Promise chaining trong `ScriptExecutor`: tuần tự, không blocking main thread, và an toàn race conditions.
4. **[`04_turbo_mode_and_skip_all_effects.md`](./04_turbo_mode_and_skip_all_effects.md)**
   * Cơ chế dừng nhanh Turbo / Fast Stop (`skipAllEffects`): Hủy tween trễ an toàn, ngắt diễn hoạt và resolve Promise tức thì.
