---
id: "cc_slot_module:GameModeDirectorModule:method:showCutscene"
title: "GameModeDirectorModule._showCutscene() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showCutscene"]
---

# `GameModeDirectorModule._showCutscene(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_showCutscene(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showCutscene(data): Promise<void> {
    return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
}
```
