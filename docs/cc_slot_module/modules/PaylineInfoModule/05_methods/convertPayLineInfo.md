---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfo"
title: "PaylineInfoModule.convertPayLineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfo"]
---

# 📖 `PaylineInfoModule.convertPayLineInfo()`

---

## 1. Method Overview & Signature

Routes payline data conversion to math-specific formatting routines.

```typescript
protected convertPayLineInfo(paylineInfo: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfo(paylineInfo: any): any {
    switch (this.gameConfig.PAY_SYSTEM) {
        case PAY_SYSTEM_TYPE_ENUM.ALLWAYS:
            return this.convertPayLineInfoAllWays(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.LINES:
            return this.convertPayLineInfoLine(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.CLUSTER:
            return this.convertPayLineInfoCluster(paylineInfo);
        case PAY_SYSTEM_TYPE_ENUM.SCATTER_PAY:
            return this.convertPayLineInfoScatterPay(paylineInfo);
    }
}
```
