/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';
import type { OAuthServiceType } from './OAuthServiceType';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type ES_Service = {
    id: string;
    owner?: TD_MemberProfile | null;
    type: OAuthServiceType;
    clientId: string;
    name: string;
    redirectURIs: string;
    archived: boolean;
    lastClientCredentialsAccess?: AccessRecord | null;
    endpointURI?: string | null;
    hasVerificationToken?: boolean | null;
    hasSigningKey?: boolean | null;
}
