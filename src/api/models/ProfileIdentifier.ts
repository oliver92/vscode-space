/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProfileIdentifier_Id } from './ProfileIdentifier_Id';
import type { ProfileIdentifier_Me } from './ProfileIdentifier_Me';
import type { ProfileIdentifier_Username } from './ProfileIdentifier_Username';

export type ProfileIdentifier = (ProfileIdentifier_Me | ProfileIdentifier_Id | ProfileIdentifier_Username);
