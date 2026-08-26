---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:07_splash_loading_viewport"
title: "Business Specification 07: Splash, Loading Screen & Display Viewport"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["UIManagerModule", "GameConfig", "BasePortrait"]
tags: ["splash", "loading_bar", "tap_to_start", "orientation", "landscape", "fullscreen"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 7. 📱 Splash, Loading Screen & Display Viewport

---

## 7.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **21** | **Loading Label on Splash** | Displays animated "Loading..." text above progress bar. | No text label; progress bar only. | **Follow ARK** | Retain animated Loading text for clear asset loading feedback. |
| **22** | **Automatic Entry After Loading** | Displays Splash screen upon 100% load and waits for player tap. | Automatically transitions into the Action Panel upon 100% load without extra tap. | **Follow Refer** | Auto-enter main game to eliminate unnecessary user friction. |
| **23** | **"Tap to Start" Button** | Displays animated "TAP TO START" button with scaling pulse. | Bypasses "Tap to Start"; enters game directly. | **Follow Refer** | Synchronized with #22 for immediate game launch. |
| **24** | **Pre-Ingame Feature Intro Screen** | Displays pre-ingame feature splash introducing game highlights. | No pre-ingame feature screen. | **Follow ARK** | Retain pre-ingame screen when introducing complex mechanics. |
| **25** | **Background Responsive Scaling** | Full responsive background adjusting to device resolution and desktop window resize. | No background (black backdrop); desktop resize causes black screen artifacts. | **Follow ARK** | Full-size responsive background layout eliminating black screen bugs. |
| **71** | **Browser Web App Favicon** | ARK games include custom web app favicon icon in browser tab. | No web icon provided. | **Follow ARK** | Retain standard brand favicon. |
| **72** | **Landscape / Portrait Orientation Support** | Displays rotation prompt when oriented incorrectly. | Enforces Landscape by default. Includes Android Fullscreen button and iOS swipe-up gesture. | **Follow Refer** | [Bug 86d4230c9](https://app.clickup.com/t/9008199668/86d4230c9)<br>Default Landscape lock with native fullscreen gestures. |
