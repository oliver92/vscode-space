/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { M2PackageCreatedDetails } from './M2PackageCreatedDetails';
import type { M2PackageDeletedDetails } from './M2PackageDeletedDetails';

export type M2PackageContentDetails = (M2PackageDeletedDetails | M2PackageCreatedDetails);
