---
id: "cc_slot_module:IntroGameModule:recipes:custom_interactive_rules_carousel_intro"
title: "Recipe: Multi-Page Swipeable Intro Splash Feature Cards"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "recipes", "carousel", "intro_cards"]
---

# 💡 Recipe: Multi-Page Swipeable Intro Splash Feature Cards

---

## 1. Multi-Page Intro Implementation

Extend `IntroGameModule` with page view indicator dot management:

```typescript
@ccclass
export class CarouselIntroGameModule extends IntroGameModule {
    @property(cc.PageView) pageView: cc.PageView = null;
    @property(cc.Node) pageDots: cc.Node[] = [];

    onPageChanged(): void {
        const curIdx = this.pageView.getCurrentPageIndex();
        this.pageDots.forEach((dot, idx) => {
            dot.opacity = (idx === curIdx) ? 255 : 100;
        });
    }
}
```
