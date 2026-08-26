---
id: "cc_slot_module:LoadingScreenModule:methods:redirectSceneName"
title: "LoadingScreenModule.redirectSceneName Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "redirectSceneName"]
---

# 📖 `LoadingScreenModule.redirectSceneName()`

---

## 1. Complete Source Code Implementation

```typescript
redirectSceneName(): void {
    if (sys.isBrowser) {
        const { LOGIN_IFRAME } = environment.getConfig();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const history = urlParams.get('history');

        if (this.sceneNameHistory && history == 'true') {
            this.updatedScene = this.sceneNameHistory;
            this.loadHistory = true;
        } else if (this.sceneNameIframe) {
            this.updatedScene = this.sceneNameIframe;
        }

        const extName = director.getScene().name.split('-');
        let extSceneName = null;
        if (extName.length > 1) {
            extSceneName = extName[1];
            if (extName[2]) {
                extSceneName = `${extSceneName}-${extName[2]}`;
            }
        }

        if (extSceneName) {
            let redirectScene = `${this.updatedScene}-${extSceneName}`;
            this.sceneName = redirectScene;
            // @ts-ignore
            let sceneList: string[] = cc.game._sceneInfos.map(scene => scene.url);
            const hasScene = sceneList.some(scene => scene == redirectScene);

            if (hasScene) {
                this.updatedScene = redirectScene;
            }
        }
        if (LOGIN_IFRAME && globalThis.Howler) {
            JsbUtils.registerLoadHowl();
            this.usingLoadHowl = true;
        }
        if (window) {
            window.addEventListener('onHideSplashScreen', this.onHideSplashScreen.bind(this));
        }
    }

    if (sys.isMobile && this.sdSceneName) {
        this.updatedScene = this.sdSceneName;
    }
}
```
