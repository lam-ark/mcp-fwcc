# loadModuleConfigAsync

> **Source Path**: `assets/cc-common/cc-slot-module/Components/loadModuleConfigAsync.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`LoadModuleConfigAsync`**

## Key Methods
- `init(): void`
- `handleDataSuccess(): void`
- `handleDataError(): void`
- `decryptData(): any`
- `getConfig(): any`
- `replaceConfig(): void`
- `switchEnv(): void`

## Source Implementation
```typescript
const appConfig = require("../../../mock/appConfig");
const appConfigDebug = require("../../../mock/appConfig-debug");
class LoadModuleConfigAsync {
	dataUpdate: any;
	dataUpdateProd: any;
	constructor() {
		this.dataUpdate = null;
		this.dataUpdateProd = null;
	}

	init(): void {
		if(CC_EDITOR || !globalThis.eno){
			return;
		}

		this.dataUpdate = eno.cloneDeep(appConfig);
		const isDebugMode = cc.sys.isBrowser && window.location.hostname === 'localhost';

		if (this.dataUpdate.REMOTE_CONFIG_URL_FULL && !cc.sys.isBrowser && !isDebugMode) {
			setTimeout(() => {
				eno.ServiceRest.get({
					apiUrl: this.dataUpdate.REMOTE_CONFIG_URL_FULL,
					url: '',
					callback: this.handleDataSuccess.bind(this),
					callbackErr: this.handleDataError.bind(this)
				});
			}, 100);
		} else if (this.dataUpdate.REMOTE_CONFIG_URL_FULL && cc.sys.isBrowser) {
			setTimeout(() => {
				eno.ServiceRest.getRawDataWeb({
					fullURL: this.dataUpdate.REMOTE_CONFIG_URL_FULL,
					callback: this.handleDataSuccess.bind(this),
					callbackErr: this.handleDataError.bind(this)
				});
			}, 100);
		} else if (this.dataUpdate.REMOTE_CONFIG_URL && cc.sys.isBrowser && !isDebugMode) {
			setTimeout(() => {
				const domainGame = typeof (window as any).domainGlobal !== 'undefined' ? (window as any).domainGlobal : window.location.origin;
				eno.ServiceRest.get({
					apiUrl: domainGame + this.dataUpdate.REMOTE_CONFIG_URL,
					params: { t: new Date().getTime() },
					url: '',
					callback: this.handleDataSuccess.bind(this),
					callbackErr: this.handleDataError.bind(this)
				});
			}, 100);
		} else {
			if (cc.sys.localStorage.getItem && cc.sys.localStorage.getItem("enviroment") != null) {
				try {
					if (cc.sys.localStorage.getItem("enviroment").indexOf("test") >= 0) {
						// check appConfigDebug
						if (appConfigDebug) {
							this.dataUpdate = eno.cloneDeep(appConfigDebug);
							this.dataUpdate = this.decryptData(this.dataUpdate);
						} else {
							this.dataUpdate = eno.cloneDeep(appConfig);
							this.dataUpdate = this.decryptData(this.dataUpdate);
						}
					} else {
						this.dataUpdate = eno.cloneDeep(appConfig);
						this.dataUpdate = this.decryptData(this.dataUpdate);
					}
				} catch (e) {
					this.dataUpdate = eno.cloneDeep(appConfig);
					this.dataUpdate = this.decryptData(this.dataUpdate);
				}
			} else {
				this.dataUpdate = eno.cloneDeep(appConfig);
				this.dataUpdate = this.decryptData(this.dataUpdate);
			}
			this.dataUpdate.IS_FINISHED_REMOTE = true;
		}
	}

	handleDataSuccess(data: any): void {
		this.dataUpdate = eno.cloneDeep(data);
		this.dataUpdate = this.decryptData(this.dataUpdate);
		this.dataUpdateProd = eno.cloneDeep(this.dataUpdate);
		cc.sys.localStorage.setItem('appConfigLocalStore', JSON.stringify(this.dataUpdateProd));
		this.dataUpdate.IS_FINISHED_REMOTE = true;
	};

	handleDataError(): void {
		let appConfigLocal = cc.sys.localStorage.getItem('appConfigLocalStore');
		if (appConfigLocal) {
			appConfigLocal = JSON.parse(appConfigLocal);
			this.dataUpdate = eno.cloneDeep(appConfigLocal);
		} else {
			this.dataUpdate = eno.cloneDeep(appConfig);
		}
		this.dataUpdate = this.decryptData(this.dataUpdate);
		this.dataUpdateProd = eno.cloneDeep(this.dataUpdate);
		this.dataUpdate.IS_FINISHED_REMOTE = true;
	};

	decryptData(data: any): any {
		if (data.IS_DECODE) {
			const keyEncrypt = '\u004B\u0068\u00F4\u006E\u0067\u0020\u0042\u0069\u1EBF\u0074\u0020\u0110\u1EB7\u0074\u0020\u0054\u00EA\u006E\u0020\u0047\u00EC';
			Object.keys(data).forEach(key => {
				if (key === 'API_URL' || key === 'SOCKET_URL' || key.indexOf('IPMaster') > -1) {
					if (Array.isArray(data[key])) {
						for (let i = 0; i < data[key].length; i++) {
							data[key][i] = globalThis.eno.XOCypher.decode(keyEncrypt, data[key][i]);
						}
					} else {
						data[key] = globalThis.eno.XOCypher.decode(keyEncrypt, data[key]);
					}
				}
			});
		}
		delete data.IS_DECODE;
		return data;
	};

	getConfig(): any {
		return this.dataUpdate;
	}

	replaceConfig(config): void {
		Object.keys(config).forEach(it => {
			this.dataUpdate[it] = config[it];
		});
	}

	switchEnv(isProd: any): void {
		if (isProd) {
			if (this.dataUpdateProd) {
				this.dataUpdate = eno.cloneDeep(this.dataUpdateProd);
			} else {
				this.dataUpdate = eno.cloneDeep(appConfig);
			}
			this.dataUpdate = this.decryptData(this.dataUpdate);
			this.dataUpdate.IS_FINISHED_REMOTE = true;
		} else {
			this.dataUpdate = eno.cloneDeep(appConfigDebug);
			this.dataUpdate = this.decryptData(this.dataUpdate);
			this.dataUpdate.IS_FINISHED_REMOTE = true;
		}
	};

	setUpSentry = (): void => {
		const { IS_PRODUCTION, IS_SHOW_STATS } = this.dataUpdate;
		if (typeof (window as any).Sentry !== 'undefined') {
			if (IS_PRODUCTION) {
				(window as any).Sentry.init({ dsn: 'https://32ab507534bc4befbd5e1b20e223c93d@sentry.io/1780011' });
			} else {
				(window as any).Sentry.init({ dsn: 'https://b034a1c4d32e42af90071e62d2bf3290@sentry.io/2655786' });
			}
		}
	};
}
const loadModuleConfigAsync = new LoadModuleConfigAsync();
loadModuleConfigAsync.init();

export default loadModuleConfigAsync;
globalThis.loadModuleConfigAsync = loadModuleConfigAsync;

```
