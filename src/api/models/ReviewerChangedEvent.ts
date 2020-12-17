/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReviewerChangedType } from './ReviewerChangedType';
import type { TD_MemberProfile } from './TD_MemberProfile';

export type ReviewerChangedEvent = {
    uid: TD_MemberProfile;
    changeType: ReviewerChangedType;
}
