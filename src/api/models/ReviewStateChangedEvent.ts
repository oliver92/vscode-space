/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CodeReviewRecord } from './CodeReviewRecord';
import type { CodeReviewState } from './CodeReviewState';

export type ReviewStateChangedEvent = {
    state: CodeReviewState;
    review?: CodeReviewRecord | null;
}
