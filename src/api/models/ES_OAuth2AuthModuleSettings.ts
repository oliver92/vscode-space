/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_AzureAuthModuleSettings } from './ES_AzureAuthModuleSettings';
import type { ES_GithubAuthModuleSettings } from './ES_GithubAuthModuleSettings';
import type { ES_GoogleAuthModuleSettings } from './ES_GoogleAuthModuleSettings';
import type { ES_HubAuthModuleSettings } from './ES_HubAuthModuleSettings';
import type { ES_OIDCAuthModuleSettings } from './ES_OIDCAuthModuleSettings';

export type ES_OAuth2AuthModuleSettings = (ES_HubAuthModuleSettings | ES_GoogleAuthModuleSettings | ES_OIDCAuthModuleSettings | ES_GithubAuthModuleSettings | ES_AzureAuthModuleSettings);
