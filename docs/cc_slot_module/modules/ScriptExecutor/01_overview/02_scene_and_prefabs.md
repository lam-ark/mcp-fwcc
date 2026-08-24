---
id: "cc_slot_module:ScriptExecutor:overview:scene_and_prefabs"
title: "ScriptExecutor Placement & Director Integration"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ ScriptExecutor Placement & Director Integration

---

## 1. Runtime Instantiation inside Mode Directors

`ScriptExecutor` is a pure TypeScript execution engine instantiated directly inside mode director components mounted across mode prefabs:

```text
Canvas/Director/GameMode/MainGamePrefab (NormalGameDirectorModule ➔ contains ScriptExecutor)
Canvas/Director/GameMode/FreeGamePrefab (FreeGameDirectorModule ➔ contains ScriptExecutor)
Canvas/Director/GameMode/BonusGamePrefab (BonusGameDirectorModule ➔ contains ScriptExecutor)
```

---

## 2. Command Target Wiring

`ScriptExecutor` dispatches script steps to methods implemented across sibling components:
- `SlotTableModule` (`TABLE_START_SPIN`, `TABLE_STOP_SPIN`, `TABLE_FAST_STOP`)
- `SlotTablePaylineModule` (`SETUP_PAYLINES`)
- `UIManager` (`UPDATE_WIN_AMOUNT`, `UPDATE_WALLET`)
- `CutsceneControl` (`SHOW_WIN_EFFECT`, `HIDE_WIN_EFFECT`)
