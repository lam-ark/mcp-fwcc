---
id: "cc_slot_module:MenuPanel:methods:onDestroy"
title: "MenuPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `MenuPanel.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
	this.observer.releaseAll(this.uiManagerData, this);
	this.observer.releaseAll(this.gameSettingData, this);
}
```
