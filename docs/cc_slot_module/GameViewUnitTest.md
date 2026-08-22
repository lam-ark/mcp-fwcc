# GameViewUnitTest

> **Source Path**: `assets/cc-common/cc-slot-module/GameViewUnitTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Key Methods
- `verifyTrialModeData(): boolean`
- `verifyCurrencyInHistoryScene(): boolean`

## Source Implementation
```typescript
import { CURRENCY_ENUM, GameConfig, TrialModeData } from "./SlotModuleExport";

/**
 * @description Verify if the trial mode data is valid for the given currency
 * @param currency - The currency to verify, e.g. "USD", "THB"
 * @param trialModeData - The trial mode data to verify
 * @returns True if the trial mode data is valid, false otherwise
 */
export function verifyTrialModeData(currency: string, trialModeData: TrialModeData[]): boolean {
    let isValidData = true;
    trialModeData.forEach(gameModeData => {
        const hasData = gameModeData.data.some(currencyData => currencyData.type === CURRENCY_ENUM[currency]);
        if (!hasData) {
            isValidData = false;
        }
    });
    return isValidData;
}


export function verifyCurrencyInHistoryScene(gameLogic, currency: string, gameConfig: GameConfig): boolean {
    if (!currency) {
        cc.error("Currency is required, please check the URL parameters");
        return false;
    }
    if (!gameConfig) {
        cc.error("GameConfig is required");
        return false;
    }
    if (!gameLogic) {
        cc.error("GameLogic is required");
        return false;
    }
    if (!gameLogic.getMoneyFormatter()) {
        cc.error("MoneyFormatter is required");
        return false;
    }
    const currencyConfig = gameConfig.CURRENCY_CONFIG[currency.toUpperCase()];
    if (!currencyConfig) {
        cc.error(`Currency config not found for currency: ${currency.toUpperCase()}`);
        return false;
    }
    return true;
}

```
