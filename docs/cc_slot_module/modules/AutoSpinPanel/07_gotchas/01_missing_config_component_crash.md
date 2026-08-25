---
id: "cc_slot_module:AutoSpinPanel:gotchas:01_missing_config_component_crash"
title: "Missing Config Component Crash"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "gotchas", "null_pointer"]
---

# ⚠️ Missing Config Component Crash

---

## 1. Defect & Solution

Always ensure `AutoSpinPanelConfig.ts` is attached to the same node as `AutoSpinPanel.ts` in the editor inspector:

```typescript
init(): void {
    this.config = this.getComponent(AutoSpinPanelConfig);
    if (!this.config) {
        cc.error("AutoSpinPanelConfig component is missing on node");
        return;
    }
    // ...
}
```
