---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:resetGameModeRespin"
title: "BetHistoryDetailPortrait.resetGameModeRespin Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "resetGameModeRespin"]
---

# 📖 `BetHistoryDetailPortrait.resetGameModeRespin()`

---

## 1. Method Overview & Signature

```typescript
public resetGameModeRespin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetGameModeRespin(): void {
	this.gameModeView.emit("RESET_GAME_MODE_VIEW");
	this.infoLabel.string = "";
}
```
