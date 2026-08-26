---
id: "cc_slot_mechanics:NudgeReelModule:methods:startNudge"
title: "NudgeReelModule.startNudge Method"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "startNudge"]
---

# 📖 `NudgeReelModule.startNudge()`

---

## 1. Method Signature & Overview

```typescript
startNudge(): void
```

- **Primary Role**: Implements startNudge within the NudgeReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected startNudge(): void {
		//add all symbols before nudging
		this.addNudgeSymbols();
        
		this.nudgeSpinning();
	}
```
