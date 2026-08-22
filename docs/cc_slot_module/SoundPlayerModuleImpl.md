# SoundPlayerModuleImpl

> **Source Path**: `assets/cc-common/cc-slot-module/Components/SoundPlayerModuleImpl.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SoundPlayerModuleImpl`** extends `Component`

## CC Properties
- `musicList`
- `sfxList`
- `userGestureNode`

## Key Methods
- `onLoad(): void`
- `_checkDuplicateAudioFile(): void`
- `_loadDynamicSounds(): void`
- `setThumbMode(): void`
- `_waitForUserGesture(): void`
- `_startPlayWithUserGesture(): void`
- `_resumeContextGesture(): Promise<void>`
- `_getVersionIOS(): number`
- `_onEventHide(): void`
- `_onEventShow(): void`
- `playMusic(): CustomAudioClipModule | null`
- `changeMusic(): CustomAudioClipModule | null`
- `stopMusic(): void`
- `pauseMusic(): void`
- `resumeMusic(): void`

## Source Implementation
```typescript

const { _decorator, Node, error, sys, warn, game, view, log, Component, assetManager } = cc;
import { CustomAudioClipModule, HowlerDataModule } from './Common/SlotCustomType';
const { ccclass, property } = _decorator;

@ccclass
export class SoundPlayerModuleImpl extends Component {
	@property(CustomAudioClipModule)
	musicList: CustomAudioClipModule[] = [];

	@property(CustomAudioClipModule)
	sfxList: CustomAudioClipModule[] = [];

	@property({ type: cc.Node })
	userGestureNode: cc.Node = null;

	@property
	musicVolume: number = 1;

	@property
	sfxVolume: number = 1;

	@property
	isDebug: boolean = false;

	@property sfxClickId: string = "BTN_GENERAL";
	@property
	storageKeyBGM = "enableBackgroundMusic";

	@property
	storageKeySFX = "enableSound";

	currentMusic: CustomAudioClipModule;
	isEnableBGM = false;
	isEnableSFX = false;
	resumeSfxList = [];

	enableMusicFunc: any;
	MUSIC_VOLUME: any = 1;

	isMuteMusic: boolean = false;
	isMuteEffect: boolean = false;
	protected musicAudioSource: cc.AudioSource = null;

	isWebSound = false;
	_soundPlayer = null;
	_hasAudioContext = true;

	onLoad(): void {
		// globalThis.soundPlayer = this;
		this._checkDuplicateAudioFile();
		this.node.setSiblingIndex(this.node.parent.children.length + 1);
		this.loadCacheConfig();

		if (this.isDebug) {
			warn("musicList", this.musicList.map(soundObj => soundObj.soundId));
			warn("sfxList", this.sfxList.map(soundObj => soundObj.soundId))
		}

		this.node.on('SET_UP_AUDIO_DATABASE', this._loadDynamicSounds.bind(this));

		game.on(cc.game.EVENT_HIDE, this._onEventHide, this);
		game.on(cc.game.EVENT_SHOW, this._onEventShow, this);

		this.isWebSound = (sys.isBrowser == true) && globalThis.Howl;

		if (this.isWebSound) {
			this._soundPlayer = new eno.HowlerSoundPlayer();
		} else {
			this._soundPlayer = new eno.CocosSoundPlayer();
		}

		this._soundPlayer.init(this.musicList, this.sfxList, this.node);

		if (this.isWebSound) {
			this._soundPlayer.loadSfxList(this.sfxList, () => {
			});
			this._soundPlayer.loadMusicList(this.musicList, () => {
				this._hasAudioContext = (globalThis.Howler.ctx && globalThis.Howler.ctx.state === 'running');
				if (!this._hasAudioContext) {
					this._waitForUserGesture();
				} else {
					this._soundPlayer.skipGesture();
				}
				this.playMainBGM();
			});
		} else if (sys.isMobile && sys.isBrowser) {
			this._waitForUserGesture();
		}
	}

	_checkDuplicateAudioFile(): void {
		const musicFileNames = this.musicList.map(soundObj => soundObj.audioFile?.name);
		musicFileNames.forEach((music, index) => {
			if (musicFileNames.indexOf(music) !== index) {
				warn("duplicate music file", music, musicFileNames.indexOf(music), index);
			}
		});

		const sfxFileNames = this.sfxList.map(soundObj => soundObj.audioFile?.name);
		sfxFileNames.forEach((sfx, index) => {
			if (sfxFileNames.indexOf(sfx) !== index) {
				warn("duplicate sfx file", sfx, sfxFileNames.indexOf(sfx), index);
			}
		});
	}

	_loadDynamicSounds(ev): void {
		let sfxList = ev.details.audioList;
		if (sfxList) {
			this._soundPlayer.loadDynamicSounds(sfxList, () => {
				if (this.isWebSound) {
					sfxList.forEach(soundObj => {
						assetManager.releaseAsset(soundObj.audioFile);
					})
				}
			});
		}
		ev.propagationStopped = true;
	}

	setThumbMode(isThumbMode: boolean): void {
		this._soundPlayer.setThumbMode(isThumbMode);
	}

	_waitForUserGesture(): void {
		this.node.width = view.getDesignResolutionSize().width;
		this.node.height = view.getDesignResolutionSize().height;
		this.node.on(Node.EventType.TOUCH_START, this._startPlayWithUserGesture, this);
	}

	_startPlayWithUserGesture(ev): void {
		log(`[SoundPlayerImpl] start sound with user gesture`);
		ev.preventSwallow = true;
		this.node.off(Node.EventType.TOUCH_START, this._startPlayWithUserGesture, this);
		if (this.isWebSound) {
			this._resumeContextGesture().then(() => {
				this._soundPlayer.resumeWithGesture();
			})
				.catch((e) => {
					log(`resume context fail with error ${e}`);
				})
		} else {
			// not have howler or not webSound
			this._soundPlayer.resumeWithGesture();
		}
	}


	_resumeContextGesture(): Promise<void> {
		const Howler = globalThis.Howler;
		if (sys.os === sys.OS_IOS) {
			const iOSVersion = this._getVersionIOS();
			if (iOSVersion >= 14) {
				return Howler.ctx.suspend().then(() => {
					return Howler.ctx.resume();
				});
			}
		}
		return Howler.ctx.resume();
	}

	_getVersionIOS(): number {
		var userAgent = window.navigator.userAgent;
		var match = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
		if (match !== null && match.length >= 4) {
			let iOSVersion = parseInt(match[1], 10);
			return iOSVersion;
		}
		return 13;
	}

	_onEventHide(): void {
		cc.log(`[SoundPlayerImpl] onEventHide`);
		this._soundPlayer && this._soundPlayer.onEventHide(this.isEnableBGM, this.isEnableSFX);
	}

	_onEventShow(): void {
		cc.log(`[SoundPlayerImpl] onEventShow`);
		this._soundPlayer && this._soundPlayer.onEventShow(this.isEnableBGM, this.isEnableSFX);
	}

	playMusic(id: string, loop = true, volume?: number): CustomAudioClipModule | null {
		volume = (this.isMuteMusic || !this.isEnableBGM) ? 0 : volume > 0 ? volume : this.musicVolume;
		log(`[SoundPlayerImpl] Play music ${id}`);
		return this._soundPlayer.playMusic(id, loop, volume);
	}

	changeMusic(id: string, loop: boolean, volume: number, mixTime: number): CustomAudioClipModule | null {
		volume = (this.isMuteMusic || !this.isEnableBGM) ? 0 : volume > 0 ? volume : this.musicVolume;
		log(`[SoundPlayerImpl] change music ${id}`);
		return this._soundPlayer.changeMusic(id, loop, volume, mixTime);
	}

	stopMusic(): void {
		this._soundPlayer.stopMusic();
	}

	pauseMusic(): void {
		this._soundPlayer.pauseMusic();
	}

	resumeMusic(): void {
		this._soundPlayer.resumeMusic();
	}

	setMusicVolume(volume: number): void {
		volume = volume < 0.01 ? 0.01 : volume;
		this.musicVolume = volume;
		this._soundPlayer.setMusicVolume(volume);
	}

	muteMusic(): void {
		this.isMuteMusic = true;
		this._soundPlayer.muteMusic();
	}

	unmuteMusic(): void {
		if (this.isEnableBGM) {
			this.isMuteMusic = false;
			this._soundPlayer.unmuteMusic(this.musicVolume);
		}
	}

	playSfx(sfx: string, loop = false, volume?: number): cc.AudioSource | HowlerDataModule | null {
		volume = (!this.isEnableSFX || this.isMuteEffect) ? 0 : (volume || this.sfxVolume);
		log(`[SoundPlayerImpl] Play sfx ${sfx}`);
		return this._soundPlayer.playSfx(sfx, loop, volume);
	}

	stopSfx(sfx: string): void {
		this._soundPlayer.stopSfx(sfx);
	}

	stopAllEffects(): void {
		this._soundPlayer.stopAllEffects();
	}

	pauseAllEffects(isInterrupt = false): void {
		this._soundPlayer.pauseAllEffects(isInterrupt);
	}

	muteAllEffects(): void {
		this.isMuteEffect = true;
		this.setEffectVolume(0, true);
	}

	unmuteAllEffects(): void {
		if (this.isEnableSFX) {
			this.isMuteEffect = false;
			this.setEffectVolume(this.sfxVolume, true);
		}
	}

	setEffectVolume(volume: number, immediate?: boolean): void {
		volume = volume < 0 ? 0 : volume;
		this._soundPlayer.setEffectVolume(volume, immediate);
	}

	setSoundVolume(soundId: string, volume: number): void {
		if (typeof volume !== 'number') {
			error("invalid volume", volume);
			return;
		}

		this._soundPlayer.setSoundVolume(soundId, volume);
	}

	fadeMusicTo(duration: number, volume: number, onComplete?: () => void): void {
		if (this.isMuteMusic || !this.isEnableBGM) {
			return;
		}

		this._soundPlayer.fadeMusicTo(duration, volume, onComplete);
	}

	fadeSoundTo(soundId: string, duration: number, volume: number, onComplete?: () => void): void {
		if (this.isMuteEffect || !this.isEnableSFX) {
			return;
		}

		this._soundPlayer.fadeSoundTo(soundId, duration, volume, onComplete);
	}

	/**
	 * using to play one clip many times
	 * save the return data to stopSfxOneShot 
	 */
	playSfxOneShot(soundId: string, volume?: number, loop: boolean = false): cc.AudioSource | HowlerDataModule {
		volume = (!this.isEnableSFX || this.isMuteEffect) ? 0 : (volume || this.sfxVolume);
		return this._soundPlayer.playSfxOneShot(soundId, volume, loop);
	}

	stopSfxOneShot(data = null): void {
		if (!data) {
			error("stopSfxOneShot invalid data", data);
			return;
		}
		this._soundPlayer.stopSfxOneShot(data);
	}

	stopAllAudio(): void {
		this._soundPlayer.stopAllAudio();
	}

	loadCacheConfig(): void {
		const { ENABLE_BGM, ENABLE_SFX } = eno.environment.getConfig();
		this.storageKeyBGM = ENABLE_BGM ? ENABLE_BGM : this.storageKeyBGM;
		this.storageKeySFX = ENABLE_SFX ? ENABLE_SFX : this.storageKeySFX;
		let isEnableBGM = sys.localStorage.getItem(this.storageKeyBGM);
		let isEnableSFX = sys.localStorage.getItem(this.storageKeySFX);
		this.isEnableBGM = (isEnableBGM != null) ? JSON.parse(isEnableBGM) : true;
		this.isEnableSFX = (isEnableSFX != null) ? JSON.parse(isEnableSFX) : true;
	}

	bgmToggle(): void {
		this.setBgmEnable(!this.isEnableBGM);
	}

	setBgmEnable(enable: boolean): void {
		this.isEnableBGM = enable;
		sys.localStorage.setItem(this.storageKeyBGM, this.isEnableBGM.toString());

		if (this.enableMusicFunc) {
			clearTimeout(this.enableMusicFunc);
		}
		this.enableMusicFunc = setTimeout(() => {
			if (this.isEnableBGM) {
				this.unmuteMusic();
			} else {
				this.muteMusic();
			}
			this.enableMusicFunc = null;
		}, 100);
	}

	sfxToggle(): void {
		this.setEffectEnable(!this.isEnableSFX);
	}

	setEffectEnable(enable: boolean): void {
		this.isEnableSFX = enable;
		sys.localStorage.setItem(this.storageKeySFX, this.isEnableSFX.toString());
		if (this.isEnableSFX) {
			this.unmuteAllEffects();
		} else {
			this.muteAllEffects();
		}

		if (cc.director) {
			cc.director.emit("UPDATE_SFX_SETTING", enable);
		}
	}

	playMainBGM(): void {
		this.playMusic('MUSIC_MAIN');
	}

	playSFXClick(): void {
		this.playSfx(this.sfxClickId);
	}

	update(dt: number): void {
		if (this._soundPlayer && typeof this._soundPlayer.update == "function") {
			this._soundPlayer.update(dt);
		}
	}

	onDisable(): void {
		this.stopAllAudio();
		this.node.off(Node.EventType.TOUCH_START, this._startPlayWithUserGesture, this);
	}

	onDestroy(): void {
		this._soundPlayer.onDestroy();
		cc.game.targetOff(this);
	}
}

```
