---
id: "cc_slot_module:GameModeDirectorModule:method:showIntroGameCutscene"
title: "GameModeDirectorModule._showIntroGameCutscene() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showIntroGameCutscene"]
---

# `GameModeDirectorModule._showIntroGameCutscene(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_showIntroGameCutscene(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data)` to present mode transition intro dialogs.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showIntroGameCutscene(data): Promise<void> {
    return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
}
```
