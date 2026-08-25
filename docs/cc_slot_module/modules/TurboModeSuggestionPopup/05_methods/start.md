---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:start"
title: "TurboModeSuggestionPopup.start Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "start"]
---

# 📖 `TurboModeSuggestionPopup.start()`

---

## 1. Method Overview & Signature

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected start(): void {
	this.message.string = this.gameLogic.getGameText("SUGGEST_TURBO");
}
```
