/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeatureFlag } from './FeatureFlag';

export type DTO_FullRightWithoutType = {
    code: string;
    title: string;
    description?: string | null;
    grantedForUsers: boolean;
    featureFlag?: FeatureFlag | null;
}
