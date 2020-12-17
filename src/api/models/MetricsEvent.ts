/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricsPoint } from './MetricsPoint';
import type { MetricsProp } from './MetricsProp';

export type MetricsEvent = {
    id: string;
    time: number;
    props?: Array<MetricsProp> | null;
    points?: Array<MetricsPoint> | null;
}
