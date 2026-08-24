---
id: "cc_slot_module:FreeGameWriterModule:customization:production_game_case_study"
title: "Production Case Study: FreeGameWriterModule9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: FreeGameWriterModule9666 (Red Cliff Slot)

## 1. Context & Production Code Flow

In **Red Cliff (`g9666L`)**, Free Spins inject top reel stops, stacked wild synchronizations, and multiplier gathering into both regular spins and cascade respins:

```typescript
const { _decorator } = cc;
import { FreeGameWriterModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
const { ccclass } = _decorator;

@ccclass
export class FreeGameWriterModule9666 extends FreeGameWriterModule {
    makeScriptStopSpinningTable(): Object[] {
        let listScript = [];
        listScript.push({ command: "_stopSpinningTopTable" });
        listScript.push({ command: "_stopSpinningTable" });
        listScript.push({ command: "_syncStackWild" });
        listScript.push({ command: "_collectWildMultiplier" });
        listScript.push({ command: "_setUpPaylines" });
        return listScript;
    }

    makeScriptStopRespinningTable(): Object[] {
        let listScript = [];
        listScript.push({ command: "_showRespinResultEntry" });
        listScript.push({ command: "_stopRespinningTable" });
        listScript.push({ command: "_syncStackWild" });
        listScript.push({ command: "_collectWildMultiplier" });
        listScript.push({ command: "_setUpPaylines" });
        listScript.push({ command: "_showRespinResultFinal" });
        return listScript;
    }
}
```

---

## 2. Key Architectural Takeaway
By declaring `_syncStackWild` and `_collectWildMultiplier` within `makeScriptStopSpinningTable`, the Free Game feature runs wild expansion and multiplier animations before paylines evaluate, perfectly preserving visual timing.
