---
id: "cc_slot_module:FreeOptionDirectorModule:overview:lifecycle_flowchart"
title: "FreeOptionDirectorModule Volatility Choice Flowchart"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FreeOptionDirectorModule Volatility Choice Flowchart

## 1. Volatility Choice Flowchart

```mermaid
graph TD
    Entry([enter(): reset timer & onEnableOptions true]) --> Wait[Wait for User Choice or Timeout]
    
    Wait -->|User Clicks Option| Click[optionClick: Disable Buttons & stopCountDown]
    Wait -->|15s Expired| Timeout[_runAutoTrigger: Random Pick & Disable Buttons]
    
    Click --> Dispatch[gameLogic.emit SEND_FREE_OPTION_REQUEST]
    Timeout --> Dispatch
    
    Dispatch --> ServerWait[Waiting for Backend Confirmation]
    ServerWait --> ModeSwitch[Director switches to FreeGame mode]
```
