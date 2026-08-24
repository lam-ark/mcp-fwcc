---
id: "cc_slot_module:systems:script_pipeline:turbo_mode_and_skip_all_effects"
title: "Turbo Mode & Safe Fast-Forward with skipAllEffects"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "turbo_mode", "skip_effects", "fast_forward"]
---

# ⚡ Turbo Mode & Safe Fast-Forward with skipAllEffects

---

## 1. Cơ Chế Bỏ Qua Diễn Hoạt An Toàn (Safe Skip Architecture)

Khi người chơi bấm nút **Stop** nhanh hoặc đang bật chế độ **Turbo Spin**:
* Cột quay phải dừng ngay lập tức.
* Các khoảng chờ thời gian (`delayAction`, `_delayTimeScript`) phải bị ngắt ngay lập tức mà không làm treo hàng đợi `ScriptExecutor`.

```mermaid
graph TD
    Trigger[Người chơi bấm Stop / Bật Turbo] --> Skip[Director.skipAllEffects]
    
    subgraph Safe Teardown
        Skip --> ClearTween[1. Hủy tween Delay đang chạy: tween.stop]
        Skip --> ResolvePromise[2. Gọi resolve callback ngay lập tức]
        Skip --> FastReels[3. Bắn TABLE_FAST_STOP: Cột dừng không nảy]
        Skip --> FastCount[4. Bắn WIN_AMOUNT_FAST_COUNT: Hiển thị ngay số cuối]
    end

    ResolvePromise --> NextStep[ScriptExecutor lập tức chuyển sang lệnh kế tiếp!]
```

---

## 2. Kỹ Thuật Viết Hàm Delay Có Thể Bị Hủy An Toàn

```typescript
// Trong GameModeDirectorModule.ts
delayAction(time: number = 0): Promise<void> {
    if (time <= 0) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        // Lưu trữ callback để skipAllEffects() có thể gọi trực tiếp
        this._delayActionCB = () => {
            this._delayActionCB = null;
            resolve();
        };

        this.scheduleOnce(this._delayActionCB, time);
    });
}

clearDelayAction(): void {
    if (this._delayActionCB) {
        this.unschedule(this._delayActionCB);
        const cb = this._delayActionCB;
        this._delayActionCB = null;
        cb(); // Resolve Promise ngay lập tức
    }
}
```
Kỹ thuật này đảm bảo Promise không bao giờ bị "treo vĩnh viễn" (unresolved promise leak), giúp game chuyển cảnh siêu tốc mà không bao giờ bị đơ giao diện.
