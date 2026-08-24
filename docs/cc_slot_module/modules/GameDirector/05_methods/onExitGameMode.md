---
id: "cc_slot_module:GameDirector:method:onExitGameMode"
title: "GameDirector.onExitGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "method", "onExitGameMode", "mode_exit", "onBackToGameMode"]
---

# `GameDirector.onExitGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
public onExitGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Identifies `lastMode` (second to top) and `currentMode` (top of stack).
2. If either is missing, logs warning and returns.
3. If modes differ:
   * Pops `currentMode` from `this.currentModes`.
   * Calls `currentMode.rootNode.getComponent(BaseGameMode).exit()`.
   * Updates `this.dataStore.currentGameMode = lastMode.type`.
   * Activates `lastMode.rootNode.active = true`.
   * Emits `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` with `lastMode.type`.
   * Awaits `lastMode.rootNode.getComponent(BaseGameMode).onBackToGameMode(currentMode.type)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
async onExitGameMode(): Promise<void> {
    const lastMode = this.currentModes[this.currentModes.length - 2];
    const currentMode = this.currentModes[this.currentModes.length - 1];
    if (!lastMode || !currentMode) {
        this.logger.warn('[GameView]', '[Director]', 'Do not have last game mode to resume');
        return Promise.resolve();
    }

    if (lastMode.type !== currentMode.type) {
        this.currentModes.pop();
        if (currentMode) {
            currentMode.rootNode.getComponent(BaseGameMode).exit();
        }
        this.dataStore.currentGameMode = lastMode.type;
        lastMode.rootNode.active = true;
        this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, lastMode.type);
        await lastMode.rootNode.getComponent(BaseGameMode).onBackToGameMode(currentMode.type);
    }
    return Promise.resolve();
}
```
