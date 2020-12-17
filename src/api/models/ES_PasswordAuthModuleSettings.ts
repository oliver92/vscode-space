/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ES_BuiltinAuthModuleSettings } from './ES_BuiltinAuthModuleSettings';
import type { ES_LdapAuthModuleSettings } from './ES_LdapAuthModuleSettings';

export type ES_PasswordAuthModuleSettings = (ES_LdapAuthModuleSettings | ES_BuiltinAuthModuleSettings);
