---
id: "cc_slot_module:ToastInfoModule:methods:showMessage"
title: "ToastInfoModule.showMessage Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "showMessage"]
---

# 📖 `ToastInfoModule.showMessage()`

---

## 1. Method Overview & Signature

Displays formatted toast message with scale-in animation and schedules auto-dismissal.

```typescript
public showMessage(message: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
showMessage(message: string): void {
    this.lblNotify.string = message;
    setOpacity(this.node, 255);
    this.node.active = true;
    this.node.setScale(0.5);
    if (this._tweenToast) {
        this._tweenToast.stop();
    }
    this._tweenToast = tween(this.node)
        .to(0.2, { scale: 1 })
        .delay(this.delayTime)
        .call(() => {
            this._tweenToast = null;
            this.node.active = false;
        })
        .start();
}
```
