# WalletModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Wallet/WalletModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WalletModule`** extends `SlotBaseModule`

## CC Properties
- `realWallet`
- `trialWallet`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `setupObserver(): void`
- `onSwitchMode(): void`
- `onWalletActive(): void`
- `onTrialWalletActive(): void`
- `onUpdateWallet(): void`
- `onUpdateTrialWallet(): void`
- `pauseWallet(): void`
- `resumeWallet(): void`
- `syncWallet(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GAME_MODE_ENUM } from '../../Components/Common/SlotEnum';
import { GameDataStore } from '../../Core/GameDataStore';
import { GameUIEvents } from '../../Core/GameUIEvents';
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { SlotGameSettings } from '../../Core/SlotGameSettings';
const { ccclass, property } = _decorator;
const { inject } = eno;

@ccclass
export class WalletModule extends SlotBaseModule {
	@property(cc.Node)
	realWallet: cc.Node = null;
	@property(cc.Node)
	trialWallet: cc.Node = null;
	uiManagerData = null;
	walletModel = null;
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;
	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.WALLET.PAUSE_WALLET, this.pauseWallet, this);
		this.eventManager.on(GameUIEvents.WALLET.RESUME_WALLET, this.resumeWallet, this);
		this.eventManager.on(GameUIEvents.WALLET.SYNC_WALLET, this.syncWallet, this);
	}

	start(): void {
		this.walletModel = this.gameLogic.getDataModel().WalletData;
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.uiManagerData, 'isWalletActive', this.onWalletActive.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.uiManagerData, 'isWalletTrialActive', this.onTrialWalletActive.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.uiManagerData, "isTrialModeActive", this.onSwitchMode.bind(this), this);

		const { WALLET_TYPE } = this.walletModel;
		this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.NORMAL}`, this.onUpdateWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.TRIAL}`, this.onUpdateTrialWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	}

	onSwitchMode(isTrialModeActive: boolean): void {
		if (isTrialModeActive) {
			this.trialWallet.emit("RESUME_WALLET");
		} else {
			this.realWallet.emit("RESUME_WALLET");
		}
	}

	onWalletActive(isActive): void {
		this.realWallet.active = isActive;
	}

	onTrialWalletActive(isActive): void {
		this.trialWallet.active = isActive;
	}

	onUpdateWallet(value): void {
		this.realWallet.emit('ON_UPDATE_VALUE', value);
	}

	onUpdateTrialWallet(value): void {
		this.trialWallet.emit('ON_UPDATE_VALUE', value);
	}

	pauseWallet(): void {
		if (this.gameSettings.isTrialMode) {
			this.trialWallet.emit("PAUSE_WALLET");
		} else {
			this.realWallet.emit("PAUSE_WALLET");
		}
	}

	resumeWallet(): void {
		if (this.dataStore.currentGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
			return;
		}
		if (this.gameSettings.isTrialMode) {
			this.trialWallet.emit("RESUME_WALLET");
		} else {
			this.realWallet.emit("RESUME_WALLET");
		}
	}

	syncWallet(): void {
		this.resumeWallet();
	}

	onDestroy(): void {
		this.observer.releaseAll(this.walletModel, this);
		this.observer.releaseAll(this.uiManagerData, this);
	}
}


```
