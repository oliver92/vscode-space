/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CAutomationTaskPrincipalDetails } from './CAutomationTaskPrincipalDetails';
import type { CBuiltInServicePrincipalDetails } from './CBuiltInServicePrincipalDetails';
import type { CExternalServicePrincipalDetails } from './CExternalServicePrincipalDetails';
import type { CUserPrincipalDetails } from './CUserPrincipalDetails';
import type { CUserWithEmailPrincipalDetails } from './CUserWithEmailPrincipalDetails';

export type CPrincipalDetails = (CAutomationTaskPrincipalDetails | CUserWithEmailPrincipalDetails | CBuiltInServicePrincipalDetails | CExternalServicePrincipalDetails | CUserPrincipalDetails);
