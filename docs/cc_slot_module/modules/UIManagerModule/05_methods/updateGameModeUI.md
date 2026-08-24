---
id: "cc_slot_module:UIManagerModule:methods:updateGameModeUI"
title: "UIManagerModule.updateGameModeUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "updateGameModeUI"]
---

# 📖 `UIManagerModule.updateGameModeUI()`

---

## 1. Method Overview & Signature

Synchronously hides all UI elements and displays the appropriate HUD controls for the requested game mode.

```typescript
public updateGameModeUI(gameMode: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateGameModeUI(gameMode: number): void {
    this.hideAllUI();
    this.showUIForGameMode(gameMode);
}
```
