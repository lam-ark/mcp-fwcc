---
id: "cc_slot_module:IntroGameModule:overview:architecture_and_role"
title: "IntroGameModule Architectural Role & Splash Lifecycle"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "overview", "architecture", "splash_screen"]
---

# 🏛️ IntroGameModule Architectural Role & Splash Lifecycle

---

## 1. Architectural Mission

`IntroGameModule` manages the game introduction splash screen and "Do not show again" preference caching. It blocks gameplay until the player taps the join button, but automatically skips itself if the session is a reconnection (`joinGameData.isResume`), a promotional spin, or previously disabled by user preferences.

```mermaid
graph TD
    Bootstrap[Scene Bootstrap / JOIN_GAME_SUCCESS] --> IGM[IntroGameModule]
    IGM --> CheckCache{Check sys.localStorage 'HideIntroGame'?}
    CheckCache -->|True| Skip[emit: SKIP_INTRO_GAME -> active = false]
    CheckCache -->|False| Show[showButtonJoinGame(true)]
    
    User[Player Click Join] --> Tap[onClickJoinGame()]
    Tap --> Fade[eno.fadeOut(0.2s)]
    Fade --> Close[emit: HIDE_INTRO_GAME -> active = false]
```

---

## 2. Key Responsibilities

1. **Preference Persistence (`cacheHideIntroGame`)**:
   - Stores `{ [gameId]: boolean }` in `sys.localStorage` under key `"HideIntroGame"`.
2. **Auto-Skip on Reconnect**:
   - Inspects `joinGameData.isResume` and `joinGameData.promotionData`. If present, emits `SKIP_INTRO_GAME` immediately without displaying the splash.
3. **Smooth Dismissal Tween**:
   - Fades out opacity to $0$ over $0.2\text{s}$ before emitting `HIDE_INTRO_GAME`.
