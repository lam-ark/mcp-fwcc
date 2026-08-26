---
id: "transfer-ark:bugfix:symbol_idle_animation_fails_after_combine_dimming_and_highpay_addanimation_fallback"
title: "Symbol Idle Animation Fails After Combine Dimming and Highpay addAnimation Fallback"
category: "bugfix"
game_ids: ["g9666","all"]
sdk_modules: ["SlotSymbolModule","PaylineSymbolModule","SlotSymbolModule9666"]
tags: ["symbol_idle","spine_animation","static_sprite","combine_dim","highpay_animation","addAnimation","playAnimation"]
created_at: "2026-08-26"
author: "ARK Slot Engineering Team"
---

# BUG-007: Symbol Idle Animation Fails After Combine Dimming and Highpay addAnimation Fallback

---

## 1. 📌 Problem / Feature Overview
- **Issue / Requirement**: Symbol idle animation fails to play after several spins on all midpay & highpay symbols, across standard & mega symbols, in both Normal and Free Game modes.

Root Causes:
1. Early Return while in Static Mode: In SlotSymbolModule9666.playAnimation(), the condition `if (currentAnim === targetAnim) return;` only compared the previous Spine track 0 animation name without checking if the symbol was currently in Static Sprite mode (`!this.isPlaying` or `this.sprite.node.active === true`). When non-combining symbols were dimmed during Payline / Combine via `dimAllPayLines` (which triggers `SHOW_STATIC`), their static sprite was made active. When combine finished and `PLAY_ANIMATION_IDLE` was emitted, `currentAnim === targetAnim` was true (Spine track 0 still remembered 'idle'), causing an early return that skipped `hideStatic()` and `super.playAnimation()`, leaving the symbol stuck in static mode forever.
2. Missing addAnimation override for Highpay symbols: SlotSymbolModule9666 did not override `addAnimation()` for Highpay symbols ('2', '3', '4'). Highpay symbols only have `${anim}_reel_${size.y}` animations in Spine. When `playAnimationAppear()` called `addAnimation('idle')`, the base SDK failed `SpineUtils.hasAnimation(this.spine, 'idle')` and automatically invoked `this.stopAnimation()`, switching the symbol to static mode.
- **Occurrence Scope**: Affects spinning reel strip generation during normal, turbo, and free spins.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**: Default `cc-common` implementation does not account for customized business rules and game constraints.
- **ARK Business Requirement**: Ensure correct symbol distribution, visual feedback, and zero regressions across all reel columns.

---

## 3. 🔍 Root Cause Analysis in Base SDK
- Offending modules: `SlotSymbolModule`, `PaylineSymbolModule`, `SlotSymbolModule9666`.
- Unfiltered random selection or missing size format mapping in configuration arrays.

---

## 4. 🛠️ Implementation & Override Solution
```typescript
addAnimation(animationName: string, loop: boolean = true): void {
        let targetAnim = animationName;
        if (this.isHighpay) {
            targetAnim = `${animationName}_reel_${this.size.y}`;
        }
        super.addAnimation(targetAnim, loop);
    }

    playAnimation(animationName: string, loop: boolean = false): void {
        let targetAnim = animationName;
        if (this.isHighpay) {
            targetAnim = `${animationName}_reel_${this.size.y}`;
        }

        const currentAnim = this.getCurrentAnimationName();
        if (this.isPlaying && currentAnim === targetAnim && this.sprite && !this.sprite.node.active) {
            this.applySymbolSkin();
            this.playFrameAnimation();
            return;
        }

        this.applySymbolSkin();

        if (this.isHighpay) {
            super.playAnimation(targetAnim, loop);
        } else {
            super.playAnimation(animationName, loop);
        }

        if (isValid(this.spine)) {
            const trackEntry0 = this.spine.getCurrent(0);
            if (trackEntry0) {
                trackEntry0.mixDuration = 0;
            }
        }

        this.playFrameAnimation();

        if (this.isPlaying) {
            this._currentAnim = animationName;
            this.updateDebugLabel();
        }
    }
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Zero-Code Modification on `cc-common`**: Never modify base engine files directly; apply overrides in game-specific classes.
2. **Buffer Rows Margin**: Ensure `BUFFER_TOP >= 3` and `BUFFER_BOT >= 3` for multi-size symbols to avoid visual clipping.
3. **Safety Guards**: Always guard against empty array pools.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Identify the target game config and reel module classes.
2. Apply the dynamic generator and override pattern in the game subclass.
3. Verify that reel strips render all symbol sizes properly during continuous spin.

---

## 7. 🔗 Codebase References
- `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts`
- `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts`
- `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/PaylineSymbolModule.ts`
