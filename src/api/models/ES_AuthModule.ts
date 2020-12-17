/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_AuthModuleSettings } from './ES_AuthModuleSettings';

export type ES_AuthModule = {
    id: string;
    key: string;
    name: string;
    ordinal: number;
    enabled: boolean;
    iconDataURI?: string | null;
    settings: ES_AuthModuleSettings;
}
