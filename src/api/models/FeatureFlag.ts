/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeatureFlagStatus } from './FeatureFlagStatus';

export type FeatureFlag = {
    name: string;
    description: string;
    status: FeatureFlagStatus;
    owner: string;
    introduced?: string | null;
}
