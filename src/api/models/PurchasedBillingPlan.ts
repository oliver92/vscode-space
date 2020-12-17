/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';

export type PurchasedBillingPlan = {
    id: string;
    jetSalesId?: string | null;
    plan: string;
    billingPeriod: string;
    since: string;
    till: string;
    currency: Currency;
    addUserPrice: number;
    addStoragePrice: number;
    addBandwidthPrice: number;
    addCiCreditPrice: number;
    minActiveUsers: number;
    prepaidUsers: number;
    storagePerUser: number;
    storageOverall: number;
    bandwidthPerUser: number;
    bandwidthOverall: number;
    ciCredits: number;
    ciCreditsReserve: number;
    integrations: number;
    searchHistory: number;
    hardLimitAmount: number;
}
