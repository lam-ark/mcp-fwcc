---
id: "cc_slot_module:UIManagerModule:methods:showUIForGameMode"
title: "UIManagerModule.showUIForGameMode Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showUIForGameMode"]
---

# 📖 `UIManagerModule.showUIForGameMode()`

---

## 1. Method Overview & Signature

Branches layout activation across `NORMAL_GAME`, `FREE_GAME` (1..4), and `BONUS_GAME`.

```typescript
public showUIForGameMode(gameMode: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
showUIForGameMode(gameMode: number): void {
    switch (gameMode) {
        case GAME_MODE_ENUM.NORMAL_GAME:
            this.showNormalGameUI();
            break;
        case GAME_MODE_ENUM.FREE_GAME:
        case GAME_MODE_ENUM.FREE_GAME_1:
        case GAME_MODE_ENUM.FREE_GAME_2:
        case GAME_MODE_ENUM.FREE_GAME_3:
        case GAME_MODE_ENUM.FREE_GAME_4:
            this.showFreeGameUI();
            break;
        case GAME_MODE_ENUM.BONUS_GAME:
            this.showBonusGameUI();
            break;
        default:
            warn(`[UIManager] Unknown game mode: ${gameMode}`);
            break;
    }
}
```
