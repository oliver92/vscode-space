/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ES_HubAuthModuleSettings = {
    hubUrl: string;
    clientId: string;
    clientSecret: string;
    registerNewUsers?: boolean | null;
    orgAuthProviderName?: string | null;
    groups?: Array<string> | null;
}
