---
id: "cc_slot_mechanics:MegaReelModule:methods:updateMegaIndex"
title: "MegaReelModule.updateMegaIndex Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "updateMegaIndex"]
---

# 📖 `MegaReelModule.updateMegaIndex()`

---

## 1. Method Signature & Overview

```typescript
updateMegaIndex(hasMulti:any): void
```

- **Primary Role**: Implements updateMegaIndex within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected updateMegaIndex(hasMulti:any): void {
        this.megaIndex = this.reelIndex;
        if (this.megaData.length) {
            this.megaData.forEach(data => {
                if (data["reel"] != this.reelIndex) {
                    this.megaIndex = Number(data["reel"]);
                }
            });
        }
        if (hasMulti) {
            this.megaIndex = 0;
        }
    }
```
