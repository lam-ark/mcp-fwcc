---
id: "cc_slot_module:AutoSpinPanel:methods:closePanel"
title: "AutoSpinPanel.closePanel Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "closePanel"]
---

# 📖 `AutoSpinPanel.closePanel()`

---

## 1. Method Overview & Signature

```typescript
public closePanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closePanel(): void {
	this.playSfxClick();
	this.onAutoSpinPanelOpen(false);
}
```
