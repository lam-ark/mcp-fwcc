---
id: "cc_slot_module:GameModeDirectorModule:method:playGameModeBGM"
title: "GameModeDirectorModule.playGameModeBGM() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "playGameModeBGM", "audio"]
---

# `GameModeDirectorModule.playGameModeBGM(): void`

---

## 1. Method Signature
```typescript
playGameModeBGM(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for triggering mode-specific background music through `this.soundPlayer.playMainBGM(this.dataStore.currentGameMode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playGameModeBGM(): void {
    // this.soundPlayer && this.soundPlayer.playMainBGM(this.dataStore.currentGameMode);
}
```
