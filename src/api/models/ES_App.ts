/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_MemberProfile } from './TD_MemberProfile';

export type ES_App = {
    id: string;
    owner?: TD_MemberProfile | null;
    clientId: string;
    name: string;
    clientCredentialsFlowEnabled: boolean;
    codeFlowEnabled: boolean;
    codeFlowRedirectURIs?: string | null;
    implicitFlowEnabled: boolean;
    implicitFlowRedirectURIs?: string | null;
    endpointURI?: string | null;
    hasVerificationToken: boolean;
    hasSigningKey: boolean;
    archived: boolean;
}
