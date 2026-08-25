---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:onLoadExtend"
title: "TurboModeSuggestionPopup.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TurboModeSuggestionPopup.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.gameLogic.emit(GameLogicUIEvents.CHECK_TURBO_MODE_SUGGESTION_POPUP);
	this.setupObserver();
	this.node.active = false;
}
```
