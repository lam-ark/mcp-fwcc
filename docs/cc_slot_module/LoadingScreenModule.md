# LoadingScreenModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/LoadingScreenModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`LoadingScreenModule`** extends `Component`

## CC Properties
- `progressBar`
- `homeBtn`
- `progressLabel`

## Key Methods
- `CurrentProgress(): number`
- `onLoad(): void`
- `resetProgress(): void`
- `startLoadingPipeline(): void`
- `redirectSceneName(): void`
- `addHomeEvent(): void`
- `startLoadScene(): void`
- `onHideSplashScreen(): void`
- `preloadScene(): void`
- `updateLabelProgressFull(): void`
- `updateLabelProgress(): void`
- `update(): void`
- `setEventId(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component, director, sys, tween } = cc;
const { JsbUtils, environment, gameCommonUtils, setOpacity, handleFlowOutGame } = eno;

const { ccclass, property } = _decorator;

@ccclass
export class LoadingScreenModule extends Component {
	@property
	sceneName: string = '';
	@property
	sdSceneName: string = '';
	@property
	sceneNameIframe: string = '';
	@property
	sceneNameHistory: string = '';
	@property(cc.ProgressBar) progressBar: cc.ProgressBar = null;
	@property(cc.Node) homeBtn: cc.Node = null;
	@property(cc.Label) progressLabel: cc.Label = null;

	public get CurrentProgress(): number {
		return this.progressBar.progress;
	}
	public set CurrentProgress(value: number) {
		if (this.progressBar && this.progressBar.progress != value) {
			this.progressBar.progress = value;
			this.updateLabelProgress(value);
		}
	}

	protected preloadGameScene: boolean = false;
	protected switchGameScene: boolean = false;
	protected isBackToLobby: boolean = false;
	protected usingLoadHowl: boolean = false;
	totalPercent = 0;
	eventId = null;
	updatedScene = '';
	tweenFullProgress: any;
	loadHistory = false;

	onLoad(): void {
		if (this.sceneName === '') {
			return;
		}
		this.resetProgress();
		this.updatedScene = this.sceneName;
		this.loadHistory = false;
		this.startLoadingPipeline();
	}

	resetProgress(): void {
		this.progressBar && (this.progressBar.progress = 0);
		this.progressLabel && (this.progressLabel.string = '0%');
	}

	startLoadingPipeline(): void {
		const { IS_FINISHED_REMOTE } = environment.getConfig();
		if (IS_FINISHED_REMOTE) {
			this.redirectSceneName();
			this.addHomeEvent();
			this.startLoadScene();
		} else {
			setTimeout(() => {
				this.startLoadingPipeline();
			}, 100);
		}
	}

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

	addHomeEvent(): void {
		if (this.homeBtn) {
			this.homeBtn.active = false;
			const { LOGIN_IFRAME } = environment.getConfig();
			if (!LOGIN_IFRAME) {
				this.scheduleOnce(() => {
					this.homeBtn.active = true;
					this.homeBtn.off('click');
					this.homeBtn.on('click', () => {
						if (this.isBackToLobby) {
							return;
						}
						//TODO: implement KtekEventHandler
						// let eventHandler = this.node.getComponent("KtekEventHandler");
						// if( eventHandler ){
						//     eventHandler.getInstance().sendToUs("clear_cache", {
						//         scene: sceneName
						//     });
						// }
						gameCommonUtils.handleCloseGameIframe();
						this.isBackToLobby = true;
					});
				}, 10);
			}
		}
	}

	startLoadScene(): void {
		this.node.active = true;
		setOpacity(this.node, 255);
		this.preloadScene();
	}

	onHideSplashScreen(): void {
		this.progressBar.progress = 0;
	}

	preloadScene(): void {
		this.preloadGameScene = true;
		cc.director.preloadScene(this.updatedScene, (completedCount, totalCount) => {
			if (totalCount > 0) {
				this.totalPercent = completedCount / totalCount;
			}
		}, (error) => {
			if (error) {
				handleFlowOutGame();
			} else {
				if (!this.isBackToLobby) {
					const delay = this.progressBar.progress >= 1 ? 0.1 : 0.5;
					this.setProgressFull(delay, () => {
						director.loadScene(this.updatedScene);
					});
				}
			}
		});
	}

	setProgressFull(delay: number, callback: () => void): void {
		if (this.tweenFullProgress) {
			this.tweenFullProgress.stop();
		}
		this.tweenFullProgress = tween(this)
		this.tweenFullProgress
			.to(delay, { CurrentProgress: 1 }, { easing: "sineIn" })
			.call(() => {
				this.updateLabelProgressFull();
				callback && callback();
				this.tweenFullProgress = null;
			})
			.start();
	}

	updateLabelProgressFull(): void {
		if (this.progressLabel) {
			this.progressLabel.string = "100%";
		}
	}

	updateLabelProgress(value: number): void {
		if (this.progressLabel && value <= 1) {
			this.progressLabel.string = `${Math.floor(value * 100)}%`;
		}
	}

	update(dt: number): void {
		if (this.preloadGameScene) {
			let percent = (this.totalPercent - this.progressBar.progress) / 20;
			if (percent > 0 && !this.tweenFullProgress) {
				this.progressBar.progress += percent;
			}
		}
		if (this.progressBar.progress <= 1) {
			// update label progress
			if (this.progressLabel) {
				this.progressLabel.string = `${Math.floor(this.progressBar.progress * 100)}%`;
			}
		}
	}

	setEventId(id: string): void {
		this.eventId = id;
	}

	onDestroy(): void {
		this.unscheduleAllCallbacks();
		if (this.tweenFullProgress) {
			this.tweenFullProgress.stop();
		}
		this.tweenFullProgress = null;
		if (this.usingLoadHowl) {
			JsbUtils.unregisterLoadHowl();
		}
	}
}
```
