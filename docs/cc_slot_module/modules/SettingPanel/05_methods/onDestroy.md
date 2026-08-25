---
id: "cc_slot_module:SettingPanel:methods:onDestroy"
title: "SettingPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `SettingPanel.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.observer.releaseAll(this.gameSettingData, this);
	this.observer.releaseAll(this.uiManagerData, this);
}
```
