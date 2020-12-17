/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastChanges } from './LastChanges';
import type { RevisionAuthorInfo } from './RevisionAuthorInfo';

export type M2ExternalStatusFailureItemContent = {
    projectId?: string | null;
    repository: string;
    branch: string;
    revisionInfo?: RevisionAuthorInfo | null;
    changesInfo?: LastChanges | null;
    url: string;
    externalServiceName: string;
    taskName: string;
    timestamp?: number | null;
    description?: string | null;
}
