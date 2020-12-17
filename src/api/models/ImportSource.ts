/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CPrincipal } from './CPrincipal';

export type ImportSource = {
    id: string;
    archived: boolean;
    importer: CPrincipal;
    name: string;
}
