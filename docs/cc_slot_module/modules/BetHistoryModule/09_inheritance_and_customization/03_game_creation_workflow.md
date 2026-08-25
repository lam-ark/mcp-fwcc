---
id: "cc_slot_module:BetHistoryModule:inheritance:game_creation_workflow"
title: "BetHistoryModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 BetHistoryModule Game Creation Workflow

---

## 1. Integration Checklist

1. **Prefab Instantiation**: Place `BetHistoryPopup.prefab` under `Canvas/Director/Popup/BetHistory`.
2. **Inspector Wire-up**: Connect `recordView`, `detailView`, `nextBtn`, `backBtn`, `closeBtn`, `loading`, `messageNode`, `messageLabel`, `pageIndexNode`, `pageIndexLabel`.
3. **Item Prefab Setup**: Ensure `BetCellHistory.prefab` contains proper layout and labels matching `itemPerPage`.
4. **Event Binding**: Confirm SettingPanel emits `OPEN_BET_HISTORY_PANEL`.
5. **QA Verification**: Verify pagination forwards/backwards and verify detail view opening on cell click.
