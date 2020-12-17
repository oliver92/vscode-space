/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GlobalPermissionTarget } from './GlobalPermissionTarget';
import type { ProfilePermissionTarget } from './ProfilePermissionTarget';
import type { ProjectPermissionTarget } from './ProjectPermissionTarget';
import type { TeamPermissionTarget } from './TeamPermissionTarget';

export type PermissionTarget = (ProfilePermissionTarget | TeamPermissionTarget | GlobalPermissionTarget | ProjectPermissionTarget);
