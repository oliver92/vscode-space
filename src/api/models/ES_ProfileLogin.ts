/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessRecord } from './AccessRecord';
import type { ES_AuthModule } from './ES_AuthModule';
import type { ES_ProfileLoginDetails } from './ES_ProfileLoginDetails';

export type ES_ProfileLogin = {
    identifier: string;
    authModule: ES_AuthModule;
    details: ES_ProfileLoginDetails;
    access?: AccessRecord | null;
}
