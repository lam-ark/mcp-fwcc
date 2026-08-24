---
id: "cc_slot_module:BonusGameWriterModule:customization:production_game_case_study"
title: "Production Case Study: Custom Bonus Game Writer Pipeline"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Custom Bonus Game Writer Pipeline

## 1. Context & Production Pipeline

In bonus games featuring prize multipliers on each pick, `BonusGameWriterModule` chains reveal steps:

```typescript
@ccclass
export default class CustomBonusGameWriterModule extends BonusGameWriterModule {
    makeScriptShowResultEntry(): any[] {
        let listScript = [];
        listScript.push({ command: "_syncJackpot" });
        listScript.push({ command: "_openItem" });
        listScript.push({ command: "_updateBonusMultiplier" });
        listScript.push({ command: "_startCountDown" });
        listScript.push({ command: "_unblockBonusGame" });
        return listScript;
    }
}
```
