---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:03_bet_history_lsc_lsh"
title: "Business Specification 03: Bet History (LSC) & Jackpot History (LSH)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase", "BaseUIPopup"]
tags: ["lsc", "lsh", "bet_history", "jackpot_history", "pagination", "summary_view"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 3. 📜 Bet History (LSC) & Jackpot History (LSH)

---

## 3.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **5** | **Tapping Win Box / Paybar** | Tapping Win Box opens Bet History (LSC) popup. | Tapping Paybar **does not open LSC**. | **Follow Refer** | [Bug 86d41a0b0](https://app.clickup.com/t/9008199668/86d41a0b0)<br>Open LSC exclusively via Settings Menu / Dedicated History button. |
| **6** | **Popup Window Framing** | LSC and LSH are full-screen popups that cannot be closed by tapping outside. | LSC and LSH are framed dialog popups; tapping the backdrop outside closes them. | **Follow Refer** | Enable backdrop click-to-dismiss on LSC/LSH popups. |
| **12** | **Session ID Copy Button** | Includes a "Copy Session ID" button for redirect verification. | Does not include a Copy Session ID button. | **Follow Refer** | [Bug 86d419xxe](https://app.clickup.com/t/9008199668/86d419xxe)<br>Displaying short PSID text is sufficient; copy button omitted. |
| **32** | **Pagination Buttons on Empty State** | When no records exist: Completely hides Previous / Next buttons. | Displays Previous / Next buttons in Disabled (grayed-out) state. | **Follow Refer** | Render disabled pagination buttons to preserve UI structure. |
| **33** | **Pagination Button State Management** | Buttons visible but disabled. | Matches LSC behavior. | **Follow Refer** | Maintain uniform pagination button positioning. |
| **34** | **Jackpot History (LSH) Columns** | Columns: `Time` (dd/mm hh:mm:ss), `Honor`, `Total Bet`, `Total Win`. | Columns: `Time` (dd/mm hh:mm), `Honor`, `Bet`, `Jackpot`. | **Follow Refer** | Format timestamp to `dd/mm hh:mm` and label column as `Jackpot`. |
| **35** | **Row Hover Highlight (Desktop)** | Highlights table row when hovering cursor over LSC records. | Table row is highlighted on hover. | **Follow Refer** | Retain row hover visual feedback on desktop. |
| **36** | **Feature Win Marker Dot** | No row highlight; only "Details" button has hover effect. | If the spin triggered Free Spins / Jackpot / Max Win, a **colored dot badge** appears beneath `>>`. | **Follow Refer** | Render colored indicator dots for major feature trigger spins. |
| **37** | **Overview LSC Table Columns** | Columns: `Time`, `Total Bet`, `Total Win`. | Columns: `#`, `Time`, `Lines`, `Bet`, `Win`, `Result`. | **Follow Refer** | Include sequence number `#` and `Lines` columns per Refer spec. |
| **38** | **Page Numbering Display** | Displays "Page X" text per SDK prefab. | Displays "Page X/Y" (e.g. `1/5`) in detailed LSC views. | **Follow Refer** | Clearly display total page count in pagination header. |
| **39** | **Session ID in Detailed Sub-Pages** | Copy button included; session ID displayed across all sub-pages. | No copy button; session ID shown only on Summary page, omitted on spin sub-pages. | **Follow Refer** | Streamline sub-page headers by removing redundant PSID labels. |
| **40** | **Summary Screen Display Scope** | Summary screen displayed only for spins that triggered Free Game. | Summary screen displayed for **all spins** (including Normal Game spins). | **Follow Refer** | Always present Summary screen upon opening spin detail view. |
| **41** | **Free Spins Count on Summary** | Free Spins count not displayed on Summary. | Displays total Free Spins count awarded in that session. | **Follow Refer** | Add Free Spins total metric to the Summary card. |
| **42** | **Timestamp Formatting in Details** | Formatted as `dd/mm - hh:mm:ss`. | Renders backend raw format. | **Follow ARK** | Standardize timestamp to `dd/mm - hh:mm:ss` for clarity. |
| **43** | **Normal Game Spin Title** | Popup header displays "Base Game". | Header button displays "Normal". | **Follow Refer** | Use concise label "Normal" instead of "Base Game". |
| **44** | **Total Metrics on Sub-Pages** | Displays `Total Bet`, `Win`, `Total Win` header boxes. | Suppresses total metric boxes on individual sub-pages. | **Follow Refer** | Dedicate maximum screen space to the Matrix layout. |
| **45** | **Cascade / Refill Round Display** | Displays "Round X/Y" label on each cascade step. | No "Round X/Y" text; each cascade/respin step is rendered on an independent page. | **Follow Refer** | Treat each cascade step as a discrete sub-page. |
| **46** | **Payout vs Rewards Section** | Displays "Payout" section detailing combination breakdown. | Displays "Rewards" section recording awarded prizes. | **Follow Refer** | Format rewards as "Normal : $XX.XX" or "Respin Z : $XX.XX". |
| **47** | **Header Navigation: Back vs Close** | Title bar contains Back button only (no Close button). | Title bar contains Close (X) button only (no Back button). | **Follow Refer** | Use unified Close (X) button in dialog title bar. |
| **48** | **Back Button Dismissal Action** | Back button returns to LSC master list. | Close button closes detailed LSC popup directly. | **Follow Refer** | Close button dismisses dialog back to main game screen. |
| **49** | **First/Last Page Navigation State** | Hides Previous button on page 1; hides Next button on last page. | Renders Previous button disabled on page 1; renders Next button disabled on last page. | **Follow Refer** | Keep pagination button layout stationary across all pages. |
