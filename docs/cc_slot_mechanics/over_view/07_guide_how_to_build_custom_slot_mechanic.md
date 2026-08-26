---
id: "cc_slot_mechanics:overview:create_custom_mechanic"
title: "Developer Guide: How to Build a Custom Slot Mechanic from Scratch"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "overview", "custom_mechanic_guide", "developer_tutorial"]
---

# 🛠️ Developer Guide: How to Build a Custom Slot Mechanic from Scratch

---

## 1. 5-Step Mechanic Creation Checklist
1. **Define Config**: Create `[Name]Config.ts` with timings and animation parameters.
2. **Define Data**: Create `[Name]Data.ts` extending `BaseDataModule` with `registeredKeys`.
3. **Build Controller**: Create `[Name]Module.ts` extending `SlotBaseModule`.
4. **Wire Writer Actions**: Implement action script steps in `NormalGameWriterModule` or dedicated mechanic writer.
5. **Create Test Scene**: Build `[Name]SceneTest.ts` for isolated unit testing.
