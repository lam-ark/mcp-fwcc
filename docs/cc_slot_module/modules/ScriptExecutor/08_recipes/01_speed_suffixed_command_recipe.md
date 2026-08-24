---
id: "cc_slot_module:ScriptExecutor:recipe:speed_suffixed_command"
title: "Recipe: Speed-Suffixed Command Method Overrides"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "recipes", "speed_suffix", "turbo", "FTR"]
---

# 💡 Recipe: Speed-Suffixed Command Method Overrides

## 1. Concrete Production Use-Case

Instead of using `if (this.gameSettings.isTurboActive)` branches inside a single method, `ScriptExecutor` allows you to declare speed-specific methods directly on the director using `_[SPEED]` suffixes:

```typescript
export class NormalGameDirectorModule extends BaseGameDirector {
    // Normal Speed (gameSpeed = 0):
    async STOP_REEL(data: any): Promise<void> {
        await this.table.stopReelsNormalEasing();
    }

    // Turbo Speed (gameSpeed = 1):
    async STOP_REEL_1(data: any): Promise<void> {
        await this.table.stopReelsTurboShort();
    }

    // FTR / Instant Speed (gameSpeed = 2):
    async STOP_REEL_2(data: any): Promise<void> {
        this.table.snapReelsInstantly();
    }
}
```
`ScriptExecutor.getCommandName("STOP_REEL")` will automatically route to `STOP_REEL_2`, `STOP_REEL_1`, or `STOP_REEL` depending on the active `gameSpeed`!
