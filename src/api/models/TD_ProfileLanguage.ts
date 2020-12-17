/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TD_Language } from './TD_Language';
import type { TD_ProfileName } from './TD_ProfileName';

export type TD_ProfileLanguage = {
    name?: TD_ProfileName | null;
    language: TD_Language;
    languageCode?: string | null;
}
