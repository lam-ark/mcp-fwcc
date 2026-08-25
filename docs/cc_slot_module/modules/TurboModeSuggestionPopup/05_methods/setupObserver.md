---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:setupObserver"
title: "TurboModeSuggestionPopup.setupObserver Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `TurboModeSuggestionPopup.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.uiManagerData, "canShowTurboIntro", (canShowTurboIntro) => {
		this.showTurboIntro(canShowTurboIntro);
	}, this);
}
```
