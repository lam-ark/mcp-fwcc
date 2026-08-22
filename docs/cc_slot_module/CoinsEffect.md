# CoinsEffect

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/WinEffect/CoinsEffect.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CoinsEffect`** extends `Component`

## CC Properties
- `coinParticles`

## Key Methods
- `onLoad(): void`
- `showCoinsEffect(): void`
- `hideCoinsEffect(): void`

## Source Implementation
```typescript
const { _decorator, Component, ParticleSystem } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class CoinsEffect extends Component {
    @property(ParticleSystem) coinParticles: cc.ParticleSystem[] = [];

    protected onLoad(): void {
        this.node.on("SHOW_COINS_EFFECT", this.showCoinsEffect, this);
        this.node.on("HIDE_COINS_EFFECT", this.hideCoinsEffect, this);
        this.coinParticles.forEach(particle => {
            eno.setOpacity(particle.node, 0);
            particle.node.active = false;
        });
    }

    showCoinsEffect(): void {
        this.coinParticles.forEach(particle => {
            if (!particle.node.active) {
				particle.node.active = true;
				eno.setOpacity(particle.node, 1);
				particle.resetSystem();
                this.scheduleOnce(() => {
                    eno.setOpacity(particle.node, 255);
                }, 0.1);
			}
        });
    }

	hideCoinsEffect(): void {
		this.coinParticles.forEach(particle => {
			particle.stopSystem();
		});
	}
}


```
