---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:production_game_case_study"
title: "SlotTableNearWinModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 SlotTableNearWinModule Production Case Study (Red Cliff `g9666L`)

---

## 1. Case Study Overview

In Red Cliff (`g9666L`), the base game triggers Free Spins when 3 or more Scatter symbols ("A") appear anywhere on reels 2, 3, and 4. The game also features a special Battle Bonus triggered when Bonus symbols appear on reels 1, 3, and 5.

---

## 2. Production Subclass Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export default class SlotTableNearWinModule9666 extends SlotTableNearWinModule {
    @property({ type: cc.ParticleSystem })
    fireTrailParticles: cc.ParticleSystem = null;

    extendInit(): void {
        if (this.fireTrailParticles) {
            this.fireTrailParticles.stopSystem();
        }
    }

    _canWinBonus(col: number): boolean {
        // Red Cliff Bonus triggers on columns 0, 2, 4 (Reels 1, 3, 5)
        if (col === 0) return true;
        if (col === 2 && this._countBonus < 1) return false;
        if (col === 4 && this._countBonus < 2) return false;
        return true;
    }

    _playNearWinEffect(col: number): void {
        super._playNearWinEffect(col);
        if (this.fireTrailParticles && this._nearWinData[col]?.isNearWin) {
            this.fireTrailParticles.node.setPosition(this._getXPosition(col), 0);
            this.fireTrailParticles.resetSystem();
        }
    }

    resetNearWin(): void {
        super.resetNearWin();
        if (this.fireTrailParticles) {
            this.fireTrailParticles.stopSystem();
        }
    }
}
```
