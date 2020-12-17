/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UA_Version } from './UA_Version';

export type UA_UserAgreement = {
    id: string;
    content: string;
    version: UA_Version;
    updated: string;
}
