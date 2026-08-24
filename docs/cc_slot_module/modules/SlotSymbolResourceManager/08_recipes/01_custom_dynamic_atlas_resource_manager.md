---
id: "cc_slot_module:SlotSymbolResourceManager:recipe:custom_dynamic_atlas_resource_manager"
title: "Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "recipes", "atlas"]
---

# 💡 Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager

---

## 1. Context & Use Case
For titles loading dynamic theme skins from remote CDN bundles, symbols are packed into a `cc.SpriteAtlas` rather than individually assigned in inspector arrays.

---

## 2. Production Subclass Implementation

```typescript
const { _decorator, property } = cc._decorator;
import { SlotSymbolResourceManager } from "cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager";

@ccclass("AtlasSymbolResourceManager")
export class AtlasSymbolResourceManager extends SlotSymbolResourceManager {
    @property(cc.SpriteAtlas)
    symbolAtlas: cc.SpriteAtlas = null;

    getSymbolFrame(symbolCode: string): cc.SpriteFrame {
        if (this.symbolAtlas) {
            return this.symbolAtlas.getSpriteFrame(symbolCode);
        }
        return super.getSymbolFrame(symbolCode);
    }
}
```
