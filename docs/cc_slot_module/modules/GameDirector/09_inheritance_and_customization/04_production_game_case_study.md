---
id: "cc_slot_module:GameDirector:customization:production_game_case_study"
title: "Production Case Study: GameDirector Configuration in Red Cliff"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 📖 Production Case Study: GameDirector Configuration in Red Cliff

## 1. Context & Scene Graph Configuration

In **Red Cliff (`g9666L`)**, `Canvas/Director` hosts `GameDirector`, which registers:
1. `NormalGame` (`type: NORMAL_GAME`)
2. `FreeGame` (`type: FREE_GAME`)

---

## 2. Production Flow Trace

```typescript
// GameDirector switches into Free Game when FreeGameDirectorModule triggers:
this.eventManager.on(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, (targetMode) => {
    // 1. Pushes FreeGame to stack
    // 2. NormalGame.active = false
    // 3. FreeGame.active = true
    // 4. FreeGameDirectorModule.enter()
});
```
