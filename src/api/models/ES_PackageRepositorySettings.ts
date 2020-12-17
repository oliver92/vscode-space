/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_ContainerRegistrySettings } from './ES_ContainerRegistrySettings';
import type { ES_MavenRepositorySettings } from './ES_MavenRepositorySettings';
import type { ES_NpmRegistrySettings } from './ES_NpmRegistrySettings';
import type { ES_NuGetFeedSettings } from './ES_NuGetFeedSettings';

export type ES_PackageRepositorySettings = (ES_ContainerRegistrySettings | ES_NuGetFeedSettings | ES_MavenRepositorySettings | ES_NpmRegistrySettings);
