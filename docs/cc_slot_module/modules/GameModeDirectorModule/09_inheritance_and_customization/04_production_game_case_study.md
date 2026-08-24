---
id: "cc_slot_module:GameModeDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Mode Management in Red Cliff Slot"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: Mode Management in Red Cliff Slot

## 1. Context & Architecture Overview

In **Red Cliff (`g9666L`)**, `NormalGameDirectorModule9666` and `FreeGameDirectorModule9666` inherit from `GameModeDirectorModule` to manage scene node switching, matrix synchronizations, and multiplier resets.

---

## 2. Production Code Excerpt

```typescript
@ccclass
export default class NormalGameDirectorModule9666 extends GameModeDirectorModule {
    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
        this.init();
    }

    async onBackToGameMode(fromMode: number): Promise<void> {
        // Reset progressive multipliers upon returning to Normal Game
        await this.eventManager.emit("RESET_MULTIPLIER", false);
        return super.onBackToGameMode(fromMode);
    }
}
```
