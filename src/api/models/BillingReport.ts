/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchasedBillingPlan } from './PurchasedBillingPlan';

export type BillingReport = {
    since: string;
    till: string;
    plans: Array<PurchasedBillingPlan>;
    activeUsers: Array<number>;
    applications: Array<number>;
    chatMessages: Array<number>;
    ciCredits: Array<number>;
    trafficTotal: Array<number>;
    trafficFiles: Array<number>;
    trafficGit: Array<number>;
    trafficPackages: Array<number>;
    trafficAutomation: Array<number>;
    storageTotal: Array<number>;
    storageFiles: Array<number>;
    storageGit: Array<number>;
    storagePackages: Array<number>;
    earliestBillingDate: string;
}
