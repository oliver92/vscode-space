/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientBrowser } from './ClientBrowser';
import type { ClientOS } from './ClientOS';

export type ClientInfo = {
    os?: ClientOS | null;
    osVersion?: string | null;
    browser?: ClientBrowser | null;
    browserVersion?: string | null;
    device?: string | null;
    version?: string | null;
}
