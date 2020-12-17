/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PackageOrigin_Build } from './PackageOrigin_Build';
import type { PackageOrigin_Url } from './PackageOrigin_Url';

export type PackageOrigin = (PackageOrigin_Build | PackageOrigin_Url);
