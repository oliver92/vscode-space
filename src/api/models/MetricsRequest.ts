/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientInfo } from './ClientInfo';
import type { MetricsEvent } from './MetricsEvent';

export type MetricsRequest = {
    client: ClientInfo;
    events: Array<MetricsEvent>;
}
