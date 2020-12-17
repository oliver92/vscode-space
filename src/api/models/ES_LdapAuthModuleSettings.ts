/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_LdapAttributeNames } from './ES_LdapAttributeNames';
import type { ES_TeamMapping } from './ES_TeamMapping';
import type { LdapModuleType } from './LdapModuleType';
import type { SSLKeystore } from './SSLKeystore';

export type ES_LdapAuthModuleSettings = {
    type: LdapModuleType;
    registerNewUsers: boolean;
    serverUrl: string;
    connectionTimeout: number;
    readTimeout: number;
    sslKeystore?: SSLKeystore | null;
    teamMappings: Array<ES_TeamMapping>;
    referralIgnored: boolean;
    filter: string;
    bindUserDN: string;
    bindUserPassword: string;
    attributeNames: ES_LdapAttributeNames;
}
