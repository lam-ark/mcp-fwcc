---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowJackpotHistory"
title: "JackpotHistoryModule.onShowJackpotHistory Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowJackpotHistory"]
---

# 📖 `JackpotHistoryModule.onShowJackpotHistory()`

---

## 1. Method Overview & Signature

```typescript
public onShowJackpotHistory(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowJackpotHistory(isActive: boolean): void {
	if (isActive) {
		this.openPopup();
		this.togglePopup(true);
	} else {
		this.togglePopup(false);
	}
}
```
