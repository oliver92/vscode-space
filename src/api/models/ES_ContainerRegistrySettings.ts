/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RetentionPolicyParams } from './RetentionPolicyParams';

export type ES_ContainerRegistrySettings = {
    immutableTags: boolean;
    retentionPolicyParams?: RetentionPolicyParams | null;
    immutablePackageVersions?: boolean | null;
}
