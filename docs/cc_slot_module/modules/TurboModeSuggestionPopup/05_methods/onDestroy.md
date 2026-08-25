---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:onDestroy"
title: "TurboModeSuggestionPopup.onDestroy Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TurboModeSuggestionPopup.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.observer.releaseAll(this.uiManagerData, this);
}
```
