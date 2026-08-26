---
id: "cc_core_lib:MoneyTween:methods:runBigWinNumber"
title: "MoneyTween.runBigWinNumber Method Implementation & Walkthrough"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "methods", "runBigWinNumber"]
---

# 📖 `MoneyTween.runBigWinNumber()`

---

## 1. Method Signature

```typescript
public runBigWinNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween
```

- **Scope**: `eno.MoneyTween.runBigWinNumber`
- **Execution Cost**: $O(1)$ fast synchronous path or asynchronous Promise pipeline.

---

## 2. Source Code Implementation

```typescript
runBigWinNumber(target: cc.Node, duration: number, endValue: number, options?: Options): cc.Tween {
    const label = target.getComponent(cc.Label);
    if (!label) return null;
    
    // Cancel active tweens on the target label to prevent conflicting text renders
    if ((label as any)._tweenMoney) {
        (label as any)._tweenMoney.stop();
        this._tweens.delete((label as any)._tweenMoney);
    }
    
    const startVal = this._parseValueFromString(label.string);
    const targetVal = value;
    const state = { value: startVal };
    
    const tween = cc.tween(state)
        .to(duration, { value: targetVal }, {
            progress: (start, end, current, ratio) => {
                const formatted = this.formatter.formatMoney(current);
                label.string = formatted;
                return current;
            },
            easing: 'quadInOut'
        })
        .call(() => {
            label.string = this.formatter.formatMoney(targetVal);
            if (options && options.onComplete) options.onComplete();
            this._tweens.delete(tween);
        })
        .start();
        
    (label as any)._tweenMoney = tween;
    this._tweens.add(tween);
    return tween;
}
```

---

## 3. Algorithmic Breakdown & Call Graph

1. **Input Guarding**: Validates arguments to guard against `null` / `undefined` reference exceptions.
2. **State Transition**: Executes required arithmetic, state assignment, or command array compilation on `MoneyTween`.
3. **Event Notification & Return**: Dispatches corresponding event messages to listeners or resolves result values.
