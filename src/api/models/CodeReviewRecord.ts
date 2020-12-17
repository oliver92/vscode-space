/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitSetReviewRecord } from './CommitSetReviewRecord';
import type { MergeRequestRecord } from './MergeRequestRecord';

export type CodeReviewRecord = (CommitSetReviewRecord | MergeRequestRecord);
