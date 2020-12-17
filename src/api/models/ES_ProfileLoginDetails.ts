/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_BuiltinProfileLoginDetails } from './ES_BuiltinProfileLoginDetails';
import type { ES_DefaultProfileLoginDetails } from './ES_DefaultProfileLoginDetails';
import type { ES_GithubProfileLoginDetails } from './ES_GithubProfileLoginDetails';
import type { ES_HubProfileLoginDetails } from './ES_HubProfileLoginDetails';

export type ES_ProfileLoginDetails = (ES_HubProfileLoginDetails | ES_DefaultProfileLoginDetails | ES_BuiltinProfileLoginDetails | ES_GithubProfileLoginDetails);
