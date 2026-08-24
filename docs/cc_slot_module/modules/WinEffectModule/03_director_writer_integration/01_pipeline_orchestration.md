---
id: "cc_slot_module:WinEffectModule:director_writer:pipeline_orchestration"
title: "WinEffectModule Pipeline Orchestration & Writer Integration"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 WinEffectModule Pipeline Orchestration & Writer Integration

---

## 1. Writer Command Injection

Mode writers insert win celebration steps:
```typescript
// In NormalGameWriterModule.ts:
if (isBigWin) {
    script.push({
        command: "SHOW_WIN_EFFECT",
        data: {
            winAmount: roundResult.winAmount,
            totalBet: roundResult.totalBet,
            winType: "BIG"
        }
    });
}
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.WIN_EFFECT`.
