---
id: "cc_slot_module:GameModeWriterModule:customization:production_game_case_study"
title: "Production Case Study: GameModeWriterModule Subclassing in Production"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: GameModeWriterModule Subclassing in Production

## 1. Hierarchy & Pipeline Subclassing

In production slot games (such as Red Cliff `g9666L`), `NormalGameWriterModule9666` and `FreeGameWriterModule9666` inherit from `GameModeWriterModule` to reuse base pipeline generators while injecting specialized feature steps:

```typescript
@ccclass
export class NormalGameWriterModule9666 extends NormalGameWriterModule {
    // Reuses base start spinning, adds multiplier reset
    makeScriptStartSpinning(): Object[] {
        let listScript = [];
        listScript.push({ command: '_resetMultiplier' });
        listScript.push({ command: "_startSpinningTable" });
        return listScript;
    }
}
```
