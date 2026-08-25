---
id: "cc_slot_module:AutoSpinPanel:methods:onStartAutoSpin"
title: "AutoSpinPanel.onStartAutoSpin Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onStartAutoSpin"]
---

# 📖 `AutoSpinPanel.onStartAutoSpin()`

---

## 1. Method Overview & Signature

```typescript
public onStartAutoSpin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onStartAutoSpin(): void {
	this.playSfxClick();
	const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[this.currentSelectedIndex];
	this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, selectedSpinTimes);
	this.onAutoSpinPanelOpen(false);
}
```
