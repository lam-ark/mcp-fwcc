---
id: "cc_slot_module:PaylineInfoModule:methods:setPaylineInfo"
title: "PaylineInfoModule.setPaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "setPaylineInfo"]
---

# 📖 `PaylineInfoModule.setPaylineInfo()`

---

## 1. Method Overview & Signature

Assigns formatted strings to labels and updates thumbnail sprite frame.

```typescript
protected setPaylineInfo(paylineInfo: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setPaylineInfo(paylineInfo: any): void {
    if (!paylineInfo || eno.isEmptyObject(paylineInfo)) {
        this.lbLeft.string = '';
        this.lbRight.string = '';
        this.sprSymbol.spriteFrame = null;
        return;
    }

    const { symbolId, leftString, rightString } = this.convertPayLineInfo(paylineInfo);

    this.lbLeft.string = leftString;
    this.lbRight.string = rightString;
    this.sprSymbol.spriteFrame = this._symbolAssets[`${this.smallSymbolPrefix}${symbolId}`];
}
```
