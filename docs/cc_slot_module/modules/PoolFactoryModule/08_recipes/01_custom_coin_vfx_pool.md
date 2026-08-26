---
id: "cc_slot_module:PoolFactoryModule:recipes:custom_coin_vfx_pool"
title: "Recipe: High-Performance Coin Fly Pool"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "recipes", "coin_vfx"]
---

# 💡 Recipe: High-Performance Coin Fly Pool

---

## 1. Implementation Code

```typescript
const { ccclass, property } = cc._decorator;
import { PoolFactoryModule } from 'cc-slot-module/PoolFactory/PoolFactoryModule';

@ccclass
export default class CoinFlyPoolModule extends PoolFactoryModule {
    spawnCoinFly(startPos: cc.Vec3, endPos: cc.Vec3, onComplete: () => void): void {
        const coin = this.getObject();
        coin.parent = this.node;
        coin.position = startPos;
        coin.opacity = 255;

        cc.tween(coin)
            .to(0.6, { position: endPos }, { easing: 'cubicOut' })
            .call(() => {
                this.returnObject(coin);
                onComplete && onComplete();
            })
            .start();
    }
}
```
