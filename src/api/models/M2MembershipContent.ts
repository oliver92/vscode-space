/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { M2MembershipCreatedContent } from './M2MembershipCreatedContent';
import type { M2MembershipRequestedContent } from './M2MembershipRequestedContent';
import type { M2MembershipTerminatedContent } from './M2MembershipTerminatedContent';

export type M2MembershipContent = (M2MembershipTerminatedContent | M2MembershipCreatedContent | M2MembershipRequestedContent);
