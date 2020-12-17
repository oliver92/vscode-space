/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_ApprovedScope } from './ES_ApprovedScope';
import type { ES_RefreshToken } from './ES_RefreshToken';
import type { ES_Service } from './ES_Service';

export type ES_OAuthConsent = {
    clientService: ES_Service;
    approvedScopes: Array<ES_ApprovedScope>;
    refreshTokens: Array<ES_RefreshToken>;
}
