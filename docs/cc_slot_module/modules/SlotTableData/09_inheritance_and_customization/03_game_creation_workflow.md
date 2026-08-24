---
id: "cc_slot_module:SlotTableData:customization:game_creation_workflow"
title: "SlotTableData Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "workflow"]
---

# 🚀 SlotTableData Game Creation Workflow Checklist

---

## 1. Step-by-Step Integration Checklist

1. **Mount on Table Node**: Add `SlotTableData` component onto `Table` node in the Scene/Prefab.
2. **Verify Peer Config**: Ensure `TableModuleConfig` is present on the same node.
3. **Verify Server Key Ingestion**: Ensure `registeredKeys` match backend matrix packet keys (`"matrix"`, `"matrix0"`).
4. **Test Reconnection**: Test browser refresh midway through Free Spins to ensure `getResumeMatrix()` restores the board without errors.
