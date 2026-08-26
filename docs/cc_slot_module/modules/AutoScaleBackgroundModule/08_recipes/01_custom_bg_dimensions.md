---
id: "cc_slot_module:AutoScaleBackgroundModule:recipes:custom_bg_dimensions"
title: "Recipe: Overriding Base Dimensions for High-Res Backgrounds"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "recipes"]
---

# 💡 Recipe: Overriding Base Dimensions for High-Res Backgrounds

```typescript
import { AutoScaleBackground } from 'cc-slot-module/Components/Compat/AutoScaleBackgroundModule';

export class HighResAutoScaleBackground extends AutoScaleBackground {
    scaleCanvasByOrientation(): void {
        let widthBackground = 1920;
        let heightBackground = 1080;
        // Apply custom aspect ratio math
        super.scaleCanvasByOrientation();
    }
}
```
