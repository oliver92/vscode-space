/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_AzureAuthModuleSettings } from './ES_AzureAuthModuleSettings';
import type { ES_GithubAuthModuleSettings } from './ES_GithubAuthModuleSettings';
import type { ES_GoogleAuthModuleSettings } from './ES_GoogleAuthModuleSettings';
import type { ES_HubAuthModuleSettings } from './ES_HubAuthModuleSettings';
import type { ES_OIDCAuthModuleSettings } from './ES_OIDCAuthModuleSettings';
import type { ES_SamlAuthModuleSettings } from './ES_SamlAuthModuleSettings';

export type ES_FederatedAuthModuleSettings = (ES_SamlAuthModuleSettings | ES_HubAuthModuleSettings | ES_GoogleAuthModuleSettings | ES_OIDCAuthModuleSettings | ES_GithubAuthModuleSettings | ES_AzureAuthModuleSettings);
