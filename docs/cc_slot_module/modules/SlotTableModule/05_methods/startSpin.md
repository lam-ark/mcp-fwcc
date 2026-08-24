---
id: "cc_slot_module:SlotTableModule:method:startSpin"
title: "SlotTableModule.startSpin() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "startSpin", "runReelSpin"]
---

# `SlotTableModule.startSpin(): void`

---

## 1. Method Signature
```typescript
public startSpin(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks that `this.state === TableSpinState.READY` or `TableSpinState.STOPPED`.
2. Transitions state to `TableSpinState.START`.
3. Selects active speed mode:
   `this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;`
4. Resets `this.reelCount = 0`.
5. Iterates through `this.reels` and triggers `reelComponent.runReelSpin(this.currentMode)`.
6. Dispatches local node notifications:
   * `this.node.emit("START_SPIN");`
   * `this.node.emit("RESET_NEARWIN");`
   * `this.node.emit('REEL_START_SOUND', { context: this });`

---

## 3. Un-truncated Source Code Implementation
```typescript
startSpin(): void {
    if (this.state === TableSpinState.READY || this.state === TableSpinState.STOPPED) {
        this.onChangeState(TableSpinState.START);
        this.table.active = true;

        this.currentMode = this.gameSettings.isTurboActive ? this.config.MODES.TURBO : this.config.MODES.NORMAL;
        this.reelCount = 0;
        this.reels.forEach((reelComponent) => {
            reelComponent.runReelSpin(this.currentMode);
        });

        this.config.NEAR_WIN_DELAY_STOP = 0;
        this.node.emit("START_SPIN");
        this.node.emit("RESET_NEARWIN");
        this.node.emit('REEL_START_SOUND', { context: this });
    }
}
```
