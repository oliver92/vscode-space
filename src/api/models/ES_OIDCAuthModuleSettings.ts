/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ES_OIDCAuthModuleSettings = {
    clientId: string;
    clientSecret: string;
    registerNewUsers: boolean;
    discoveryUrl?: string | null;
    issuer: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    tokenKeysEndpoint: string;
    userInfoEndpoint: string;
    domains: Array<string>;
}
