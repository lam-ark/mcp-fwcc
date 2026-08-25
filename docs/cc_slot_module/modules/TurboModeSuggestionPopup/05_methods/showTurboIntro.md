---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:showTurboIntro"
title: "TurboModeSuggestionPopup.showTurboIntro Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "showTurboIntro"]
---

# 📖 `TurboModeSuggestionPopup.showTurboIntro()`

---

## 1. Method Overview & Signature

```typescript
public showTurboIntro(canShowTurboIntro: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showTurboIntro(canShowTurboIntro: boolean): void {
	if (canShowTurboIntro) {
		this.node.active = true;
	} else {
		this.node.active = false;
	}
}
```
