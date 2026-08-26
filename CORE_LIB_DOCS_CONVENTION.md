---
id: "cc_core_lib:convention:v3"
title: "cc-core-lib Documentation Convention & Architecture Standard"
category: "cc_core_lib"
tags: ["cc_core_lib", "convention", "architecture", "standard", "eno"]
---

# 📜 Cocos Core Library (`cc-core-lib`) Knowledge Base Standard (v3.0)

> **Package**: `assets/cc-common/cc-core-lib/`  
> **Global Namespace**: `eno.*` / `globalThis.eno`  
> **Target Framework**: Cocos Creator 2.4 Plugin Library  
> **Sub-Packages**: `cc-wrap-func`, `share-lib`, `slot-base-logic`

---

## 🎯 Architectural Philosophy

`cc-core-lib` is the foundational runtime kernel powering all slot games, UI modules, math evaluations, network bridges, and audio engines across the entire gaming ecosystem.

Every class, singleton, and utility is documented in `docs/cc_core_lib/modules/[ClassName]/` using the **Deep-Atomic Architecture**:
- Full TypeScript type definitions.
- De-obfuscated, human-readable algorithmic logic.
- Performance characteristics ($O(1)$, garbage collection safety, memory allocation).
- Mobile & platform quirks (iOS Safari WebAudio, Android reflection, canvas safe-areas).
- Bidirectional Knowledge Graph (`relations.json`).
